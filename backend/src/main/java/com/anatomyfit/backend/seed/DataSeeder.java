package com.anatomyfit.backend.seed;

import com.anatomyfit.backend.entity.Exercise;
import com.anatomyfit.backend.entity.ExerciseMuscle;
import com.anatomyfit.backend.repository.ExerciseRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.InputStream;
import java.util.List;
import java.util.Map;

@Component
public class DataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    private final ExerciseRepository exerciseRepository;
    private final ObjectMapper objectMapper;

    public DataSeeder(ExerciseRepository exerciseRepository, ObjectMapper objectMapper) {
        this.exerciseRepository = exerciseRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        long count = exerciseRepository.count();
        if (count > 0) {
            log.info("DataSeeder: {} exercises already in database, skipping seed.", count);
            return;
        }

        log.info("DataSeeder: Seeding exercises from exercises.json...");

        ClassPathResource resource = new ClassPathResource("exercises.json");
        if (!resource.exists()) {
            log.warn("DataSeeder: exercises.json not found in classpath, skipping seed.");
            return;
        }

        try (InputStream is = resource.getInputStream()) {
            List<Map<String, Object>> exerciseList = objectMapper.readValue(is, new TypeReference<>() {});

            int seeded = 0;
            for (Map<String, Object> raw : exerciseList) {
                try {
                    Exercise ex = mapToExercise(raw);
                    exerciseRepository.save(ex);
                    seeded++;
                } catch (Exception e) {
                    log.error("DataSeeder: Failed to seed exercise {}: {}", raw.get("id"), e.getMessage());
                }
            }
            log.info("DataSeeder: Successfully seeded {} exercises.", seeded);
        }
    }

    @SuppressWarnings("unchecked")
    private Exercise mapToExercise(Map<String, Object> raw) {
        Exercise ex = new Exercise();
        ex.setId((String) raw.get("id"));
        ex.setName((String) raw.get("name"));
        ex.setDescription((String) raw.get("description"));
        ex.setCategory((String) raw.get("category"));
        ex.setTrainingType((String) raw.get("trainingType"));
        ex.setEquipment((String) raw.get("equipment"));
        ex.setDifficulty((String) raw.get("difficulty"));
        ex.setMovementPattern((String) raw.get("movementPattern"));
        ex.setRecommendedSets((String) raw.get("recommendedSets"));
        ex.setRecommendedReps((String) raw.get("recommendedReps"));

        // Instructions stored as ";;" delimited
        if (raw.get("instructions") instanceof List<?> instrList) {
            ex.setInstructions(String.join(";;", instrList.stream().map(Object::toString).toList()));
        }
        if (raw.get("commonMistakes") instanceof List<?> mistakeList) {
            ex.setCommonMistakes(String.join(";;", mistakeList.stream().map(Object::toString).toList()));
        }
        if (raw.get("trainingRegionIds") instanceof List<?> regionList) {
            ex.setTrainingRegionIds(String.join(";;", regionList.stream().map(Object::toString).toList()));
        }
        if (raw.get("muscleGroupIds") instanceof List<?> groupList) {
            ex.setMuscleGroupIds(String.join(";;", groupList.stream().map(Object::toString).toList()));
        }

        // Muscles
        addMuscles(ex, raw, "primaryMuscles");
        addMuscles(ex, raw, "secondaryMuscles");
        addMuscles(ex, raw, "stabilizerMuscles");

        return ex;
    }

    @SuppressWarnings("unchecked")
    private void addMuscles(Exercise ex, Map<String, Object> raw, String key) {
        if (raw.get(key) instanceof List<?> muscleList) {
            for (Object m : muscleList) {
                if (m instanceof Map<?, ?> mMap) {
                    Map<String, Object> muscle = (Map<String, Object>) mMap;
                    ExerciseMuscle em = new ExerciseMuscle(
                            (String) muscle.get("muscleId"),
                            (String) muscle.get("emphasis"),
                            (String) muscle.get("level")
                    );
                    ex.addMuscle(em);
                }
            }
        }
    }
}
