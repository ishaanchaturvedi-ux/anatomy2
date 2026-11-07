/**
 * exerciseService — wraps calls to the Java backend API.
 * Falls back to local data if the backend is unavailable (graceful degradation).
 */

import { EXERCISES, MALE_EXERCISES, FEMALE_EXERCISES } from '../data/exercises';
import { Exercise, ExerciseFilterState } from '../types/exercise';
import { ModelGender } from '../types/anatomy';
import { apiClient } from './apiClient';

// ─── Type from backend DTO ───────────────────────────────────────────────────
export interface ExerciseDTO {
  id: string;
  name: string;
  description: string;
  category?: string;
  trainingType?: string;
  equipment?: string;
  difficulty?: string;
  movementPattern?: string;
  recommendedSets?: string;
  recommendedReps?: string;
  instructions?: string[];
  commonMistakes?: string[];
  trainingRegionIds?: string[];
  muscleGroupIds?: string[];
  primaryMuscles?: { muscleId: string; emphasis: string; level: string }[];
  secondaryMuscles?: { muscleId: string; emphasis: string; level: string }[];
  stabilizerMuscles?: { muscleId: string; emphasis: string; level: string }[];
}

// ─── Converter: DTO → Exercise (local type) ──────────────────────────────────
function dtoToExercise(dto: ExerciseDTO): Exercise {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description ?? '',
    category: (dto.category as Exercise['category']) ?? undefined,
    trainingType: dto.trainingType ?? '',
    equipment: dto.equipment ?? '',
    difficulty: (dto.difficulty as Exercise['difficulty']) ?? 'Beginner',
    movementPattern: dto.movementPattern ?? '',
    recommendedSets: dto.recommendedSets ?? '',
    recommendedReps: dto.recommendedReps ?? '',
    instructions: dto.instructions ?? [],
    commonMistakes: dto.commonMistakes ?? [],
    trainingRegionIds: dto.trainingRegionIds ?? [],
    muscleGroupIds: (dto.muscleGroupIds ?? []) as Exercise['muscleGroupIds'],
    primaryMuscles: (dto.primaryMuscles ?? []) as Exercise['primaryMuscles'],
    secondaryMuscles: (dto.secondaryMuscles ?? []) as Exercise['secondaryMuscles'],
    stabilizerMuscles: (dto.stabilizerMuscles ?? []) as Exercise['stabilizerMuscles'],
  };
}

export const exerciseService = {
  /** Get all exercises (with optional gender filtering done client-side) */
  async getAllExercises(gender: ModelGender = 'male'): Promise<Exercise[]> {
    try {
      const dtos = await apiClient.get<ExerciseDTO[]>('/exercises');
      return dtos.map(dtoToExercise);
    } catch {
      // Fallback to local data
      return gender === 'female' ? FEMALE_EXERCISES : MALE_EXERCISES;
    }
  },

  /** Get single exercise by ID */
  async getExerciseById(id: string): Promise<Exercise | undefined> {
    try {
      const dto = await apiClient.get<ExerciseDTO>(`/exercises/${id}`);
      return dtoToExercise(dto);
    } catch {
      return EXERCISES.find((e) => e.id === id);
    }
  },

  /** Get exercises that target a specific muscle */
  async getExercisesByMuscle(muscleId: string): Promise<Exercise[]> {
    try {
      const dtos = await apiClient.get<ExerciseDTO[]>(`/exercises/muscle/${muscleId}`);
      return dtos.map(dtoToExercise);
    } catch {
      return EXERCISES.filter(
        (e) =>
          e.primaryMuscles?.some((m) => m.muscleId === muscleId) ||
          e.secondaryMuscles?.some((m) => m.muscleId === muscleId) ||
          e.stabilizerMuscles?.some((m) => m.muscleId === muscleId)
      );
    }
  },

  /** Filter exercises via backend, fallback to local filtering */
  async filterExercises(
    filters: Partial<ExerciseFilterState>,
    gender: ModelGender = 'male'
  ): Promise<Exercise[]> {
    try {
      const params: Record<string, string> = {};
      if (filters.search && filters.search.trim()) params.search = filters.search.trim();
      if (filters.muscleGroupId && filters.muscleGroupId !== 'all') params.category = filters.muscleGroupId;
      if (filters.equipment && filters.equipment !== 'all') params.equipment = filters.equipment;
      if (filters.difficulty && filters.difficulty !== 'all') params.difficulty = filters.difficulty;
      if (filters.muscleId && filters.muscleId !== 'all') params.muscleId = filters.muscleId;

      const dtos = await apiClient.get<ExerciseDTO[]>('/exercises', { params });
      return dtos.map(dtoToExercise);
    } catch {
      // Graceful degradation — use local filtering
      const dataset = gender === 'female' ? FEMALE_EXERCISES : MALE_EXERCISES;
      return dataset.filter((ex) => {
        if (filters.search?.trim()) {
          const q = filters.search.toLowerCase();
          if (!ex.name.toLowerCase().includes(q) && !ex.description.toLowerCase().includes(q)) return false;
        }
        if (filters.muscleGroupId && filters.muscleGroupId !== 'all') {
          if (!ex.muscleGroupIds.includes(filters.muscleGroupId as never)) return false;
        }
        if (filters.trainingRegionId && filters.trainingRegionId !== 'all') {
          if (!ex.trainingRegionIds.includes(filters.trainingRegionId)) return false;
        }
        if (filters.muscleId && filters.muscleId !== 'all') {
          const any =
            ex.primaryMuscles?.some((m) => m.muscleId === filters.muscleId) ||
            ex.secondaryMuscles?.some((m) => m.muscleId === filters.muscleId) ||
            ex.stabilizerMuscles?.some((m) => m.muscleId === filters.muscleId);
          if (!any) return false;
        }
        if (filters.difficulty && filters.difficulty !== 'all') {
          if (ex.difficulty !== filters.difficulty) return false;
        }
        if (filters.equipment && filters.equipment !== 'all') {
          if (ex.equipment !== filters.equipment) return false;
        }
        if (filters.movementPattern && filters.movementPattern !== 'all') {
          if (ex.movementPattern !== filters.movementPattern) return false;
        }
        return true;
      });
    }
  },
};
