package com.anatomyfit.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "workout_sets")
public class WorkoutSet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "session_id", nullable = false)
    @JsonIgnore
    private WorkoutSession session;

    @Column(nullable = false, length = 64)
    private String exerciseId;

    @Column(nullable = false, length = 128)
    private String exerciseName;

    private Integer setNumber = 1;
    private Double weightKg = 0.0;
    private Integer repsCompleted = 10;

    @Column(length = 64)
    private String targetMuscle;

    private LocalDateTime completedAt;

    @PrePersist
    protected void onCreate() {
        if (completedAt == null) {
            completedAt = LocalDateTime.now();
        }
    }

    public WorkoutSet() {}

    public WorkoutSet(String exerciseId, String exerciseName, Integer setNumber, Double weightKg, Integer repsCompleted, String targetMuscle) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.setNumber = setNumber;
        this.weightKg = weightKg;
        this.repsCompleted = repsCompleted;
        this.targetMuscle = targetMuscle;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public WorkoutSession getSession() { return session; }
    public void setSession(WorkoutSession session) { this.session = session; }

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
