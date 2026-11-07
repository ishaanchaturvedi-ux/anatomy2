'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { MESH_TO_MUSCLE_MAP, MUSCLE_HIGHLIGHT_COLORS } from '../../config/anatomyConfig';
import { ANATOMICAL_MUSCLES } from '../../data/muscles';
import { EXERCISES } from '../../data/exercises';
import { validateAnatomyGlbAsset } from '../../engine/anatomy/AnatomyAssetValidator';

interface GlbMeshModelProps {
  glbPath: string;
  onValidationComplete?: (isValidMuscleAsset: boolean) => void;
}

// Stable target state for lerping per mesh — stored outside React
const meshTargets = new Map<string, {
  color: THREE.Color;
  emissive: THREE.Color;
  intensity: number;
  roughness: number;
  visible: boolean;
}>();

export const GlbMeshModel: React.FC<GlbMeshModelProps> = ({ glbPath, onValidationComplete }) => {
  const { scene } = useGLTF(glbPath);

  // Stable cloned scene — cloned only once per mount
  const clonedSceneRef = useRef<THREE.Group | null>(null);
  const meshMatsRef = useRef<Map<string, THREE.MeshPhysicalMaterial>>(new Map());
  const validatedRef = useRef(false);

  // Store selectors — granular to avoid unnecessary rerenders
  const selectedGroupId = useAnatomyStore((s) => s.selectedGroupId);
  const selectedMuscleId = useAnatomyStore((s) => s.selectedMuscleId);
  const hoveredMeshId = useAnatomyStore((s) => s.hoveredMeshId);
  const selectedExerciseId = useAnatomyStore((s) => s.selectedExerciseId);
  const bilateralMode = useAnatomyStore((s) => s.bilateralMode);
  const activeLayer = useAnatomyStore((s) => s.activeLayer);

  const selectGroup = useAnatomyStore((s) => s.selectGroup);
  const selectMuscle = useAnatomyStore((s) => s.selectMuscle);
  const setHoveredMesh = useAnatomyStore((s) => s.setHoveredMesh);
  const setAssetStatus = useAnatomyStore((s) => s.setAssetStatus);

  // Clone scene once on first load
  if (!clonedSceneRef.current) {
    clonedSceneRef.current = scene.clone(true);
  }

  const clonedScene = clonedSceneRef.current!;

  // Run asset validation + material init once
  useEffect(() => {
    if (validatedRef.current) return;
    validatedRef.current = true;

    const val = validateAnatomyGlbAsset(clonedScene);
    const isMuscleAsset = val.valid && val.assetType === 'muscle-anatomy';

    setAssetStatus({
      loaded: true,
      fallback: !isMuscleAsset,
      assetType: val.assetType,
      validated: true,
      missingMuscles: val.missingMuscleMeshes,
    });

    onValidationComplete?.(isMuscleAsset);

    // Initialize materials once
    clonedScene.traverse((child) => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mesh = child as THREE.Mesh;
      if (meshMatsRef.current.has(mesh.name)) return;

      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(MUSCLE_HIGHLIGHT_COLORS.default.color),
        emissive: new THREE.Color('#000000'),
        emissiveIntensity: 0,
        roughness: 0.72,
        metalness: 0.04,
        clearcoat: 0.1,
        clearcoatRoughness: 0.4,
      });
      mesh.material = mat;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      meshMatsRef.current.set(mesh.name, mat);

      meshTargets.set(mesh.name, {
        color: new THREE.Color(MUSCLE_HIGHLIGHT_COLORS.default.color),
        emissive: new THREE.Color('#000000'),
        intensity: 0,
        roughness: 0.72,
        visible: true,
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update target values whenever interaction state changes — pure data, no Three.js calls
  useEffect(() => {
    const exerciseMap = new Map<string, 'primary' | 'secondary' | 'stabilizer'>();
    if (selectedExerciseId) {
      const exercise = EXERCISES.find((e) => e.id === selectedExerciseId);
      exercise?.primaryMuscles?.forEach((pm) => exerciseMap.set(pm.muscleId, 'primary'));
      exercise?.secondaryMuscles?.forEach((sm) => exerciseMap.set(sm.muscleId, 'secondary'));
    }

    clonedScene.traverse((child) => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mesh = child as THREE.Mesh;
      const target = meshTargets.get(mesh.name);
      if (!target) return;

      const mapping = MESH_TO_MUSCLE_MAP[mesh.name];

      // Bilateral visibility
      let visible = true;
      if (activeLayer === 'skeleton') {
        visible = false;
      } else if (bilateralMode !== 'both') {
        const isLeft = mesh.name.endsWith('_L') || mesh.name.includes('_L_');
        const isRight = mesh.name.endsWith('_R') || mesh.name.includes('_R_');
        if (bilateralMode === 'left' && isRight) visible = false;
        if (bilateralMode === 'right' && isLeft) visible = false;
      }
      target.visible = visible;
      mesh.visible = visible;

      if (!mapping) {
        target.color.set('#1A202C');
        target.emissive.set('#000000');
        target.intensity = 0;
        target.roughness = 0.85;
        return;
      }

      const { groupId, muscleId } = mapping;
      const isGroupSelected = selectedGroupId === groupId;
      const isMuscleSelected = selectedMuscleId === muscleId;
      const isSelected = isGroupSelected || isMuscleSelected;
      const isHovered = hoveredMeshId === mesh.name;
      const emphasis = exerciseMap.get(muscleId);

      const C = MUSCLE_HIGHLIGHT_COLORS;
      if (emphasis === 'primary') {
        target.color.set(C.primary.color); target.emissive.set(C.primary.emissive); target.intensity = C.primary.intensity; target.roughness = C.primary.roughness;
      } else if (emphasis === 'secondary') {
        target.color.set(C.secondary.color); target.emissive.set(C.secondary.emissive); target.intensity = C.secondary.intensity; target.roughness = C.secondary.roughness;
      } else if (isSelected) {
        target.color.set(C.selected.color); target.emissive.set(C.selected.emissive); target.intensity = C.selected.intensity; target.roughness = C.selected.roughness;
      } else if (isHovered) {
        target.color.set(C.hover.color); target.emissive.set(C.hover.emissive); target.intensity = C.hover.intensity; target.roughness = C.hover.roughness;
      } else {
        target.color.set(C.default.color); target.emissive.set(C.default.emissive); target.intensity = C.default.intensity; target.roughness = C.default.roughness;
      }
    });
  }, [clonedScene, selectedGroupId, selectedMuscleId, hoveredMeshId, selectedExerciseId, bilateralMode, activeLayer]);

  // useFrame: smooth lerp materials toward targets each frame
  useFrame((_, delta) => {
    const speed = Math.min(delta * 9, 0.3);
    meshMatsRef.current.forEach((mat, name) => {
      const target = meshTargets.get(name);
      if (!target) return;
      mat.color.lerp(target.color, speed);
      mat.emissive.lerp(target.emissive, speed);
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, target.intensity, speed);
      mat.roughness = THREE.MathUtils.lerp(mat.roughness, target.roughness, speed);
    });
  });

  const handlePointerDown = useCallback((e: any) => {
    e.stopPropagation();
    const mapping = MESH_TO_MUSCLE_MAP[e.object.name];
    if (mapping) {
      selectGroup(mapping.groupId);
      selectMuscle(mapping.muscleId);
    }
  }, [selectGroup, selectMuscle]);

  const handlePointerOver = useCallback((e: any) => {
    e.stopPropagation();
    const mapping = MESH_TO_MUSCLE_MAP[e.object.name];
    const muscle = mapping ? ANATOMICAL_MUSCLES.find((m) => m.id === mapping.muscleId) : null;
    setHoveredMesh(e.object.name, muscle?.name ?? null);
  }, [setHoveredMesh]);

  const handlePointerOut = useCallback(() => {
    setHoveredMesh(null, null);
  }, [setHoveredMesh]);

  return (
    <primitive
      object={clonedScene}
      position={[0, -0.6, 0]}
      scale={[1.1, 1.1, 1.1]}
      onPointerDown={handlePointerDown}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};
