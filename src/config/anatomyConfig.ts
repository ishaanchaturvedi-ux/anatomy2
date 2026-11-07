import { ModelGender, TopMuscleGroupId, CameraTargetConfig, AnatomyLayer, ThemeMode } from '../types/anatomy';

export interface ModelAssetPath {
  gender: ModelGender;
  glbPath: string;
  fallbackAvailable: boolean;
  modelScale: [number, number, number];
  modelPosition: [number, number, number];
}

export const MODEL_CONFIG: Record<ModelGender, ModelAssetPath> = {
  male: {
    gender: 'male',
    glbPath: '/models/male-anatomy.glb',
    fallbackAvailable: true,
    modelScale: [1.1, 1.1, 1.1],
    modelPosition: [0, -0.6, 0],
  },
  female: {
    gender: 'female',
    glbPath: '/models/female-anatomy.glb',
    fallbackAvailable: true,
    modelScale: [1.05, 1.05, 1.05],
    modelPosition: [0, -0.6, 0],
  },
};

/**
 * Default Full-Body Framing:
 * Positioned to comfortably fit Head (y=1.65) to Feet (y=-0.75) with visual padding.
 */
export const DEFAULT_CAMERA_CONFIG: CameraTargetConfig = {
  position: [0, 0.50, 3.85],
  target: [0, 0.48, 0],
  zoom: 1.0,
};

export const ANATOMY_LAYERS: { id: AnatomyLayer; label: string; description: string }[] = [
  { id: 'muscles', label: 'Superficial Muscles', description: 'Primary skeletal muscles for movement and posture' },
  { id: 'deep', label: 'Deep Muscle Layer', description: 'Stabilizer and deep postural muscle structures' },
  { id: 'skeleton', label: 'Skeletal Structure', description: 'Bones and skeletal framework' },
  { id: 'both', label: 'Muscles & Skeleton', description: 'Overlaid muscular and skeletal anatomy' },
];

/**
 * 3D Theme Configurations for Dark and Light Modes
 */
export const THEME_3D_CONFIG: Record<ThemeMode, {
  background: string;
  gridColor: string;
  ambientLight: { color: string; intensity: number };
  keyLight: { color: string; intensity: number };
  fillLight: { color: string; intensity: number };
  rimLight: { color: string; intensity: number };
  boneColor: string;
  baseBodyColor: string;
}> = {
  dark: {
    background: '#05070d',
    gridColor: 'rgba(255, 255, 255, 0.05)',
    ambientLight: { color: '#B0C4DE', intensity: 0.65 },
    keyLight: { color: '#FFF2E0', intensity: 1.6 },
    fillLight: { color: '#C8D8E8', intensity: 0.85 },
    rimLight: { color: '#70B0E0', intensity: 1.2 },
    boneColor: '#E8E2D2',
    baseBodyColor: '#C5947C',
  },
  light: {
    background: '#F8FAFC',
    gridColor: 'rgba(0, 0, 0, 0.06)',
    ambientLight: { color: '#FFFFFF', intensity: 0.95 },
    keyLight: { color: '#FFFDF5', intensity: 1.45 },
    fillLight: { color: '#E2E8F0', intensity: 0.80 },
    rimLight: { color: '#0284C7', intensity: 0.90 },
    boneColor: '#DFD8C7',
    baseBodyColor: '#D8A58D',
  },
};

/**
 * Natural Skin & Highlight Color Palette (Section 27-31)
 * Default: Natural human skin tone with subtle subsurface warmth and matte finish.
 * Selected: Vivid high-contrast Cyan accent with clean emissive glow.
 */
export const MUSCLE_HIGHLIGHT_COLORS = {
  default:   { color: '#C5947C', emissive: '#000000', intensity: 0.0, roughness: 0.72 },
  groupFocus:{ color: '#D4A389', emissive: '#261208', intensity: 0.15, roughness: 0.62 },
  hover:     { color: '#E0B298', emissive: '#3A1E10', intensity: 0.25, roughness: 0.52 },
  selected:  { color: '#00E5FF', emissive: '#004857', intensity: 0.75, roughness: 0.28 },
  primary:   { color: '#00E5FF', emissive: '#004857', intensity: 0.75, roughness: 0.28 },
  secondary: { color: '#A78BFA', emissive: '#301B64', intensity: 0.55, roughness: 0.38 },
  stabilizer:{ color: '#FCD34D', emissive: '#4C3400', intensity: 0.45, roughness: 0.42 },
  inactive:  { color: '#8A6250', emissive: '#000000', intensity: 0.0, roughness: 0.88 },
};

