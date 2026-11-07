package com.anatomyfit.backend.repository;

import com.anatomyfit.backend.entity.WorkoutSet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutSetRepository extends JpaRepository<WorkoutSet, Long> {

    @Query("SELECT ws.targetMuscle, COUNT(ws) FROM WorkoutSet ws WHERE ws.targetMuscle IS NOT NULL AND ws.targetMuscle != '' GROUP BY ws.targetMuscle ORDER BY COUNT(ws) DESC")
    List<Object[]> findMuscleFrequencyDistribution();

    @Query("SELECT DISTINCT ws.exerciseName FROM WorkoutSet ws ORDER BY ws.exerciseName ASC")
    List<String> findDistinctExercisedNames();
}
