import { create } from 'zustand';
import { ModelGender, TopMuscleGroupId, AnatomyLayer, ThemeMode } from '../types/anatomy';
import { ExerciseFilterState } from '../types/exercise';
import { AssetClassification } from '../engine/anatomy/AnatomyAssetValidator';
import { MUSCLE_CAMERA_TARGETS } from '../config/anatomyConfig';

export type BilateralMode = 'left' | 'both' | 'right';

interface AnatomyStoreState {
  // Theme state
  theme: ThemeMode;

  // Model & Asset settings
  selectedModel: ModelGender;
  isGlbModelLoaded: boolean;
  isFallbackActive: boolean;
  assetType: AssetClassification;
  assetValidated: boolean;
  missingMuscles: string[];

  // Anatomy Selection hierarchy (Region -> Group -> Muscle)
  selectedGroupId: TopMuscleGroupId | null;
  selectedRegionId: string | null;
  selectedMuscleId: string | null;
  hoveredMeshId: string | null;
  hoveredMuscleName: string | null;

  // Exercise highlight
  selectedExerciseId: string | null;

  // 3D Controls
  viewMode: 'front' | 'back' | 'left' | 'right';
  isRotating: boolean;
  cameraZoom: number;

  // Layer & bilateral controls
  activeLayer: AnatomyLayer;
  showMuscles: boolean;
  showSkeleton: boolean;
  bilateralMode: BilateralMode;

  // Exercise Filters
  exerciseFilters: ExerciseFilterState;

  // Actions
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setSelectedModel: (gender: ModelGender) => void;
  selectGroup: (groupId: TopMuscleGroupId | null) => void;
  selectRegion: (regionId: string | null) => void;
  selectMuscle: (muscleId: string | null) => void;
  clearSelection: () => void;
  setHoveredMesh: (meshId: string | null, muscleName?: string | null) => void;
  setHoveredMuscle: (name: string | null) => void;
  setViewMode: (mode: 'front' | 'back' | 'left' | 'right') => void;
  toggleRotate: () => void;
  setZoom: (zoom: number) => void;
  resetView: () => void;
  setGlbStatus: (loaded: boolean, fallback: boolean) => void;
  setAssetStatus: (status: {
    loaded: boolean;
    fallback: boolean;
    assetType: AssetClassification;
    validated: boolean;
    missingMuscles?: string[];
  }) => void;
  setLayer: (layer: AnatomyLayer) => void;
  setActiveLayer: (layer: AnatomyLayer) => void;
  setShowMuscles: (show: boolean) => void;
  setShowSkeleton: (show: boolean) => void;
  toggleMuscles: () => void;
  toggleSkeleton: () => void;
  setBilateralMode: (mode: BilateralMode) => void;
  selectExercise: (exerciseId: string | null) => void;

  // Filter actions
  setExerciseFilter: (key: keyof ExerciseFilterState, value: string) => void;
  resetFilters: () => void;
}

const initialFilters: ExerciseFilterState = {
  search: '',
  muscleGroupId: 'all',
  trainingRegionId: 'all',
  muscleId: 'all',
  trainingType: 'all',
  difficulty: 'all',
  equipment: 'all',
  movementPattern: 'all',
};

const getInitialModel = (): ModelGender => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('anatomyfit_model_gender');
    if (saved === 'female' || saved === 'male') return saved;
  }
  return 'male';
};

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('anatomyfit_theme');
    if (saved === 'light' || saved === 'dark') return saved;
  }
  return 'dark';
};

