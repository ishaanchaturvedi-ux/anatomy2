package com.anatomyfit.backend.dto;

import java.time.LocalDateTime;

public class WorkoutSetDTO {
    private Long id;
    private String exerciseId;
    private String exerciseName;
    private Integer setNumber;
    private Double weightKg;
    private Integer repsCompleted;
    private String targetMuscle;
    private LocalDateTime completedAt;

    public WorkoutSetDTO() {}

    public WorkoutSetDTO(String exerciseId, String exerciseName, Integer setNumber, Double weightKg, Integer repsCompleted, String targetMuscle) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.setNumber = setNumber;
        this.weightKg = weightKg;
        this.repsCompleted = repsCompleted;
        this.targetMuscle = targetMuscle;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getExerciseId() { return exerciseId; }
    public void setExerciseId(String exerciseId) { this.exerciseId = exerciseId; }

    public String getExerciseName() { return exerciseName; }
    public void setExerciseName(String exerciseName) { this.exerciseName = exerciseName; }

    public Integer getSetNumber() { return setNumber; }
    public void setSetNumber(Integer setNumber) { this.setNumber = setNumber; }

    public Double getWeightKg() { return weightKg; }
    public void setWeightKg(Double weightKg) { this.weightKg = weightKg; }

    public Integer getRepsCompleted() { return repsCompleted; }
    public void setRepsCompleted(Integer repsCompleted) { this.repsCompleted = repsCompleted; }

    public String getTargetMuscle() { return targetMuscle; }
    public void setTargetMuscle(String targetMuscle) { this.targetMuscle = targetMuscle; }

    public LocalDateTime getCompletedAt() { return completedAt; }
    public void setCompletedAt(LocalDateTime completedAt) { this.completedAt = completedAt; }
}
