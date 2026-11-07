package com.anatomyfit.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "exercise_muscles")
public class ExerciseMuscle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exercise_id", nullable = false)
    @JsonIgnore
    private Exercise exercise;

    @Column(nullable = false, length = 64)
    private String muscleId;

    @Column(nullable = false, length = 32)
    private String emphasis; // PRIMARY, SECONDARY, STABILIZER

    @Column(length = 32)
    private String level; // HIGH, MEDIUM, LOW

    public ExerciseMuscle() {}

    public ExerciseMuscle(String muscleId, String emphasis, String level) {
        this.muscleId = muscleId;
        this.emphasis = emphasis;
        this.level = level;
    }

    public ExerciseMuscle(Exercise exercise, String muscleId, String emphasis, String level) {
        this.exercise = exercise;
        this.muscleId = muscleId;
        this.emphasis = emphasis;
        this.level = level;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Exercise getExercise() { return exercise; }
    public void setExercise(Exercise exercise) { this.exercise = exercise; }

    public String getMuscleId() { return muscleId; }
    public void setMuscleId(String muscleId) { this.muscleId = muscleId; }

    public String getEmphasis() { return emphasis; }
    public void setEmphasis(String emphasis) { this.emphasis = emphasis; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}
