package com.anatomyfit.backend.controller;

import com.anatomyfit.backend.dto.RoutineDTO;
import com.anatomyfit.backend.service.WorkoutService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/routines")
public class RoutineController {

    private final WorkoutService workoutService;

    public RoutineController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    /** GET /api/v1/routines — list all routines */
    @GetMapping
    public ResponseEntity<List<RoutineDTO>> getAllRoutines() {
        return ResponseEntity.ok(workoutService.getAllRoutines());
    }

    /** GET /api/v1/routines/{id} */
    @GetMapping("/{id}")
    public ResponseEntity<RoutineDTO> getRoutineById(@PathVariable Long id) {
        return workoutService.getRoutineById(id)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new EntityNotFoundException("Routine not found with id: " + id));
    }

    /** POST /api/v1/routines — create new routine */
    @PostMapping
    public ResponseEntity<RoutineDTO> createRoutine(@Valid @RequestBody RoutineDTO routineDTO) {
        RoutineDTO created = workoutService.createRoutine(routineDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    /** PUT /api/v1/routines/{id} — update routine */
    @PutMapping("/{id}")
    public ResponseEntity<RoutineDTO> updateRoutine(@PathVariable Long id, @Valid @RequestBody RoutineDTO routineDTO) {
        return workoutService.updateRoutine(id, routineDTO)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new EntityNotFoundException("Routine not found with id: " + id));
    }

    /** DELETE /api/v1/routines/{id} */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoutine(@PathVariable Long id) {
        workoutService.deleteRoutine(id);
        return ResponseEntity.noContent().build();
    }
}
