'use client';

import React, { useEffect, useState } from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { MUSCLE_GROUPS, TRAINING_REGIONS } from '../../data/muscleGroups';
import { ANATOMICAL_MUSCLES } from '../../data/muscles';
import { TopMuscleGroupId, TrainingRegion, AnatomicalMuscle } from '../../types/anatomy';
import { ChevronRight, Layers, Target, Dumbbell, Sparkles, RotateCcw } from 'lucide-react';

export const BodyRegionNav = () => {
  const selectedGroupId = useAnatomyStore((s) => s.selectedGroupId);
  const selectedRegionId = useAnatomyStore((s) => s.selectedRegionId);
  const selectedMuscleId = useAnatomyStore((s) => s.selectedMuscleId);
  const theme = useAnatomyStore((s) => s.theme);

  const selectGroup = useAnatomyStore((s) => s.selectGroup);
  const selectRegion = useAnatomyStore((s) => s.selectRegion);
  const selectMuscle = useAnatomyStore((s) => s.selectMuscle);
  const clearSelection = useAnatomyStore((s) => s.clearSelection);

  const [activeRegions, setActiveRegions] = useState<TrainingRegion[]>([]);
  const [activeMuscles, setActiveMuscles] = useState<AnatomicalMuscle[]>([]);

  const isDark = theme === 'dark';

  useEffect(() => {
    if (selectedGroupId) {
      const regions = TRAINING_REGIONS.filter((r) => r.groupId === selectedGroupId);
      setActiveRegions(regions);
    } else {
      setActiveRegions([]);
    }
  }, [selectedGroupId]);

  useEffect(() => {
    if (selectedRegionId) {
      const muscles = ANATOMICAL_MUSCLES.filter((m) =>
        m.trainingRegionIds.includes(selectedRegionId)
      );
      setActiveMuscles(muscles);
    } else if (selectedGroupId) {
      const muscles = ANATOMICAL_MUSCLES.filter((m) => m.category === selectedGroupId);
      setActiveMuscles(muscles);
    } else {
      setActiveMuscles([]);
    }
  }, [selectedRegionId, selectedGroupId]);

  return (
    <div
      className={`w-full h-full flex flex-col glass-panel rounded-2xl p-4 border overflow-hidden transition-colors duration-300 ${
        isDark ? 'border-white/10 text-white' : 'border-slate-200 bg-white/90 text-slate-900 shadow-md'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <h2 className="font-display font-bold text-lg">Body Hierarchy</h2>
        </div>
        {(selectedGroupId || selectedMuscleId) && (
          <button
            onClick={clearSelection}
            title="Clear Selection"
            className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {/* Tier 1: Muscle Groups */}
        <div className="space-y-1">
          <div className="flex items-center justify-between px-2 pb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
              1. Muscle Groups
            </span>
          </div>

          {MUSCLE_GROUPS.map((group) => {
            const isGroupSelected = selectedGroupId === group.id;
            return (
              <div key={group.id} className="space-y-1">
                <button
                  onClick={() => {
                    if (isGroupSelected && !selectedMuscleId) {
                      selectGroup(null);
                    } else {
                      selectGroup(group.id);
                      const firstRegion = TRAINING_REGIONS.find((r) => r.groupId === group.id);
                      if (firstRegion) selectRegion(firstRegion.id);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isGroupSelected
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/10 text-cyan-300 border border-cyan-500/40 shadow-glow-cyan'
                      : isDark
                      ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isGroupSelected ? 'bg-cyan-400 shadow-glow-cyan' : 'bg-gray-500'
                      }`}
                    />
                    <span>{group.name}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isGroupSelected ? 'rotate-90 text-cyan-400' : 'text-gray-500'
                    }`}
                  />
                </button>

                {/* Tier 2: Training Regions (Sub-regions under Group) */}
                {isGroupSelected && (
                  <div className="ml-3 pl-3 border-l border-cyan-500/30 space-y-1 my-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block py-1 font-bold">
                      2. Training Regions
                    </span>
                    {activeRegions.map((region) => {
                      const isRegionSelected = selectedRegionId === region.id;
                      return (
                        <div key={region.id}>
                          <button
                            onClick={() => selectRegion(region.id)}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              isRegionSelected
                                ? 'bg-cyan-400/20 text-cyan-200 border border-cyan-400/40 font-bold'
                                : isDark
                                ? 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <Target className="w-3 h-3 text-cyan-400" />
                              <span>{region.name}</span>
                            </div>
                          </button>

                          {/* Tier 3: Individual Anatomical Muscles */}
                          {isRegionSelected && (
                            <div className="ml-2 pl-2 border-l border-purple-500/30 my-1 space-y-1">
                              <span className="text-[9px] font-mono uppercase text-purple-400 block py-0.5 font-bold">
                                3. Individual Muscles
                              </span>
                              {activeMuscles.map((muscle) => {
                                const isMuscleSelected = selectedMuscleId === muscle.id;
                                return (
                                  <button
                                    key={muscle.id}
                                    onClick={() => {
                                      // Toggle or select exact muscle (Section 2 & 3: Highlighting ONLY selected muscle)
                                      selectMuscle(isMuscleSelected ? null : muscle.id);
                                    }}
                                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center justify-between ${
                                      isMuscleSelected
                                        ? 'bg-gradient-to-r from-purple-600/40 to-cyan-500/20 text-cyan-200 border border-cyan-400/60 font-bold shadow-glow-cyan'
                                        : isDark
                                        ? 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                                  >
                                    <span className="truncate">• {muscle.name}</span>
                                    {isMuscleSelected && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-glow-cyan flex-shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
