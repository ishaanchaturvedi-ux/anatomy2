package com.anatomyfit.backend.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class RoutineDTO {
    private Long id;
    private String name;
    private String description;
    private String splitFocus;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<RoutineExerciseDTO> exercises = new ArrayList<>();

    public RoutineDTO() {}

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

    public List<RoutineExerciseDTO> getExercises() { return exercises; }
    public void setExercises(List<RoutineExerciseDTO> exercises) { this.exercises = exercises; }
}
