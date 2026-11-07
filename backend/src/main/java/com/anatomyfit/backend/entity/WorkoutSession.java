package com.anatomyfit.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "workout_sessions")
public class WorkoutSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long routineId;

    @Column(nullable = false, length = 128)
    private String routineName = "Quick Workout";

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    private Integer durationSeconds = 0;

    @Column(length = 32)
    private String status = "COMPLETED"; // IN_PROGRESS, COMPLETED, CANCELLED

    @Column(length = 500)
    private String notes;

    @OneToMany(mappedBy = "session", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @OrderBy("id ASC")
    private List<WorkoutSet> sets = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        if (startTime == null) {
            startTime = LocalDateTime.now();
        }
        if (endTime == null && "COMPLETED".equals(status)) {
            endTime = LocalDateTime.now();
        }
    }

    public WorkoutSession() {}

    public WorkoutSession(Long routineId, String routineName, Integer durationSeconds, String notes) {
        this.routineId = routineId;
        this.routineName = routineName;
        this.durationSeconds = durationSeconds;
        this.notes = notes;
    }

    public void addSet(WorkoutSet set) {
        sets.add(set);
        set.setSession(this);
    }

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

    public List<WorkoutSet> getSets() { return sets; }
    public void setSets(List<WorkoutSet> sets) { this.sets = sets; }
}