/**
 * Exercise muscle activation emphasis palette.
 */
export const EMPHASIS_COLORS = {
  primary:    { color: '#00E5FF', emissive: '#004857', intensity: 0.75 },
  secondary:  { color: '#A78BFA', emissive: '#301B64', intensity: 0.55 },
  stabilizer: { color: '#FCD34D', emissive: '#4C3400', intensity: 0.45 },
};

/**
 * Individual Muscle Dynamic Camera Focal Points
 * Maps individual muscle IDs to exact center and optimal framing distance.
 */
export const MUSCLE_CAMERA_TARGETS: Record<
  string,
  { target: [number, number, number]; distance: number; preferredView?: 'front' | 'back' | 'left' | 'right' }
> = {
  // Chest
  'pectoralis-major':    { target: [0, 1.24, 0.08], distance: 1.65, preferredView: 'front' },
  'pectoralis-minor':    { target: [0, 1.28, 0.06], distance: 1.45, preferredView: 'front' },
  'serratus-anterior':   { target: [0, 1.11, 0.05], distance: 1.55, preferredView: 'front' },

  // Shoulders
  'anterior-deltoid':    { target: [0, 1.32, 0.06], distance: 1.50, preferredView: 'front' },
  'lateral-deltoid':     { target: [0, 1.32, 0.00], distance: 1.55, preferredView: 'front' },
  'posterior-deltoid':   { target: [0, 1.30, -0.08], distance: 1.50, preferredView: 'back' },

  // Arms
  'biceps-brachii':      { target: [0.36, 1.04, 0.05], distance: 1.40, preferredView: 'front' },
  'triceps-brachii':     { target: [0.36, 1.04, -0.06], distance: 1.45, preferredView: 'back' },
  'brachialis':          { target: [0.37, 0.96, 0.02], distance: 1.35, preferredView: 'front' },
  'brachioradialis':     { target: [0.38, 0.65, 0.03], distance: 1.45, preferredView: 'front' },

  // Back
  'latissimus-dorsi':     { target: [0, 1.01, -0.07], distance: 1.80, preferredView: 'back' },
  'trapezius':           { target: [0, 1.28, -0.07], distance: 1.60, preferredView: 'back' },
  'rhomboid-major':      { target: [0, 1.18, -0.07], distance: 1.50, preferredView: 'back' },
  'rhomboid-minor':      { target: [0, 1.29, -0.07], distance: 1.40, preferredView: 'back' },
  'teres-major':         { target: [0, 1.16, -0.07], distance: 1.45, preferredView: 'back' },
  'teres-minor':         { target: [0, 1.24, -0.08], distance: 1.40, preferredView: 'back' },
  'erector-spinae':      { target: [0, 0.88, -0.07], distance: 1.70, preferredView: 'back' },

  // Core
  'rectus-abdominis':    { target: [0, 0.96, 0.08], distance: 1.50, preferredView: 'front' },
  'external-oblique':    { target: [0, 0.95, 0.03], distance: 1.55, preferredView: 'front' },
  'internal-oblique':    { target: [0, 0.90, 0.02], distance: 1.50, preferredView: 'front' },
  'transversus-abdominis':{ target: [0, 0.92, 0.04], distance: 1.50, preferredView: 'front' },
  'multifidus':          { target: [0, 0.88, -0.06], distance: 1.55, preferredView: 'back' },
  'quadratus-lumborum':  { target: [0, 0.82, -0.05], distance: 1.50, preferredView: 'back' },

  // Hips & Glutes
  'gluteus-maximus':     { target: [0, 0.49, -0.10], distance: 1.65, preferredView: 'back' },
  'gluteus-medius':      { target: [0, 0.56, -0.06], distance: 1.55, preferredView: 'back' },
  'gluteus-minimus':     { target: [0, 0.54, -0.05], distance: 1.50, preferredView: 'back' },
  'tensor-fasciae-latae':{ target: [0, 0.46, 0.05], distance: 1.55, preferredView: 'front' },
  'adductor-longus':     { target: [0, 0.22, 0.03], distance: 1.65, preferredView: 'front' },

  // Legs
  'rectus-femoris':      { target: [0, 0.04, 0.07], distance: 1.80, preferredView: 'front' },
  'vastus-lateralis':    { target: [0, 0.04, 0.02], distance: 1.80, preferredView: 'front' },
  'vastus-medialis':     { target: [0, -0.13, 0.07], distance: 1.55, preferredView: 'front' },
  'vastus-intermedius':  { target: [0, 0.02, 0.04], distance: 1.75, preferredView: 'front' },
  'biceps-femoris':      { target: [0, 0.04, -0.07], distance: 1.80, preferredView: 'back' },
  'semitendinosus':      { target: [0, 0.02, -0.07], distance: 1.75, preferredView: 'back' },
  'semimembranosus':     { target: [0, -0.02, -0.06], distance: 1.70, preferredView: 'back' },
  'gastrocnemius':       { target: [0, -0.55, -0.04], distance: 1.50, preferredView: 'back' },
  'soleus':              { target: [0, -0.62, -0.02], distance: 1.45, preferredView: 'back' },
  'tibialis-anterior':   { target: [0, -0.51, 0.05], distance: 1.45, preferredView: 'front' },
};

