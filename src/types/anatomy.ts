export type ModelGender = 'male' | 'female';
export type ThemeMode = 'dark' | 'light';
export type BilateralSide = 'left' | 'right' | 'both';
export type AnatomicalSide = 'bilateral' | 'left' | 'right' | 'medial';
export type MuscleEmphasisLevel = 'primary' | 'secondary' | 'stabilizer';
export type AnatomyLayer = 'muscles' | 'deep' | 'skeleton' | 'both';

export type TopMuscleGroupId =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'arms'
  | 'core'
  | 'hips-glutes'
  | 'legs';

export type MuscleEmphasis = 'PRIMARY' | 'SECONDARY' | 'STABILIZER' | 'primary' | 'secondary' | 'stabilizer';
export type EmphasisLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export interface CameraTargetConfig {
  position: [number, number, number];
  target: [number, number, number];
  zoom?: number;
}

export interface MuscleGroup {
  id: TopMuscleGroupId;
  name: string;
  shortDescription: string;
  iconName: string;
  cameraConfig: CameraTargetConfig;
  trainingRegionIds: string[];
}

export interface TrainingRegion {
  id: string;
  name: string;
  groupId: TopMuscleGroupId;
  description: string;
  anatomicalMuscleIds: string[];
}

export interface AnatomicalPortion {
  id: string;
  name: string;
  meshNames: string[];
  fiberDirection?: string;
}

export interface AnatomicalMuscle {
  id: string;
  name: string;
  latinName: string;
  category: TopMuscleGroupId;
  side: AnatomicalSide;
  trainingRegionIds: string[];
  description: string;
  function: string;
  origin: string;
  insertion: string;
  primaryMovements: string[];
  relatedMuscleIds: string[];
  meshNames: string[];
  portions?: AnatomicalPortion[];
}

export interface ExerciseMuscleActivation {
  muscleId: string;
  emphasis: MuscleEmphasis;
}

export interface SkeletonStructure {
  id: string;
  name: string;
  region: TopMuscleGroupId;
  meshNames: string[];
  description?: string;
}
