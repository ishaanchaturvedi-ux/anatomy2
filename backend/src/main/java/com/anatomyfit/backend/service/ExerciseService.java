package com.anatomyfit.backend.service;

import com.anatomyfit.backend.dto.ExerciseDTO;
import com.anatomyfit.backend.dto.ExerciseMuscleDTO;
import com.anatomyfit.backend.entity.Exercise;
import com.anatomyfit.backend.entity.ExerciseMuscle;
import com.anatomyfit.backend.repository.ExerciseRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public ExerciseService(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    public List<ExerciseDTO> getAllExercises() {
        return exerciseRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<ExerciseDTO> getExerciseById(String id) {
        return exerciseRepository.findById(id).map(this::convertToDTO);
    }

    public List<ExerciseDTO> getExercisesByMuscle(String muscleId) {
        if (muscleId == null || muscleId.isBlank()) {
            return getAllExercises();
        }
        return exerciseRepository.findByMuscleId(muscleId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ExerciseDTO> getExercisesByCategory(String category) {
        return exerciseRepository.findByCategoryIgnoreCase(category).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ExerciseDTO> getExercisesByEquipment(String equipment) {
        return exerciseRepository.findByEquipmentIgnoreCase(equipment).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ExerciseDTO> filterExercises(String search, String category, String equipment, String difficulty, String muscleId) {
        List<Exercise> list;

        boolean hasFilters = (category != null && !category.equalsIgnoreCase("all"))
                || (equipment != null && !equipment.equalsIgnoreCase("all"))
                || (difficulty != null && !difficulty.equalsIgnoreCase("all"))
                || (muscleId != null && !muscleId.equalsIgnoreCase("all"));

        if (hasFilters) {
            String cat = (category != null && !category.equalsIgnoreCase("all")) ? category : null;
            String eq = (equipment != null && !equipment.equalsIgnoreCase("all")) ? equipment : null;
            String diff = (difficulty != null && !difficulty.equalsIgnoreCase("all")) ? difficulty : null;
            String mus = (muscleId != null && !muscleId.equalsIgnoreCase("all")) ? muscleId : null;
            list = exerciseRepository.filterExercises(cat, eq, diff, mus);
        } else if (search != null && !search.isBlank()) {
            list = exerciseRepository.searchExercises(search.trim());
        } else {
            list = exerciseRepository.findAll();
        }

        // Secondary search filtering if both search and category/filters are supplied
        if (search != null && !search.isBlank()) {
            String q = search.toLowerCase();
            list = list.stream()
                    .filter(e -> (e.getName() != null && e.getName().toLowerCase().contains(q))
                            || (e.getDescription() != null && e.getDescription().toLowerCase().contains(q)))
                    .collect(Collectors.toList());
        }

        return list.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public ExerciseDTO convertToDTO(Exercise entity) {
        ExerciseDTO dto = new ExerciseDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setCategory(entity.getCategory());
        dto.setTrainingType(entity.getTrainingType());
        dto.setEquipment(entity.getEquipment());
        dto.setDifficulty(entity.getDifficulty());
        dto.setMovementPattern(entity.getMovementPattern());
        dto.setRecommendedSets(entity.getRecommendedSets());
        dto.setRecommendedReps(entity.getRecommendedReps());

        if (entity.getMuscles() != null) {
            for (ExerciseMuscle m : entity.getMuscles()) {
                ExerciseMuscleDTO mDto = new ExerciseMuscleDTO(m.getMuscleId(), m.getEmphasis(), m.getLevel());
                if ("PRIMARY".equalsIgnoreCase(m.getEmphasis())) {
                    dto.getPrimaryMuscles().add(mDto);
                } else if ("SECONDARY".equalsIgnoreCase(m.getEmphasis())) {
                    dto.getSecondaryMuscles().add(mDto);
                } else {
                    dto.getStabilizerMuscles().add(mDto);
                }
            }
        }

        if (entity.getInstructions() != null && !entity.getInstructions().isBlank()) {
            dto.setInstructions(Arrays.asList(entity.getInstructions().split(";;")));
        }
        if (entity.getCommonMistakes() != null && !entity.getCommonMistakes().isBlank()) {
            dto.setCommonMistakes(Arrays.asList(entity.getCommonMistakes().split(";;")));
        }
        if (entity.getTrainingRegionIds() != null && !entity.getTrainingRegionIds().isBlank()) {
            dto.setTrainingRegionIds(Arrays.asList(entity.getTrainingRegionIds().split(";;")));
        }
        if (entity.getMuscleGroupIds() != null && !entity.getMuscleGroupIds().isBlank()) {
            dto.setMuscleGroupIds(Arrays.asList(entity.getMuscleGroupIds().split(";;")));
        }

        return dto;
    }
}
