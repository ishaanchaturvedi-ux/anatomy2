package com.anatomyfit.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "workout_routines")
public class WorkoutRoutine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 128)
    private String name;

    @Column(length = 500)
    private String description;

    @Column(length = 64)
    private String splitFocus; // upper-body, lower-body, push, pull, legs, full-body, custom

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "routine", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @OrderBy("orderIndex ASC")
    private List<RoutineExercise> exercises = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public WorkoutRoutine() {}

    public WorkoutRoutine(String name, String description, String splitFocus) {
        this.name = name;
        this.description = description;
        this.splitFocus = splitFocus;
    }

    public void addExercise(RoutineExercise exercise) {
        exercises.add(exercise);
        exercise.setRoutine(this);
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getSplitFocus() { return splitFocus; }
    public void setSplitFocus(String splitFocus) { this.splitFocus = splitFocus; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public List<RoutineExercise> getExercises() { return exercises; }
    public void setExercises(List<RoutineExercise> exercises) { this.exercises = exercises; }
}
