package com.anatomyfit.backend.controller;

import com.anatomyfit.backend.dto.RecommendationRequestDTO;
import com.anatomyfit.backend.dto.RecommendationResponseDTO;
import com.anatomyfit.backend.service.RecommendationService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recommendations")
public class RecommendationController {

    private final RecommendationService recommendationService;

    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    /**
     * POST /api/v1/recommendations
     * Body: { muscleId, category, equipment, difficulty, goal }
     * Returns: scored, sorted list of recommended exercises (max 15, score >= 35)
     */
    @PostMapping
    public ResponseEntity<List<RecommendationResponseDTO>> getRecommendations(
            @Valid @RequestBody RecommendationRequestDTO request
    ) {
        List<RecommendationResponseDTO> recommendations = recommendationService.generateRecommendations(request);
        return ResponseEntity.ok(recommendations);
    }
}
