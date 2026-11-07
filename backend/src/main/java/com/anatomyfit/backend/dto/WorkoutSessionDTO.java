package com.anatomyfit.backend.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class WorkoutSessionDTO {
    private Long id;
    private Long routineId;
    private String routineName;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Integer durationSeconds;
    private String status;
    private String notes;
    private List<WorkoutSetDTO> sets = new ArrayList<>();

    public WorkoutSessionDTO() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getRoutineId() { return routineId; }
    public void setRoutineId(Long routineId) { this.routineId = routineId; }

    public String getRoutineName() { return routineName; }
    public void setRoutineName(String routineName) { this.routineName = routineName; }

    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }

    public LocalDateTime getEndTime() { return endTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }

    public Integer getDurationSeconds() { return durationSeconds; }
    public void setDurationSeconds(Integer durationSeconds) { this.durationSeconds = durationSeconds; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public List<WorkoutSetDTO> getSets() { return sets; }
    public void setSets(List<WorkoutSetDTO> sets) { this.sets = sets; }
}
