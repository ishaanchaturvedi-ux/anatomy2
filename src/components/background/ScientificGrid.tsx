'use client';

import React from 'react';

export const ScientificGrid: React.FC = () => {
  return (
    <group position={[0, -0.65, -0.2]}>
      <gridHelper args={[8, 24, '#00E5FF', '#1E293B']} position={[0, 0, 0]} />
    </group>
  );
};
