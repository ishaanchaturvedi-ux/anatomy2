package com.anatomyfit.backend.dto;

public class RoutineExerciseDTO {
    private Long id;
    private String exerciseId;
    private String exerciseName;
    private Integer orderIndex;
    private Integer plannedSets;
    private String plannedReps;
    private Integer restSeconds;

    public RoutineExerciseDTO() {}

    public RoutineExerciseDTO(String exerciseId, String exerciseName, Integer orderIndex, Integer plannedSets, String plannedReps, Integer restSeconds) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.orderIndex = orderIndex;
        this.plannedSets = plannedSets;
        this.plannedReps = plannedReps;
        this.restSeconds = restSeconds;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getExerciseId() { return exerciseId; }
    public void setExerciseId(String exerciseId) { this.exerciseId = exerciseId; }

    public String getExerciseName() { return exerciseName; }
    public void setExerciseName(String exerciseName) { this.exerciseName = exerciseName; }

    public Integer getOrderIndex() { return orderIndex; }
    public void setOrderIndex(Integer orderIndex) { this.orderIndex = orderIndex; }

    public Integer getPlannedSets() { return plannedSets; }
    public void setPlannedSets(Integer plannedSets) { this.plannedSets = plannedSets; }

    public String getPlannedReps() { return plannedReps; }
    public void setPlannedReps(String plannedReps) { this.plannedReps = plannedReps; }

    public Integer getRestSeconds() { return restSeconds; }
    public void setRestSeconds(Integer restSeconds) { this.restSeconds = restSeconds; }
}
