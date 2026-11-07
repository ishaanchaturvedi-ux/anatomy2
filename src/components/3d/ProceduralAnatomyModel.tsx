'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ANATOMICAL_MUSCLES } from '../../data/muscles';
import { EXERCISES } from '../../data/exercises';
import { MuscleMesh } from './MuscleMesh';
import { THEME_3D_CONFIG } from '../../config/anatomyConfig';

// ─────────────────────────────────────────────────────────────────────────────
// Authentic 3D Anatomical Skeleton Layer (Clean ivory bone geometry)
// ─────────────────────────────────────────────────────────────────────────────
const ProceduralSkeleton = () => {
  const showSkeleton = useAnatomyStore((s) => s.showSkeleton);
  const activeLayer = useAnatomyStore((s) => s.activeLayer);
  const theme = useAnatomyStore((s) => s.theme);

  const isVisible = showSkeleton || activeLayer === 'skeleton' || activeLayer === 'both';
  const boneColor = THEME_3D_CONFIG[theme]?.boneColor || '#E8E2D2';

  const boneMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color(boneColor),
      roughness: 0.55,
      metalness: 0.04,
    });
  }, [boneColor]);

  const boneGeoms = useMemo(() => ({
    cranium:   new THREE.SphereGeometry(0.115, 24, 24),
    jaw:       new THREE.BoxGeometry(0.085, 0.045, 0.085),
    spineVert: new THREE.CylinderGeometry(0.024, 0.026, 0.65, 16),
    sternum:   new THREE.BoxGeometry(0.038, 0.17, 0.018),
    ribRing1:  new THREE.TorusGeometry(0.155, 0.011, 8, 24),
    ribRing2:  new THREE.TorusGeometry(0.175, 0.011, 8, 24),
    ribRing3:  new THREE.TorusGeometry(0.165, 0.011, 8, 24),
    clavicle:  new THREE.CylinderGeometry(0.012, 0.012, 0.15, 12),
    scapula:   new THREE.BoxGeometry(0.105, 0.125, 0.016),
    pelvisBone:new THREE.TorusGeometry(0.145, 0.024, 12, 24),
    humerus:   new THREE.CylinderGeometry(0.020, 0.017, 0.35, 12),
    radiusUlna:new THREE.CylinderGeometry(0.015, 0.013, 0.33, 12),
    femur:     new THREE.CylinderGeometry(0.030, 0.024, 0.45, 14),
    tibiaFib:  new THREE.CylinderGeometry(0.023, 0.018, 0.43, 14),
  }), []);

  if (!isVisible) return null;

  return (
    <group name="SkeletonLayer">
      {/* Cranium & Jaw */}
      <mesh geometry={boneGeoms.cranium} position={[0, 1.66, -0.01]} material={boneMat} castShadow />
      <mesh geometry={boneGeoms.jaw} position={[0, 1.56, 0.03]} material={boneMat} />

      {/* Vertebral Column (Cervical to Lumbar) */}
      <mesh geometry={boneGeoms.spineVert} position={[0, 1.15, -0.04]} material={boneMat} />

      {/* Sternum (Chest Bone) */}
      <mesh geometry={boneGeoms.sternum} position={[0, 1.25, 0.095]} material={boneMat} />

      {/* Ribcage Structure (Concentric thoracic rings) */}
      <mesh geometry={boneGeoms.ribRing1} position={[0, 1.30, 0.01]} rotation={[Math.PI / 2.2, 0, 0]} material={boneMat} />
      <mesh geometry={boneGeoms.ribRing2} position={[0, 1.20, 0.01]} rotation={[Math.PI / 2.2, 0, 0]} material={boneMat} />
      <mesh geometry={boneGeoms.ribRing3} position={[0, 1.10, 0.01]} rotation={[Math.PI / 2.2, 0, 0]} material={boneMat} />

      {/* Clavicles (Collar Bones) */}
      <mesh geometry={boneGeoms.clavicle} position={[-0.11, 1.40, 0.06]} rotation={[0, 0, Math.PI / 2.3]} material={boneMat} />
      <mesh geometry={boneGeoms.clavicle} position={[0.11, 1.40, 0.06]} rotation={[0, 0, -Math.PI / 2.3]} material={boneMat} />

      {/* Scapulae (Shoulder Blades) */}
      <mesh geometry={boneGeoms.scapula} position={[-0.14, 1.25, -0.09]} rotation={[0, 0.2, 0.1]} material={boneMat} />
      <mesh geometry={boneGeoms.scapula} position={[0.14, 1.25, -0.09]} rotation={[0, -0.2, -0.1]} material={boneMat} />

      {/* Pelvis Girdle */}
      <mesh geometry={boneGeoms.pelvisBone} position={[0, 0.62, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[1.1, 0.8, 1]} material={boneMat} />

      {/* Upper Extremities Bones (Humerus, Radius/Ulna) */}
      <mesh geometry={boneGeoms.humerus} position={[-0.34, 1.10, 0]} rotation={[0, 0, 0.08]} material={boneMat} />
      <mesh geometry={boneGeoms.humerus} position={[0.34, 1.10, 0]} rotation={[0, 0, -0.08]} material={boneMat} />
      <mesh geometry={boneGeoms.radiusUlna} position={[-0.38, 0.64, 0]} rotation={[0, 0, 0.04]} material={boneMat} />
      <mesh geometry={boneGeoms.radiusUlna} position={[0.38, 0.64, 0]} rotation={[0, 0, -0.04]} material={boneMat} />

      {/* Lower Extremities Bones (Femur, Tibia/Fibula) */}
      <mesh geometry={boneGeoms.femur} position={[-0.14, 0.10, 0]} rotation={[0, 0, -0.04]} material={boneMat} />
      <mesh geometry={boneGeoms.femur} position={[0.14, 0.10, 0]} rotation={[0, 0, 0.04]} material={boneMat} />
      <mesh geometry={boneGeoms.tibiaFib} position={[-0.14, -0.48, 0]} material={boneMat} />
      <mesh geometry={boneGeoms.tibiaFib} position={[0.14, -0.48, 0]} material={boneMat} />
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Natural Skin Base Body Silhouette (Realistic human epidermal foundation)
// ─────────────────────────────────────────────────────────────────────────────
const BaseBodySilhouette = () => {
  const activeLayer = useAnatomyStore((s) => s.activeLayer);
  const showMuscles = useAnatomyStore((s) => s.showMuscles);
  const showSkeleton = useAnatomyStore((s) => s.showSkeleton);
  const theme = useAnatomyStore((s) => s.theme);
  const matRef = useRef<THREE.MeshStandardMaterial>(null!);

  const skinBaseColor = THEME_3D_CONFIG[theme]?.baseBodyColor || '#C5947C';

  useEffect(() => {
    if (!matRef.current) return;
    if (activeLayer === 'skeleton' || (!showMuscles && showSkeleton)) {
      matRef.current.color.set(theme === 'dark' ? '#2D3748' : '#CBD5E1');
      matRef.current.wireframe = true;
    } else {
      matRef.current.color.set(skinBaseColor);
      matRef.current.wireframe = false;
    }
  }, [activeLayer, showMuscles, showSkeleton, skinBaseColor, theme]);

  const geoms = useMemo(() => ({
    head:    new THREE.SphereGeometry(0.150, 24, 24),
    neck:    new THREE.CylinderGeometry(0.068, 0.082, 0.155, 20),
    torsoUp: new THREE.CylinderGeometry(0.190, 0.200, 0.38, 20),
    torsoLo: new THREE.CylinderGeometry(0.180, 0.160, 0.28, 20),
    pelvis:  new THREE.CylinderGeometry(0.165, 0.145, 0.21, 20),
    armL:    new THREE.CylinderGeometry(0.050, 0.042, 0.50, 14),
    armR:    new THREE.CylinderGeometry(0.050, 0.042, 0.50, 14),
    foreL:   new THREE.CylinderGeometry(0.040, 0.030, 0.44, 14),
    foreR:   new THREE.CylinderGeometry(0.040, 0.030, 0.44, 14),
    thighL:  new THREE.CylinderGeometry(0.090, 0.070, 0.54, 14),
    thighR:  new THREE.CylinderGeometry(0.090, 0.070, 0.54, 14),
    legL:    new THREE.CylinderGeometry(0.062, 0.040, 0.50, 14),
    legR:    new THREE.CylinderGeometry(0.062, 0.040, 0.50, 14),
  }), []);

  return (
    <group name="BaseBodySilhouette">
      <mesh geometry={geoms.head} position={[0, 1.65, 0]}>
        <meshStandardMaterial ref={matRef} color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.neck} position={[0, 1.48, 0]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.torsoUp} position={[0, 1.18, -0.01]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.torsoLo} position={[0, 0.88, -0.01]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.pelvis} position={[0, 0.60, -0.01]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.armL} position={[-0.33, 1.10, 0]} rotation={[0, 0, 0.08]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.armR} position={[0.33, 1.10, 0]} rotation={[0, 0, -0.08]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.foreL} position={[-0.37, 0.63, 0]} rotation={[0, 0, 0.04]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.foreR} position={[0.37, 0.63, 0]} rotation={[0, 0, -0.04]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.thighL} position={[-0.14, 0.09, 0]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.thighR} position={[0.14, 0.09, 0]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.legL} position={[-0.14, -0.47, 0]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
      <mesh geometry={geoms.legR} position={[0.14, -0.47, 0]}>
        <meshStandardMaterial color={skinBaseColor} roughness={0.75} metalness={0.02} />
      </mesh>
    </group>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Procedural Anatomy Model
// Natural Human Skin Palette + Proportional Trapezius + 3D Skeleton Engine
// ─────────────────────────────────────────────────────────────────────────────
export const ProceduralAnatomyModel: React.FC = () => {
  const selectedExerciseId = useAnatomyStore((s) => s.selectedExerciseId);
  const selectGroup = useAnatomyStore((s) => s.selectGroup);
  const selectMuscle = useAnatomyStore((s) => s.selectMuscle);
  const setHoveredMesh = useAnatomyStore((s) => s.setHoveredMesh);

  // Active exercise activations mapping
  const exerciseEmphasisMap = useMemo(() => {
    if (!selectedExerciseId) return new Map<string, 'primary' | 'secondary' | 'stabilizer'>();
    const exercise = EXERCISES.find((e) => e.id === selectedExerciseId);
    const map = new Map<string, 'primary' | 'secondary' | 'stabilizer'>();
    if (exercise) {
      exercise.primaryMuscles?.forEach((pm) => map.set(pm.muscleId, 'primary'));
      exercise.secondaryMuscles?.forEach((sm) => map.set(sm.muscleId, 'secondary'));
      exercise.stabilizerMuscles?.forEach((st) => map.set(st.muscleId, 'stabilizer'));
    }
    return map;
  }, [selectedExerciseId]);

  // ── GEOMETRY DEFINITIONS (With Section 11 Natural Trapezius Proportions) ───
  const geom = useMemo(() => {
    return {
      // ── Chest
      pecMajor:   new THREE.SphereGeometry(0.155, 24, 20),
      pecMinor:   new THREE.CapsuleGeometry(0.038, 0.13, 10, 12),
      serratus:   new THREE.CapsuleGeometry(0.028, 0.16, 8, 10),

      // ── Shoulder
      deltAnt:    new THREE.SphereGeometry(0.088, 20, 16),
      deltLat:    new THREE.SphereGeometry(0.095, 20, 16),
      deltPost:   new THREE.SphereGeometry(0.082, 18, 14),

      // ── Arms
      biceps:     new THREE.CapsuleGeometry(0.055, 0.22, 14, 16),
      triceps:    new THREE.CapsuleGeometry(0.062, 0.24, 14, 16),
      brachialis: new THREE.CapsuleGeometry(0.044, 0.15, 10, 12),
      brachiorad: new THREE.CapsuleGeometry(0.038, 0.26, 10, 12),

      // ── Back (Section 11: Trapezius slightly smaller and naturally proportioned)
      latDorsi:   new THREE.CapsuleGeometry(0.085, 0.48, 12, 18),
      trapUpper:  new THREE.CapsuleGeometry(0.052, 0.12, 8, 12), // Refined & subtly downscaled
      trapMid:    new THREE.CapsuleGeometry(0.048, 0.14, 8, 12), // Balanced with upper back
      trapLower:  new THREE.CapsuleGeometry(0.040, 0.12, 8, 12), // Anatomically flush
      rhombMajor: new THREE.CapsuleGeometry(0.038, 0.12, 8, 10),
      rhombMinor: new THREE.CapsuleGeometry(0.028, 0.09, 8, 10),
      teresMajor: new THREE.CapsuleGeometry(0.036, 0.14, 8, 10),
      teresMinor: new THREE.CapsuleGeometry(0.026, 0.10, 8, 10),
      erectorSp:  new THREE.CapsuleGeometry(0.042, 0.42, 10, 14),

      // ── Core (Complete Multi-Layer Structure)
      absMain:    new THREE.BoxGeometry(0.20, 0.30, 0.07),
      obliqueExt: new THREE.CapsuleGeometry(0.052, 0.32, 10, 14),
      obliqueInt: new THREE.CapsuleGeometry(0.044, 0.28, 10, 14),
      transversus:new THREE.BoxGeometry(0.24, 0.26, 0.05),
      multifidus: new THREE.CapsuleGeometry(0.025, 0.38, 8, 12),
      quadLumb:   new THREE.BoxGeometry(0.08, 0.14, 0.04),

      // ── Glutes & Hip Musculature
      gluteMax:   new THREE.SphereGeometry(0.155, 22, 20),
      gluteMed:   new THREE.SphereGeometry(0.105, 16, 14),
      gluteMin:   new THREE.SphereGeometry(0.080, 14, 12),
      tfl:        new THREE.CapsuleGeometry(0.035, 0.16, 8, 10),
      adductorL:  new THREE.CapsuleGeometry(0.045, 0.22, 10, 12),

      // ── Legs
      rectusFem:  new THREE.CapsuleGeometry(0.070, 0.36, 14, 16),
      vastusLat:  new THREE.CapsuleGeometry(0.080, 0.40, 14, 16),
      vastusMed:  new THREE.SphereGeometry(0.075, 16, 14),
      vastusInter:new THREE.CapsuleGeometry(0.065, 0.34, 12, 14),
      bicepsFem:  new THREE.CapsuleGeometry(0.080, 0.42, 14, 16),
      semitend:   new THREE.CapsuleGeometry(0.055, 0.40, 12, 14),
      semimembr:  new THREE.CapsuleGeometry(0.060, 0.38, 12, 14),
      gastro:     new THREE.CapsuleGeometry(0.070, 0.30, 14, 16),
      soleus:     new THREE.CapsuleGeometry(0.062, 0.26, 12, 14),
      tibialis:   new THREE.CapsuleGeometry(0.044, 0.28, 10, 12),
    };
  }, []);

  const handleMeshClick = (groupId: any, muscleId: string, e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    selectGroup(groupId);
    selectMuscle(muscleId);
  };

  const handlePointerOver = (meshName: string, muscleId: string, e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const muscle = ANATOMICAL_MUSCLES.find((m) => m.id === muscleId);
    setHoveredMesh(meshName, muscle?.name ?? null);
  };

  const renderMuscle = (
    meshName: string,
    muscleId: string,
    groupId: any,
    side: 'L' | 'R' | 'M',
    geometry: THREE.BufferGeometry,
    position: [number, number, number],
    rotation: [number, number, number] = [0, 0, 0],
    scale: [number, number, number] = [1, 1, 1]
  ) => {
    const emphasis = exerciseEmphasisMap.get(muscleId);

    return (
      <MuscleMesh
        key={meshName}
        name={meshName}
        muscleId={muscleId}
        groupId={groupId}
        side={side}
        geometry={geometry}
        position={position}
        rotation={rotation}
        scale={scale}
        emphasis={emphasis}
        onClick={(e) => handleMeshClick(groupId, muscleId, e)}
        onPointerOver={(e) => handlePointerOver(meshName, muscleId, e)}
        onPointerOut={() => setHoveredMesh(null, null)}
      />
    );
  };

  return (
    <group position={[0, -0.1, 0]}>
      {/* 3D Skeleton Layer (Independent Visibility) */}
      <ProceduralSkeleton />

      {/* Natural Skin Base Body Silhouette */}
      <BaseBodySilhouette />

      {/* ── CHEST ────────────────────────────────────────────────────── */}
      {renderMuscle('PectoralisMajor_L', 'pectoralis-major', 'chest', 'L', geom.pecMajor,  [-0.115, 1.24, 0.09], [0, 0, 0], [1.15, 0.72, 0.55])}
      {renderMuscle('PectoralisMajor_R', 'pectoralis-major', 'chest', 'R', geom.pecMajor,  [ 0.115, 1.24, 0.09], [0, 0, 0], [1.15, 0.72, 0.55])}
      {renderMuscle('PectoralisMinor_L', 'pectoralis-minor', 'chest', 'L', geom.pecMinor,  [-0.135, 1.28, 0.05])}
      {renderMuscle('PectoralisMinor_R', 'pectoralis-minor', 'chest', 'R', geom.pecMinor,  [ 0.135, 1.28, 0.05])}
      {renderMuscle('SerratusAnterior_L', 'serratus-anterior', 'chest', 'L', geom.serratus, [-0.22, 1.11, 0.06], [0, 0, 0.15])}
      {renderMuscle('SerratusAnterior_R', 'serratus-anterior', 'chest', 'R', geom.serratus, [ 0.22, 1.11, 0.06], [0, 0, -0.15])}

      {/* ── SHOULDERS ─────────────────────────────────────────────────── */}
      {renderMuscle('AntDeltoid_L', 'anterior-deltoid',  'shoulders', 'L', geom.deltAnt,  [-0.298, 1.32, 0.065])}
      {renderMuscle('AntDeltoid_R', 'anterior-deltoid',  'shoulders', 'R', geom.deltAnt,  [ 0.298, 1.32, 0.065])}
      {renderMuscle('LatDeltoid_L', 'lateral-deltoid',   'shoulders', 'L', geom.deltLat,  [-0.345, 1.32, -0.010])}
      {renderMuscle('LatDeltoid_R', 'lateral-deltoid',   'shoulders', 'R', geom.deltLat,  [ 0.345, 1.32, -0.010])}
      {renderMuscle('PostDeltoid_L', 'posterior-deltoid', 'shoulders', 'L', geom.deltPost, [-0.296, 1.30, -0.090])}
      {renderMuscle('PostDeltoid_R', 'posterior-deltoid', 'shoulders', 'R', geom.deltPost, [ 0.296, 1.30, -0.090])}

      {/* ── ARMS ─────────────────────────────────────────────────────── */}
      {renderMuscle('BicepsBrachii_L', 'biceps-brachii', 'arms', 'L', geom.biceps,     [-0.365, 1.04, 0.055])}
      {renderMuscle('BicepsBrachii_R', 'biceps-brachii', 'arms', 'R', geom.biceps,     [ 0.365, 1.04, 0.055])}
      {renderMuscle('Brachialis_L',    'brachialis',     'arms', 'L', geom.brachialis, [-0.372, 0.96, 0.022])}
      {renderMuscle('Brachialis_R',    'brachialis',     'arms', 'R', geom.brachialis, [ 0.372, 0.96, 0.022])}
      {renderMuscle('Brachioradialis_L', 'brachioradialis', 'arms', 'L', geom.brachiorad, [-0.380, 0.65, 0.035])}
      {renderMuscle('Brachioradialis_R', 'brachioradialis', 'arms', 'R', geom.brachiorad, [ 0.380, 0.65, 0.035])}
      {renderMuscle('TricepsBrachii_L', 'triceps-brachii', 'arms', 'L', geom.triceps,  [-0.364, 1.04, -0.065])}
      {renderMuscle('TricepsBrachii_R', 'triceps-brachii', 'arms', 'R', geom.triceps,  [ 0.364, 1.04, -0.065])}

      {/* ── BACK (With Section 11 Naturally Proportioned Trapezius) ─── */}
      {renderMuscle('LatissimusDorsi_L', 'latissimus-dorsi', 'back', 'L', geom.latDorsi,
        [-0.19, 1.01, -0.07], [0.10, 0, -0.22], [1.9, 1.0, 0.55])}
      {renderMuscle('LatissimusDorsi_R', 'latissimus-dorsi', 'back', 'R', geom.latDorsi,
        [ 0.19, 1.01, -0.07], [0.10, 0,  0.22], [1.9, 1.0, 0.55])}

      {/* Naturally Proportioned Trapezius Fibers */}
      {renderMuscle('TrapeziusUpper_L', 'trapezius', 'back', 'L', geom.trapUpper,
        [-0.13, 1.41, -0.06], [0, 0, -0.52], [1.0, 1.0, 0.48])}
      {renderMuscle('TrapeziusUpper_R', 'trapezius', 'back', 'R', geom.trapUpper,
        [ 0.13, 1.41, -0.06], [0, 0,  0.52], [1.0, 1.0, 0.48])}

      {renderMuscle('TrapeziumsMid_L', 'trapezius', 'back', 'L', geom.trapMid,
        [-0.11, 1.22, -0.070], [0.08, 0, -0.26], [1.0, 1.0, 0.38])}
      {renderMuscle('TrapeziumsMid_R', 'trapezius', 'back', 'R', geom.trapMid,
        [ 0.11, 1.22, -0.070], [0.08, 0,  0.26], [1.0, 1.0, 0.38])}

      {renderMuscle('TrapeziusLower_L', 'trapezius', 'back', 'L', geom.trapLower,
        [-0.075, 1.07, -0.066], [0.15, 0, -0.16], [0.95, 1.0, 0.38])}
      {renderMuscle('TrapeziusLower_R', 'trapezius', 'back', 'R', geom.trapLower,
        [ 0.075, 1.07, -0.066], [0.15, 0,  0.16], [0.95, 1.0, 0.38])}

      {renderMuscle('RhomboidMajor_L', 'rhomboid-major', 'back', 'L', geom.rhombMajor,
        [-0.10, 1.18, -0.076], [0.1, 0, -0.20], [1.0, 1.0, 0.5])}
      {renderMuscle('RhomboidMajor_R', 'rhomboid-major', 'back', 'R', geom.rhombMajor,
        [ 0.10, 1.18, -0.076], [0.1, 0,  0.20], [1.0, 1.0, 0.5])}

      {renderMuscle('RhomboidMinor_L', 'rhomboid-minor', 'back', 'L', geom.rhombMinor,
        [-0.09, 1.29, -0.078], [0.05, 0, -0.20], [1.0, 1.0, 0.45])}
      {renderMuscle('RhomboidMinor_R', 'rhomboid-minor', 'back', 'R', geom.rhombMinor,
        [ 0.09, 1.29, -0.078], [0.05, 0,  0.20], [1.0, 1.0, 0.45])}

      {renderMuscle('TeresMajor_L', 'teres-major', 'back', 'L', geom.teresMajor,
        [-0.21, 1.16, -0.075], [0.15, 0, -0.45], [1.0, 1.0, 0.5])}
      {renderMuscle('TeresMajor_R', 'teres-major', 'back', 'R', geom.teresMajor,
        [ 0.21, 1.16, -0.075], [0.15, 0,  0.45], [1.0, 1.0, 0.5])}

      {renderMuscle('TeresMinor_L', 'teres-minor', 'back', 'L', geom.teresMinor,
        [-0.20, 1.24, -0.080], [0.1, 0, -0.40], [1.0, 1.0, 0.45])}
      {renderMuscle('TeresMinor_R', 'teres-minor', 'back', 'R', geom.teresMinor,
        [ 0.20, 1.24, -0.080], [0.1, 0,  0.40], [1.0, 1.0, 0.45])}

      {renderMuscle('ErectorSpinae_L', 'erector-spinae', 'back', 'L', geom.erectorSp,
        [-0.066, 0.88, -0.072], [0, 0, 0], [0.9, 1.0, 0.55])}
      {renderMuscle('ErectorSpinae_R', 'erector-spinae', 'back', 'R', geom.erectorSp,
        [ 0.066, 0.88, -0.072], [0, 0, 0], [0.9, 1.0, 0.55])}

      {/* ── CORE (COMPREHENSIVE MULTI-LAYER STRUCTURE) ───────────────── */}
      {/* 1. Superficial Rectus Abdominis (6-Pack) */}
      {renderMuscle('RectusAbdominis_M', 'rectus-abdominis', 'core', 'M', geom.absMain,
        [0, 0.96, 0.085])}

      {/* 2. External Obliques */}
      {renderMuscle('ExternalOblique_L', 'external-oblique', 'core', 'L', geom.obliqueExt,
        [-0.188, 0.95, 0.035], [0, 0, 0.12])}
      {renderMuscle('ExternalOblique_R', 'external-oblique', 'core', 'R', geom.obliqueExt,
        [ 0.188, 0.95, 0.035], [0, 0, -0.12])}

      {/* 3. Internal Obliques */}
      {renderMuscle('InternalOblique_L', 'internal-oblique', 'core', 'L', geom.obliqueInt,
        [-0.170, 0.90, 0.025], [0, 0, -0.10])}
      {renderMuscle('InternalOblique_R', 'internal-oblique', 'core', 'R', geom.obliqueInt,
        [ 0.170, 0.90, 0.025], [0, 0, 0.10])}

      {/* 4. Transversus Abdominis (Deep Core Weight Belt) */}
      {renderMuscle('TransversusAbdominis_M', 'transversus-abdominis', 'core', 'M', geom.transversus,
        [0, 0.92, 0.045])}

      {/* 5. Deep Multifidus & Quadratus Lumborum */}
      {renderMuscle('Multifidus_L', 'multifidus', 'core', 'L', geom.multifidus,
        [-0.045, 0.88, -0.065], [0, 0, 0])}
      {renderMuscle('Multifidus_R', 'multifidus', 'core', 'R', geom.multifidus,
        [ 0.045, 0.88, -0.065], [0, 0, 0])}

      {renderMuscle('QuadratusLumborum_L', 'quadratus-lumborum', 'core', 'L', geom.quadLumb,
        [-0.115, 0.82, -0.055])}
      {renderMuscle('QuadratusLumborum_R', 'quadratus-lumborum', 'core', 'R', geom.quadLumb,
        [ 0.115, 0.82, -0.055])}

      {/* ── HIPS & GLUTES ─────────────────────────────────────────────── */}
      {renderMuscle('GluteusMaximus_L', 'gluteus-maximus', 'hips-glutes', 'L', geom.gluteMax,
        [-0.135, 0.49, -0.105], [0, 0, 0], [1.0, 0.95, 0.78])}
      {renderMuscle('GluteusMaximus_R', 'gluteus-maximus', 'hips-glutes', 'R', geom.gluteMax,
        [ 0.135, 0.49, -0.105], [0, 0, 0], [1.0, 0.95, 0.78])}
      {renderMuscle('GluteusMedius_L', 'gluteus-medius', 'hips-glutes', 'L', geom.gluteMed,
        [-0.18, 0.56, -0.058])}
      {renderMuscle('GluteusMedius_R', 'gluteus-medius', 'hips-glutes', 'R', geom.gluteMed,
        [ 0.18, 0.56, -0.058])}
      {renderMuscle('GluteusMinimus_L', 'gluteus-minimus', 'hips-glutes', 'L', geom.gluteMin,
        [-0.165, 0.54, -0.048])}
      {renderMuscle('GluteusMinimus_R', 'gluteus-minimus', 'hips-glutes', 'R', geom.gluteMin,
        [ 0.165, 0.54, -0.048])}
      {renderMuscle('TensorFasciaeLatae_L', 'tensor-fasciae-latae', 'hips-glutes', 'L', geom.tfl,
        [-0.198, 0.46, 0.045], [0, 0, 0.12])}
      {renderMuscle('TensorFasciaeLatae_R', 'tensor-fasciae-latae', 'hips-glutes', 'R', geom.tfl,
        [ 0.198, 0.46, 0.045], [0, 0, -0.12])}
      {renderMuscle('AdductorLongus_L', 'adductor-longus', 'hips-glutes', 'L', geom.adductorL,
        [-0.078, 0.22, 0.025], [0, 0, -0.08])}
      {renderMuscle('AdductorLongus_R', 'adductor-longus', 'hips-glutes', 'R', geom.adductorL,
        [ 0.078, 0.22, 0.025], [0, 0, 0.08])}

      {/* ── LEGS ──────────────────────────────────────────────────────── */}
      {renderMuscle('RectusFemoris_L', 'rectus-femoris', 'legs', 'L', geom.rectusFem,
        [-0.148, 0.04, 0.072])}
      {renderMuscle('RectusFemoris_R', 'rectus-femoris', 'legs', 'R', geom.rectusFem,
        [ 0.148, 0.04, 0.072])}
      {renderMuscle('VastusLateralis_L', 'vastus-lateralis', 'legs', 'L', geom.vastusLat,
        [-0.208, 0.04, 0.022])}
      {renderMuscle('VastusLateralis_R', 'vastus-lateralis', 'legs', 'R', geom.vastusLat,
        [ 0.208, 0.04, 0.022])}
      {renderMuscle('VastusMedialis_L', 'vastus-medialis', 'legs', 'L', geom.vastusMed,
        [-0.128, -0.13, 0.075])}
      {renderMuscle('VastusMedialis_R', 'vastus-medialis', 'legs', 'R', geom.vastusMed,
        [ 0.128, -0.13, 0.075])}
      {renderMuscle('VastusIntermedius_L', 'vastus-intermedius', 'legs', 'L', geom.vastusInter,
        [-0.148, 0.02, 0.045])}
      {renderMuscle('VastusIntermedius_R', 'vastus-intermedius', 'legs', 'R', geom.vastusInter,
        [ 0.148, 0.02, 0.045])}

      {renderMuscle('BicepsFemoris_L', 'biceps-femoris', 'legs', 'L', geom.bicepsFem,
        [-0.155, 0.04, -0.078])}
      {renderMuscle('BicepsFemoris_R', 'biceps-femoris', 'legs', 'R', geom.bicepsFem,
        [ 0.155, 0.04, -0.078])}
      {renderMuscle('Semitendinosus_L', 'semitendinosus', 'legs', 'L', geom.semitend,
        [-0.118, 0.02, -0.072])}
      {renderMuscle('Semitendinosus_R', 'semitendinosus', 'legs', 'R', geom.semitend,
        [ 0.118, 0.02, -0.072])}
      {renderMuscle('Semimembranosus_L', 'semimembranosus', 'legs', 'L', geom.semimembr,
        [-0.128, -0.02, -0.062])}
      {renderMuscle('Semimembranosus_R', 'semimembranosus', 'legs', 'R', geom.semimembr,
        [ 0.128, -0.02, -0.062])}

      {renderMuscle('Gastrocnemius_L', 'gastrocnemius', 'legs', 'L', geom.gastro,
        [-0.155, -0.55, -0.036])}
      {renderMuscle('Gastrocnemius_R', 'gastrocnemius', 'legs', 'R', geom.gastro,
        [ 0.155, -0.55, -0.036])}
      {renderMuscle('Soleus_L', 'soleus', 'legs', 'L', geom.soleus,
        [-0.155, -0.62, -0.022])}
      {renderMuscle('Soleus_R', 'soleus', 'legs', 'R', geom.soleus,
        [ 0.155, -0.62, -0.022])}
      {renderMuscle('TibialisAnterior_L', 'tibialis-anterior', 'legs', 'L', geom.tibialis,
        [-0.148, -0.51, 0.058])}
      {renderMuscle('TibialisAnterior_R', 'tibialis-anterior', 'legs', 'R', geom.tibialis,
        [ 0.148, -0.51, 0.058])}
    </group>
  );
};
