'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ANATOMICAL_MUSCLES } from '../../data/muscles';
import { TRAINING_REGIONS } from '../../data/muscleGroups';
import { EXERCISES, MALE_EXERCISES, FEMALE_EXERCISES } from '../../data/exercises';
import { AnatomicalMuscle } from '../../types/anatomy';
import { Exercise } from '../../types/exercise';
import { Dumbbell, Info, Zap, ArrowRight, Activity, Tag, Sparkles, Target, Layers } from 'lucide-react';

export const MuscleInfoPanel = () => {
  const router = useRouter();
  const selectedGroupId = useAnatomyStore((s) => s.selectedGroupId);
  const selectedRegionId = useAnatomyStore((s) => s.selectedRegionId);
  const selectedMuscleId = useAnatomyStore((s) => s.selectedMuscleId);
  const selectedExerciseId = useAnatomyStore((s) => s.selectedExerciseId);
  const selectedModel = useAnatomyStore((s) => s.selectedModel);
  const theme = useAnatomyStore((s) => s.theme);

  const selectExercise = useAnatomyStore((s) => s.selectExercise);
  const setExerciseFilter = useAnatomyStore((s) => s.setExerciseFilter);

  const [currentMuscle, setCurrentMuscle] = useState<AnatomicalMuscle | null>(null);
  const [matchingExercises, setMatchingExercises] = useState<Exercise[]>([]);

  const isDark = theme === 'dark';

  useEffect(() => {
    let muscle: AnatomicalMuscle | undefined;
    if (selectedMuscleId) {
      muscle = ANATOMICAL_MUSCLES.find((m) => m.id === selectedMuscleId);
    } else if (selectedRegionId) {
      muscle = ANATOMICAL_MUSCLES.find((m) => m.trainingRegionIds.includes(selectedRegionId));
    } else if (selectedGroupId) {
      muscle = ANATOMICAL_MUSCLES.find((m) => m.category === selectedGroupId);
    }

    if (muscle) {
      setCurrentMuscle(muscle);

      // Gender-specific exercise dataset (Section 10-15)
      const baseDataset = selectedModel === 'female' ? FEMALE_EXERCISES : MALE_EXERCISES;

      const targeted = baseDataset.filter((ex) =>
        ex.primaryMuscles?.some((pm) => pm.muscleId === muscle!.id) ||
        ex.secondaryMuscles?.some((sm) => sm.muscleId === muscle!.id)
      );
      setMatchingExercises(targeted);
    } else {
      setCurrentMuscle(ANATOMICAL_MUSCLES[0]);
    }
  }, [selectedMuscleId, selectedRegionId, selectedGroupId, selectedModel]);

  const handleViewExercises = () => {
    if (currentMuscle) {
      setExerciseFilter('muscleGroupId', currentMuscle.category);
      if (selectedRegionId) {
        setExerciseFilter('trainingRegionId', selectedRegionId);
      }
      setExerciseFilter('muscleId', currentMuscle.id);
    }
    router.push('/exercises');
  };

  if (!currentMuscle) return null;

  return (
    <div
      className={`w-full h-full flex flex-col glass-panel rounded-2xl p-5 border overflow-y-auto space-y-4 transition-colors duration-300 ${
        isDark ? 'border-white/10 text-white' : 'border-slate-200 bg-white/90 text-slate-900 shadow-md'
      }`}
    >
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
            Anatomical Breakdown
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
              isDark
                ? 'bg-cyan-950 border-cyan-500/40 text-cyan-300'
                : 'bg-cyan-100 border-cyan-300 text-cyan-800'
            }`}
          >
            {currentMuscle.category}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono capitalize border ${
              isDark
                ? 'bg-purple-950 border-purple-500/40 text-purple-300'
                : 'bg-purple-100 border-purple-300 text-purple-800'
            }`}
          >
            {currentMuscle.side}
          </span>
        </div>
      </div>

      {/* Title & Latin Name */}
      <div className="space-y-0.5">
        <h2 className="font-display font-bold text-2xl tracking-tight">
          {currentMuscle.name}
        </h2>
        <p className="text-xs font-mono text-cyan-400/90 italic">
          {currentMuscle.latinName}
        </p>
      </div>

      {/* Origin & Insertion (Section 27 Requirement) */}
      <div
        className={`grid grid-cols-1 gap-2 p-3 rounded-xl border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
            • ORIGIN:
          </span>
          <p className={`text-xs leading-snug ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
            {currentMuscle.origin || 'Not specified'}
          </p>
        </div>
        <div className={`space-y-1 pt-1.5 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-bold block">
            • INSERTION:
          </span>
          <p className={`text-xs leading-snug ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
            {currentMuscle.insertion || 'Not specified'}
          </p>
        </div>
      </div>

      {/* Training Regions */}
      <div className="space-y-1.5">
        <div className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          <Tag className="w-3.5 h-3.5 text-purple-400" />
          <span>Training Regions:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {currentMuscle.trainingRegionIds.map((regId) => {
            const reg = TRAINING_REGIONS.find((r) => r.id === regId);
            return (
              <span
                key={regId}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                  isDark
                    ? 'bg-purple-950/60 border-purple-500/30 text-purple-200'
                    : 'bg-purple-50 border-purple-200 text-purple-700'
                }`}
              >
                {reg ? reg.name : regId}
              </span>
            );
          })}
        </div>
      </div>

      {/* Anatomical Function */}
      <div
        className={`space-y-1.5 p-3 rounded-xl border ${
          isDark ? 'bg-surface-50/50 border-white/5' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
          <Info className="w-3.5 h-3.5" />
          <span>Anatomical Function</span>
        </div>
        <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
          {currentMuscle.function}
        </p>
      </div>

      {/* Overview Description */}
      <div className="space-y-1">
        <span className={`text-xs font-semibold uppercase tracking-wider font-mono ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
          Overview
        </span>
        <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
          {currentMuscle.description}
        </p>
      </div>

      {/* Primary Movements */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-400">
          <Zap className="w-3.5 h-3.5" />
          <span>Primary Movements</span>
        </div>
        <ul className="space-y-1">
          {currentMuscle.primaryMovements.map((mv, idx) => (
            <li key={idx} className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{mv}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Targeted Exercises with 3D Highlight Button */}
      <div className={`space-y-2 pt-2 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            <Dumbbell className="w-4 h-4 text-cyan-400" />
            <span>
              Target Exercises ({matchingExercises.length}) • {selectedModel.toUpperCase()}
            </span>
          </div>
          {selectedExerciseId && (
            <button
              onClick={() => selectExercise(null)}
              className="text-[10px] text-cyan-400 hover:underline font-mono"
            >
              Clear 3D
            </button>
          )}
        </div>

        <div className="space-y-1.5">
          {matchingExercises.slice(0, 4).map((ex) => {
            const isExSelected = selectedExerciseId === ex.id;
            return (
              <div
                key={ex.id}
                onClick={() => selectExercise(isExSelected ? null : ex.id)}
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                  isExSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-glow-cyan'
                    : isDark
                    ? 'glass-panel-interactive border-white/5 hover:border-cyan-500/30'
                    : 'bg-slate-50 border-slate-200 hover:border-cyan-400'
                }`}
              >
                <div>
                  <span className={`font-semibold block ${isDark ? 'text-white' : 'text-slate-900'}`}>{ex.name}</span>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-0.5">
                    <span>{ex.equipment}</span>
                    <span>•</span>
                    <span>{ex.difficulty}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectExercise(isExSelected ? null : ex.id);
                  }}
                  className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                    isExSelected
                      ? 'bg-cyan-400 text-black font-extrabold'
                      : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30'
                  }`}
                >
                  {isExSelected ? 'ACTIVE 3D' : 'HIGHLIGHT 3D'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation CTA to Exercise Library */}
      <div className="pt-2">
        <button
          onClick={handleViewExercises}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 shadow-glow-cyan hover:scale-[1.02] active:scale-98 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>VIEW ALL EXERCISES</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
