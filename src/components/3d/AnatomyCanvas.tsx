'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { AnatomyModel } from './AnatomyModel';
import { CameraController } from './CameraController';
import { AnatomyControls } from './AnatomyControls';
import { BackgroundEnvironment } from '../background/BackgroundEnvironment';
import { ScientificGrid } from '../background/ScientificGrid';
import { HoverTooltip } from '../anatomy/HoverTooltip';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { THEME_3D_CONFIG } from '../../config/anatomyConfig';

const CanvasLoader = () => (
  <mesh>
    <sphereGeometry args={[0.15, 16, 16]} />
    <meshBasicMaterial color="#00E5FF" wireframe />
  </mesh>
);

export const AnatomyCanvas = () => {
  const isRotating = useAnatomyStore((s) => s.isRotating);
  const theme = useAnatomyStore((s) => s.theme);
  const controlsRef = useRef<any>(null);

  const themeConfig = THEME_3D_CONFIG[theme] || THEME_3D_CONFIG.dark;
  const isDark = theme === 'dark';

  return (
    <BackgroundEnvironment>
      {/* Floating hover tooltip */}
      <HoverTooltip />

      {/* Three.js 3D Viewport */}
      <Canvas
        camera={{ position: [0, 0.50, 3.85], fov: 40 }}
        shadows
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: isDark ? 1.15 : 1.05,
          outputColorSpace: THREE.SRGBColorSpace,
          antialias: true,
        }}
        className="w-full h-full"
      >
        {/* Ambient & Hemisphere Lighting tuned for active theme and skin tone depth */}
        <hemisphereLight
          color={themeConfig.ambientLight.color}
          groundColor={isDark ? '#6B4E3D' : '#94A3B8'}
          intensity={themeConfig.ambientLight.intensity}
        />

        {/* Key light — front right */}
        <directionalLight
          position={[3, 6, 5]}
          intensity={themeConfig.keyLight.intensity}
          color={themeConfig.keyLight.color}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={20}
          shadow-bias={-0.001}
        />

        {/* Fill light — left, cool tone */}
        <directionalLight
          position={[-4, 4, 2]}
          intensity={themeConfig.fillLight.intensity}
          color={themeConfig.fillLight.color}
        />

        {/* Posterior rim light — behind body, highlights muscular silhouette */}
        <directionalLight
          position={[0, 5, -6]}
          intensity={themeConfig.rimLight.intensity}
          color={themeConfig.rimLight.color}
        />

        {/* Posterior secondary fill — lower back / glute angle */}
        <directionalLight
          position={[2, 1, -5]}
          intensity={isDark ? 0.70 : 0.45}
          color={isDark ? '#B8CCDD' : '#E2E8F0'}
        />

        {/* Bottom fill — lifts legs from below */}
        <directionalLight
          position={[0, -4, 2]}
          intensity={isDark ? 0.35 : 0.25}
          color={isDark ? '#C4A882' : '#CBD5E1'}
        />

        {/* Subtle cyan tech accent in dark mode */}
        {isDark && (
          <pointLight position={[0, 1.5, 2.5]} intensity={0.25} color="#00E5FF" />
        )}

        <Suspense fallback={<CanvasLoader />}>
          <ScientificGrid />
          <AnatomyModel />
          <CameraController controlsRef={controlsRef} />
        </Suspense>

        {/* Smart Zoom & Orbit Boundaries (Section 3) */}
        <OrbitControls
          ref={controlsRef}
          enablePan
          enableZoom
          autoRotate={isRotating}
          autoRotateSpeed={2.0}
          maxPolarAngle={Math.PI * 0.88}
          minPolarAngle={Math.PI * 0.12}
          minDistance={0.8}
          maxDistance={5.5}
        />
      </Canvas>

      {/* Controls dock */}
      <AnatomyControls />
    </BackgroundEnvironment>
  );
};
