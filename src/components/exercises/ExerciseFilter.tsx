'use client';

import React from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { MUSCLE_GROUPS, TRAINING_REGIONS } from '../../data/muscleGroups';
import { ANATOMICAL_MUSCLES } from '../../data/muscles';
import { Search, RefreshCw, Layers } from 'lucide-react';

const GROUP_CHIP_COLORS: Record<string, { active: string; border: string }> = {
  all: { active: 'bg-cyan-500 text-black font-bold shadow-glow-cyan', border: 'border-cyan-500/50' },
  chest: { active: 'bg-cyan-500 text-black font-bold shadow-glow-cyan', border: 'border-cyan-500/50' },
  back: { active: 'bg-emerald-500 text-black font-bold shadow-glow-emerald', border: 'border-emerald-500/50' },
  shoulders: { active: 'bg-amber-500 text-black font-bold shadow-glow-amber', border: 'border-amber-500/50' },
  arms: { active: 'bg-purple-500 text-white font-bold shadow-glow-purple', border: 'border-purple-500/50' },
  core: { active: 'bg-red-500 text-white font-bold shadow-glow-red', border: 'border-red-500/50' },
  'hips-glutes': { active: 'bg-pink-500 text-white font-bold shadow-glow-pink', border: 'border-pink-500/50' },
  legs: { active: 'bg-indigo-500 text-white font-bold shadow-glow-indigo', border: 'border-indigo-500/50' },
};

export const ExerciseFilter = () => {
  const exerciseFilters = useAnatomyStore((s) => s.exerciseFilters);
  const setExerciseFilter = useAnatomyStore((s) => s.setExerciseFilter);
  const resetFilters = useAnatomyStore((s) => s.resetFilters);

  const activeRegions =
    exerciseFilters.muscleGroupId !== 'all'
      ? TRAINING_REGIONS.filter((r) => r.groupId === exerciseFilters.muscleGroupId)
      : TRAINING_REGIONS;

  const activeMuscles =
    exerciseFilters.muscleGroupId !== 'all'
      ? ANATOMICAL_MUSCLES.filter((m) => m.category === exerciseFilters.muscleGroupId)
      : ANATOMICAL_MUSCLES;

  return (
    <div className="w-full glass-panel rounded-2xl p-5 border border-white/10 space-y-5 mb-6">
      {/* Top Search & Reset Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
          <input
            type="text"
            placeholder="Search exercises by name, keyword, or equipment..."
            value={exerciseFilters.search}
            onChange={(e) => setExerciseFilter('search', e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-50 border border-white/10 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>

        <button
          onClick={resetFilters}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white glass-panel-interactive border border-white/10 transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Quick Muscle Group Filter Chips */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
            Quick Muscle Group Select:
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setExerciseFilter('muscleGroupId', 'all');
              setExerciseFilter('trainingRegionId', 'all');
              setExerciseFilter('muscleId', 'all');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              exerciseFilters.muscleGroupId === 'all'
                ? 'bg-cyan-500 text-black border-cyan-400 shadow-glow-cyan'
                : 'bg-surface-50 text-gray-300 hover:text-white border-white/10 hover:border-cyan-500/40'
            }`}
          >
            All Groups
          </button>
          {MUSCLE_GROUPS.map((g) => {
            const isSelected = exerciseFilters.muscleGroupId === g.id;
            const chipStyle = GROUP_CHIP_COLORS[g.id] || GROUP_CHIP_COLORS.all;
            return (
              <button
                key={g.id}
                onClick={() => {
                  setExerciseFilter('muscleGroupId', g.id);
                  setExerciseFilter('trainingRegionId', 'all');
                  setExerciseFilter('muscleId', 'all');
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  isSelected
                    ? `${chipStyle.active} ${chipStyle.border}`
                    : 'bg-surface-50 text-gray-300 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                {g.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Dropdown Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-white/10">
        {/* Muscle Group Select */}
        <div>
          <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
            Muscle Group
          </label>
          <select
            value={exerciseFilters.muscleGroupId}
            onChange={(e) => {
              setExerciseFilter('muscleGroupId', e.target.value);
              setExerciseFilter('trainingRegionId', 'all');
              setExerciseFilter('muscleId', 'all');
            }}
            className="w-full px-3 py-2 rounded-xl bg-surface-50 border border-white/10 text-xs text-gray-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Muscle Groups</option>
            {MUSCLE_GROUPS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        {/* Training Region Select */}
        <div>
          <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
            Training Region
          </label>
          <select
            value={exerciseFilters.trainingRegionId}
            onChange={(e) => setExerciseFilter('trainingRegionId', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-surface-50 border border-white/10 text-xs text-gray-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Training Regions</option>
            {activeRegions.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>

        {/* Specific Muscle Select */}
        <div>
          <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
            Specific Muscle
          </label>
          <select
            value={exerciseFilters.muscleId}
            onChange={(e) => setExerciseFilter('muscleId', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-surface-50 border border-white/10 text-xs text-gray-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Anatomical Muscles</option>
            {activeMuscles.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Equipment Select */}
        <div>
          <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
            Equipment
          </label>
          <select
            value={exerciseFilters.equipment}
            onChange={(e) => setExerciseFilter('equipment', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-surface-50 border border-white/10 text-xs text-gray-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Equipment</option>
            <option value="Barbell">Barbell</option>
            <option value="Dumbbell">Dumbbell</option>
            <option value="Bodyweight">Bodyweight</option>
            <option value="Cable">Cable</option>
            <option value="Machine">Machine</option>
            <option value="Pull-up Bar">Pull-up Bar</option>
            <option value="Dip Bars">Dip Bars</option>
            <option value="Ab Wheel">Ab Wheel</option>
          </select>
        </div>
      </div>

      {/* Filter Pill Selectors */}
      <div className="flex flex-wrap items-center gap-5 pt-2 border-t border-white/10 text-xs">
        {/* Training Type Pills */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-gray-400 text-[11px]">Type:</span>
          {['all', 'Weight Training', 'Bodyweight', 'Hybrid'].map((type) => (
            <button
              key={type}
              onClick={() => setExerciseFilter('trainingType', type)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                exerciseFilters.trainingType === type
                  ? 'bg-cyan-500 text-black font-bold shadow-glow-cyan'
                  : 'bg-surface-50 text-gray-400 hover:text-white'
              }`}
            >
              {type === 'all' ? 'All Types' : type}
            </button>
          ))}
        </div>

        {/* Difficulty Pills */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-gray-400 text-[11px]">Difficulty:</span>
          {['all', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setExerciseFilter('difficulty', diff)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                exerciseFilters.difficulty === diff
                  ? 'bg-purple-600 text-white font-bold shadow-glow-purple'
                  : 'bg-surface-50 text-gray-400 hover:text-white'
              }`}
            >
              {diff === 'all' ? 'All Levels' : diff}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
