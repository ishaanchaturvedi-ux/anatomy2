package com.anatomyfit.backend.dto;

import java.util.ArrayList;
import java.util.List;

public class RecommendationResponseDTO {
    private ExerciseDTO exercise;
    private int matchScore; // 0 - 100
    private List<String> matchReasons = new ArrayList<>();
    private String programmingAdvice;

    public RecommendationResponseDTO() {}

    public RecommendationResponseDTO(ExerciseDTO exercise, int matchScore, List<String> matchReasons, String programmingAdvice) {
        this.exercise = exercise;
        this.matchScore = matchScore;
        this.matchReasons = matchReasons;
        this.programmingAdvice = programmingAdvice;
    }

    public ExerciseDTO getExercise() { return exercise; }
    public void setExercise(ExerciseDTO exercise) { this.exercise = exercise; }

    public int getMatchScore() { return matchScore; }
    public void setMatchScore(int matchScore) { this.matchScore = matchScore; }

    public List<String> getMatchReasons() { return matchReasons; }
    public void setMatchReasons(List<String> matchReasons) { this.matchReasons = matchReasons; }

    public String getProgrammingAdvice() { return programmingAdvice; }
    public void setProgrammingAdvice(String programmingAdvice) { this.programmingAdvice = programmingAdvice; }
}
