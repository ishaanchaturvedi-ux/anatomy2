'use client';

import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { MUSCLE_GROUPS } from '../../data/muscleGroups';
import { DEFAULT_CAMERA_CONFIG, MUSCLE_CAMERA_TARGETS } from '../../config/anatomyConfig';

const targetVector = new THREE.Vector3();
const positionVector = new THREE.Vector3();

export const CameraController = ({ controlsRef }: { controlsRef?: React.RefObject<any> }) => {
  const { camera } = useThree();
  const selectedGroupId = useAnatomyStore((s) => s.selectedGroupId);
  const selectedMuscleId = useAnatomyStore((s) => s.selectedMuscleId);
  const viewMode = useAnatomyStore((s) => s.viewMode);
  const cameraZoom = useAnatomyStore((s) => s.cameraZoom);
  const selectedModel = useAnatomyStore((s) => s.selectedModel);

  useEffect(() => {
    let focalTarget: [number, number, number] = DEFAULT_CAMERA_CONFIG.target;
    let focalDistance = (DEFAULT_CAMERA_CONFIG.position[2] || 3.85) * cameraZoom;

    // Adjust distance scale slightly for female model proportions if needed
    const modelMultiplier = selectedModel === 'female' ? 0.96 : 1.0;

    // 1. INDIVIDUAL MUSCLE CAMERA FOCUS (Section 5)
    if (selectedMuscleId && MUSCLE_CAMERA_TARGETS[selectedMuscleId]) {
      const muscleTarget = MUSCLE_CAMERA_TARGETS[selectedMuscleId];
      focalTarget = muscleTarget.target;
      focalDistance = muscleTarget.distance * cameraZoom * modelMultiplier;
    }
    // 2. MUSCLE GROUP CAMERA FOCUS (Section 4)
    else if (selectedGroupId) {
      const group = MUSCLE_GROUPS.find((g) => g.id === selectedGroupId);
      if (group) {
        focalTarget = group.cameraConfig.target;
        focalDistance = (group.cameraConfig.position[2] || 2.4) * cameraZoom * modelMultiplier;
      }
    }
    // 3. FULL-BODY FRAMING (Section 1 & 2: Head-to-feet full visibility with padding)
    else {
      focalTarget = DEFAULT_CAMERA_CONFIG.target;
      focalDistance = 3.85 * cameraZoom * modelMultiplier;
    }

    const [tx, ty, tz] = focalTarget;
    const elevation = focalDistance * 0.05;

    // Compute 3D Camera Position from viewMode around target point with subtle anatomical elevation
    switch (viewMode) {
      case 'back':
        positionVector.set(tx, ty + elevation, tz - focalDistance);
        break;
      case 'left':
        positionVector.set(tx - focalDistance, ty + elevation, tz);
        break;
      case 'right':
        positionVector.set(tx + focalDistance, ty + elevation, tz);
        break;
      case 'front':
      default:
        positionVector.set(tx, ty + elevation, tz + focalDistance);
        break;
    }

    targetVector.set(tx, ty, tz);
  }, [selectedGroupId, selectedMuscleId, viewMode, cameraZoom, selectedModel]);

  useFrame((_, delta) => {
    // Smooth cinematic easing (Section 7)
    const lerpSpeed = Math.min(delta * 5.5, 0.22);
    if (controlsRef?.current) {
      controlsRef.current.target.lerp(targetVector, lerpSpeed);
      controlsRef.current.object.position.lerp(positionVector, lerpSpeed);
      controlsRef.current.update();
    } else {
      camera.position.lerp(positionVector, lerpSpeed);
      camera.lookAt(targetVector);
    }
  });

  return null;
};
