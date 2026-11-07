'use client';

import React from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { Settings, ShieldCheck, User, Sparkles, Check, Database } from 'lucide-react';

export default function SettingsPage() {
  const selectedModel = useAnatomyStore((s) => s.selectedModel);
  const isFallbackActive = useAnatomyStore((s) => s.isFallbackActive);
  const setSelectedModel = useAnatomyStore((s) => s.setSelectedModel);

  return (
    <div className="max-w-4xl mx-auto space-y-6 min-h-[calc(100vh-9rem)]">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-3">
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
          <Settings className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl text-white tracking-tight">
            Platform Settings
          </h1>
          <p className="text-xs text-gray-400">
            Configure 3D visualization preferences, model presets, and local state synchronization.
          </p>
        </div>
      </div>

      {/* Model Selection Card */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              <span>Anatomy Model Gender Preset</span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Select between Male and Female anatomical model presets.
            </p>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950 text-purple-300 border border-purple-500/30">
            Current: {selectedModel.toUpperCase()}
          </span>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Male Model Option */}
          <div
            onClick={() => setSelectedModel('male')}
            className={`cursor-pointer glass-panel-interactive p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
              selectedModel === 'male'
                ? 'border-cyan-500 bg-cyan-500/10 shadow-glow-cyan'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-lg text-white">Male Anatomy</span>
              {selectedModel === 'male' && (
                <div className="w-6 h-6 rounded-full bg-cyan-400 text-black flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Standard male muscular proportions and camera focus targets mapped to `/models/male-anatomy.glb`.
            </p>
            <div className="text-[10px] font-mono text-cyan-300 bg-black/40 p-2 rounded-lg border border-white/5">
              Path: /public/models/male-anatomy.glb
            </div>
          </div>

          {/* Female Model Option */}
          <div
            onClick={() => setSelectedModel('female')}
            className={`cursor-pointer glass-panel-interactive p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
              selectedModel === 'female'
                ? 'border-cyan-500 bg-cyan-500/10 shadow-glow-cyan'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-lg text-white">Female Anatomy</span>
              {selectedModel === 'female' && (
                <div className="w-6 h-6 rounded-full bg-cyan-400 text-black flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Standard female muscular proportions and camera focus targets mapped to `/models/female-anatomy.glb`.
            </p>
            <div className="text-[10px] font-mono text-cyan-300 bg-black/40 p-2 rounded-lg border border-white/5">
              Path: /public/models/female-anatomy.glb
            </div>
          </div>
        </div>
      </div>

      {/* Engine Status Card */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
        <h2 className="font-display font-bold text-lg text-white flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-400" />
          <span>3D Engine Status & Asset Fallback</span>
        </h2>

        <div className="p-4 rounded-xl bg-surface-50 border border-white/10 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">GLB Model Asset Status:</span>
            <span
              className={`font-mono font-bold ${
                isFallbackActive ? 'text-yellow-400' : 'text-emerald-400'
              }`}
            >
              {isFallbackActive ? 'PROCEDURAL FALLBACK ACTIVE' : 'GLB ASSET LOADED'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">State Persistence:</span>
            <span className="font-mono text-cyan-300">Zustand + LocalStorage Sync Active</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Phase 2 Backend Architecture:</span>
            <span className="font-mono text-purple-300">Data Access Layer (DAL) Ready for Spring Boot REST API</span>
          </div>
        </div>
      </div>
    </div>
  );
}
