'use client';

import React, { useState } from 'react';
import { Exercise } from '../../types/exercise';
import { ANATOMICAL_MUSCLES } from '../../data/muscles';
import { Target, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  const [expanded, setExpanded] = useState(false);

  const getMuscleName = (id: string) => {
    const found = ANATOMICAL_MUSCLES.find((m) => m.id === id);
    return found ? found.name : id;
  };

  return (
    <div className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4">
      {/* Top Meta Badges */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-500/30">
            {exercise.trainingType}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-purple-950 text-purple-300 border border-purple-500/30">
            {exercise.equipment}
          </span>
        </div>

        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
            exercise.difficulty === 'Beginner'
              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
              : exercise.difficulty === 'Intermediate'
              ? 'bg-yellow-950 text-yellow-400 border border-yellow-500/30'
              : 'bg-rose-950 text-rose-400 border border-rose-500/30'
          }`}
        >
          {exercise.difficulty}
        </span>
      </div>

      {/* Exercise Title & Description */}
      <div className="space-y-1">
        <h3 className="font-display font-bold text-xl text-white tracking-tight">
          {exercise.name}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          {exercise.description}
        </p>
      </div>

      {/* Target Muscle Emphasis Breakdown */}
      <div className="space-y-2 py-2 border-t border-b border-white/10">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-300">
          <Target className="w-3.5 h-3.5 text-cyan-400" />
          <span>Muscle Targets & Emphasis</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {exercise.primaryMuscles?.map((pm, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-200 border border-cyan-400/40"
            >
              <span>{getMuscleName(pm.muscleId)}</span>
              <span className="text-[9px] font-mono uppercase bg-cyan-400 text-black px-1 rounded font-extrabold">
                {pm.emphasis}
              </span>
            </span>
          ))}

          {exercise.secondaryMuscles?.map((sm, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-400/30"
            >
              <span>{getMuscleName(sm.muscleId)}</span>
              <span className="text-[9px] font-mono text-purple-300 bg-purple-950 px-1 rounded">
                SEC
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Recommended Prescriptions */}
      <div className="flex items-center justify-between text-xs text-gray-300 font-mono bg-surface-50 p-2.5 rounded-xl border border-white/5">
        <div>
          <span className="text-gray-500 mr-1">Sets:</span>
          <span className="text-cyan-400 font-bold">{exercise.recommendedSets}</span>
        </div>
        <div>
          <span className="text-gray-500 mr-1">Reps:</span>
          <span className="text-cyan-400 font-bold">{exercise.recommendedReps}</span>
        </div>
        <div>
          <span className="text-gray-500 mr-1">Pattern:</span>
          <span className="text-purple-300 font-semibold">{exercise.movementPattern}</span>
        </div>
      </div>

      {/* Expand Instructions Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-white glass-panel-interactive transition-all"
      >
        <span>{expanded ? 'Hide Instructions' : 'View Full Instructions'}</span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Expanded Accordion Content */}
      {expanded && (
        <div className="space-y-3 pt-3 border-t border-white/10 text-xs animate-in fade-in duration-200">
          <div className="space-y-1.5">
            <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider">
              Step-by-Step Instructions:
            </span>
            <ol className="space-y-1 pl-4 list-decimal text-gray-300">
              {exercise.instructions.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {exercise.commonMistakes && exercise.commonMistakes.length > 0 && (
            <div className="space-y-1 bg-rose-950/30 p-2.5 rounded-xl border border-rose-500/20 text-rose-300">
              <div className="flex items-center gap-1 font-semibold text-rose-400">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Common Mistakes to Avoid:</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-rose-200/80">
                {exercise.commonMistakes.map((mistake, idx) => (
                  <li key={idx}>{mistake}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
