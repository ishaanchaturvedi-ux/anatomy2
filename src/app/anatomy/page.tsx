'use client';

import React from 'react';
import { AnatomyCanvas } from '../../components/3d/AnatomyCanvas';
import { BodyRegionNav } from '../../components/explorer/BodyRegionNav';
import { MuscleInfoPanel } from '../../components/explorer/MuscleInfoPanel';
import { MUSCLE_GROUPS } from '../../data/muscleGroups';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { Activity, Dumbbell, Sparkles, User } from 'lucide-react';
import { ModelGender } from '../../types/anatomy';

export default function AnatomyExplorerPage() {
  const selectedGroupId = useAnatomyStore((s) => s.selectedGroupId);
  const selectGroup = useAnatomyStore((s) => s.selectGroup);
  const isFallbackActive = useAnatomyStore((s) => s.isFallbackActive);
  const selectedModel = useAnatomyStore((s) => s.selectedModel);
  const setSelectedModel = useAnatomyStore((s) => s.setSelectedModel);
  const theme = useAnatomyStore((s) => s.theme);

  const isDark = theme === 'dark';

  return (
    <div className="w-full flex flex-col gap-4 min-h-[calc(100vh-9rem)]">
      {/* Top Header Banner */}
      <div
        className={`glass-panel rounded-2xl p-4 border flex flex-wrap items-center justify-between gap-3 transition-colors duration-300 ${
          isDark ? 'border-white/10 text-white' : 'border-slate-200 bg-white/90 text-slate-900 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-glow-cyan">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
              ANATOMYFIT <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">3D ENGINE v2</span>
            </h1>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Interactive 3D Human Muscular Anatomy & Exercise Activation Explorer
            </p>
          </div>
        </div>

        {/* Model Profile & Status Badges */}
        <div className="flex items-center gap-3">
          {/* Gender Switcher in Banner */}
          <div
            className={`flex items-center gap-1 p-1 rounded-xl border text-xs font-mono font-bold ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5 text-gray-400 ml-1" />
            {(['male', 'female'] as ModelGender[]).map((gender) => (
              <button
                key={gender}
                onClick={() => setSelectedModel(gender)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  selectedModel === gender
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-glow-cyan font-bold'
                    : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {gender === 'male' ? '♂ MALE' : '♀ FEMALE'}
              </button>
            ))}
          </div>

          <span className={`text-xs font-mono hidden sm:inline ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
            Asset: <span className="text-cyan-400 font-bold">{isFallbackActive ? 'Visualization Model (GLB Ready)' : 'Production GLB'}</span>
          </span>
        </div>
      </div>

      {/* Mobile Top Category Selector */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {MUSCLE_GROUPS.map((g) => (
          <button
            key={g.id}
            onClick={() => selectGroup(g.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedGroupId === g.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-glow-cyan font-bold'
                : isDark
                ? 'glass-panel text-gray-300 hover:text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-[680px]">
        {/* Left Column: Body Region Navigation (3 Cols) */}
        <div className="hidden lg:block lg:col-span-3 h-[680px]">
          <BodyRegionNav />
        </div>

        {/* Center Column: 3D Anatomy Viewer (6 Cols) */}
        <div className="col-span-1 lg:col-span-6 h-[480px] lg:h-[680px] relative">
          <AnatomyCanvas />
        </div>

        {/* Right Column: Muscle Info Panel (3 Cols) */}
        <div className="col-span-1 lg:col-span-3 h-[580px] lg:h-[680px]">
          <MuscleInfoPanel />
        </div>
      </div>
    </div>
  );
}
