package com.anatomyfit.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.anatomyfit.backend.entity.Exercise;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, String> {

    List<Exercise> findByCategoryIgnoreCase(String category);

    List<Exercise> findByEquipmentIgnoreCase(String equipment);

    List<Exercise> findByDifficultyIgnoreCase(String difficulty);

    @Query("SELECT DISTINCT e FROM Exercise e JOIN e.muscles m WHERE LOWER(m.muscleId) = LOWER(:muscleId)")
    List<Exercise> findByMuscleId(@Param("muscleId") String muscleId);

    @Query("SELECT DISTINCT e FROM Exercise e WHERE LOWER(e.name) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(e.description) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Exercise> searchExercises(@Param("query") String query);

    @Query("SELECT DISTINCT e FROM Exercise e LEFT JOIN e.muscles m " +
           "WHERE (:category IS NULL OR " +
           "LOWER(e.muscleGroupIds) LIKE LOWER(CONCAT('%', :category, '%'))) " +
           "AND (:equipment IS NULL OR LOWER(e.equipment) = LOWER(:equipment)) " +
           "AND (:difficulty IS NULL OR LOWER(e.difficulty) = LOWER(:difficulty)) " +
           "AND (:muscleId IS NULL OR LOWER(m.muscleId) = LOWER(:muscleId))")
    List<Exercise> filterExercises(@Param("category") String category,
                                   @Param("equipment") String equipment,
                                   @Param("difficulty") String difficulty,
                                   @Param("muscleId") String muscleId);
}

