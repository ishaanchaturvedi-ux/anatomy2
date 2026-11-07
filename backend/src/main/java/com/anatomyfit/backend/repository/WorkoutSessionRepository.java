package com.anatomyfit.backend.repository;

import com.anatomyfit.backend.entity.WorkoutSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface WorkoutSessionRepository extends JpaRepository<WorkoutSession, Long> {

    List<WorkoutSession> findAllByOrderByStartTimeDesc();

    long countByStatus(String status);

    @Query("SELECT COUNT(s) FROM WorkoutSession s WHERE s.startTime >= :since AND s.status = 'COMPLETED'")
    long countCompletedSince(@Param("since") LocalDateTime since);

    @Query("SELECT s FROM WorkoutSession s WHERE s.startTime >= :since ORDER BY s.startTime DESC")
    List<WorkoutSession> findRecentSessions(@Param("since") LocalDateTime since);
}
