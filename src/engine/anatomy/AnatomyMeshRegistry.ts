import * as THREE from 'three';
import { MESH_TO_MUSCLE_MAP } from '../../config/anatomyConfig';

export interface RegisteredMeshInfo {
  meshName: string;
  muscleId: string;
  side: 'left' | 'right' | 'bilateral' | 'medial';
  groupId: string;
  regionId?: string;
  portionId?: string;
}

export class AnatomyMeshRegistry {
  private meshToInfoMap = new Map<string, RegisteredMeshInfo>();
  private muscleToMeshesMap = new Map<string, string[]>();
  private groupToMusclesMap = new Map<string, Set<string>>();
  private isMuscleSegmented = false;
  private totalMeshesInScene = 0;
  private mappedMuscleMeshCount = 0;

  /**
   * Performs a single-pass traversal of a loaded 3D scene to index all anatomical meshes.
   */
  public registerScene(scene: THREE.Object3D): void {
    this.meshToInfoMap.clear();
    this.muscleToMeshesMap.clear();
    this.groupToMusclesMap.clear();
    this.totalMeshesInScene = 0;
    this.mappedMuscleMeshCount = 0;

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        this.totalMeshesInScene++;
        const meshName = child.name;

        // Try exact match or prefix match (e.g. PectoralisMajor_L_Clavicular -> PectoralisMajor_L)
        const mapping = this.resolveMeshMapping(meshName);

        if (mapping) {
          this.mappedMuscleMeshCount++;
          const side: 'left' | 'right' | 'bilateral' | 'medial' =
            meshName.endsWith('_L') || meshName.includes('left') || meshName.includes('_L_')
              ? 'left'
              : meshName.endsWith('_R') || meshName.includes('right') || meshName.includes('_R_')
              ? 'right'
              : 'medial';

          const info: RegisteredMeshInfo = {
            meshName,
            muscleId: mapping.muscleId,
            side,
            groupId: mapping.groupId,
            regionId: mapping.regionId,
          };

          this.meshToInfoMap.set(meshName, info);

          // Index muscle -> meshes
          if (!this.muscleToMeshesMap.has(mapping.muscleId)) {
            this.muscleToMeshesMap.set(mapping.muscleId, []);
          }
          this.muscleToMeshesMap.get(mapping.muscleId)!.push(meshName);

          // Index group -> muscles
          if (!this.groupToMusclesMap.has(mapping.groupId)) {
            this.groupToMusclesMap.set(mapping.groupId, new Set());
          }
          this.groupToMusclesMap.get(mapping.groupId)!.add(mapping.muscleId);
        }
      }
    });

    this.isMuscleSegmented = this.mappedMuscleMeshCount >= 5;
  }

  private resolveMeshMapping(meshName: string) {
    if (MESH_TO_MUSCLE_MAP[meshName]) {
      return MESH_TO_MUSCLE_MAP[meshName];
    }
    // Check if prefix matches a known mesh pattern (e.g. PectoralisMajor_L_Portion1)
    const keys = Object.keys(MESH_TO_MUSCLE_MAP);
    for (const key of keys) {
      if (meshName.startsWith(key)) {
        return MESH_TO_MUSCLE_MAP[key];
      }
    }
    return null;
  }

  public getMeshInfo(meshName: string): RegisteredMeshInfo | undefined {
    return this.meshToInfoMap.get(meshName);
  }

  public getMuscleIdForMesh(meshName: string): string | null {
    return this.meshToInfoMap.get(meshName)?.muscleId || null;
  }

  public getMeshesForMuscle(muscleId: string): string[] {
    return this.muscleToMeshesMap.get(muscleId) || [];
  }

  public getMusclesForGroup(groupId: string): string[] {
    const set = this.groupToMusclesMap.get(groupId);
    return set ? Array.from(set) : [];
  }

  public isSegmentedAsset(): boolean {
    return this.isMuscleSegmented;
  }

  public getStats() {
    return {
      totalMeshesInScene: this.totalMeshesInScene,
      mappedMuscleMeshCount: this.mappedMuscleMeshCount,
      uniqueMusclesRegistered: this.muscleToMeshesMap.size,
      isMuscleSegmented: this.isMuscleSegmented,
    };
  }
}

// Global Registry Singleton
export const globalAnatomyMeshRegistry = new AnatomyMeshRegistry();
