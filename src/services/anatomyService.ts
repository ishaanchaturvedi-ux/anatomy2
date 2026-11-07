import { MUSCLE_GROUPS, TRAINING_REGIONS } from '../data/muscleGroups';
import { ANATOMICAL_MUSCLES } from '../data/muscles';
import { MuscleGroup, TrainingRegion, AnatomicalMuscle, TopMuscleGroupId } from '../types/anatomy';
import { validateAnatomyData, DataValidationReport } from './anatomyValidation';

export const anatomyService = {
  async getMuscleGroups(): Promise<MuscleGroup[]> {
    return MUSCLE_GROUPS;
  },

  async getMuscleGroupById(groupId: TopMuscleGroupId): Promise<MuscleGroup | undefined> {
    return MUSCLE_GROUPS.find((g) => g.id === groupId);
  },

  async getTrainingRegionsByGroupId(groupId: TopMuscleGroupId): Promise<TrainingRegion[]> {
    return TRAINING_REGIONS.filter((r) => r.groupId === groupId);
  },

  async getTrainingRegionById(regionId: string): Promise<TrainingRegion | undefined> {
    return TRAINING_REGIONS.find((r) => r.id === regionId);
  },

  async getAnatomicalMusclesByRegionId(regionId: string): Promise<AnatomicalMuscle[]> {
    return ANATOMICAL_MUSCLES.filter((m) => m.trainingRegionIds.includes(regionId));
  },

  async getAnatomicalMuscleById(muscleId: string): Promise<AnatomicalMuscle | undefined> {
    return ANATOMICAL_MUSCLES.find((m) => m.id === muscleId);
  },

  async getAllAnatomicalMuscles(): Promise<AnatomicalMuscle[]> {
    return ANATOMICAL_MUSCLES;
  },

  validateData(): DataValidationReport {
    return validateAnatomyData();
  },
};
