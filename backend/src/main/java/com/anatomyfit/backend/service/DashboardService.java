package com.anatomyfit.backend.service;

import com.anatomyfit.backend.dto.DashboardSummaryDTO;
import com.anatomyfit.backend.dto.WorkoutSessionDTO;
import com.anatomyfit.backend.entity.WorkoutSession;
import com.anatomyfit.backend.repository.WorkoutSessionRepository;
import com.anatomyfit.backend.repository.WorkoutSetRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class DashboardService {

    private final WorkoutSessionRepository sessionRepository;
    private final WorkoutSetRepository setRepository;
    private final WorkoutService workoutService;

    public DashboardService(WorkoutSessionRepository sessionRepository,
                            WorkoutSetRepository setRepository,
                            WorkoutService workoutService) {
        this.sessionRepository = sessionRepository;
        this.setRepository = setRepository;
        this.workoutService = workoutService;
    }

    /** Alias used by DashboardController */
    public DashboardSummaryDTO getSummary() {
        return getDashboardSummary();
    }

    public DashboardSummaryDTO getDashboardSummary() {
        DashboardSummaryDTO summary = new DashboardSummaryDTO();

        long total = sessionRepository.countByStatus("COMPLETED");
        summary.setTotalWorkoutsCompleted(total);

        LocalDateTime weekAgo = LocalDateTime.now().minusDays(7);
        long thisWeek = sessionRepository.countCompletedSince(weekAgo);
        summary.setWorkoutsThisWeek(thisWeek);

        List<WorkoutSession> allSessions = sessionRepository.findAllByOrderByStartTimeDesc();

        long totalSeconds = allSessions.stream()
                .filter(s -> "COMPLETED".equals(s.getStatus()))
                .mapToLong(s -> s.getDurationSeconds() != null ? s.getDurationSeconds() : 0)
                .sum();
        summary.setTotalDurationMinutes(totalSeconds / 60);

        // Muscle frequency distribution from actual DB completed sets
        List<Object[]> rawDist = setRepository.findMuscleFrequencyDistribution();
        Map<String, Long> muscleMap = new LinkedHashMap<>();
        for (Object[] row : rawDist) {
            String muscle = (String) row[0];
            Long count = (Long) row[1];
            if (muscle != null && !muscle.isBlank()) {
                muscleMap.put(muscle, count);
            }
        }
        summary.setMuscleFrequency(muscleMap);

        // Most trained exercises
        List<String> distinctExercises = setRepository.findDistinctExercisedNames();
        summary.setMostTrainedExercises(distinctExercises.stream().limit(8).collect(Collectors.toList()));

        // Recent 5 workouts
        List<WorkoutSessionDTO> recent = allSessions.stream()
                .limit(5)
                .map(workoutService::convertSessionToDTO)
                .collect(Collectors.toList());
        summary.setRecentWorkouts(recent);

        // Calculate simple streak (consecutive recent days with workouts)
        int streak = calculateStreak(allSessions);
        summary.setCurrentStreakDays(streak);

        return summary;
    }

    private int calculateStreak(List<WorkoutSession> sessions) {
        if (sessions.isEmpty()) return 0;

        Set<LocalDate> workoutDates = sessions.stream()
                .filter(s -> "COMPLETED".equals(s.getStatus()) && s.getStartTime() != null)
                .map(s -> s.getStartTime().toLocalDate())
                .collect(Collectors.toSet());

        if (workoutDates.isEmpty()) return 0;

        int streak = 0;
        LocalDate current = LocalDate.now();

        // If no workout today, check if there was one yesterday
        if (!workoutDates.contains(current)) {
            current = current.minusDays(1);
        }

        while (workoutDates.contains(current)) {
            streak++;
            current = current.minusDays(1);
        }

        return streak;
    }
}
