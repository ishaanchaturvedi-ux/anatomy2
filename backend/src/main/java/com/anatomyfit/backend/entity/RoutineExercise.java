package com.anatomyfit.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "routine_exercises")
public class RoutineExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "routine_id", nullable = false)
    @JsonIgnore
    private WorkoutRoutine routine;

    @Column(nullable = false, length = 64)
    private String exerciseId;

    @Column(nullable = false, length = 128)
    private String exerciseName;

    private Integer orderIndex = 0;
    private Integer plannedSets = 3;
    private String plannedReps = "8-12";
    private Integer restSeconds = 60;

    public RoutineExercise() {}

    public RoutineExercise(String exerciseId, String exerciseName, Integer orderIndex,
                           Integer plannedSets, String plannedReps, Integer restSeconds) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.orderIndex = orderIndex;
        this.plannedSets = plannedSets;
        this.plannedReps = plannedReps;
        this.restSeconds = restSeconds;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public WorkoutRoutine getRoutine() { return routine; }
    public void setRoutine(WorkoutRoutine routine) { this.routine = routine; }

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
