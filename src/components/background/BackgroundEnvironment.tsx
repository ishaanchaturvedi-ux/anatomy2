'use client';

import React from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';

export const BackgroundEnvironment: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useAnatomyStore((s) => s.theme);
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative w-full h-full min-h-[550px] rounded-2xl overflow-hidden shadow-2xl transition-colors duration-300 ${
        isDark
          ? 'bg-[#05070D] border border-white/10'
          : 'bg-gradient-to-b from-[#F8FAFC] to-[#EDF2F7] border border-slate-300'
      }`}
    >
      {/* Radial Atmospheric Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_50%_40%,rgba(0,229,255,0.08)_0%,rgba(167,139,250,0.04)_40%,transparent_70%)]'
            : 'bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.06)_0%,rgba(99,102,241,0.03)_40%,transparent_70%)]'
        }`}
      />

      {/* Cyber / Studio Grid Pattern */}
      <div
        className={`absolute inset-0 bg-cyber-grid pointer-events-none ${
          isDark ? 'opacity-25' : 'opacity-10'
        }`}
      />

      {/* Animated Scan Line (Dark mode accent) */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none anatomy-scan-line opacity-10" />
      )}

      {/* HUD Corner Decorations */}
      <div
        className={`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 pointer-events-none ${
          isDark ? 'border-cyan-500/60' : 'border-cyan-600/70'
        }`}
      />
      <div
        className={`absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 pointer-events-none ${
          isDark ? 'border-cyan-500/60' : 'border-cyan-600/70'
        }`}
      />
      <div
        className={`absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 pointer-events-none ${
          isDark ? 'border-cyan-500/60' : 'border-cyan-600/70'
        }`}
      />
      <div
        className={`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 pointer-events-none ${
          isDark ? 'border-cyan-500/60' : 'border-cyan-600/70'
        }`}
      />

      {/* Content Canvas */}
      {children}
    </div>
  );
};
