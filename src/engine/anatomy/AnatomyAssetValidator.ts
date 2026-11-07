import * as THREE from 'three';
import { globalAnatomyMeshRegistry } from './AnatomyMeshRegistry';
import { MESH_TO_MUSCLE_MAP } from '../../config/anatomyConfig';

export type AssetClassification = 'muscle-anatomy' | 'base-body' | 'invalid' | 'missing';

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
 * Validates a loaded Three.js GLB scene and classifies whether it is a muscle-segmented asset or base body.
 */
export function validateAnatomyGlbAsset(scene: THREE.Object3D): GlbAssetValidationResult {
  globalAnatomyMeshRegistry.registerScene(scene);
  const stats = globalAnatomyMeshRegistry.getStats();

  const detectedMuscleMeshes: string[] = [];
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh && MESH_TO_MUSCLE_MAP[child.name]) {
      detectedMuscleMeshes.push(child.name);
    }
  });

  const requiredSampleMeshes = [
    'PectoralisMajor_L',
    'PectoralisMajor_R',
    'BicepsBrachii_L',
    'BicepsBrachii_R',
    'LatissimusDorsi_L',
    'LatissimusDorsi_R',
    'GluteusMaximus_L',
    'GluteusMaximus_R',
    'RectusFemoris_L',
    'RectusFemoris_R',
  ];

  const missingMuscleMeshes = requiredSampleMeshes.filter((m) => !detectedMuscleMeshes.includes(m));

  let assetType: AssetClassification = 'missing';
  let valid = false;

  if (stats.isMuscleSegmented) {
    assetType = 'muscle-anatomy';
    valid = true;
  } else if (stats.totalMeshesInScene > 0) {
    assetType = 'base-body';
    valid = false;
  }

  const details =
    assetType === 'muscle-anatomy'
      ? `Validated production muscle anatomy GLB asset (${stats.mappedMuscleMeshCount} muscle meshes mapped).`
      : `Detected base-body GLB asset (${stats.totalMeshesInScene} total meshes, ${stats.mappedMuscleMeshCount} muscle meshes mapped). Production muscle-segmented GLB asset required at /models/male-anatomy.glb.`;

  return {
    valid,
    assetType,
    totalMeshCount: stats.totalMeshesInScene,
    muscleMeshCount: stats.mappedMuscleMeshCount,
    detectedMuscleMeshes,
    missingMuscleMeshes,
    details,
  };
}
