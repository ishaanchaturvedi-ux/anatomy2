package com.anatomyfit.backend.dto;

import java.util.ArrayList;
import java.util.List;

public class ExerciseDTO {
    private String id;
    private String name;
    private String description;
    private String category;
    private String trainingType;
    private String equipment;
    private String difficulty;
    private String movementPattern;
    private String recommendedSets;
    private String recommendedReps;

    private List<ExerciseMuscleDTO> primaryMuscles = new ArrayList<>();
    private List<ExerciseMuscleDTO> secondaryMuscles = new ArrayList<>();
    private List<ExerciseMuscleDTO> stabilizerMuscles = new ArrayList<>();

    private List<String> trainingRegionIds = new ArrayList<>();
    private List<String> muscleGroupIds = new ArrayList<>();
    private List<String> instructions = new ArrayList<>();
    private List<String> commonMistakes = new ArrayList<>();

    public ExerciseDTO() {}

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getTrainingType() { return trainingType; }
    public void setTrainingType(String trainingType) { this.trainingType = trainingType; }

    public String getEquipment() { return equipment; }
    public void setEquipment(String equipment) { this.equipment = equipment; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getMovementPattern() { return movementPattern; }
    public void setMovementPattern(String movementPattern) { this.movementPattern = movementPattern; }

    public String getRecommendedSets() { return recommendedSets; }
    public void setRecommendedSets(String recommendedSets) { this.recommendedSets = recommendedSets; }

    public String getRecommendedReps() { return recommendedReps; }
    public void setRecommendedReps(String recommendedReps) { this.recommendedReps = recommendedReps; }

    public List<ExerciseMuscleDTO> getPrimaryMuscles() { return primaryMuscles; }
    public void setPrimaryMuscles(List<ExerciseMuscleDTO> primaryMuscles) { this.primaryMuscles = primaryMuscles; }

    public List<ExerciseMuscleDTO> getSecondaryMuscles() { return secondaryMuscles; }
    public void setSecondaryMuscles(List<ExerciseMuscleDTO> secondaryMuscles) { this.secondaryMuscles = secondaryMuscles; }

    public List<ExerciseMuscleDTO> getStabilizerMuscles() { return stabilizerMuscles; }
    public void setStabilizerMuscles(List<ExerciseMuscleDTO> stabilizerMuscles) { this.stabilizerMuscles = stabilizerMuscles; }

    public List<String> getTrainingRegionIds() { return trainingRegionIds; }
    public void setTrainingRegionIds(List<String> trainingRegionIds) { this.trainingRegionIds = trainingRegionIds; }

    public List<String> getMuscleGroupIds() { return muscleGroupIds; }
    public void setMuscleGroupIds(List<String> muscleGroupIds) { this.muscleGroupIds = muscleGroupIds; }

    public List<String> getInstructions() { return instructions; }
    public void setInstructions(List<String> instructions) { this.instructions = instructions; }

    public List<String> getCommonMistakes() { return commonMistakes; }
    public void setCommonMistakes(List<String> commonMistakes) { this.commonMistakes = commonMistakes; }
}
