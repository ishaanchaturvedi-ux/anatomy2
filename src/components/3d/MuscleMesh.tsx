'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { MUSCLE_HIGHLIGHT_COLORS } from '../../config/anatomyConfig';

export interface MuscleMeshProps {
  name: string;
  muscleId: string;
  groupId: string;
  side?: 'L' | 'R' | 'M';
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  geometry: THREE.BufferGeometry;
  emphasis?: 'primary' | 'secondary' | 'stabilizer' | 'PRIMARY' | 'SECONDARY' | 'STABILIZER' | null;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
}

export const MuscleMesh: React.FC<MuscleMeshProps> = ({
  name,
  muscleId,
  groupId,
  side,
  geometry,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  emphasis,
  onClick,
  onPointerOver,
  onPointerOut,
}) => {
  const matRef = useRef<THREE.MeshPhysicalMaterial>(null!);

  // Granular store selectors
  const selectedGroupId = useAnatomyStore((s) => s.selectedGroupId);
  const selectedMuscleId = useAnatomyStore((s) => s.selectedMuscleId);
  const hoveredMeshId = useAnatomyStore((s) => s.hoveredMeshId);
  const bilateralMode = useAnatomyStore((s) => s.bilateralMode);
  const activeLayer = useAnatomyStore((s) => s.activeLayer);
  const showMuscles = useAnatomyStore((s) => s.showMuscles);

  // Exact individual selection check (Section 2 & 3: Individual muscle selection must NOT highlight parent group)
  const isIndividualMuscleSelected = selectedMuscleId === muscleId;
  const isGroupOnlySelected = selectedMuscleId === null && selectedGroupId === groupId;
  const isHovered = hoveredMeshId === name;
  const isDimmed = selectedMuscleId !== null ? !isIndividualMuscleSelected : (selectedGroupId !== null ? !isGroupOnlySelected : false);

  // Determine side from props or name suffix (_L / _R)
  const meshSide = useMemo(() => {
    if (side) return side;
    if (name.endsWith('_L') || name.includes('left') || name.includes('_L_')) return 'L';
    if (name.endsWith('_R') || name.includes('right') || name.includes('_R_')) return 'R';
    return 'M';
  }, [side, name]);

  // Check bilateral visibility
  const isBilateralVisible = useMemo(() => {
    if (bilateralMode === 'both') return true;
    if (meshSide === 'M') return true;
    if (bilateralMode === 'left' && meshSide === 'L') return true;
    if (bilateralMode === 'right' && meshSide === 'R') return true;
    return false;
  }, [bilateralMode, meshSide]);

  // Check layer visibility
  const isLayerVisible = useMemo(() => {
    if (!showMuscles) return false;
    if (activeLayer === 'skeleton') return false;
    return true;
  }, [showMuscles, activeLayer]);

  const targetColor = useRef(new THREE.Color(MUSCLE_HIGHLIGHT_COLORS.default.color));
  const targetEmissive = useRef(new THREE.Color(MUSCLE_HIGHLIGHT_COLORS.default.emissive));
  const targetEmissiveIntensity = useRef(0);
  const targetRoughness = useRef(0.75);

  useEffect(() => {
    const normEmphasis = emphasis?.toLowerCase();

    if (normEmphasis === 'primary') {
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.primary.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.primary.emissive);
      targetEmissiveIntensity.current = MUSCLE_HIGHLIGHT_COLORS.primary.intensity;
      targetRoughness.current = MUSCLE_HIGHLIGHT_COLORS.primary.roughness;
    } else if (normEmphasis === 'secondary') {
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.secondary.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.secondary.emissive);
      targetEmissiveIntensity.current = MUSCLE_HIGHLIGHT_COLORS.secondary.intensity;
      targetRoughness.current = MUSCLE_HIGHLIGHT_COLORS.secondary.roughness;
    } else if (normEmphasis === 'stabilizer') {
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.stabilizer.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.stabilizer.emissive);
      targetEmissiveIntensity.current = MUSCLE_HIGHLIGHT_COLORS.stabilizer.intensity;
      targetRoughness.current = MUSCLE_HIGHLIGHT_COLORS.stabilizer.roughness;
    } else if (isIndividualMuscleSelected) {
      // ONLY exact selected muscle gets bright cyan highlight
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.selected.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.selected.emissive);
      targetEmissiveIntensity.current = MUSCLE_HIGHLIGHT_COLORS.selected.intensity;
      targetRoughness.current = MUSCLE_HIGHLIGHT_COLORS.selected.roughness;
    } else if (isHovered) {
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.hover.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.hover.emissive);
      targetEmissiveIntensity.current = MUSCLE_HIGHLIGHT_COLORS.hover.intensity;
      targetRoughness.current = MUSCLE_HIGHLIGHT_COLORS.hover.roughness;
    } else if (isGroupOnlySelected) {
      // Group-level subtle elevation when no individual muscle is selected
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.groupFocus.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.groupFocus.emissive);
      targetEmissiveIntensity.current = MUSCLE_HIGHLIGHT_COLORS.groupFocus.intensity;
      targetRoughness.current = MUSCLE_HIGHLIGHT_COLORS.groupFocus.roughness;
    } else if (isDimmed) {
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.inactive.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.inactive.emissive);
      targetEmissiveIntensity.current = 0;
      targetRoughness.current = 0.88;
    } else {
      targetColor.current.set(MUSCLE_HIGHLIGHT_COLORS.default.color);
      targetEmissive.current.set(MUSCLE_HIGHLIGHT_COLORS.default.emissive);
      targetEmissiveIntensity.current = MUSCLE_HIGHLIGHT_COLORS.default.intensity;
      targetRoughness.current = MUSCLE_HIGHLIGHT_COLORS.default.roughness;
    }
  }, [isIndividualMuscleSelected, isGroupOnlySelected, isHovered, emphasis, isDimmed]);

  useFrame((_, delta) => {
    if (!matRef.current) return;
    const speed = Math.min(delta * 10, 0.35);
    matRef.current.color.lerp(targetColor.current, speed);
    matRef.current.emissive.lerp(targetEmissive.current, speed);
    matRef.current.emissiveIntensity = THREE.MathUtils.lerp(
      matRef.current.emissiveIntensity,
      targetEmissiveIntensity.current,
      speed
    );
    matRef.current.roughness = THREE.MathUtils.lerp(
      matRef.current.roughness,
      targetRoughness.current,
      speed
    );
  });

  if (!isBilateralVisible || !isLayerVisible) {
    return null;
  }

  return (
    <mesh
      name={name}
      geometry={geometry}
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        ref={matRef}
        color={MUSCLE_HIGHLIGHT_COLORS.default.color}
        emissive={MUSCLE_HIGHLIGHT_COLORS.default.emissive}
        emissiveIntensity={0}
        roughness={0.72}
        metalness={0.02}
        clearcoat={0.08}
        clearcoatRoughness={0.5}
      />
    </mesh>
  );
};
