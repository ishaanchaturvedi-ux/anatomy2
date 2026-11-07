'use client';

import React from 'react';
import { RotateCw, RefreshCw, Layers, ShieldAlert, CheckCircle2, AlertTriangle, Eye, EyeOff, Bone, User } from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ModelGender } from '../../types/anatomy';

export const AnatomyControls = () => {
  const viewMode = useAnatomyStore((s) => s.viewMode);
  const isRotating = useAnatomyStore((s) => s.isRotating);
  const isFallbackActive = useAnatomyStore((s) => s.isFallbackActive);
  const selectedModel = useAnatomyStore((s) => s.selectedModel);
  const bilateralMode = useAnatomyStore((s) => s.bilateralMode);
  const activeLayer = useAnatomyStore((s) => s.activeLayer);
  const showMuscles = useAnatomyStore((s) => s.showMuscles);
  const showSkeleton = useAnatomyStore((s) => s.showSkeleton);
  const assetType = useAnatomyStore((s) => s.assetType);

  const setViewMode = useAnatomyStore((s) => s.setViewMode);
  const toggleRotate = useAnatomyStore((s) => s.toggleRotate);
  const resetView = useAnatomyStore((s) => s.resetView);
  const setBilateralMode = useAnatomyStore((s) => s.setBilateralMode);
  const setLayer = useAnatomyStore((s) => s.setLayer);
  const toggleMuscles = useAnatomyStore((s) => s.toggleMuscles);
  const toggleSkeleton = useAnatomyStore((s) => s.toggleSkeleton);
  const setSelectedModel = useAnatomyStore((s) => s.setSelectedModel);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-20 w-full max-w-2xl px-4 pointer-events-auto">
      {/* Model & Asset Status Indicator */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {assetType === 'muscle-anatomy' ? (
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 backdrop-blur-md shadow-glow-emerald">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>PRODUCTION ANATOMICAL MODEL ({selectedModel.toUpperCase()})</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 backdrop-blur-md shadow-glow-cyan">
            <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
            <span>VISUALIZATION MODEL • GLB READY ({selectedModel.toUpperCase()})</span>
          </div>
        )}

        {/* Gender Model Switcher */}
        <div className="flex items-center gap-1 bg-black/60 border border-white/10 p-0.5 rounded-full backdrop-blur-md">
          <User className="w-3 h-3 text-gray-400 ml-1.5" />
          {(['male', 'female'] as ModelGender[]).map((gender) => (
            <button
              key={gender}
              onClick={() => setSelectedModel(gender)}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all ${
                selectedModel === gender
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-glow-cyan'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {gender === 'male' ? '♂ MALE' : '♀ FEMALE'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Control Dock */}
      <div className="glass-panel px-4 py-2 rounded-2xl flex flex-wrap items-center justify-center gap-2.5 shadow-2xl border border-white/10 backdrop-blur-xl bg-black/75">
        {/* Camera Views */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl">
          {(['front', 'back', 'left', 'right'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all ${
                viewMode === mode
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-glow-cyan font-bold'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-white/15 hidden sm:block" />

        {/* Bilateral Side Switcher */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl">
          <span className="text-[10px] font-mono text-gray-400 px-1 font-bold">SIDE:</span>
          {(['left', 'both', 'right'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setBilateralMode(mode)}
              className={`px-2 py-0.5 rounded-md text-[10px] font-mono uppercase font-bold transition-all ${
                bilateralMode === mode
                  ? 'bg-purple-600 text-white shadow-glow-purple'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {mode === 'left' ? 'L' : mode === 'right' ? 'R' : 'BOTH'}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-white/15 hidden sm:block" />

        {/* Independent Layer Toggles (Muscles & Skeleton) */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl">
          <button
            onClick={toggleMuscles}
            title="Toggle Muscle Layer"
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold transition-all ${
              showMuscles
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan'
                : 'text-gray-500 hover:text-gray-300 line-through'
            }`}
          >
            <Layers className="w-3 h-3 text-cyan-400" />
            <span>MUSCLES</span>
          </button>

          <button
            onClick={toggleSkeleton}
            title="Toggle Skeleton Layer"
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold transition-all ${
              showSkeleton
                ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-glow-purple'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <Bone className="w-3 h-3 text-purple-400" />
            <span>SKELETON</span>
          </button>
        </div>

        <div className="h-4 w-px bg-white/15 hidden sm:block" />

        {/* Rotation & Reset Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleRotate}
            title="Auto Rotate"
            className={`p-1.5 rounded-lg transition-all ${
              isRotating
                ? 'bg-purple-600 text-white shadow-glow-purple'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={resetView}
            title="Reset View"
            className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
