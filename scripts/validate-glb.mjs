/**
 * ANATOMYFIT — GLB Asset Validator (Node.js)
 * 
 * Parses the GLB binary and extracts ALL mesh/node names from the JSON chunk.
 * Then cross-references against the canonical MESH_TO_MUSCLE_MAP to compute:
 *  - Total meshes in file
 *  - Mapped muscle meshes (hit)
 *  - Missing required meshes
 *  - Asset classification
 *
 * Usage: node scripts/validate-glb.mjs [path-to-glb]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// ── Canonical mesh names expected for muscle-anatomy classification ───────────
const REQUIRED_MUSCLE_MESHES = [
  'PectoralisMajor_L', 'PectoralisMajor_R',
  'BicepsBrachii_L',   'BicepsBrachii_R',
  'LatissimusDorsi_L', 'LatissimusDorsi_R',
  'GluteusMaximus_L',  'GluteusMaximus_R',
  'RectusFemoris_L',   'RectusFemoris_R',
  'Trapezius_L',       'Trapezius_R',
  'ErectorSpinae_L',   'ErectorSpinae_R',
];

// Full MESH_TO_MUSCLE_MAP keys (imported inline to avoid transpiling TS)
const MAPPED_MESH_NAMES = new Set([
  'PectoralisMajor_L','PectoralisMajor_R','PectoralisMinor_L','PectoralisMinor_R',
  'SerratusAnterior_L','SerratusAnterior_R',
  'AntDeltoid_L','AntDeltoid_R','LatDeltoid_L','LatDeltoid_R','PostDeltoid_L','PostDeltoid_R',
  'BicepsBrachii_L','BicepsBrachii_R','Brachialis_L','Brachialis_R',
  'Brachioradialis_L','Brachioradialis_R','TricepsBrachii_L','TricepsBrachii_R',
  'LatissimusDorsi_L','LatissimusDorsi_R',
  'Trapezius_L','Trapezius_R','Trapezius_M',
  'TrapeziusUpper_L','TrapeziusUpper_R','TrapeziumsMid_L','TrapeziumsMid_R',
  'TrapeziusLower_L','TrapeziusLower_R',
  'RhomboidMajor_L','RhomboidMajor_R','RhomboidMinor_L','RhomboidMinor_R',
  'TeresMajor_L','TeresMajor_R','TeresMinor_L','TeresMinor_R',
  'ErectorSpinae_L','ErectorSpinae_R',
  'RectusAbdominis_M','ExternalOblique_L','ExternalOblique_R',
  'GluteusMaximus_L','GluteusMaximus_R','GluteusMedius_L','GluteusMedius_R',
  'RectusFemoris_L','RectusFemoris_R','VastusLateralis_L','VastusLateralis_R',
  'VastusMedialis_L','VastusMedialis_R','VastusIntermedius_L','VastusIntermedius_R',
  'BicepsFemoris_L','BicepsFemoris_R','Semitendinosus_L','Semitendinosus_R',
  'Semimembranosus_L','Semimembranosus_R',
  'Gastrocnemius_L','Gastrocnemius_R','Soleus_L','Soleus_R',
  'TibialisAnterior_L','TibialisAnterior_R',
  // Legacy names
  'mesh_pectoralis_major','mesh_chest_left','mesh_chest_right','mesh_pectoralis_minor',
  'mesh_serratus_anterior','mesh_latissimus_dorsi','mesh_lats_left','mesh_lats_right',
  'mesh_trapezius_upper','mesh_trapezius_middle','mesh_trapezius_lower',
  'mesh_rhomboid_major','mesh_erector_spinae',
  'mesh_anterior_deltoid','mesh_lateral_deltoid','mesh_posterior_deltoid',
  'mesh_biceps_long_head','mesh_biceps_short_head','mesh_brachialis',
  'mesh_triceps_long_head','mesh_triceps_lateral_head',
  'mesh_rectus_abdominis','mesh_abs_upper','mesh_abs_lower','mesh_external_oblique',
  'mesh_gluteus_maximus','mesh_gluteus_medius',
  'mesh_rectus_femoris','mesh_vastus_lateralis','mesh_vastus_medialis',
  'mesh_biceps_femoris','mesh_gastrocnemius',
]);

function parseGlbMeshNames(filePath) {
  const buf = fs.readFileSync(filePath);

  // GLB header: magic(4) + version(4) + length(4) = 12 bytes
  const magic = buf.readUInt32LE(0);
  if (magic !== 0x46546C67) throw new Error('Not a valid GLB file (bad magic)');

  const version = buf.readUInt32LE(4);

  // Chunk 0 is always JSON
  const chunk0Length = buf.readUInt32LE(12);
  const chunk0Type   = buf.readUInt32LE(16); // 0x4E4F534A = "JSON"
  if (chunk0Type !== 0x4E4F534A) throw new Error('First GLB chunk is not JSON');

  const jsonStr = buf.slice(20, 20 + chunk0Length).toString('utf8');
  const gltf = JSON.parse(jsonStr);

  // Collect all named nodes and meshes
  const nodeNames  = (gltf.nodes  || []).map(n => n.name).filter(Boolean);
  const meshNames  = (gltf.meshes || []).map(m => m.name).filter(Boolean);

  // Deduplicate
  const allNames = [...new Set([...nodeNames, ...meshNames])];

  return { gltf, version, allNames, nodeNames, meshNames };
}

function validateGlb(filePath) {
  const absPath = path.isAbsolute(filePath) ? filePath : path.resolve(projectRoot, filePath);
  const fileName = path.basename(absPath);
  const fileSize = (fs.statSync(absPath).size / 1024).toFixed(1);

  console.log('\n' + '═'.repeat(60));
  console.log(`  GLB VALIDATION — ${fileName}`);
  console.log(`  Path : ${absPath}`);
  console.log(`  Size : ${fileSize} KB`);
  console.log('═'.repeat(60));

  let parsed;
  try {
    parsed = parseGlbMeshNames(absPath);
  } catch (err) {
    console.log(`  ✗ PARSE ERROR: ${err.message}`);
    return;
  }

  const { allNames, meshNames, nodeNames, gltf, version } = parsed;

  console.log(`\n  GLB version    : ${version}`);
  console.log(`  Total meshes   : ${gltf.meshes?.length ?? 0}`);
  console.log(`  Total nodes    : ${gltf.nodes?.length ?? 0}`);
  console.log(`  Total materials: ${gltf.materials?.length ?? 0}`);
  console.log(`  Total textures : ${gltf.textures?.length ?? 0}`);

  // Cross-reference
  const hits    = allNames.filter(n => MAPPED_MESH_NAMES.has(n));
  const misses  = allNames.filter(n => !MAPPED_MESH_NAMES.has(n));
  const missing = REQUIRED_MUSCLE_MESHES.filter(n => !allNames.includes(n));

  console.log('\n  ── MUSCLE MAPPING ─────────────────────────────────────');
  console.log(`  Recognized muscle meshes : ${hits.length} / ${allNames.length}`);
  console.log(`  Unrecognized meshes      : ${misses.length}`);
  console.log(`  Missing required meshes  : ${missing.length} / ${REQUIRED_MUSCLE_MESHES.length}`);

  if (hits.length > 0) {
    console.log('\n  ✓ MATCHED MUSCLE MESHES:');
    hits.forEach(n => console.log(`      ✓ ${n}`));
  }

  if (misses.length > 0) {
    console.log('\n  ? UNRECOGNIZED MESH NAMES (not in MESH_TO_MUSCLE_MAP):');
    misses.forEach(n => console.log(`      ? ${n}`));
  }

  if (missing.length > 0) {
    console.log('\n  ✗ MISSING REQUIRED MUSCLE MESHES:');
    missing.forEach(n => console.log(`      ✗ ${n}`));
  }

  // Classification
  const isMuscleAsset = missing.length === 0 && hits.length >= REQUIRED_MUSCLE_MESHES.length;
  const classification = isMuscleAsset
    ? 'muscle-anatomy  ✓  (PRODUCTION READY)'
    : hits.length > 0
      ? 'partial-muscle  ⚠  (NEEDS MESH RENAMES)'
      : allNames.length > 0
        ? 'base-body       ✗  (FALLBACK — rename meshes to canonical names)'
        : 'empty           ✗  (NO MESHES FOUND)';

  console.log(`\n  ── CLASSIFICATION ─────────────────────────────────────`);
  console.log(`  Asset type: ${classification}`);

  if (!isMuscleAsset && allNames.length > 0) {
    console.log('\n  ── RENAME GUIDE ───────────────────────────────────────');
    console.log('  To make this a valid muscle-anatomy asset, rename meshes');
    console.log('  in Blender to match these canonical names:');
    console.log('');
    console.log('  Muscle Group   | Required Mesh Names');
    console.log('  ───────────────|──────────────────────────────────────');
    console.log('  Chest          | PectoralisMajor_L, PectoralisMajor_R');
    console.log('  Shoulders      | AntDeltoid_L/R, LatDeltoid_L/R, PostDeltoid_L/R');
    console.log('  Arms           | BicepsBrachii_L/R, TricepsBrachii_L/R, Brachialis_L/R');
    console.log('  Back           | LatissimusDorsi_L/R, Trapezius_L/R, ErectorSpinae_L/R');
    console.log('  Core           | RectusAbdominis_M, ExternalOblique_L/R');
    console.log('  Glutes         | GluteusMaximus_L/R, GluteusMedius_L/R');
    console.log('  Quads          | RectusFemoris_L/R, VastusLateralis_L/R, VastusMedialis_L/R');
    console.log('  Hamstrings     | BicepsFemoris_L/R, Semitendinosus_L/R');
    console.log('  Calves         | Gastrocnemius_L/R, Soleus_L/R, TibialisAnterior_L/R');
    console.log('');
    console.log('  Convention: {MuscleNamePascalCase}_{L|R|M}');
    console.log('  ──────────────────────────────────────────────────────');
  }

  console.log('\n' + '═'.repeat(60) + '\n');
}

// ── Main ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const targets = args.length > 0
  ? args
  : [
      path.join(projectRoot, 'public/models/male-anatomy.glb'),
      path.join(projectRoot, 'public/models/female-anatomy.glb'),
    ];

targets.forEach(validateGlb);
