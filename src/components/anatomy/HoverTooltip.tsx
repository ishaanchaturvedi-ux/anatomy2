'use client';

import React from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ANATOMICAL_MUSCLES } from '../../data/muscles';
import { MESH_TO_MUSCLE_MAP } from '../../config/anatomyConfig';
import { Activity, Compass } from 'lucide-react';

export const HoverTooltip: React.FC = () => {
  const hoveredMeshId = useAnatomyStore((s) => s.hoveredMeshId);
  const hoveredMuscleName = useAnatomyStore((s) => s.hoveredMuscleName);

  if (!hoveredMeshId) return null;

  const mapping = MESH_TO_MUSCLE_MAP[hoveredMeshId];
  const muscle = mapping ? ANATOMICAL_MUSCLES.find((m) => m.id === mapping.muscleId) : null;

  const displayName = hoveredMuscleName || muscle?.name || hoveredMeshId;
  const groupName = mapping?.groupId ? mapping.groupId.toUpperCase() : 'ANATOMY';

  let sideLabel = 'Bilateral';
  if (hoveredMeshId.endsWith('_L') || hoveredMeshId.includes('left')) sideLabel = 'Left Side';
  else if (hoveredMeshId.endsWith('_R') || hoveredMeshId.includes('right')) sideLabel = 'Right Side';
  else if (hoveredMeshId.endsWith('_M')) sideLabel = 'Medial';

  return (
    <div className="absolute top-4 left-4 z-30 pointer-events-none transition-all duration-200 animate-fade-in">
      <div className="glass-panel px-3.5 py-2 rounded-xl border border-cyan-500/40 shadow-glow-cyan flex items-center gap-3 backdrop-blur-md bg-black/60">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
          <Activity className="w-4 h-4 animate-pulse text-cyan-400" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
              {groupName}
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              {sideLabel}
            </span>
          </div>
          <p className="text-sm font-bold text-white tracking-tight leading-snug">
            {displayName}
          </p>
        </div>
      </div>
    </div>
  );
};
