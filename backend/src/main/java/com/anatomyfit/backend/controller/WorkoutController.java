package com.anatomyfit.backend.controller;

import com.anatomyfit.backend.dto.WorkoutSessionDTO;
import com.anatomyfit.backend.service.WorkoutService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/workouts")
public class WorkoutController {

    private final WorkoutService workoutService;

    public WorkoutController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    /** GET /api/v1/workouts — list all workout sessions */
    @GetMapping
    public ResponseEntity<List<WorkoutSessionDTO>> getAllSessions() {
        return ResponseEntity.ok(workoutService.getAllSessions());
    }

    /** GET /api/v1/workouts/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<WorkoutSessionDTO> getSessionById(@PathVariable Long id) {
        return workoutService.getSessionById(id)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new EntityNotFoundException("Workout session not found with id: " + id));
    }

    /** POST /api/v1/workouts — log a new workout session */
    @PostMapping
    public ResponseEntity<WorkoutSessionDTO> createSession(@Valid @RequestBody WorkoutSessionDTO sessionDTO) {
        WorkoutSessionDTO created = workoutService.createSession(sessionDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    /** PUT /api/v1/workouts/{id} — update session (e.g., mark completed, add sets) */
    @PutMapping("/{id}")
    public ResponseEntity<WorkoutSessionDTO> updateSession(@PathVariable Long id, @Valid @RequestBody WorkoutSessionDTO sessionDTO) {
        return workoutService.updateSession(id, sessionDTO)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new EntityNotFoundException("Workout session not found with id: " + id));
    }

    /** DELETE /api/v1/workouts/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSession(@PathVariable Long id) {
        workoutService.deleteSession(id);
        return ResponseEntity.noContent().build();
    }
}