export const useAnatomyStore = create<AnatomyStoreState>((set) => ({
  theme: getInitialTheme(),
  selectedModel: getInitialModel(),
  isGlbModelLoaded: false,
  isFallbackActive: true,
  assetType: 'base-body',
  assetValidated: false,
  missingMuscles: [],

  selectedGroupId: 'chest',
  selectedRegionId: 'mid-chest',
  selectedMuscleId: 'pectoralis-major',
  hoveredMeshId: null,
  hoveredMuscleName: null,
  selectedExerciseId: null,

  viewMode: 'front',
  isRotating: false,
  cameraZoom: 1.0,

  activeLayer: 'muscles',
  showMuscles: true,
  showSkeleton: false,
  bilateralMode: 'both',

  exerciseFilters: initialFilters,

  setTheme: (theme) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('anatomyfit_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
    set({ theme });
  },

  toggleTheme: () =>
    set((state) => {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('anatomyfit_theme', next);
        if (next === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      }
      return { theme: next };
    }),

  setSelectedModel: (gender) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('anatomyfit_model_gender', gender);
    }
    set({ selectedModel: gender });
  },

  selectGroup: (groupId) => {
    let nextView: 'front' | 'back' | 'left' | 'right' | undefined;
    if (groupId === 'back') nextView = 'back';
    else if (groupId === 'chest' || groupId === 'core') nextView = 'front';

    set((state) => ({
      selectedGroupId: groupId,
      selectedRegionId: null,
      selectedMuscleId: null,
      selectedExerciseId: null,
      ...(nextView ? { viewMode: nextView } : {}),
    }));
  },

  selectRegion: (regionId) =>
    set({
      selectedRegionId: regionId,
      selectedMuscleId: null,
    }),

  selectMuscle: (muscleId) => {
    const preferredView = muscleId ? MUSCLE_CAMERA_TARGETS[muscleId]?.preferredView : undefined;
    set((state) => ({
      selectedMuscleId: muscleId,
      ...(preferredView ? { viewMode: preferredView } : {}),
    }));
  },

  clearSelection: () =>
    set({
      selectedGroupId: null,
      selectedRegionId: null,
      selectedMuscleId: null,
      selectedExerciseId: null,
    }),

  setHoveredMesh: (meshId, muscleName = null) =>
    set({ hoveredMeshId: meshId, hoveredMuscleName: muscleName }),

  setHoveredMuscle: (name) => set({ hoveredMuscleName: name }),

  setViewMode: (mode) => set({ viewMode: mode }),

  toggleRotate: () => set((state) => ({ isRotating: !state.isRotating })),

  setZoom: (zoom) => set({ cameraZoom: zoom }),

  resetView: () =>
    set({
      selectedGroupId: null,
      selectedRegionId: null,
      selectedMuscleId: null,
      selectedExerciseId: null,
      viewMode: 'front',
      isRotating: false,
      cameraZoom: 1.0,
      bilateralMode: 'both',
      activeLayer: 'muscles',
      showMuscles: true,
      showSkeleton: false,
    }),

  setGlbStatus: (loaded, fallback) =>
    set({
      isGlbModelLoaded: loaded,
      isFallbackActive: fallback,
      assetType: loaded ? 'base-body' : 'missing',
    }),

  setAssetStatus: ({ loaded, fallback, assetType, validated, missingMuscles = [] }) =>
    set({
      isGlbModelLoaded: loaded,
      isFallbackActive: fallback,
      assetType,
      assetValidated: validated,
      missingMuscles,
    }),

  setLayer: (layer) => {
    if (layer === 'skeleton') {
      set({ activeLayer: layer, showMuscles: false, showSkeleton: true });
    } else if (layer === 'muscles' || layer === 'deep') {
      set({ activeLayer: layer, showMuscles: true, showSkeleton: false });
    } else if (layer === 'both') {
      set({ activeLayer: layer, showMuscles: true, showSkeleton: true });
    }
  },

  setActiveLayer: (layer) => {
    if (layer === 'skeleton') {
      set({ activeLayer: layer, showMuscles: false, showSkeleton: true });
    } else if (layer === 'muscles' || layer === 'deep') {
      set({ activeLayer: layer, showMuscles: true, showSkeleton: false });
    } else if (layer === 'both') {
      set({ activeLayer: layer, showMuscles: true, showSkeleton: true });
    }
  },

  setShowMuscles: (show) => set({ showMuscles: show }),
  setShowSkeleton: (show) => set({ showSkeleton: show }),

  toggleMuscles: () => set((state) => ({ showMuscles: !state.showMuscles })),
  toggleSkeleton: () => set((state) => ({ showSkeleton: !state.showSkeleton })),

  setBilateralMode: (mode) => set({ bilateralMode: mode }),

  selectExercise: (exerciseId) => set({ selectedExerciseId: exerciseId }),

  setExerciseFilter: (key, value) =>
    set((state) => ({
      exerciseFilters: {
        ...state.exerciseFilters,
        [key]: value,
      },
    })),

  resetFilters: () => set({ exerciseFilters: initialFilters }),
}));
