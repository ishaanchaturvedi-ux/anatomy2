
package com.anatomyfit.backend.dto;

import java.util.ArrayList;
import java.util.List;

public class RecommendationRequestDTO {

    private String goal = "hypertrophy";
    private String experienceLevel = "intermediate";
    private String targetMuscleGroup;
    private String specificMuscleId;
    private List<String> availableEquipment = new ArrayList<>();
    private Integer preferredDurationMinutes = 45;
    private String preferredDifficulty;

    public RecommendationRequestDTO() {
    }

    // Goal
    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    // Experience Level
    public String getExperienceLevel() {
        return experienceLevel;
    }

    public void setExperienceLevel(String experienceLevel) {
        this.experienceLevel = experienceLevel;
    }

    // Target Muscle Group
    public String getTargetMuscleGroup() {
        return targetMuscleGroup;
    }

    public void setTargetMuscleGroup(String targetMuscleGroup) {
        this.targetMuscleGroup = targetMuscleGroup;
    }

    // Specific Muscle ID
    public String getSpecificMuscleId() {
        return specificMuscleId;
    }

    public void setSpecificMuscleId(String specificMuscleId) {
        this.specificMuscleId = specificMuscleId;
    }

    // Accept muscleId sent by the frontend
    public void setMuscleId(String muscleId) {
        this.specificMuscleId = muscleId;
    }

    // Available Equipment
    public List<String> getAvailableEquipment() {
        return availableEquipment;
    }

    public void setAvailableEquipment(List<String> availableEquipment) {
        this.availableEquipment = availableEquipment;
    }

    // Preferred Duration
    public Integer getPreferredDurationMinutes() {
        return preferredDurationMinutes;
    }

    public void setPreferredDurationMinutes(Integer preferredDurationMinutes) {
        this.preferredDurationMinutes = preferredDurationMinutes;
    }

    // Preferred Difficulty
    public String getPreferredDifficulty() {
        return preferredDifficulty;
    }

    public void setPreferredDifficulty(String preferredDifficulty) {
        this.preferredDifficulty = preferredDifficulty;
    }
}
