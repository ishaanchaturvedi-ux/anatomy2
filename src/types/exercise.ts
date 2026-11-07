import { TopMuscleGroupId, MuscleEmphasis, EmphasisLevel } from './anatomy';

export type TrainingType = 'Weight Training' | 'Bodyweight' | 'Hybrid';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type Equipment = 
  | 'None' 
  | 'Barbell' 
  | 'Dumbbell' 
  | 'Kettlebell' 
  | 'Cable' 
  | 'Machine' 
  | 'Bench' 
  | 'Pull-up Bar' 
  | 'Dip Bars' 
  | 'Resistance Band' 
  | 'Ab Wheel';

export type MovementPattern = 
  | 'Horizontal Push' 
  | 'Vertical Push' 
  | 'Horizontal Pull' 
  | 'Vertical Pull' 
  | 'Hip Hinge' 
  | 'Squat' 
  | 'Lunge' 
  | 'Isolation' 
  | 'Core Flexion' 
  | 'Rotation'
  | 'Isometric';

export interface ExerciseMuscleTarget {
  muscleId: string;
  emphasis: MuscleEmphasis;
  level: EmphasisLevel;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  primaryMuscles: ExerciseMuscleTarget[];
  secondaryMuscles?: ExerciseMuscleTarget[];
  stabilizerMuscles?: ExerciseMuscleTarget[];
  trainingRegionIds: string[];
  muscleGroupIds: TopMuscleGroupId[];
  trainingType: TrainingType;
  equipment: Equipment;
  difficulty: Difficulty;
  movementPattern: MovementPattern;
  instructions: string[];
  commonMistakes: string[];
  recommendedSets: string;
  recommendedReps: string;
}

export interface ExerciseFilterState {
  search: string;
  muscleGroupId: string;
  trainingRegionId: string;
  muscleId: string;
  trainingType: string;
  difficulty: string;
  equipment: string;
  movementPattern: string;
}
