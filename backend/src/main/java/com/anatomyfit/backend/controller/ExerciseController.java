package com.anatomyfit.backend.controller;

import com.anatomyfit.backend.dto.ExerciseDTO;
import com.anatomyfit.backend.service.ExerciseService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    /** GET /api/v1/exercises — filter/search with optional query params */
    @GetMapping
    public ResponseEntity<List<ExerciseDTO>> getExercises(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String equipment,
            @RequestParam(required = false) String difficulty,
            @RequestParam(required = false) String muscleId
    ) {
        List<ExerciseDTO> exercises = exerciseService.filterExercises(search, category, equipment, difficulty, muscleId);
        return ResponseEntity.ok(exercises);
    }

    /** GET /api/v1/exercises/{id} — single exercise by ID */
    @GetMapping("/{id}")
    public ResponseEntity<ExerciseDTO> getExerciseById(@PathVariable String id) {
        return exerciseService.getExerciseById(id)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new EntityNotFoundException("Exercise not found with id: " + id));
    }

    /** GET /api/v1/exercises/muscle/{muscleId} — exercises targeting a specific muscle */
    @GetMapping("/muscle/{muscleId}")
    public ResponseEntity<List<ExerciseDTO>> getExercisesByMuscle(@PathVariable String muscleId) {
        return ResponseEntity.ok(exerciseService.getExercisesByMuscle(muscleId));
    }

    /** GET /api/v1/exercises/category/{category} */
    @GetMapping("/category/{category}")
    public ResponseEntity<List<ExerciseDTO>> getExercisesByCategory(@PathVariable String category) {
        return ResponseEntity.ok(exerciseService.getExercisesByCategory(category));
    }
}
