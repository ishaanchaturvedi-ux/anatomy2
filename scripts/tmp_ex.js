module.exports = [
  // ==========================================
  // CHEST EXERCISES (16 Exercises)
  // ==========================================
  {
    id: 'barbell-bench-press',
    name: 'Barbell Flat Bench Press',
    description: 'The foundational upper-body compound movement for building mid-chest density, pushing strength, and horizontal pressing power.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'serratus-anterior', emphasis: 'STABILIZER', level: 'LOW' }
    ],
    trainingRegionIds: ['mid-chest'],
    muscleGroupIds: ['chest', 'arms', 'shoulders'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Lie flat on bench with eyes aligned directly beneath the racked barbell.',
      'Grip bar slightly wider than shoulder-width, plant feet firmly flat on the floor.',
      'Unrack, bring bar over sternum, inhale deeply, and lower under control to lower sternum.',
      'Drive feet into floor and press bar up in a slight backward diagonal trajectory.'
    ],
    commonMistakes: [
      'Bouncing bar off chest wall instead of controlling the turnaround point.',
      'Lifting hips and glutes off the bench.',
      'Flaring elbows out at 90 degrees instead of tucking at 45 degrees.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '5 - 8 Reps'
  },
  {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    description: 'Premier upper chest compound builder allowing natural wrist convergence and an extended stretch range of motion.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'pectoralis-minor', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'serratus-anterior', emphasis: 'STABILIZER', level: 'LOW' }
    ],
    trainingRegionIds: ['upper-chest'],
    muscleGroupIds: ['chest', 'shoulders', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Set incline bench to 30-45 degrees.',
      'Sit down, kick dumbbells up onto shoulders, drive shoulder blades firmly into padding.',
      'Lower dumbbells under control until a deep stretch is felt in clavicular upper chest.',
      'Press upward in a slight inward arc without clacking weights together.'
    ],
    commonMistakes: [
      'Bench angle too steep (>45° shifts load predominantly to front delts).',
      'Flaring elbows out at 90° instead of tucking at ~45°.',
      'Bouncing weights at bottom position.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'incline-barbell-bench-press',
    name: 'Incline Barbell Bench Press',
    description: 'Heavy barbell pressing angle overloading the clavicular head of pectoralis major and upper chest fibers.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'pectoralis-minor', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['upper-chest'],
    muscleGroupIds: ['chest', 'shoulders', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Set incline bench angle to 30 degrees.',
      'Grip barbell slightly wider than shoulder-width.',
      'Lower bar slowly toward the upper chest just below the clavicle.',
      'Press vertically upward over the upper chest to full arm lockout.'
    ],
    commonMistakes: [
      'Setting bench too high transforming exercise into a shoulder press.',
      'Excessive arching of lower back.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '6 - 10 Reps'
  },
  {
    id: 'flat-dumbbell-press',
    name: 'Flat Dumbbell Bench Press',
    description: 'Unilateral flat chest press providing greater freedom of shoulder movement and deeper pectoral stretch than a barbell.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['mid-chest'],
    muscleGroupIds: ['chest', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Lie flat on bench holding dumbbells directly over mid chest.',
      'Retract scapulae and plant feet firmly into ground.',
      'Lower dumbbells until upper arms break parallel with torso.',
      'Press dumbbells upward until arms extend straight above chest.'
    ],
    commonMistakes: [
      'Dropping dumbbells too quickly into deep stretch.',
      'Colliding dumbbells together at top of rep.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'decline-barbell-press',
    name: 'Decline Barbell Bench Press',
    description: 'Decline angle press overloading the lower sternal and costal chest fibers with reduced anterior shoulder strain.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['lower-chest'],
    muscleGroupIds: ['chest', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Secure legs safely under decline bench foot pads.',
      'Grip bar slightly wider than shoulder-width.',
      'Lower bar under control to lower pectoral line.',
      'Press straight up to strong lockout.'
    ],
    commonMistakes: [
      'Shortening range of motion.',
      'Unracking bar without spotter on steep decline.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 10 Reps'
  },
  {
    id: 'chest-dips',
    name: 'Bodyweight Chest Dips',
    description: 'High-yield bodyweight compound for lower chest, serratus anterior, and triceps lockout power.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'serratus-anterior', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lower-chest'],
    muscleGroupIds: ['chest', 'arms'],
    trainingType: 'Bodyweight',
    equipment: 'Dip Bars',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Grip parallel dip bars, lock out arms, cross ankles behind body.',
      'Lean torso forward ~30° to shift load from triceps to lower chest.',
      'Lower body smoothly until shoulders descend slightly past elbows.',
      'Contract pectorals to press back up to starting position.'
    ],
    commonMistakes: [
      'Keeping torso completely upright (biases triceps).',
      'Shrugging shoulders upward during press phase.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 15 Reps'
  },
  {
    id: 'flat-dumbbell-flyes',
    name: 'Flat Dumbbell Flyes',
    description: 'Chest isolation exercise opening the pectoral fibers under load for horizontal adduction hypertrophy.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['mid-chest'],
    muscleGroupIds: ['chest'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Lie flat on bench holding dumbbells with palms facing each other.',
      'Maintain a slight fixed bend in elbows (~15 degrees).',
      'Lower dumbbells out wide in an arc until a comfortable chest stretch is reached.',
      'Squeeze chest to bring dumbbells back along the same arc.'
    ],
    commonMistakes: [
      'Bending elbows excessively turning movement into a press.',
      'Over-stretching shoulder joint beyond active flexibility.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 15 Reps'
  },
  {
    id: 'incline-dumbbell-flyes',
    name: 'Incline Dumbbell Flyes',
    description: 'Clavicular chest and pectoralis minor isolation focusing on the upper inner chest stretch and contraction.',
    primaryMuscles: [
      { muscleId: 'pectoralis-minor', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['upper-chest'],
    muscleGroupIds: ['chest'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Lie on a 30-degree incline bench with dumbbells held above upper chest.',
      'Keep slight bend in elbows as you lower dumbbells laterally.',
      'Feel the deep stretch along the upper clavicular pectoralis.',
      'Contract pectorals to bring dumbbells back together.'
    ],
    commonMistakes: [
      'Using excessive weight and dropping elbows too low.',
      'Straightening arms completely.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-crossover-low-to-high',
    name: 'Low-to-High Cable Flyes',
    description: 'Isolated cable flye targeting the upper clavicular chest fibers under constant mechanical cable tension.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'pectoralis-minor', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['upper-chest'],
    muscleGroupIds: ['chest'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Set cable pulleys at lowest height, select moderate weight.',
      'Grab stirrup handles, step forward with one foot for stability.',
      'With slight bend in elbows, scoop handles upward and inward toward chest line.',
      'Squeeze upper chest at peak height and lower under control.'
    ],
    commonMistakes: [
      'Using heavy weight and bending elbows like a press.',
      'Swinging upper body for momentum.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-crossover-high-to-low',
    name: 'High-to-Low Cable Flyes',
    description: 'Declined angle cable crossover isolating the lower sternocostal pectoral fibers and serratus.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'serratus-anterior', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lower-chest'],
    muscleGroupIds: ['chest'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Set pulleys above head height, step forward into staggered stance.',
      'Bring handles down and across in front of pelvis.',
      'Focus on pinching lower chest together at bottom of movement.',
      'Control handles slowly back out to full stretch.'
    ],
    commonMistakes: [
      'Letting shoulders shrug up during the sweep.',
      'Jerking the cables forward.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'pec-deck-flye',
    name: 'Pec Deck Machine Flyes',
    description: 'Fixed-path pectoral flye isolating mid and inner chest with zero shoulder balance instability.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'serratus-anterior', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['mid-chest'],
    muscleGroupIds: ['chest'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Adjust seat height so handles align with middle chest level.',
      'Place forearms or hands on pads, press upper back firmly into cushion.',
      'Bring handles together in front of sternum with a hard 1-second squeeze.',
      'Slowly open arms back out until chest feels a full stretch.'
    ],
    commonMistakes: [
      'Allowing weight stack to slam at bottom of rep.',
      'Humping shoulders forward.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'push-ups-standard',
    name: 'Standard Push-Ups',
    description: 'Fundamental bodyweight pushing movement for chest development, serratus stability, and core bracing.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'STABILIZER', level: 'HIGH' },
      { muscleId: 'serratus-anterior', emphasis: 'STABILIZER', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['mid-chest'],
    muscleGroupIds: ['chest', 'core', 'arms'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Place hands slightly wider than shoulder-width, fingers spread.',
      'Brace core and glutes to form a rigid line from head to heels.',
      'Lower chest down until sternum nearly touches floor.',
      'Press through palm heels to return to top plank position.'
    ],
    commonMistakes: [
      'Sagging hips toward floor.',
      'Flaring elbows outward at 90°.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '15 - 25 Reps'
  },
  {
    id: 'incline-push-ups',
    name: 'Incline Push-Ups',
    description: 'Elevated hands push-up variation reducing bodyweight resistance, ideal for warmups, high volume, or beginner progression.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['lower-chest'],
    muscleGroupIds: ['chest', 'arms'],
    trainingType: 'Bodyweight',
    equipment: 'Bench',
    difficulty: 'Beginner',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Place hands shoulder-width on a secure bench or bar.',
      'Keep body in a rigid plank from head to feet.',
      'Lower chest to touch the edge of the bench.',
      'Press firmly back to straight arms.'
    ],
    commonMistakes: [
      'Piking hips upward.',
      'Not completing full range of motion.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 20 Reps'
  },
  {
    id: 'decline-push-ups',
    name: 'Decline Push-Ups',
    description: 'Elevated feet push-up shifting center of gravity onto upper clavicular pectoralis, front delts, and core.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'pectoralis-minor', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'STABILIZER', level: 'HIGH' }
    ],
    trainingRegionIds: ['upper-chest'],
    muscleGroupIds: ['chest', 'shoulders', 'core'],
    trainingType: 'Bodyweight',
    equipment: 'Bench',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Place toes on bench and hands flat on floor shoulder-width apart.',
      'Tighten core to maintain rigid alignment.',
      'Lower chest toward floor under control.',
      'Press vigorously back up to lockout.'
    ],
    commonMistakes: [
      'Letting lower back arch under gravity.',
      'Looking up straining the cervical neck.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 15 Reps'
  },
  {
    id: 'machine-chest-press',
    name: 'Seated Machine Chest Press',
    description: 'Guided track horizontal pressing machine providing safe maximal output and high-threshold motor unit recruitment.',
    primaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['mid-chest'],
    muscleGroupIds: ['chest', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Adjust seat so handles are level with mid-chest.',
      'Press back and head against pad, plant feet.',
      'Press handles outward smoothly without locking elbows hard.',
      'Lower back slowly until hands are near chest.'
    ],
    commonMistakes: [
      'Letting shoulders roll forward off back pad.',
      'Incomplete range of motion.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'scapular-pushup-plus',
    name: 'Scapular Push-Up Plus',
    description: 'Targeted protraction exercise isolating the serratus anterior and stabilizing the scapulothoracic joint.',
    primaryMuscles: [
      { muscleId: 'serratus-anterior', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'pectoralis-minor', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'STABILIZER', level: 'HIGH' }
    ],
    trainingRegionIds: ['lower-chest'],
    muscleGroupIds: ['chest', 'core'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isometric',
    instructions: [
      'Start in a standard push-up plank position with straight arms.',
      'Without bending elbows, pinch shoulder blades together to lower chest slightly.',
      'Push the ground away forcefully to dome the upper back into full protraction.',
      'Hold the peak protraction for 2 seconds before relaxing.'
    ],
    commonMistakes: [
      'Bending arms turning it into regular push-up.',
      'Dropping the hips.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },

  // ==========================================
  // BACK EXERCISES (16 Exercises)
  // ==========================================
  {
    id: 'wide-grip-pullups',
    name: 'Wide Grip Pull-Ups',
    description: 'Gold standard bodyweight movement for maximal latissimus dorsi width, upper back thickness, and V-taper development.',
    primaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'teres-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'rhomboid-major', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lats-outer-back', 'teres-region'],
    muscleGroupIds: ['back', 'arms'],
    trainingType: 'Bodyweight',
    equipment: 'Pull-up Bar',
    difficulty: 'Intermediate',
    movementPattern: 'Vertical Pull',
    instructions: [
      'Grip pull-up bar wider than shoulder-width with overhand pronated grip.',
      'Depress shoulder blades down before initiating the pull.',
      'Drive elbows straight down toward ribs until chin clears bar.',
      'Lower body slowly back into a full dead-hang stretch position.'
    ],
    commonMistakes: [
      'Kipping or swinging legs for momentum.',
      'Shortening bottom stretch to avoid dead-hang.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '6 - 12 Reps'
  },
  {
    id: 'chin-ups',
    name: 'Underhand Chin-Ups',
    description: 'Supinated grip vertical pull overloading the lower lat fibers and biceps brachii with maximum pulling leverage.',
    primaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'biceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'teres-major', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lats-outer-back', 'biceps-long-head'],
    muscleGroupIds: ['back', 'arms'],
    trainingType: 'Bodyweight',
    equipment: 'Pull-up Bar',
    difficulty: 'Intermediate',
    movementPattern: 'Vertical Pull',
    instructions: [
      'Grip bar with shoulder-width supinated (palms facing you) grip.',
      'Pull chest up to bar by driving elbows down and back.',
      'Squeeze biceps and lats hard at top point.',
      'Lower under control to full elbow extension.'
    ],
    commonMistakes: [
      'Not descending to full extension.',
      'Rounding shoulders forward at top of rep.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '6 - 10 Reps'
  },
  {
    id: 'lat-pulldown',
    name: 'Wide-Grip Lat Pulldown',
    description: 'Essential cable vertical pull for isolating latissimus dorsi width without bodyweight limitations.',
    primaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'teres-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'rhomboid-major', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lats-outer-back'],
    muscleGroupIds: ['back', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Vertical Pull',
    instructions: [
      'Sit in machine with thighs secured under roller pads.',
      'Grip bar wider than shoulder-width with overhand grip.',
      'Lean back slightly (~10-15°) and pull bar down to upper sternum.',
      'Control bar back up allowing lats to fully stretch at top.'
    ],
    commonMistakes: [
      'Leaning back too far turning movement into a row.',
      'Using momentum to yank the weight.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'close-grip-lat-pulldown',
    name: 'Close-Grip V-Bar Lat Pulldown',
    description: 'Neutral-grip pulldown putting lats through a deep vertical stretch with increased brachialis and inner lat activation.',
    primaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'teres-major', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lats-outer-back', 'teres-region'],
    muscleGroupIds: ['back', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Vertical Pull',
    instructions: [
      'Attach V-bar handle to pulldown cable.',
      'Pull handle smoothly down to touch upper chest while driving elbows downward.',
      'Squeeze mid-back and lats firmly.',
      'Release slowly to full overhead extension.'
    ],
    commonMistakes: [
      'Rounding upper back.',
      'Pulling handle too low into the stomach.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'barbell-bent-over-row',
    name: 'Barbell Bent-Over Row',
    description: 'Premier compound movement for full back thickness, loading rhomboids, middle trapezius, and lats.',
    primaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rhomboid-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'posterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'erector-spinae', emphasis: 'STABILIZER', level: 'HIGH' }
    ],
    trainingRegionIds: ['rhomboids-mid-back', 'mid-traps', 'lats-outer-back'],
    muscleGroupIds: ['back', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Pull',
    instructions: [
      'Hinge at hips with torso bent forward at ~45 degrees, maintaining flat spine.',
      'Grip barbell slightly wider than shoulder-width with overhand grip.',
      'Pull barbell up to touch lower ribcage by driving elbows behind torso.',
      'Lower under control without rounding lumbar spine.'
    ],
    commonMistakes: [
      'Standing too upright turning row into a shrug.',
      'Rounding lower back under heavy load.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '8 - 10 Reps'
  },
  {
    id: 'one-arm-dumbbell-row',
    name: 'Single-Arm Dumbbell Row',
    description: 'Unilateral horizontal row maximizing lat stretch and contraction while correcting side-to-side pulling imbalances.',
    primaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rhomboid-major', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'teres-major', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'external-oblique', emphasis: 'STABILIZER', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lats-outer-back', 'rhomboids-mid-back'],
    muscleGroupIds: ['back', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Horizontal Pull',
    instructions: [
      'Place one knee and hand on flat bench, holding dumbbell in free hand.',
      'Keep back flat parallel to floor.',
      'Pull dumbbell up toward hip crease while leading with the elbow.',
      'Lower dumbbell straight down for a full lat stretch.'
    ],
    commonMistakes: [
      'Rotating torso excessively to heave the weight up.',
      'Pulling dumbbell up to shoulder instead of toward hip.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'seated-cable-row',
    name: 'Seated Cable Row',
    description: 'Controlled horizontal cable row focusing on scapular retraction, rhomboids, and mid-back density.',
    primaryMuscles: [
      { muscleId: 'rhomboid-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rhomboid-minor', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['rhomboids-mid-back', 'mid-traps'],
    muscleGroupIds: ['back', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Horizontal Pull',
    instructions: [
      'Sit on bench with feet placed on footplates, knees slightly bent.',
      'Grip handle and sit upright with straight spine and braced core.',
      'Pull handle into abdomen while retracting shoulder blades together.',
      'Extend arms slowly forward allowing mid-back to stretch.'
    ],
    commonMistakes: [
      'Swinging torso forward and backward with momentum.',
      'Shrugging shoulders into ears.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'chest-supported-t-bar-row',
    name: 'Chest-Supported T-Bar Row',
    description: 'Pad-supported row removing spinal erector fatigue to isolate rhomboids, mid traps, and upper lats.',
    primaryMuscles: [
      { muscleId: 'rhomboid-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'posterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['rhomboids-mid-back', 'mid-traps'],
    muscleGroupIds: ['back'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Pull',
    instructions: [
      'Lie chest down on incline pad of T-bar row machine.',
      'Grip handles with neutral or overhand grip.',
      'Row weight upward pinching shoulder blades tight at top.',
      'Lower weights smoothly to full bottom stretch.'
    ],
    commonMistakes: [
      'Lifting chest off pad to cheat the weight.',
      'Jerking at the turnaround point.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'straight-arm-cable-pulldown',
    name: 'Straight-Arm Cable Pulldown',
    description: 'Direct latissimus dorsi and teres major isolation removing biceps involvement for pure shoulder extension.',
    primaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'teres-major', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['lats-outer-back', 'teres-region'],
    muscleGroupIds: ['back'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Stand facing high cable pulley with straight bar attachment.',
      'Grip bar with arms straight and hinge slightly forward at hips.',
      'Sweep bar downward in an arc until it contacts thighs.',
      'Control bar back up to eye level feeling deep lat stretch.'
    ],
    commonMistakes: [
      'Bending arms turning it into a tricep pushdown.',
      'Hyperextending lower spine.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'face-pulls',
    name: 'Cable Face Pulls',
    description: 'Posterior chain upper-back essential targeting rear deltoids, rhomboids, middle trapezius, and external rotators.',
    primaryMuscles: [
      { muscleId: 'posterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rhomboid-major', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'teres-minor', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['rear-delts', 'rhomboids-mid-back', 'mid-traps', 'rotator-cuff'],
    muscleGroupIds: ['shoulders', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Horizontal Pull',
    instructions: [
      'Attach rope to cable pulley set at eye height.',
      'Grip rope with thumbs facing backward.',
      'Step back, pull rope toward eye level while spreading hands apart and rotating externally.',
      'Squeeze upper back and rear delts for 1 full second.'
    ],
    commonMistakes: [
      'Setting cable too low.',
      'Pulling to chest instead of face level.',
      'Using too much weight causing body sway.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'barbell-shrugs',
    name: 'Barbell Shrugs',
    description: 'Heavy vertical scapular elevation builder loading the upper trapezius fibers and grip endurance.',
    primaryMuscles: [
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rhomboid-major', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'brachioradialis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['upper-traps'],
    muscleGroupIds: ['back'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Stand upright holding barbell at thighs with shoulder-width overhand grip.',
      'Elevate shoulders straight up toward ears in a pure vertical line.',
      'Hold peak contraction for 1 second.',
      'Lower bar smoothly under control.'
    ],
    commonMistakes: [
      'Rolling shoulders in circles (injures rotator cuff).',
      'Using body momentum from knees.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'dumbbell-shrugs',
    name: 'Dumbbell Shrugs',
    description: 'Neutral-grip dumbbell shrugs allowing natural vertical scapular elevation without barbell bar collision.',
    primaryMuscles: [
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachioradialis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['upper-traps'],
    muscleGroupIds: ['back'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Hold heavy dumbbells at your sides with neutral grip.',
      'Shrug shoulders straight up toward your ears.',
      'Squeeze traps at apex, then lower down to full stretch.'
    ],
    commonMistakes: [
      'Jerking weights up with hips.',
      'Rolling shoulders.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'deadlift-conventional',
    name: 'Conventional Barbell Deadlift',
    description: 'The ultimate whole-body pulling power movement loading erector spinae, gluteus maximus, hamstrings, and entire back frame.',
    primaryMuscles: [
      { muscleId: 'erector-spinae', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'latissimus-dorsi', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'rectus-abdominis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lower-back', 'glute-max', 'hamstrings-biceps-femoris'],
    muscleGroupIds: ['back', 'hips-glutes', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Stand with midfoot under barbell, feet hip-width apart.',
      'Hinge at hips, grip bar just outside knees.',
      'Pull chest up, engage lats, and pull slack out of the bar.',
      'Drive floor away with legs and lock hips forward at top.'
    ],
    commonMistakes: [
      'Rounding lumbar spine under load.',
      'Bar drifting away from shins during ascent.'
    ],
    recommendedSets: '3 - 5 Sets',
    recommendedReps: '3 - 6 Reps'
  },
  {
    id: 'hyperextensions-back-extensions',
    name: '45-Degree Hyperextensions',
    description: 'Dedicated posterior chain extension movement strengthening the lumbar erector spinae and gluteal complex.',
    primaryMuscles: [
      { muscleId: 'erector-spinae', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lower-back', 'glute-max'],
    muscleGroupIds: ['back', 'hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'Bench',
    difficulty: 'Beginner',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Position yourself in 45-degree hyperextension bench with hips just above pad.',
      'Cross arms over chest and hinge forward at hips until hamstrings stretch.',
      'Contract erector spinae and glutes to extend torso back in line with legs.',
      'Avoid hyperextending beyond neutral spine alignment.'
    ],
    commonMistakes: [
      'Hyper-arching lumbar spine at top.',
      'Jerking upward with momentum.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'good-mornings',
    name: 'Barbell Good Mornings',
    description: 'Hip-hinge barbell exercise building exceptional isometric lumbar stability, erector spinae thickness, and hamstring flexibility.',
    primaryMuscles: [
      { muscleId: 'erector-spinae', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'transversus-abdominis', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['lower-back', 'hamstrings-biceps-femoris'],
    muscleGroupIds: ['back', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Rest barbell securely across upper traps, standing with feet shoulder-width.',
      'Brace core, maintain soft knee bend, and push hips straight backward.',
      'Lower torso forward until parallel to floor while keeping spine neutral.',
      'Drive hips forward to return to standing.'
    ],
    commonMistakes: [
      'Rounding upper or lower back.',
      'Bending knees too much turning movement into a squat.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '8 - 10 Reps'
  },

  // ==========================================
  // SHOULDERS EXERCISES (12 Exercises)
  // ==========================================
  {
    id: 'overhead-barbell-press',
    name: 'Standing Overhead Barbell Press',
    description: 'The premier vertical pushing compound exercise building massive anterior deltoids, triceps, and full core stability.',
    primaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'lateral-deltoid', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'STABILIZER', level: 'HIGH' }
    ],
    trainingRegionIds: ['front-delts', 'side-delts'],
    muscleGroupIds: ['shoulders', 'arms', 'core'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Vertical Push',
    instructions: [
      'Stand with feet shoulder-width, bar resting across front clavicles.',
      'Brace core, squeeze glutes, and press bar vertically past face.',
      'Push head slightly forward under bar at full overhead lockout.',
      'Lower bar smoothly back to clavicles.'
    ],
    commonMistakes: [
      'Excessive backward lean into lumbar spine.',
      'Pressing bar forward in an outward arc.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '5 - 8 Reps'
  },
  {
    id: 'seated-dumbbell-shoulder-press',
    name: 'Seated Dumbbell Shoulder Press',
    description: 'Independent dumbbell overhead press isolating anterior and lateral deltoids with back support.',
    primaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'lateral-deltoid', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['front-delts', 'side-delts'],
    muscleGroupIds: ['shoulders', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Vertical Push',
    instructions: [
      'Sit on upright bench with dumbbells at shoulder height, palms forward.',
      'Press dumbbells upward until arms extend straight overhead.',
      'Lower under control until dumbbells reach ear level.'
    ],
    commonMistakes: [
      'Clacking dumbbells together at top.',
      'Flaring elbows out to 90 degrees.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'arnold-press',
    name: 'Arnold Dumbbell Press',
    description: 'Rotational overhead press providing prolonged time under tension through anterior and lateral deltoid heads.',
    primaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'lateral-deltoid', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['front-delts', 'side-delts'],
    muscleGroupIds: ['shoulders', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Vertical Push',
    instructions: [
      'Start with dumbbells at chin level, palms facing toward you.',
      'As you press upward, rotate wrists so palms face forward at top.',
      'Reverse rotation smoothly as you lower dumbbells back to starting chin position.'
    ],
    commonMistakes: [
      'Rushing the rotation.',
      'Using excessive weight and compromising control.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'dumbbell-lateral-raise',
    name: 'Standing Dumbbell Lateral Raise',
    description: 'The premier isolation exercise for building round, capped lateral deltoids and shoulder width.',
    primaryMuscles: [
      { muscleId: 'lateral-deltoid', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'LOW' },
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['side-delts'],
    muscleGroupIds: ['shoulders'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Stand holding dumbbells at sides with slight forward torso lean (~10°).',
      'Keep slight bend in elbows and raise dumbbells out to sides in scapular plane.',
      'Lift until arms are parallel with floor (shoulder height).',
      'Lower weights smoothly over a 2-second eccentric count.'
    ],
    commonMistakes: [
      'Shrugging traps to heave the weight.',
      'Lifting weights higher than shoulder height.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-lateral-raise',
    name: 'Leaning Cable Lateral Raise',
    description: 'Continuous resistance lateral deltoid isolation maintaining peak mechanical tension at the bottom of the movement.',
    primaryMuscles: [
      { muscleId: 'lateral-deltoid', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['side-delts'],
    muscleGroupIds: ['shoulders'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Attach single handle to low cable pulley, stand sideways to machine.',
      'Lean slightly away from machine while holding pole with inner hand.',
      'Raise cable handle out to side until arm reaches shoulder height.',
      'Lower slowly back to starting hip level.'
    ],
    commonMistakes: [
      'Bending elbow during raise.',
      'Using hip thrust for momentum.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'dumbbell-front-raise',
    name: 'Standing Dumbbell Front Raise',
    description: 'Isolated shoulder flexion loading the anterior deltoid head.',
    primaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'SECONDARY', level: 'LOW' },
      { muscleId: 'serratus-anterior', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['front-delts'],
    muscleGroupIds: ['shoulders'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Stand holding dumbbells across front thighs.',
      'Raise one or both dumbbells straight forward to shoulder height with slight elbow bend.',
      'Pause 1 second, then lower under full control.'
    ],
    commonMistakes: [
      'Swinging torso backward to hoist weight.',
      'Raising dumbbells above eye level.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-rear-delt-flye',
    name: 'Cross-Cable Rear Delt Flyes',
    description: 'Dual cable crossover targeting the posterior deltoid and mid-scapular stabilizers without grip fatigue.',
    primaryMuscles: [
      { muscleId: 'posterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rhomboid-major', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'teres-minor', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['rear-delts', 'rhomboids-mid-back'],
    muscleGroupIds: ['shoulders', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Set pulleys at eye level without handles, grab opposite cables with bare hands.',
      'Step back, open arms out horizontally in a wide reverse hug arc.',
      'Contract rear delts hard at apex.',
      'Slowly cross arms back in front of chest.'
    ],
    commonMistakes: [
      'Bending elbows turning flye into a row.',
      'Using too much weight.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'reverse-pec-deck',
    name: 'Reverse Pec Deck Machine',
    description: 'Fixed-path horizontal abduction machine locking strict isolation onto the posterior deltoids and rhomboids.',
    primaryMuscles: [
      { muscleId: 'posterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rhomboid-major', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'rhomboid-minor', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['rear-delts', 'rhomboids-mid-back'],
    muscleGroupIds: ['shoulders', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Sit chest flat against machine back pad with seat adjusted so handles are shoulder-height.',
      'Grip handles with neutral or overhand grip.',
      'Drive arms outward and backward in a wide arc until hands align with torso.',
      'Control handles slowly back forward.'
    ],
    commonMistakes: [
      'Shrugging traps.',
      'Letting chest come off the pad.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'dumbbell-rear-delt-row',
    name: 'Bent-Over Dumbbell Rear Delt Row',
    description: 'Wide-elbow rowing variation placing direct mechanical leverage onto the posterior deltoid head and upper back.',
    primaryMuscles: [
      { muscleId: 'posterior-deltoid', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'lateral-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'rhomboid-major', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['rear-delts', 'mid-traps'],
    muscleGroupIds: ['shoulders', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Horizontal Pull',
    instructions: [
      'Hinge forward at hips until torso is nearly parallel to floor.',
      'Hold dumbbells with palms facing your feet (pronated grip).',
      'Row dumbbells upward while flaring elbows out at 90 degrees from torso.',
      'Squeeze rear delts at top, then lower under control.'
    ],
    commonMistakes: [
      'Tucking elbows into sides.',
      'Standing too upright.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'barbell-upright-row',
    name: 'Barbell Upright Row',
    description: 'Multi-joint vertical pull loading lateral deltoids and upper trapezius with a wide-grip technique.',
    primaryMuscles: [
      { muscleId: 'lateral-deltoid', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'brachioradialis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['side-delts', 'upper-traps'],
    muscleGroupIds: ['shoulders', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Vertical Pull',
    instructions: [
      'Grip barbell shoulder-width apart with overhand grip.',
      'Pull bar up along the line of the torso leading with the elbows.',
      'Stop when elbows reach shoulder height.',
      'Lower bar slowly under control.'
    ],
    commonMistakes: [
      'Using too narrow a grip causing internal shoulder impingement.',
      'Pulling bar higher than chest level.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'cable-external-rotations',
    name: 'Cable External Rotations',
    description: 'Crucial rotator cuff strengthening exercise isolating the teres minor and infraspinatus for glenohumeral stability.',
    primaryMuscles: [
      { muscleId: 'teres-minor', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'posterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['rotator-cuff'],
    muscleGroupIds: ['shoulders'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Rotation',
    instructions: [
      'Set cable pulley at elbow height with single handle.',
      'Tuck a small towel between elbow and ribcage to pin elbow in place.',
      'Rotate forearm outward away from abdomen through 90 degrees.',
      'Control rotation back across stomach.'
    ],
    commonMistakes: [
      'Allowing elbow to flare away from side of torso.',
      'Using too heavy weight.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'lu-raises',
    name: 'Lu Dumbbell Full-ROM Lateral Raises',
    description: 'Full range of motion lateral raise taking the deltoids and serratus anterior all the way overhead.',
    primaryMuscles: [
      { muscleId: 'lateral-deltoid', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'anterior-deltoid', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'trapezius', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'serratus-anterior', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['side-delts', 'upper-traps'],
    muscleGroupIds: ['shoulders', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Hold light dumbbells in front of thighs.',
      'Raise dumbbells out to sides and continue all the way until they touch overhead.',
      'Control descent slowly along the same circular perimeter.',
      'Maintain strong core stability throughout.'
    ],
    commonMistakes: [
      'Using heavy weight and arching lower back.',
      'Dropping dumbbells fast on the way down.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },

  // ==========================================
  // ARMS EXERCISES (14 Exercises)
  // ==========================================
  {
    id: 'barbell-biceps-curl',
    name: 'Standing Barbell Biceps Curl',
    description: 'The foundational mass builder for the anterior upper arm, overloading biceps brachii and brachialis with maximum load.',
    primaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'brachioradialis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['biceps-long-head', 'biceps-short-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Stand upright holding barbell with shoulder-width underhand grip.',
      'Pin elbows to sides and curl bar upward toward chest.',
      'Squeeze biceps hard at top of contraction.',
      'Lower bar smoothly to full elbow extension.'
    ],
    commonMistakes: [
      'Swinging hips and lower back to heave weight up.',
      'Letting elbows drift forward.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'incline-dumbbell-curl',
    name: 'Incline Dumbbell Curl',
    description: 'Seated incline curl putting the long head of the biceps under deep anatomical stretch behind the torso.',
    primaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['biceps-long-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Lie back on 45-degree incline bench with dumbbells hanging at sides.',
      'Curl dumbbells upward while keeping elbows back.',
      'Supinate wrists as you reach top of curl.',
      'Lower dumbbells slowly to full stretch at bottom.'
    ],
    commonMistakes: [
      'Lifting elbows forward to shorten the stretch.',
      'Using too heavy weight.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'dumbbell-hammer-curl',
    name: 'Standing Dumbbell Hammer Curl',
    description: 'Neutral-grip curl emphasizing the brachialis and brachioradialis for arm thickness and forearm power.',
    primaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'brachioradialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['brachialis', 'brachioradialis'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Hold dumbbells with palms facing each other (neutral grip).',
      'Keep elbows fixed at sides and curl dumbbells toward shoulders.',
      'Squeeze forearm and outer upper arm at top.',
      'Lower under control to full extension.'
    ],
    commonMistakes: [
      'Rotating wrists during movement.',
      'Using excessive body momentum.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'preacher-curl',
    name: 'EZ-Bar Preacher Curl',
    description: 'Pad-supported isolation eliminating momentum and maximizing peak tension on the short inner head of biceps.',
    primaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['biceps-short-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Bench',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Sit at preacher bench with armpits snug against top of pad.',
      'Grip EZ-bar with shoulder-width underhand grip.',
      'Curl bar up toward chin until forearms are nearly vertical.',
      'Lower bar slowly until arms are extended (stop just shy of hyperextension).'
    ],
    commonMistakes: [
      'Hyperextending and tearing bicep tendon at bottom.',
      'Lifting body off seat to cheat.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'concentration-curl',
    name: 'Seated Dumbbell Concentration Curl',
    description: 'Strict unilateral bicep isolation pinning upper arm against inner thigh to eliminate body sway.',
    primaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['biceps-long-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Sit on bench, brace tricep against inner thigh of same side.',
      'Hang dumbbell straight down, then curl upward toward face.',
      'Squeeze bicep peak for 1 second at top.',
      'Lower smoothly to full stretch.'
    ],
    commonMistakes: [
      'Swinging torso upward.',
      'Allowing elbow to slip off inner thigh.'
    ],
    recommendedSets: '3 Sets / Arm',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-biceps-curl',
    name: 'Standing Cable Biceps Curl',
    description: 'Continuous cable resistance curve keeping constant tension on the biceps brachii throughout the entire ROM.',
    primaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachialis', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'brachioradialis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['biceps-long-head', 'biceps-short-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Attach straight or EZ-bar to low cable pulley.',
      'Step back slightly, keep elbows pinned at sides, and curl bar up.',
      'Squeeze biceps hard against cable tension at top.',
      'Lower smoothly back down.'
    ],
    commonMistakes: [
      'Stepping too far back changing angle into a drag curl.',
      'Yanking weight with hips.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'reverse-barbell-curl',
    name: 'Standing Reverse EZ-Bar Curl',
    description: 'Overhand grip curl targeting the brachioradialis forearm flexor and deep brachialis muscle.',
    primaryMuscles: [
      { muscleId: 'brachioradialis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'brachialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-brachii', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['brachioradialis', 'wrist-extensors'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Grip EZ-bar with shoulder-width pronated (overhand) grip.',
      'Keep wrists straight and curl bar up toward upper chest.',
      'Squeeze forearms firmly at apex.',
      'Lower slowly over 2-3 seconds.'
    ],
    commonMistakes: [
      'Letting wrists bend backwards (wrist extension failure).',
      'Using too heavy weight.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'wrist-curls-barbell',
    name: 'Seated Barbell Wrist Curls',
    description: 'Forearm flexor isolation building crushing grip strength and inner forearm volume.',
    primaryMuscles: [
      { muscleId: 'brachioradialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['wrist-flexors', 'grip-forearms'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Sit on bench with forearms resting across thighs, wrists hanging just past knees.',
      'Grip barbell underhand and let bar roll down fingers into full stretch.',
      'Curl fingers and wrists upward toward ceiling.',
      'Hold contraction 1 second, then lower slowly.'
    ],
    commonMistakes: [
      'Lifting forearms off thighs.',
      'Using jerky fast movements.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'farmers-walk',
    name: 'Heavy Dumbbell Farmer\'s Carry',
    description: 'Full-body functional carry testing crushing grip, brachioradialis, upper trapezius, and core anti-lateral flexion.',
    primaryMuscles: [
      { muscleId: 'brachioradialis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'trapezius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'external-oblique', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'quadratus-lumborum', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['grip-forearms', 'upper-traps', 'posterior-core'],
    muscleGroupIds: ['arms', 'back', 'core'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Isometric',
    instructions: [
      'Deadlift heavy dumbbells up to sides with neutral grip.',
      'Stand tall with chest proud, shoulders packed down, and core tight.',
      'Walk forward with steady, controlled heel-to-toe strides for prescribed distance.',
      'Set dumbbells down under control using hip hinge.'
    ],
    commonMistakes: [
      'Slouching shoulders forward.',
      'Taking erratic rushing steps.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '40 - 60 Meters'
  },
  {
    id: 'triceps-rope-pushdown',
    name: 'Cable Triceps Rope Pushdown',
    description: 'Premier triceps exercise spreading the rope at the bottom for intense lateral and medial triceps head contraction.',
    primaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'brachioradialis', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['triceps-lateral-head', 'triceps-medial-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Attach rope to high cable pulley, hold ends with neutral grip.',
      'Pin elbows firmly to sides of ribcage, leaning torso slightly forward.',
      'Extend arms downward, spreading rope ends apart forcefully at the bottom.',
      'Squeeze triceps for 1 second, then control back to 90 degrees.'
    ],
    commonMistakes: [
      'Letting elbows flare forward and backward.',
      'Using bodyweight momentum to push down.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'triceps-straight-bar-pushdown',
    name: 'Straight Bar Triceps Pushdown',
    description: 'Overhand straight bar pushdown enabling heavy overload on the lateral and medial triceps heads.',
    primaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['triceps-lateral-head', 'triceps-long-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Grip straight bar on high pulley with overhand grip shoulder-width apart.',
      'Keep elbows pinned at sides and press bar straight down to thighs.',
      'Lock out arms with a solid tricep contraction.',
      'Return to chest level under control.'
    ],
    commonMistakes: [
      'Shoulders rounding forward over bar.',
      'Incomplete elbow extension.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'skull-crushers',
    name: 'Lying EZ-Bar Skull Crushers',
    description: 'Lying triceps extension loading the long head under stretch as the bar descends past the forehead.',
    primaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['triceps-long-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Lie flat on bench holding EZ-bar with narrow grip above chest.',
      'Angle upper arms slightly back toward head (~10 degrees).',
      'Hinge at elbows to lower bar smoothly toward top of forehead/crown.',
      'Extend elbows powerfully to return to starting angle.'
    ],
    commonMistakes: [
      'Flaring elbows wide out to sides.',
      'Dropping bar too fast.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'overhead-dumbbell-triceps-extension',
    name: 'Seated Overhead Dumbbell Triceps Extension',
    description: 'Overhead extension placing maximum stretch on the long head of the triceps originating on the scapula.',
    primaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['triceps-long-head'],
    muscleGroupIds: ['arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Sit on bench holding one heavy dumbbell vertically with both hands cupping the top plate.',
      'Press dumbbell overhead with arms fully extended.',
      'Lower dumbbell behind head until elbows bend to 90 degrees.',
      'Press dumbbell straight back overhead to lockout.'
    ],
    commonMistakes: [
      'Allowing elbows to flare wide apart.',
      'Arching lower back.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'close-grip-bench-press',
    name: 'Close-Grip Barbell Bench Press',
    description: 'Heavy compound press shifting primary load from pectorals to triceps lockout power.',
    primaryMuscles: [
      { muscleId: 'triceps-brachii', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'pectoralis-major', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'anterior-deltoid', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['triceps-lateral-head', 'mid-chest'],
    muscleGroupIds: ['arms', 'chest'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Horizontal Push',
    instructions: [
      'Lie on bench, grip barbell with hands shoulder-width apart (~12-14 inches).',
      'Lower bar to lower sternum keeping elbows tucked close to ribcage.',
      'Press bar straight up forcefully to lockout.'
    ],
    commonMistakes: [
      'Gripping bar too narrow (<6 inches causes wrist strain).',
      'Flaring elbows wide.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '6 - 10 Reps'
  },

  // ==========================================
  // CORE EXERCISES (16 Exercises)
  // ==========================================
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Straight Leg Raise',
    description: 'Premier lower abdominal exercise utilizing bottom-up posterior pelvic tilt and deep core stabilization.',
    primaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'external-oblique', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'tensor-fasciae-latae', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'rectus-femoris', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['lower-abs', 'upper-abs'],
    muscleGroupIds: ['core', 'hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'Pull-up Bar',
    difficulty: 'Advanced',
    movementPattern: 'Core Flexion',
    instructions: [
      'Hang from pull-up bar with overhand grip and engaged shoulders.',
      'Keep legs straight and raise them in front of you until parallel to floor (or higher).',
      'Tilt pelvis posteriorly at top of rep to actively crunch the lower abdominals.',
      'Lower legs slowly under control without swinging.'
    ],
    commonMistakes: [
      'Swinging body for momentum.',
      'Lifting legs with hip flexors alone without curling pelvis.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 15 Reps'
  },
  {
    id: 'hanging-knee-raise',
    name: 'Hanging Knee Raise',
    description: 'Accessible bottom-up core flexion exercise isolating the rectus abdominis with reduced hamstring flexibility restriction.',
    primaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'external-oblique', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'rectus-femoris', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['lower-abs'],
    muscleGroupIds: ['core'],
    trainingType: 'Bodyweight',
    equipment: 'Pull-up Bar',
    difficulty: 'Beginner',
    movementPattern: 'Core Flexion',
    instructions: [
      'Hang from pull-up bar with straight arms and tight core.',
      'Bend knees and pull them up toward your chest.',
      'Curl pelvis upward at top to contract abs.',
      'Lower legs smoothly back to full hang.'
    ],
    commonMistakes: [
      'Swinging back and forth.',
      'Not curling pelvis at top.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-crunch',
    name: 'Kneeling Cable Crunch',
    description: 'Weighted spinal flexion exercise providing direct progressive overload to the rectus abdominis wall.',
    primaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'external-oblique', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['upper-abs'],
    muscleGroupIds: ['core'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    movementPattern: 'Core Flexion',
    instructions: [
      'Kneel below high cable pulley holding rope attachment at sides of head.',
      'Hips stay stationary as you flex spine downward, pulling elbows toward knees.',
      'Squeeze abs hard at bottom contraction.',
      'Slowly extend spine back to upright position.'
    ],
    commonMistakes: [
      'Sitting back on heels using hips instead of curling spine.',
      'Pulling rope with arms instead of crunching with abs.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'ab-wheel-rollout',
    name: 'Ab Wheel Rollout',
    description: 'Advanced anti-extension powerhouse loading the entire rectus abdominis and deep transversus abdominis belt.',
    primaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'transversus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'latissimus-dorsi', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'serratus-anterior', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['upper-abs', 'deep-core'],
    muscleGroupIds: ['core', 'back'],
    trainingType: 'Bodyweight',
    equipment: 'Ab Wheel',
    difficulty: 'Advanced',
    movementPattern: 'Core Flexion',
    instructions: [
      'Kneel on floor holding ab wheel handles under shoulders.',
      'Brace core, roll wheel forward extending torso as far as possible with flat spine.',
      'Contract abs deeply to pull wheel back under shoulders.'
    ],
    commonMistakes: [
      'Sagging lumbar spine into hyperextension.',
      'Pulling back with arms instead of flexing abs.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'cable-woodchoppers',
    name: 'Standing Cable Woodchoppers',
    description: 'Rotational core power exercise building strong, defined diagonal external and internal oblique fibers.',
    primaryMuscles: [
      { muscleId: 'external-oblique', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'internal-oblique', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['obliques'],
    muscleGroupIds: ['core'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    movementPattern: 'Rotation',
    instructions: [
      'Set cable pulley at shoulder height, stand sideways to machine.',
      'Grip handle with both hands, arms extended.',
      'Rotate torso diagonally across body pulling cable down toward opposite knee.',
      'Control rotation back to starting position.'
    ],
    commonMistakes: [
      'Bending arms turning movement into a press.',
      'Using arms instead of twisting with obliques.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'russian-twists',
    name: 'Weighted Russian Twists',
    description: 'Seated isometric core hold with dynamic rotational loading for the external and internal obliques.',
    primaryMuscles: [
      { muscleId: 'external-oblique', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'internal-oblique', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['obliques'],
    muscleGroupIds: ['core'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Rotation',
    instructions: [
      'Sit on floor with knees bent and feet elevated slightly off ground.',
      'Lean torso back at 45 degrees holding dumbbell with both hands.',
      'Rotate torso smoothly side to side, tapping dumbbell beside hips.',
      'Maintain strong core stability throughout.'
    ],
    commonMistakes: [
      'Moving only arms without rotating the thoracic cage.',
      'Rounding lower spine excessively.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '20 Reps (10/side)'
  },
  {
    id: 'bicycle-crunches',
    name: 'Bicycle Crunches',
    description: 'Dynamic floor core movement combining sagittal flexion and transverse rotation for complete abdominal coverage.',
    primaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'external-oblique', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'internal-oblique', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['obliques', 'upper-abs'],
    muscleGroupIds: ['core'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Rotation',
    instructions: [
      'Lie on back with hands behind head, knees bent at 90 degrees.',
      'Bring right elbow toward left knee while extending right leg straight.',
      'Alternate sides in a fluid, controlled pedaling rhythm.',
      'Focus on driving shoulder across toward opposite hip.'
    ],
    commonMistakes: [
      'Pulling on neck with hands.',
      'Rushing through reps without contracting obliques.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '20 - 30 Total Reps'
  },
  {
    id: 'side-plank',
    name: 'Isometric Side Plank',
    description: 'Anti-lateral flexion static hold challenging the obliques, quadratus lumborum, and lateral hip stabilizers.',
    primaryMuscles: [
      { muscleId: 'external-oblique', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'internal-oblique', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'quadratus-lumborum', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['obliques', 'posterior-core'],
    muscleGroupIds: ['core', 'hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isometric',
    instructions: [
      'Lie on your side with legs stacked and forearm directly beneath shoulder.',
      'Lift hips off floor until body forms a straight line from shoulders to ankles.',
      'Hold position rigidly while breathing steadily through the diaphragm.',
      'Switch sides after prescribed duration.'
    ],
    commonMistakes: [
      'Allowing hips to sag toward floor.',
      'Rotating top hip forward.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '30 - 60 Sec Hold'
  },
  {
    id: 'side-plank-hip-dips',
    name: 'Side Plank Hip Dips',
    description: 'Dynamic lateral core exercise loading the quadratus lumborum and obliques through vertical hip displacement.',
    primaryMuscles: [
      { muscleId: 'quadratus-lumborum', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'external-oblique', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'internal-oblique', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['posterior-core', 'obliques'],
    muscleGroupIds: ['core', 'hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Intermediate',
    movementPattern: 'Core Flexion',
    instructions: [
      'Establish a solid side plank on forearm.',
      'Lower bottom hip smoothly until it lightly taps the floor.',
      'Contract obliques and quadratus lumborum to drive hips back up above neutral.',
      'Repeat for prescribed reps before switching sides.'
    ],
    commonMistakes: [
      'Twisting shoulders during dip.',
      'Dropping hip too aggressively.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'pallof-press',
    name: 'Standing Cable Pallof Press',
    description: 'Gold-standard anti-rotation exercise training deep transversus abdominis, internal obliques, and spinal multifidus.',
    primaryMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'internal-oblique', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'external-oblique', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'multifidus', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['deep-core', 'obliques', 'spinal-stabilizers'],
    muscleGroupIds: ['core'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Intermediate',
    movementPattern: 'Isometric',
    instructions: [
      'Set cable at chest height, stand sideways holding handle with both hands against sternum.',
      'Adopt athletic stance with knees slightly bent and core braced.',
      'Press hands straight out in front of chest, resisting the cable rotational pull.',
      'Hold 2 seconds with straight arms, then pull hands back to sternum.'
    ],
    commonMistakes: [
      'Allowing torso to rotate toward the cable stack.',
      'Shrugging shoulders during press.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '10 - 12 Reps (with hold)'
  },
  {
    id: 'plank-standard',
    name: 'Standard Forearm Plank',
    description: 'Fundamental isometric anti-extension core exercise training deep transverse abdominis and spinal alignment.',
    primaryMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'quadratus-lumborum', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'multifidus', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['deep-core', 'upper-abs'],
    muscleGroupIds: ['core'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isometric',
    instructions: [
      'Rest on forearms with elbows directly beneath shoulders.',
      'Extend legs back, toes tucked, body forming a straight rigid line.',
      'Engage abs, glutes, and quads while pulling belly button toward spine.',
      'Hold position while breathing steadily through the diaphragm.'
    ],
    commonMistakes: [
      'Sagging hips toward floor.',
      'Piking glutes high into air.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '45 - 60 Sec Hold'
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug Core Isometric',
    description: 'Lumbar stabilization exercise teaching anterior core engagement while moving opposite extremities.',
    primaryMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'multifidus', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['deep-core', 'spinal-stabilizers'],
    muscleGroupIds: ['core'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isometric',
    instructions: [
      'Lie on back with arms straight up over chest and knees bent at 90 degrees over hips.',
      'Press lower back firmly flat into the floor.',
      'Slowly lower right arm overhead and left leg toward floor simultaneously.',
      'Return to start and alternate with opposite limbs.'
    ],
    commonMistakes: [
      'Allowing lower back to arch off the floor.',
      'Rushing through reps.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 16 Total Reps'
  },
  {
    id: 'bird-dog',
    name: 'Bird Dog Cross-Body Extension',
    description: 'Foundational spinal stabilization exercise strengthening the multifidus, erector spinae, and gluteal stabilizers.',
    primaryMuscles: [
      { muscleId: 'multifidus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'erector-spinae', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'transversus-abdominis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['spinal-stabilizers', 'lower-back'],
    muscleGroupIds: ['core', 'back', 'hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isometric',
    instructions: [
      'Start on hands and knees with hands under shoulders and knees under hips.',
      'Extend right arm forward and left leg straight backward until parallel to floor.',
      'Hold peak position for 2 seconds without letting hips tilt.',
      'Return to all-fours and repeat on opposite side.'
    ],
    commonMistakes: [
      'Rotating pelvis or arching lower back at top.',
      'Lifting arm or leg too high.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 12 Reps / Side'
  },
  {
    id: 'stomach-vacuum',
    name: 'Standing Transverse Stomach Vacuum',
    description: 'Direct transversus abdominis neuromuscular recruitment drawing the waistline inward and increasing intra-abdominal pressure.',
    primaryMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'internal-oblique', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['deep-core'],
    muscleGroupIds: ['core'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Intermediate',
    movementPattern: 'Isometric',
    instructions: [
      'Stand with hands resting on hips or on a bench.',
      'Exhale all air completely out of your lungs.',
      'Without inhaling, suck your stomach in as hard as possible toward your spine.',
      'Hold the vacuum hold for 15-20 seconds before taking a shallow breath.'
    ],
    commonMistakes: [
      'Inhaling air during the vacuum hold.',
      'Holding breath with throat instead of diaphragm vacuum.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '15 - 20 Sec Hold'
  },
  {
    id: 'suitcase-carry',
    name: 'Single-Arm Suitcase Carry',
    description: 'Unilateral loaded carry challenging the contralateral quadratus lumborum, obliques, and deep core against lateral bending.',
    primaryMuscles: [
      { muscleId: 'quadratus-lumborum', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'external-oblique', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'brachioradialis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['posterior-core', 'obliques'],
    muscleGroupIds: ['core', 'arms'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Isometric',
    instructions: [
      'Pick up a heavy dumbbell in one hand only.',
      'Stand completely upright with shoulders square and level with the horizon.',
      'Walk forward in a straight line without leaning toward or away from the dumbbell.',
      'Switch hands after completing the distance.'
    ],
    commonMistakes: [
      'Leaning torso sideways to counterbalance weight.',
      'Taking fast unbalanced strides.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '30 - 40 Meters'
  },
  {
    id: 'superman-holds',
    name: 'Prone Superman Holds',
    description: 'Prone posterior chain extension loading the multifidus, thoracic erectors, and gluteal complex simultaneously.',
    primaryMuscles: [
      { muscleId: 'multifidus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'erector-spinae', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['spinal-stabilizers', 'lower-back'],
    muscleGroupIds: ['core', 'back', 'hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isometric',
    instructions: [
      'Lie face down on floor with arms extended overhead and legs straight.',
      'Lift arms, chest, and thighs off the floor simultaneously.',
      'Squeeze lower back, multifidus, and glutes at the top.',
      'Hold for 3-5 seconds, then lower smoothly.'
    ],
    commonMistakes: [
      'Jerking upward.',
      'Holding breath.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 12 Reps (with hold)'
  },

  // ==========================================
  // HIPS & GLUTES EXERCISES (15 Exercises)
  // ==========================================
  {
    id: 'barbell-hip-thrust',
    name: 'Barbell Hip Thrust',
    description: 'Gold standard exercise for maximal gluteus maximus mass, peak extension power, and hip hinge strength.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['glute-max', 'glute-med'],
    muscleGroupIds: ['hips-glutes', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Sit on floor with upper back against flat bench, padded barbell over hips.',
      'Plant feet flat on floor shoulder-width apart.',
      'Drive through heels to extend hips upward until thighs and torso align horizontally.',
      'Squeeze glutes hard at top peak for 1 second, then lower under control.'
    ],
    commonMistakes: [
      'Arching lower back instead of hinging at hips.',
      'Rising onto toes instead of pressing through heels.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'dumbbell-glute-bridge',
    name: 'Dumbbell Glute Bridge',
    description: 'Floor-based hip extension loading the gluteus maximus with reduced spinal shear stress.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['glute-max'],
    muscleGroupIds: ['hips-glutes'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Lie on back with knees bent and feet flat on floor hip-width apart.',
      'Hold a dumbbell securely across hips.',
      'Drive through heels to lift hips until body forms a straight line from shoulders to knees.',
      'Squeeze glutes tightly at top, then lower slowly.'
    ],
    commonMistakes: [
      'Lifting heels off floor.',
      'Over-extending the lumbar spine.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-glute-kickback',
    name: 'Cable Standing Glute Kickback',
    description: 'Isolated hip extension movement maximizing peak contraction in the upper gluteus maximus fibers.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    stabilizerMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'STABILIZER', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['glute-max'],
    muscleGroupIds: ['hips-glutes', 'core'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Attach ankle strap to low cable pulley and fasten around ankle.',
      'Face cable tower, hinge forward slightly at hips while maintaining flat back.',
      'Extend working leg straight back and slightly outward in a 30-degree arc.',
      'Squeeze glute hard at top of contraction for 1 second before lowering under control.'
    ],
    commonMistakes: [
      'Arching lower back to gain false range of motion.',
      'Swinging weight with momentum instead of glute tension.'
    ],
    recommendedSets: '3 - 4 Sets / Leg',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'cable-standing-hip-abduction',
    name: 'Cable Standing Hip Abduction',
    description: 'Premier lateral hip isolation exercise loading gluteus medius, gluteus minimus, and tensor fasciae latae through complete abduction range.',
    primaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'gluteus-minimus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'tensor-fasciae-latae', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    stabilizerMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'STABILIZER', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['glute-med', 'glute-min', 'hip-abductors'],
    muscleGroupIds: ['hips-glutes'],
    trainingType: 'Weight Training',
    equipment: 'Cable',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Fasten ankle cuff to low cable pulley and attach around outer ankle.',
      'Stand sideways to cable stack, bracing on frame with near arm.',
      'Sweep working leg straight outward away from body to approximately 40 degrees without tilting pelvis.',
      'Pause 1 second at apex, then slowly lower back across centerline.'
    ],
    commonMistakes: [
      'Leaning torso sideways to heave the weight up.',
      'Rotating foot outward turning abduction into hip flexion.'
    ],
    recommendedSets: '3 - 4 Sets / Side',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'lateral-band-walks',
    name: 'Lateral Resistance Band Monster Walks',
    description: 'Dynamic abduction endurance exercise firing the gluteus medius, minimus, and TFL stabilizers.',
    primaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'gluteus-minimus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'tensor-fasciae-latae', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['glute-med', 'hip-abductors'],
    muscleGroupIds: ['hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'Resistance Band',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Place mini-band around ankles or just above knees.',
      'Assume a quarter-squat athletic stance with feet hip-width.',
      'Take controlled lateral steps outward while keeping constant tension on band.',
      'Perform prescribed steps in one direction, then reverse.'
    ],
    commonMistakes: [
      'Allowing knees to cave inward.',
      'Dragging feet on the floor.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '15 - 20 Steps / Direction'
  },
  {
    id: 'side-lying-clamshells',
    name: 'Side-Lying Resistance Band Clamshells',
    description: 'Hip external rotation and abduction isolation activating deep gluteus medius and minimus stabilizing fibers.',
    primaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'gluteus-minimus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['glute-med', 'glute-min'],
    muscleGroupIds: ['hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'Resistance Band',
    difficulty: 'Beginner',
    movementPattern: 'Rotation',
    instructions: [
      'Lie on your side with hips bent at 45° and knees bent at 90°, band around knees.',
      'Keep feet glued together as you rotate top knee upward like a clamshell.',
      'Hold peak squeeze for 1 second without rolling pelvis backward.',
      'Lower slowly back to starting position.'
    ],
    commonMistakes: [
      'Rolling pelvis backward to fake range of motion.',
      'Opening feet apart.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'side-lying-leg-raise',
    name: 'Side-Lying Hip Abduction Raise',
    description: 'Bodyweight lateral hip raise targeting gluteus medius, gluteus minimus, and tensor fasciae latae.',
    primaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'gluteus-minimus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'tensor-fasciae-latae', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['hip-abductors', 'glute-med'],
    muscleGroupIds: ['hips-glutes'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Lie straight on side with bottom arm supporting head.',
      'Keep top leg straight and toe pointed slightly downward.',
      'Raise top leg upward to 45 degrees, squeezing outer hip.',
      'Lower slowly back down.'
    ],
    commonMistakes: [
      'Pointing toe upward (shifts tension from glute medius to hip flexors).',
      'Moving too fast.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'copenhagen-adductor-plank',
    name: 'Copenhagen Adductor Plank',
    description: 'Elite isometric groin and medial chain exercise building bulletproof adductor longus tensile strength and pelvic stability.',
    primaryMuscles: [
      { muscleId: 'adductor-longus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'internal-oblique', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'external-oblique', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'STABILIZER', level: 'HIGH' }
    ],
    trainingRegionIds: ['hip-adductors', 'obliques', 'deep-core'],
    muscleGroupIds: ['hips-glutes', 'core'],
    trainingType: 'Bodyweight',
    equipment: 'Bench',
    difficulty: 'Advanced',
    movementPattern: 'Isometric',
    instructions: [
      'Lie in a side plank position with top foot resting elevated on a flat bench.',
      'Elevate hips until body forms a straight line supported only by top foot and bottom forearm.',
      'Hold bottom leg hovering just beneath the bench.',
      'Maintain rigid pelvic alignment without hip sag for the prescribed time.'
    ],
    commonMistakes: [
      'Allowing hips to drop toward floor.',
      'Rotating top hip forward or backward.'
    ],
    recommendedSets: '3 Sets / Side',
    recommendedReps: '20 - 30 Sec Hold'
  },
  {
    id: 'seated-machine-adduction',
    name: 'Seated Machine Adduction',
    description: 'Direct medial thigh adductor builder providing controlled tension throughout the full hip adduction arc.',
    primaryMuscles: [
      { muscleId: 'adductor-longus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'vastus-medialis', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['hip-adductors'],
    muscleGroupIds: ['hips-glutes'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Sit comfortably in adductor machine with pads resting against inner knees.',
      'Disengage pin to open legs into a comfortable groin stretch.',
      'Squeeze knees smoothly together toward the machine center until pads touch.',
      'Hold peak squeeze for 1 second, then control back over a 3-second negative.'
    ],
    commonMistakes: [
      'Allowing weights to crash at the wide stretch point.',
      'Using momentum to slam pads together.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    description: 'High-yield unilateral leg & glute exercise correcting imbalances and building gluteus medius pelvic stability.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'vastus-lateralis', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['glute-max', 'glute-med', 'quads-rectus-femoris'],
    muscleGroupIds: ['hips-glutes', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Squat',
    instructions: [
      'Place rear foot lace-down on flat bench behind you.',
      'Step front foot out, holding dumbbells at sides.',
      'Lower back knee down toward floor until front thigh reaches parallel.',
      'Drive through front heel to return to standing.'
    ],
    commonMistakes: [
      'Front knee collapsing inward.',
      'Stepping front foot too close to bench.'
    ],
    recommendedSets: '3 Sets / Leg',
    recommendedReps: '8 - 10 Reps'
  },
  {
    id: 'step-ups-dumbbell',
    name: 'Weighted Dumbbell Step-Ups',
    description: 'Unilateral glute and quad exercise driving deep hip extension and knee stability on an elevated box.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'gastrocnemius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['glute-max', 'quads-rectus-femoris'],
    muscleGroupIds: ['hips-glutes', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Bench',
    difficulty: 'Beginner',
    movementPattern: 'Lunge',
    instructions: [
      'Stand facing a flat bench or sturdy box holding dumbbells at your sides.',
      'Place entire foot of lead leg on the box.',
      'Drive through lead heel to stand upright on box without pushing off rear toe.',
      'Lower rear foot back to floor under full control.'
    ],
    commonMistakes: [
      'Pushing off back foot instead of using lead leg.',
      'Knee collapsing inward on the step.'
    ],
    recommendedSets: '3 Sets / Leg',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'walking-lunges',
    name: 'Dumbbell Walking Lunges',
    description: 'Dynamic forward lunging movement strengthening gluteus maximus, quadriceps, and dynamic hip balance.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'vastus-lateralis', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'gastrocnemius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['glute-max', 'quads-rectus-femoris'],
    muscleGroupIds: ['hips-glutes', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Lunge',
    instructions: [
      'Hold dumbbells at sides with tall upright posture.',
      'Take a long step forward, lowering back knee toward floor until front thigh is parallel.',
      'Drive through front heel to step forward directly into next lunge.',
      'Continue walking for the prescribed rep count.'
    ],
    commonMistakes: [
      'Taking too short strides (puts shear on front knee).',
      'Torso collapsing forward.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '20 Total Steps'
  },
  {
    id: 'reverse-lunges',
    name: 'Barbell Reverse Lunges',
    description: 'Backward stepping lunge placing high hypertrophy tension onto the gluteus maximus with reduced patellofemoral pressure.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['glute-max', 'quads-rectus-femoris'],
    muscleGroupIds: ['hips-glutes', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Lunge',
    instructions: [
      'Rest barbell across upper traps, feet hip-width apart.',
      'Take a large step backward with one leg, lowering back knee toward floor.',
      'Drive forcefully through front heel to return to starting position.',
      'Alternate legs or perform all reps on one side first.'
    ],
    commonMistakes: [
      'Pushing off back toe instead of front leg.',
      'Losing balance due to stepping directly behind front foot.'
    ],
    recommendedSets: '3 Sets / Leg',
    recommendedReps: '8 - 10 Reps'
  },
  {
    id: 'curtsy-lunge',
    name: 'Dumbbell Curtsy Lunge',
    description: 'Multi-planar lunge stepping backward and across the midline to strongly recruit the gluteus medius and tensor fasciae latae.',
    primaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'tensor-fasciae-latae', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['glute-med', 'glute-max', 'hip-abductors'],
    muscleGroupIds: ['hips-glutes', 'legs'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Lunge',
    instructions: [
      'Hold dumbbells at sides, standing feet hip-width apart.',
      'Step one leg backward and diagonally behind the lead leg.',
      'Lower hips until front thigh is parallel to floor.',
      'Drive through front heel to return to start.'
    ],
    commonMistakes: [
      'Stepping too far across twisting the front knee.',
      'Leaning torso sideways.'
    ],
    recommendedSets: '3 Sets / Leg',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'single-leg-rdl',
    name: 'Single-Leg Romanian Deadlift',
    description: 'Unilateral posterior chain powerhouse challenging gluteus medius pelvic stability and hamstring stretch.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'erector-spinae', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    stabilizerMuscles: [
      { muscleId: 'transversus-abdominis', emphasis: 'STABILIZER', level: 'HIGH' }
    ],
    trainingRegionIds: ['glute-max', 'glute-med', 'hamstrings-biceps-femoris'],
    muscleGroupIds: ['hips-glutes', 'legs', 'core'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Intermediate',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Hold dumbbell in opposite hand of working plant leg.',
      'Hinge forward at hip, extending free leg straight behind body for counterbalance.',
      'Lower torso until parallel to floor while feeling deep hamstring and glute stretch.',
      'Drive through plant foot heel to return to standing position.'
    ],
    commonMistakes: [
      'Opening hip upward instead of keeping hips square to floor.',
      'Rounding thoracic spine.'
    ],
    recommendedSets: '3 Sets / Leg',
    recommendedReps: '10 - 12 Reps'
  },

  // ==========================================
  // LEGS EXERCISES (14 Exercises)
  // ==========================================
  {
    id: 'barbell-back-squat',
    name: 'Barbell High-Bar Back Squat',
    description: 'King of lower-body exercises for overall quadriceps sweep, leg mass, and structural core strength.',
    primaryMuscles: [
      { muscleId: 'vastus-lateralis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-intermedius', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'erector-spinae', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['quads-vastus-lateralis', 'quads-rectus-femoris', 'quads-vastus-medialis', 'glute-max'],
    muscleGroupIds: ['legs', 'hips-glutes'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Squat',
    instructions: [
      'Rest bar on upper traps, feet shoulder-width apart, toes flared 15°.',
      'Inhale, brace core tightly, bend knees and hips simultaneously to descend.',
      'Squat below parallel, then drive through full foot to return upward.'
    ],
    commonMistakes: [
      'Knees caving inward (valgus collapse).',
      'Heels lifting off ground.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '6 - 10 Reps'
  },
  {
    id: 'barbell-front-squat',
    name: 'Barbell Front Squat',
    description: 'Upright anterior quad-dominant squat heavily loading the vastus medialis and thoracic core.',
    primaryMuscles: [
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-lateralis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rectus-abdominis', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'erector-spinae', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['quads-rectus-femoris', 'quads-vastus-medialis'],
    muscleGroupIds: ['legs', 'core'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    movementPattern: 'Squat',
    instructions: [
      'Rest bar across anterior deltoids with fingertips under bar and elbows high.',
      'Keep torso as upright as possible while squatting deeply between hips.',
      'Drive through midfoot, keeping elbows high throughout ascent.'
    ],
    commonMistakes: [
      'Dropping elbows causing upper back to collapse.',
      'Leaning forward like a back squat.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '6 - 8 Reps'
  },
  {
    id: 'goblet-squat',
    name: 'Kettlebell Goblet Squat',
    description: 'Front-loaded squat variation teaching ideal upright squat mechanics, deep hip flexion, and quad recruitment.',
    primaryMuscles: [
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'rectus-abdominis', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['quads-rectus-femoris', 'quads-vastus-medialis'],
    muscleGroupIds: ['legs', 'core'],
    trainingType: 'Weight Training',
    equipment: 'Kettlebell',
    difficulty: 'Beginner',
    movementPattern: 'Squat',
    instructions: [
      'Hold kettlebell or dumbbell vertically against chest with both hands.',
      'Stand with feet slightly wider than shoulder-width.',
      'Squat down between knees keeping chest up and elbows inside knees.',
      'Drive through heels to return to standing.'
    ],
    commonMistakes: [
      'Allowing kettlebell to pull chest forward.',
      'Not squatting deep enough.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '10 - 15 Reps'
  },
  {
    id: 'leg-press',
    name: '45-Degree Sled Leg Press',
    description: 'Heavy quad builder allowing high mechanical tension on vastus lateralis and rectus femoris with minimal spinal compression.',
    primaryMuscles: [
      { muscleId: 'vastus-lateralis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['quads-vastus-lateralis', 'quads-rectus-femoris'],
    muscleGroupIds: ['legs', 'hips-glutes'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Squat',
    instructions: [
      'Sit in machine with back firmly against pad and feet shoulder-width on sled.',
      'Release safety handles, lower sled slowly until knees bend to 90 degrees.',
      'Press sled upward through heels and midfoot (stop just short of knee hyperextension).'
    ],
    commonMistakes: [
      'Locking knees out violently.',
      'Allowing lower back to peel off seat at bottom.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 15 Reps'
  },
  {
    id: 'hack-squat-machine',
    name: 'Machine Hack Squat',
    description: 'Fixed-angle machine squat placing intense direct tension across the vastus lateralis and outer quad sweep.',
    primaryMuscles: [
      { muscleId: 'vastus-lateralis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'rectus-femoris', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['quads-vastus-lateralis', 'quads-vastus-medialis'],
    muscleGroupIds: ['legs'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Intermediate',
    movementPattern: 'Squat',
    instructions: [
      'Position shoulders under pads with back flat against sled.',
      'Place feet low-to-mid on platform, shoulder-width apart.',
      'Squat down slowly until knees reach full flexion.',
      'Drive platform back up to starting height.'
    ],
    commonMistakes: [
      'Lifting heels off footplate.',
      'Bouncing at bottom.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'leg-extensions',
    name: 'Seated Leg Extensions',
    description: 'Isolated quad extension targeting vastus medialis (VMO teardrop) and rectus femoris flex.',
    primaryMuscles: [
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'vastus-lateralis', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'vastus-intermedius', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['quads-vastus-medialis', 'quads-rectus-femoris'],
    muscleGroupIds: ['legs'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Sit in machine with back pad against spine, lower shin pad above ankles.',
      'Extend legs upward until knees fully straighten.',
      'Pause 1 second squeeze quads at top, then lower smoothly.'
    ],
    commonMistakes: [
      'Slashing weight up using momentum.',
      'Setting shin pad too high on shin.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'sissy-squat',
    name: 'Bodyweight Sissy Squat',
    description: 'Bodyweight knee extension extreme stretch isolating the rectus femoris through full knee flexion and hip extension.',
    primaryMuscles: [
      { muscleId: 'rectus-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'vastus-lateralis', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'tensor-fasciae-latae', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['quads-rectus-femoris'],
    muscleGroupIds: ['legs'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Advanced',
    movementPattern: 'Isolation',
    instructions: [
      'Stand holding a sturdy pole or frame with one hand.',
      'Rise onto balls of feet, push knees forward while leaning torso backward in a straight line.',
      'Descend until knees reach deep bend.',
      'Contract quads to return to standing.'
    ],
    commonMistakes: [
      'Bending at hips instead of keeping torso-thigh line flat.',
      'Descending faster than control allows.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'romanian-deadlift',
    name: 'Barbell Romanian Deadlift (RDL)',
    description: 'Posterior chain hip hinge builder targeting hamstring stretch across biceps femoris, semitendinosus, and glutes.',
    primaryMuscles: [
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'semitendinosus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'semimembranosus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'erector-spinae', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['hamstrings-biceps-femoris', 'hamstrings-semitendinosus', 'glute-max'],
    muscleGroupIds: ['legs', 'hips-glutes', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Stand upright holding barbell at thighs, feet hip-width apart.',
      'Push hips backward while keeping slight flex in knees and flat back.',
      'Lower bar along thighs to mid-shin feeling deep hamstring stretch.',
      'Drive hips forward to return to standing upright.'
    ],
    commonMistakes: [
      'Rounding lower spine.',
      'Bending knees too much turning RDL into squat.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '8 - 12 Reps'
  },
  {
    id: 'stiff-leg-deadlift',
    name: 'Stiff-Legged Barbell Deadlift',
    description: 'Elevated hip hinge maximizing hamstring flexibility and eccentric loading on semimembranosus and biceps femoris.',
    primaryMuscles: [
      { muscleId: 'semimembranosus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'semitendinosus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'erector-spinae', emphasis: 'SECONDARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['hamstrings-semimembranosus', 'hamstrings-semitendinosus'],
    muscleGroupIds: ['legs', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Stand over bar with feet hip-width, knees kept almost completely locked.',
      'Hinge at hips, reach down to grip barbell.',
      'Pull bar up while keeping hips high, feeling extreme hamstring stretch.',
      'Lower bar all the way back to floor.'
    ],
    commonMistakes: [
      'Rounding back without active hamstring control.',
      'Bending knees to avoid hamstring stretch.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '8 - 10 Reps'
  },
  {
    id: 'lying-leg-curls',
    name: 'Lying Hamstring Leg Curls',
    description: 'Direct hamstring knee flexion exercise isolating biceps femoris and semitendinosus in the shortened position.',
    primaryMuscles: [
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'semitendinosus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'semimembranosus', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'gastrocnemius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['hamstrings-biceps-femoris'],
    muscleGroupIds: ['legs'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Lie face down on machine with leg pad resting just above heels.',
      'Grip machine handles, curl legs upward toward glutes.',
      'Squeeze hamstrings at top bend, then lower under full control.'
    ],
    commonMistakes: [
      'Lifting hips off bench during contraction.',
      'Using momentum.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'seated-leg-curls',
    name: 'Seated Hamstring Leg Curls',
    description: 'Knee flexion exercise with flexed hips placing hamstrings under deep pre-stretch for superior hypertrophy stimulus.',
    primaryMuscles: [
      { muscleId: 'semitendinosus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'semimembranosus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gastrocnemius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['hamstrings-semitendinosus', 'hamstrings-semimembranosus'],
    muscleGroupIds: ['legs'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Sit in machine with thighs secured firmly under lap pad, lower pad behind ankles.',
      'Curl legs downward and backward under the seat.',
      'Hold 1 second contraction at bottom, then return slowly.'
    ],
    commonMistakes: [
      'Not securing thigh pad tightly.',
      'Rushing the eccentric return.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '10 - 12 Reps'
  },
  {
    id: 'nordic-hamstring-curl',
    name: 'Bodyweight Nordic Hamstring Curls',
    description: 'The highest eccentric hamstring force producer, proven for building bulletproof biceps femoris and preventing sprint tears.',
    primaryMuscles: [
      { muscleId: 'biceps-femoris', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'semitendinosus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'semimembranosus', emphasis: 'SECONDARY', level: 'HIGH' },
      { muscleId: 'gastrocnemius', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'gluteus-maximus', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['hamstrings-biceps-femoris'],
    muscleGroupIds: ['legs'],
    trainingType: 'Bodyweight',
    equipment: 'Bench',
    difficulty: 'Advanced',
    movementPattern: 'Isolation',
    instructions: [
      'Kneel on pad with ankles securely locked down by a partner or heavy barbell.',
      'Keep straight line from knees to shoulders, slowly lower body forward toward floor resisting with hamstrings.',
      'Catch yourself on floor with hands, push lightly off floor, and pull back up with hamstrings.'
    ],
    commonMistakes: [
      'Bending at hips (breaking the straight thigh-torso line).',
      'Falling too quickly without resisting.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '5 - 8 Reps'
  },
  {
    id: 'sumo-deadlift',
    name: 'Barbell Sumo Deadlift',
    description: 'Wide-stance deadlift emphasizing hip adductors, gluteus maximus, and vastus medialis with a more upright spine.',
    primaryMuscles: [
      { muscleId: 'gluteus-maximus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'adductor-longus', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'vastus-medialis', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'biceps-femoris', emphasis: 'SECONDARY', level: 'MEDIUM' },
      { muscleId: 'erector-spinae', emphasis: 'SECONDARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['glute-max', 'hip-adductors', 'quads-vastus-medialis'],
    muscleGroupIds: ['legs', 'hips-glutes', 'back'],
    trainingType: 'Weight Training',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    movementPattern: 'Hip Hinge',
    instructions: [
      'Take wide sumo stance with toes pointed out at 45 degrees.',
      'Grip bar inside legs, chest up and hips close to bar.',
      'Drive floor apart with feet and stand upright forcefully.'
    ],
    commonMistakes: [
      'Hips shooting up first before bar leaves floor.',
      'Knees caving inward.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '4 - 6 Reps'
  },

  // ==========================================
  // CALVES & LOWER LEG (5 Exercises)
  // ==========================================
  {
    id: 'standing-calf-raises',
    name: 'Standing Machine Calf Raises',
    description: 'Heavy gastrocnemius calf builder utilizing full ankle extension and deep Achilles stretch over a locked knee.',
    primaryMuscles: [
      { muscleId: 'gastrocnemius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'soleus', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['calves-gastrocnemius', 'calves-soleus'],
    muscleGroupIds: ['legs'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Stand on platform with balls of feet, shoulder pads on traps, knees straight.',
      'Lower heels as deep as possible into a full calf stretch.',
      'Drive up onto balls of big toes, squeezing gastrocnemius for 2 seconds at peak.',
      'Lower slowly over 3 seconds.'
    ],
    commonMistakes: [
      'Bouncing at bottom utilizing Achilles tendon rebound.',
      'Bending knees.'
    ],
    recommendedSets: '4 Sets',
    recommendedReps: '10 - 15 Reps'
  },
  {
    id: 'seated-calf-raises',
    name: 'Seated Machine Calf Raises',
    description: 'Bent-knee calf exercise slackening the gastrocnemius to isolate the deep soleus muscle.',
    primaryMuscles: [
      { muscleId: 'soleus', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    secondaryMuscles: [
      { muscleId: 'gastrocnemius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['calves-soleus'],
    muscleGroupIds: ['legs'],
    trainingType: 'Weight Training',
    equipment: 'Machine',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Sit in machine with thigh pad secured over lower thighs, balls of feet on block.',
      'Lower heels fully into deep stretch.',
      'Press through balls of feet to raise heels as high as possible.',
      'Hold peak squeeze for 1 second before descending.'
    ],
    commonMistakes: [
      'Bouncing weight.',
      'Not getting full range of motion.'
    ],
    recommendedSets: '3 - 4 Sets',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'donkey-calf-raises',
    name: 'Donkey Calf Raises',
    description: 'Hinged torso calf raise placing the gastrocnemius in an optimal stretch position for maximal recruitment.',
    primaryMuscles: [
      { muscleId: 'gastrocnemius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'soleus', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    trainingRegionIds: ['calves-gastrocnemius'],
    muscleGroupIds: ['legs'],
    trainingType: 'Bodyweight',
    equipment: 'Machine',
    difficulty: 'Intermediate',
    movementPattern: 'Isolation',
    instructions: [
      'Hinge forward at hips at 90 degrees with pad or weight resting across lower back/sacrum.',
      'Keep knees straight and drop heels low off the step.',
      'Press up onto toes squeezing calves hard at top.',
      'Lower slowly to full bottom stretch.'
    ],
    commonMistakes: [
      'Bending knees during raise.',
      'Rushing reps.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '15 - 20 Reps'
  },
  {
    id: 'single-leg-dumbbell-calf-raise',
    name: 'Single-Leg Dumbbell Calf Raise',
    description: 'Unilateral calf raise correcting side-to-side ankle strength asymmetries with full bodyweight and dumbbell overload.',
    primaryMuscles: [
      { muscleId: 'gastrocnemius', emphasis: 'PRIMARY', level: 'HIGH' },
      { muscleId: 'soleus', emphasis: 'PRIMARY', level: 'MEDIUM' }
    ],
    secondaryMuscles: [
      { muscleId: 'gluteus-medius', emphasis: 'SECONDARY', level: 'LOW' }
    ],
    trainingRegionIds: ['calves-gastrocnemius'],
    muscleGroupIds: ['legs', 'hips-glutes'],
    trainingType: 'Weight Training',
    equipment: 'Dumbbell',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Hold dumbbell in hand on working side, stand on ball of one foot on a step.',
      'Hold a frame with other hand for balance.',
      'Lower heel deeply below step level, then press up onto big toe to full apex.',
      'Pause 1 second, then repeat.'
    ],
    commonMistakes: [
      'Rolling weight to outer edge of foot.',
      'Using bouncing rhythm.'
    ],
    recommendedSets: '3 Sets / Leg',
    recommendedReps: '12 - 15 Reps'
  },
  {
    id: 'tibialis-raises',
    name: 'Wall Tibialis Anterior Raises',
    description: 'Direct shin dorsiflexion exercise building tibialis anterior mass to protect knees and prevent shin splints.',
    primaryMuscles: [
      { muscleId: 'tibialis-anterior', emphasis: 'PRIMARY', level: 'HIGH' }
    ],
    trainingRegionIds: ['calves-soleus'],
    muscleGroupIds: ['legs'],
    trainingType: 'Bodyweight',
    equipment: 'None',
    difficulty: 'Beginner',
    movementPattern: 'Isolation',
    instructions: [
      'Stand with back leaning flat against a wall, feet placed about 2 feet in front of you.',
      'Keep legs straight and pull toes/balls of feet as high toward shins as possible.',
      'Hold top dorsiflexion for 1 second feeling intense shin burn.',
      'Lower toes smoothly back to floor.'
    ],
    commonMistakes: [
      'Bending knees.',
      'Placing feet too close to wall.'
    ],
    recommendedSets: '3 Sets',
    recommendedReps: '20 - 25 Reps'
  }
]