/**
 * Comprehensive Mesh to Muscle Mapping.
 */
export const MESH_TO_MUSCLE_MAP: Record<
  string,
  { muscleId: string; regionId: string; groupId: TopMuscleGroupId }
> = {
  // ── CHEST ─────────────────────────────────────────────────────────
  PectoralisMajor_L:  { muscleId: 'pectoralis-major',   regionId: 'mid-chest',     groupId: 'chest' },
  PectoralisMajor_R:  { muscleId: 'pectoralis-major',   regionId: 'mid-chest',     groupId: 'chest' },
  PectoralisMinor_L:  { muscleId: 'pectoralis-minor',   regionId: 'upper-chest',   groupId: 'chest' },
  PectoralisMinor_R:  { muscleId: 'pectoralis-minor',   regionId: 'upper-chest',   groupId: 'chest' },
  SerratusAnterior_L: { muscleId: 'serratus-anterior',  regionId: 'lower-chest',   groupId: 'chest' },
  SerratusAnterior_R: { muscleId: 'serratus-anterior',  regionId: 'lower-chest',   groupId: 'chest' },

  // ── SHOULDERS ─────────────────────────────────────────────────────
  AntDeltoid_L:       { muscleId: 'anterior-deltoid',   regionId: 'front-delts',   groupId: 'shoulders' },
  AntDeltoid_R:       { muscleId: 'anterior-deltoid',   regionId: 'front-delts',   groupId: 'shoulders' },
  LatDeltoid_L:       { muscleId: 'lateral-deltoid',    regionId: 'side-delts',    groupId: 'shoulders' },
  LatDeltoid_R:       { muscleId: 'lateral-deltoid',    regionId: 'side-delts',    groupId: 'shoulders' },
  PostDeltoid_L:      { muscleId: 'posterior-deltoid',  regionId: 'rear-delts',    groupId: 'shoulders' },
  PostDeltoid_R:      { muscleId: 'posterior-deltoid',  regionId: 'rear-delts',    groupId: 'shoulders' },

  // ── ARMS ──────────────────────────────────────────────────────────
  BicepsBrachii_L:    { muscleId: 'biceps-brachii',       regionId: 'biceps-long-head',     groupId: 'arms' },
  BicepsBrachii_R:    { muscleId: 'biceps-brachii',       regionId: 'biceps-long-head',     groupId: 'arms' },
  Brachialis_L:       { muscleId: 'brachialis',           regionId: 'brachialis',           groupId: 'arms' },
  Brachialis_R:       { muscleId: 'brachialis',           regionId: 'brachialis',           groupId: 'arms' },
  Brachioradialis_L:  { muscleId: 'brachioradialis',      regionId: 'brachioradialis',      groupId: 'arms' },
  Brachioradialis_R:  { muscleId: 'brachioradialis',      regionId: 'brachioradialis',      groupId: 'arms' },
  TricepsBrachii_L:   { muscleId: 'triceps-brachii',      regionId: 'triceps-long-head',    groupId: 'arms' },
  TricepsBrachii_R:   { muscleId: 'triceps-brachii',      regionId: 'triceps-long-head',    groupId: 'arms' },

  // ── BACK ──────────────────────────────────────────────────────────
  LatissimusDorsi_L:  { muscleId: 'latissimus-dorsi',  regionId: 'lats-outer-back',       groupId: 'back' },
  LatissimusDorsi_R:  { muscleId: 'latissimus-dorsi',  regionId: 'lats-outer-back',       groupId: 'back' },
  Trapezius_L:        { muscleId: 'trapezius',         regionId: 'upper-traps',           groupId: 'back' },
  Trapezius_R:        { muscleId: 'trapezius',         regionId: 'upper-traps',           groupId: 'back' },
  Trapezius_M:        { muscleId: 'trapezius',         regionId: 'mid-traps',             groupId: 'back' },
  TrapeziusUpper_L:   { muscleId: 'trapezius',         regionId: 'upper-traps',           groupId: 'back' },
  TrapeziusUpper_R:   { muscleId: 'trapezius',         regionId: 'upper-traps',           groupId: 'back' },
  TrapeziumsMid_L:    { muscleId: 'trapezius',         regionId: 'mid-traps',             groupId: 'back' },
  TrapeziumsMid_R:    { muscleId: 'trapezius',         regionId: 'mid-traps',             groupId: 'back' },
  TrapeziusLower_L:   { muscleId: 'trapezius',         regionId: 'lower-traps',           groupId: 'back' },
  TrapeziusLower_R:   { muscleId: 'trapezius',         regionId: 'lower-traps',           groupId: 'back' },
  RhomboidMajor_L:    { muscleId: 'rhomboid-major',    regionId: 'rhomboids-mid-back',    groupId: 'back' },
  RhomboidMajor_R:    { muscleId: 'rhomboid-major',    regionId: 'rhomboids-mid-back',    groupId: 'back' },
  RhomboidMinor_L:    { muscleId: 'rhomboid-minor',    regionId: 'rhomboids-mid-back',    groupId: 'back' },
  RhomboidMinor_R:    { muscleId: 'rhomboid-minor',    regionId: 'rhomboids-mid-back',    groupId: 'back' },
  TeresMajor_L:       { muscleId: 'teres-major',       regionId: 'teres-region',          groupId: 'back' },
  TeresMajor_R:       { muscleId: 'teres-major',       regionId: 'teres-region',          groupId: 'back' },
  TeresMinor_L:       { muscleId: 'teres-minor',       regionId: 'teres-region',          groupId: 'back' },
  TeresMinor_R:       { muscleId: 'teres-minor',       regionId: 'teres-region',          groupId: 'back' },
  ErectorSpinae_L:    { muscleId: 'erector-spinae',    regionId: 'lower-back',            groupId: 'back' },
  ErectorSpinae_R:    { muscleId: 'erector-spinae',    regionId: 'lower-back',            groupId: 'back' },

  // ── CORE (COMPREHENSIVE) ───────────────────────────────────────────
  RectusAbdominis_M:       { muscleId: 'rectus-abdominis',       regionId: 'upper-abs',          groupId: 'core' },
  ExternalOblique_L:       { muscleId: 'external-oblique',       regionId: 'obliques',           groupId: 'core' },
  ExternalOblique_R:       { muscleId: 'external-oblique',       regionId: 'obliques',           groupId: 'core' },
  InternalOblique_L:       { muscleId: 'internal-oblique',       regionId: 'obliques',           groupId: 'core' },
  InternalOblique_R:       { muscleId: 'internal-oblique',       regionId: 'obliques',           groupId: 'core' },
  TransversusAbdominis_M:  { muscleId: 'transversus-abdominis',  regionId: 'deep-core',          groupId: 'core' },
  TransversusAbdominis_L:  { muscleId: 'transversus-abdominis',  regionId: 'deep-core',          groupId: 'core' },
  TransversusAbdominis_R:  { muscleId: 'transversus-abdominis',  regionId: 'deep-core',          groupId: 'core' },
  Multifidus_L:            { muscleId: 'multifidus',             regionId: 'spinal-stabilizers', groupId: 'core' },
  Multifidus_R:            { muscleId: 'multifidus',             regionId: 'spinal-stabilizers', groupId: 'core' },
  QuadratusLumborum_L:     { muscleId: 'quadratus-lumborum',     regionId: 'posterior-core',     groupId: 'core' },
  QuadratusLumborum_R:     { muscleId: 'quadratus-lumborum',     regionId: 'posterior-core',     groupId: 'core' },

  // ── HIPS & GLUTES ─────────────────────────────────────────────────
  GluteusMaximus_L:     { muscleId: 'gluteus-maximus',      regionId: 'glute-max',      groupId: 'hips-glutes' },
  GluteusMaximus_R:     { muscleId: 'gluteus-maximus',      regionId: 'glute-max',      groupId: 'hips-glutes' },
  GluteusMedius_L:      { muscleId: 'gluteus-medius',       regionId: 'glute-med',      groupId: 'hips-glutes' },
  GluteusMedius_R:      { muscleId: 'gluteus-medius',       regionId: 'glute-med',      groupId: 'hips-glutes' },
  GluteusMinimus_L:     { muscleId: 'gluteus-minimus',      regionId: 'glute-min',      groupId: 'hips-glutes' },
  GluteusMinimus_R:     { muscleId: 'gluteus-minimus',      regionId: 'glute-min',      groupId: 'hips-glutes' },
  TensorFasciaeLatae_L: { muscleId: 'tensor-fasciae-latae',  regionId: 'hip-abductors',  groupId: 'hips-glutes' },
  TensorFasciaeLatae_R: { muscleId: 'tensor-fasciae-latae',  regionId: 'hip-abductors',  groupId: 'hips-glutes' },
  AdductorLongus_L:     { muscleId: 'adductor-longus',      regionId: 'hip-adductors',  groupId: 'hips-glutes' },
  AdductorLongus_R:     { muscleId: 'adductor-longus',      regionId: 'hip-adductors',  groupId: 'hips-glutes' },

  // ── LEGS ──────────────────────────────────────────────────────────
  RectusFemoris_L:    { muscleId: 'rectus-femoris',    regionId: 'quads-rectus-femoris',    groupId: 'legs' },
  RectusFemoris_R:    { muscleId: 'rectus-femoris',    regionId: 'quads-rectus-femoris',    groupId: 'legs' },
  VastusLateralis_L:  { muscleId: 'vastus-lateralis',  regionId: 'quads-vastus-lateralis',  groupId: 'legs' },
  VastusLateralis_R:  { muscleId: 'vastus-lateralis',  regionId: 'quads-vastus-lateralis',  groupId: 'legs' },
  VastusMedialis_L:   { muscleId: 'vastus-medialis',   regionId: 'quads-vastus-medialis',   groupId: 'legs' },
  VastusMedialis_R:   { muscleId: 'vastus-medialis',   regionId: 'quads-vastus-medialis',   groupId: 'legs' },
  VastusIntermedius_L:{ muscleId: 'vastus-intermedius',regionId: 'quads-vastus-intermedius',groupId: 'legs' },
  VastusIntermedius_R:{ muscleId: 'vastus-intermedius',regionId: 'quads-vastus-intermedius',groupId: 'legs' },
  BicepsFemoris_L:    { muscleId: 'biceps-femoris',    regionId: 'hamstrings-biceps-femoris', groupId: 'legs' },
  BicepsFemoris_R:    { muscleId: 'biceps-femoris',    regionId: 'hamstrings-biceps-femoris', groupId: 'legs' },
  Semitendinosus_L:   { muscleId: 'semitendinosus',   regionId: 'hamstrings-semitendinosus', groupId: 'legs' },
  Semitendinosus_R:   { muscleId: 'semitendinosus',   regionId: 'hamstrings-semitendinosus', groupId: 'legs' },
  Semimembranosus_L:  { muscleId: 'semimembranosus',  regionId: 'hamstrings-semimembranosus', groupId: 'legs' },
  Semimembranosus_R:  { muscleId: 'semimembranosus',  regionId: 'hamstrings-semimembranosus', groupId: 'legs' },
  Gastrocnemius_L:    { muscleId: 'gastrocnemius',     regionId: 'calves-gastrocnemius',     groupId: 'legs' },
  Gastrocnemius_R:    { muscleId: 'gastrocnemius',     regionId: 'calves-gastrocnemius',     groupId: 'legs' },
  Soleus_L:           { muscleId: 'soleus',             regionId: 'calves-soleus',            groupId: 'legs' },
  Soleus_R:           { muscleId: 'soleus',             regionId: 'calves-soleus',            groupId: 'legs' },
  TibialisAnterior_L: { muscleId: 'tibialis-anterior', regionId: 'calves-soleus',            groupId: 'legs' },
  TibialisAnterior_R: { muscleId: 'tibialis-anterior', regionId: 'calves-soleus',            groupId: 'legs' },

  // ── LEGACY NAMES (backward compatibility) ─────────────────────────
  mesh_pectoralis_major:    { muscleId: 'pectoralis-major',        regionId: 'mid-chest',             groupId: 'chest' },
  mesh_chest_left:          { muscleId: 'pectoralis-major',        regionId: 'mid-chest',             groupId: 'chest' },
  mesh_chest_right:         { muscleId: 'pectoralis-major',        regionId: 'mid-chest',             groupId: 'chest' },
  mesh_pectoralis_minor:    { muscleId: 'pectoralis-minor',        regionId: 'upper-chest',           groupId: 'chest' },
  mesh_serratus_anterior:   { muscleId: 'serratus-anterior',       regionId: 'lower-chest',           groupId: 'chest' },
  mesh_latissimus_dorsi:    { muscleId: 'latissimus-dorsi',        regionId: 'lats-outer-back',       groupId: 'back' },
  mesh_lats_left:           { muscleId: 'latissimus-dorsi',        regionId: 'lats-outer-back',       groupId: 'back' },
  mesh_lats_right:          { muscleId: 'latissimus-dorsi',        regionId: 'lats-outer-back',       groupId: 'back' },
  mesh_trapezius_upper:     { muscleId: 'trapezius',               regionId: 'upper-traps',           groupId: 'back' },
  mesh_trapezius_middle:    { muscleId: 'trapezius',               regionId: 'mid-traps',             groupId: 'back' },
  mesh_trapezius_lower:     { muscleId: 'trapezius',               regionId: 'lower-traps',           groupId: 'back' },
  mesh_rhomboid_major:      { muscleId: 'rhomboid-major',          regionId: 'rhomboids-mid-back',    groupId: 'back' },
  mesh_erector_spinae:      { muscleId: 'erector-spinae',          regionId: 'lower-back',            groupId: 'back' },
  mesh_anterior_deltoid:    { muscleId: 'anterior-deltoid',        regionId: 'front-delts',           groupId: 'shoulders' },
  mesh_lateral_deltoid:     { muscleId: 'lateral-deltoid',         regionId: 'side-delts',            groupId: 'shoulders' },
  mesh_posterior_deltoid:   { muscleId: 'posterior-deltoid',       regionId: 'rear-delts',            groupId: 'shoulders' },
  mesh_biceps_long_head:    { muscleId: 'biceps-brachii',          regionId: 'biceps-long-head',      groupId: 'arms' },
  mesh_biceps_short_head:   { muscleId: 'biceps-brachii',          regionId: 'biceps-short-head',     groupId: 'arms' },
  mesh_brachialis:          { muscleId: 'brachialis',              regionId: 'brachialis',            groupId: 'arms' },
  mesh_triceps_long_head:   { muscleId: 'triceps-brachii',         regionId: 'triceps-long-head',     groupId: 'arms' },
  mesh_triceps_lateral_head:{ muscleId: 'triceps-brachii',         regionId: 'triceps-lateral-head',  groupId: 'arms' },
  mesh_rectus_abdominis:    { muscleId: 'rectus-abdominis',        regionId: 'upper-abs',             groupId: 'core' },
  mesh_abs_upper:           { muscleId: 'rectus-abdominis',        regionId: 'upper-abs',             groupId: 'core' },
  mesh_abs_lower:           { muscleId: 'rectus-abdominis',        regionId: 'lower-abs',             groupId: 'core' },
  mesh_external_oblique:    { muscleId: 'external-oblique',        regionId: 'obliques',              groupId: 'core' },
  mesh_gluteus_maximus:     { muscleId: 'gluteus-maximus',         regionId: 'glute-max',             groupId: 'hips-glutes' },
  mesh_gluteus_medius:      { muscleId: 'gluteus-medius',          regionId: 'glute-med',             groupId: 'hips-glutes' },
  mesh_rectus_femoris:      { muscleId: 'rectus-femoris',          regionId: 'quads-rectus-femoris',  groupId: 'legs' },
  mesh_vastus_lateralis:    { muscleId: 'vastus-lateralis',        regionId: 'quads-vastus-lateralis',groupId: 'legs' },
  mesh_vastus_medialis:     { muscleId: 'vastus-medialis',         regionId: 'quads-vastus-medialis', groupId: 'legs' },
  mesh_biceps_femoris:      { muscleId: 'biceps-femoris',          regionId: 'hamstrings-biceps-femoris', groupId: 'legs' },
  mesh_gastrocnemius:       { muscleId: 'gastrocnemius',           regionId: 'calves-gastrocnemius',  groupId: 'legs' },
};
