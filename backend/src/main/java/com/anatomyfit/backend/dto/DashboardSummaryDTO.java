package com.anatomyfit.backend.dto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DashboardSummaryDTO {
    private long totalWorkoutsCompleted;
    private long workoutsThisWeek;
    private long totalDurationMinutes;
    private Map<String, Long> muscleFrequency = new HashMap<>();
    private List<WorkoutSessionDTO> recentWorkouts = new ArrayList<>();
    private List<String> mostTrainedExercises = new ArrayList<>();
    private int currentStreakDays;

    public DashboardSummaryDTO() {}

    public long getTotalWorkoutsCompleted() { return totalWorkoutsCompleted; }
    public void setTotalWorkoutsCompleted(long totalWorkoutsCompleted) { this.totalWorkoutsCompleted = totalWorkoutsCompleted; }

    public long getWorkoutsThisWeek() { return workoutsThisWeek; }
    public void setWorkoutsThisWeek(long workoutsThisWeek) { this.workoutsThisWeek = workoutsThisWeek; }

    public long getTotalDurationMinutes() { return totalDurationMinutes; }
    public void setTotalDurationMinutes(long totalDurationMinutes) { this.totalDurationMinutes = totalDurationMinutes; }

    public Map<String, Long> getMuscleFrequency() { return muscleFrequency; }
    public void setMuscleFrequency(Map<String, Long> muscleFrequency) { this.muscleFrequency = muscleFrequency; }

    public List<WorkoutSessionDTO> getRecentWorkouts() { return recentWorkouts; }
    public void setRecentWorkouts(List<WorkoutSessionDTO> recentWorkouts) { this.recentWorkouts = recentWorkouts; }

    public List<String> getMostTrainedExercises() { return mostTrainedExercises; }
    public void setMostTrainedExercises(List<String> mostTrainedExercises) { this.mostTrainedExercises = mostTrainedExercises; }

    public int getCurrentStreakDays() { return currentStreakDays; }
    public void setCurrentStreakDays(int currentStreakDays) { this.currentStreakDays = currentStreakDays; }
}
