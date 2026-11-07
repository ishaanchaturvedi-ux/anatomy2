package com.anatomyfit.backend.repository;

import com.anatomyfit.backend.entity.WorkoutRoutine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutRoutineRepository extends JpaRepository<WorkoutRoutine, Long> {
    List<WorkoutRoutine> findAllByOrderByCreatedAtDesc();
    List<WorkoutRoutine> findBySplitFocusIgnoreCase(String splitFocus);
}
