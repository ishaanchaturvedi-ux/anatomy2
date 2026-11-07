
package com.anatomyfit.backend.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.anatomyfit.backend.dto.ExerciseDTO;
import com.anatomyfit.backend.dto.RecommendationRequestDTO;
import com.anatomyfit.backend.dto.RecommendationResponseDTO;
import com.anatomyfit.backend.entity.Exercise;
import com.anatomyfit.backend.entity.ExerciseMuscle;
import com.anatomyfit.backend.repository.ExerciseRepository;

@Service
public class RecommendationService {

    private final ExerciseRepository exerciseRepository;
    private final ExerciseService exerciseService;

    public RecommendationService(ExerciseRepository exerciseRepository,
                                 ExerciseService exerciseService) {
        this.exerciseRepository = exerciseRepository;
        this.exerciseService = exerciseService;
    }

    public List<RecommendationResponseDTO> generateRecommendations(
            RecommendationRequestDTO request) {

        List<Exercise> allExercises = exerciseRepository.findAll();
        List<RecommendationResponseDTO> scoredList = new ArrayList<>();

        Set<String> equipFilter =
                request.getAvailableEquipment() == null
                ? Collections.emptySet()
                : request.getAvailableEquipment().stream()
                    .filter(Objects::nonNull)
                    .map(s -> s.trim().toLowerCase())
                    .collect(Collectors.toSet());

        String goal = normalize(request.getGoal(), "hypertrophy");
        String exp = normalize(request.getExperienceLevel(), "intermediate");
        String targetCategory = normalize(request.getTargetMuscleGroup(), null);
        String specificMuscle = normalize(request.getSpecificMuscleId(), null);

        for (Exercise ex : allExercises) {

            int score = 25;
            List<String> reasons = new ArrayList<>();

            // 1. Muscle matching
            boolean primaryMatch = false;
            boolean secondaryMatch = false;
            boolean groupMatch = false;

            if (specificMuscle != null && ex.getMuscles() != null) {
                for (ExerciseMuscle muscle : ex.getMuscles()) {
                    if (muscle.getMuscleId() != null
                            && muscle.getMuscleId().equalsIgnoreCase(specificMuscle)) {

                        if ("PRIMARY".equalsIgnoreCase(muscle.getEmphasis())) {
                            primaryMatch = true;
                        } else if ("SECONDARY".equalsIgnoreCase(muscle.getEmphasis())) {
                            secondaryMatch = true;
                        }
                    }
                }
            }

            if (targetCategory != null) {
                String groupIds = normalize(ex.getMuscleGroupIds(), "");
                String category = normalize(ex.getCategory(), "");

                groupMatch = containsGroup(groupIds, targetCategory)
                        || category.equals(targetCategory);

                if (!groupMatch && ex.getMuscles() != null) {
                    for (ExerciseMuscle muscle : ex.getMuscles()) {
                        if (muscle.getMuscleId() != null
                                && muscle.getMuscleId().toLowerCase()
                                    .contains(targetCategory)) {
                            groupMatch = true;
                            break;
                        }
                    }
                }
            }

            boolean muscleMatch = primaryMatch || secondaryMatch || groupMatch;

            if (specificMuscle != null || targetCategory != null) {
                if (!muscleMatch) {
                    continue;
                }

                if (primaryMatch) {
                    score += 45;
                    reasons.add("Directly targets your selected muscle");
                } else if (secondaryMatch) {
                    score += 25;
                    reasons.add("Supports your selected muscle as a secondary target");
                } else {
                    score += 35;
                    reasons.add("Matches your selected muscle group");
                }
            }

            // 2. Equipment matching
            String exEq = normalize(ex.getEquipment(), "none");

            if (!equipFilter.isEmpty()) {
                boolean matches = equipFilter.contains(exEq)
                        || (exEq.equals("none")
                            && equipFilter.contains("bodyweight"))
                        || (exEq.equals("bodyweight")
                            && equipFilter.contains("none"));

                if (matches) {
                    score += 25;
                    reasons.add("Compatible with available equipment");
                } else {
                    score -= 15;
                }
            } else {
                score += 15;
            }

            // 3. Experience matching
            String difficulty = normalize(ex.getDifficulty(), "intermediate");

            if (difficulty.equals(exp)) {
                score += 20;
                reasons.add("Matches your selected experience level");
            } else if (exp.equals("beginner") && difficulty.equals("intermediate")) {
                score -= 15;
            } else if (exp.equals("beginner") && difficulty.equals("advanced")) {
                score -= 35;
            } else if (exp.equals("intermediate") && difficulty.equals("advanced")) {
                score -= 15;
            } else if (exp.equals("advanced") && difficulty.equals("beginner")) {
                score -= 10;
            }

            // 4. Fitness goal
            String programmingAdvice;

            if (goal.contains("strength")) {
                programmingAdvice = "4 Sets x 4-6 Reps, 2-3min Rest";
                if ("barbell".equals(exEq)
                        || "compound".equalsIgnoreCase(ex.getTrainingType())) {
                    score += 15;
                    reasons.add("Suitable compound movement for strength training");
                }
            } else if (goal.contains("endurance")) {
                programmingAdvice = "3 Sets x 12-20 Reps, 45-60s Rest";
                score += 10;
                reasons.add("Suitable for muscular endurance training");
            } else if (goal.contains("mobility")) {
                programmingAdvice = "2-3 Controlled Sets, Focus on Range of Motion";
                score += 10;
                reasons.add("Supports controlled movement and mobility");
            } else {
                programmingAdvice = "3-4 Sets x 8-12 Reps, 90s Rest";
                score += 15;
                reasons.add("Suitable for hypertrophy training");
            }

            int finalScore = Math.max(5, Math.min(99, score));

            if (finalScore >= 35) {
                ExerciseDTO dto = exerciseService.convertToDTO(ex);
                scoredList.add(new RecommendationResponseDTO(
                        dto, finalScore, reasons, programmingAdvice));
            }
        }

        scoredList.sort((a, b) ->
                Integer.compare(b.getMatchScore(), a.getMatchScore()));

        return scoredList.stream()
                .limit(15)
                .collect(Collectors.toList());
    }

    private String normalize(String value, String defaultValue) {
        return value == null || value.trim().isEmpty()
                ? defaultValue
                : value.trim().toLowerCase();
    }

    private boolean containsGroup(String storedGroups, String target) {
        if (storedGroups == null || storedGroups.isEmpty()) {
            return false;
        }

        return Arrays.stream(storedGroups.split(";;|,|;"))
                .map(String::trim)
                .anyMatch(group -> group.equalsIgnoreCase(target));
    }
}
