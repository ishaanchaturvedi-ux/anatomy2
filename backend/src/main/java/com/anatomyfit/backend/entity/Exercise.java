package com.anatomyfit.backend.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "exercises")
public class Exercise {

    @Id
    @Column(length = 64)
    private String id;

    @Column(nullable = false)
    private String name;

    @Column(length = 1000)
    private String description;

    @Column(length = 64)
    private String category;

    @Column(length = 64)
    private String trainingType;

    @Column(length = 64)
    private String equipment;

    @Column(length = 64)
    private String difficulty;

    @Column(length = 64)
    private String movementPattern;

    @Column(length = 64)
    private String recommendedSets;

    @Column(length = 64)
    private String recommendedReps;

    @Column(columnDefinition = "TEXT")
    private String instructions;

    @Column(columnDefinition = "TEXT")
    private String commonMistakes;

    @Column(columnDefinition = "TEXT")
    private String trainingRegionIds;

    @Column(columnDefinition = "TEXT")
    private String muscleGroupIds;

    @Column(length = 32)
    private String genderSuitability = "all";

    @OneToMany(mappedBy = "exercise", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<ExerciseMuscle> muscles = new ArrayList<>();

    public Exercise() {}

    public Exercise(String id, String name, String description, String category, String trainingType,
                    String equipment, String difficulty, String movementPattern,
                    String recommendedSets, String recommendedReps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.trainingType = trainingType;
        this.equipment = equipment;
        this.difficulty = difficulty;
        this.movementPattern = movementPattern;
        this.recommendedSets = recommendedSets;
        this.recommendedReps = recommendedReps;
    }

    public void addMuscle(ExerciseMuscle muscle) {
        muscles.add(muscle);
        muscle.setExercise(this);
    }

    // Getters and Setters
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

    public String getInstructions() { return instructions; }
    public void setInstructions(String instructions) { this.instructions = instructions; }

    public String getCommonMistakes() { return commonMistakes; }
    public void setCommonMistakes(String commonMistakes) { this.commonMistakes = commonMistakes; }

    public String getTrainingRegionIds() { return trainingRegionIds; }
    public void setTrainingRegionIds(String trainingRegionIds) { this.trainingRegionIds = trainingRegionIds; }

    public String getMuscleGroupIds() { return muscleGroupIds; }
    public void setMuscleGroupIds(String muscleGroupIds) { this.muscleGroupIds = muscleGroupIds; }

    public String getGenderSuitability() { return genderSuitability; }
    public void setGenderSuitability(String genderSuitability) { this.genderSuitability = genderSuitability; }

    public List<ExerciseMuscle> getMuscles() { return muscles; }
    public void setMuscles(List<ExerciseMuscle> muscles) { this.muscles = muscles; }
}
