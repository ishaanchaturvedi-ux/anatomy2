import * as THREE from 'three';
import { ANATOMICAL_MUSCLES } from '../data/muscles';
import { MUSCLE_GROUPS, TRAINING_REGIONS } from '../data/muscleGroups';
import { EXERCISES } from '../data/exercises';
import { MESH_TO_MUSCLE_MAP } from '../config/anatomyConfig';

export type AssetClassification = 'muscle-anatomy' | 'base-body' | 'invalid' | 'missing' | 'unknown';

export interface DataValidationReport {
  valid: boolean;
  totalMuscles: number;
  totalExercises: number;
  orphanedExerciseMuscles: string[];
  missingMeshMappings: string[];
  errors: string[];
}

export interface GlbAssetValidationResult {
  valid: boolean;
  assetType: AssetClassification;
  totalMeshCount: number;
  muscleMeshCount: number;
  detectedMuscleMeshes: string[];
  missingMuscleMeshes: string[];
  details: string;
}

/**
 * Validates internal data integrity between muscles, exercises, regions, and mesh mappings.
 */
export function validateAnatomyData(): DataValidationReport {
  const errors: string[] = [];
  const orphanedExerciseMuscles: string[] = [];
  const missingMeshMappings: string[] = [];

  const muscleIdSet = new Set(ANATOMICAL_MUSCLES.map((m) => m.id));
  const groupIdSet = new Set(MUSCLE_GROUPS.map((g) => g.id));
  const regionIdSet = new Set(TRAINING_REGIONS.map((r) => r.id));

  // Check muscles categories and regions
  ANATOMICAL_MUSCLES.forEach((m) => {
    if (!groupIdSet.has(m.category)) {
      errors.push(`Muscle '${m.id}' references invalid category '${m.category}'`);
    }
    m.trainingRegionIds.forEach((rId) => {
      if (!regionIdSet.has(rId)) {
        errors.push(`Muscle '${m.id}' references invalid training region '${rId}'`);
      }
    });
  });

  // Check exercise muscle references
  EXERCISES.forEach((ex) => {
    ex.primaryMuscles?.forEach((pm) => {
      if (!muscleIdSet.has(pm.muscleId)) {
        orphanedExerciseMuscles.push(`Exercise '${ex.id}' references missing muscle '${pm.muscleId}'`);
      }
    });
    ex.secondaryMuscles?.forEach((sm) => {
      if (!muscleIdSet.has(sm.muscleId)) {
        orphanedExerciseMuscles.push(`Exercise '${ex.id}' references missing muscle '${sm.muscleId}'`);
      }
    });
  });

  // Check MESH_TO_MUSCLE_MAP targets
  Object.entries(MESH_TO_MUSCLE_MAP).forEach(([meshName, mapping]) => {
    if (!muscleIdSet.has(mapping.muscleId)) {
      missingMeshMappings.push(`Mesh '${meshName}' maps to missing muscle '${mapping.muscleId}'`);
    }
  });

  const valid = errors.length === 0 && orphanedExerciseMuscles.length === 0 && missingMeshMappings.length === 0;

  return {
    valid,
    totalMuscles: ANATOMICAL_MUSCLES.length,
    totalExercises: EXERCISES.length,
    orphanedExerciseMuscles,
    missingMeshMappings,
    errors,
  };
}

/**
 * Inspects a loaded Three.js GLB scene to check if it contains separate addressable muscle meshes.
 */
export function validateAnatomyGlbAsset(scene: THREE.Object3D): GlbAssetValidationResult {
  const detectedMeshes: string[] = [];
  const detectedMuscleMeshes: string[] = [];
  let totalMeshCount = 0;

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      totalMeshCount++;
      const name = child.name;
      detectedMeshes.push(name);
      if (MESH_TO_MUSCLE_MAP[name]) {
        detectedMuscleMeshes.push(name);
      }
    }
  });

  // Target muscle mesh names to check against
  const requiredSampleMeshes = [
    'PectoralisMajor_L',
    'PectoralisMajor_R',
    'BicepsBrachii_L',
    'BicepsBrachii_R',
    'LatissimusDorsi_L',
    'LatissimusDorsi_R',
    'GluteusMaximus_L',
    'GluteusMaximus_R',
  ];

  const missingMuscleMeshes = requiredSampleMeshes.filter((m) => !detectedMuscleMeshes.includes(m));

  // Determine Asset Classification
  let assetType: AssetClassification = 'unknown';
  let valid = false;

  if (detectedMuscleMeshes.length >= 10) {
    assetType = 'muscle-anatomy';
    valid = true;
  } else if (totalMeshCount > 0) {
    assetType = 'base-body';
    valid = false;
  }

  const details =
    assetType === 'muscle-anatomy'
      ? `Validated production muscle anatomy GLB asset (${detectedMuscleMeshes.length} muscle meshes found).`
      : `Detected base-body GLB asset (${totalMeshCount} total meshes, ${detectedMuscleMeshes.length} muscle meshes). Requires muscle-segmented GLB asset.`;

  return {
    valid,
    assetType,
    totalMeshCount,
    muscleMeshCount: detectedMuscleMeshes.length,
    detectedMuscleMeshes,
    missingMuscleMeshes,
    details,
  };
}
