package com.anatomyfit.backend.dto;

public class ExerciseMuscleDTO {
    private String muscleId;
    private String emphasis;
    private String level;

    public ExerciseMuscleDTO() {}

    public ExerciseMuscleDTO(String muscleId, String emphasis, String level) {
        this.muscleId = muscleId;
        this.emphasis = emphasis;
        this.level = level;
    }

    public String getMuscleId() { return muscleId; }
    public void setMuscleId(String muscleId) { this.muscleId = muscleId; }

    public String getEmphasis() { return emphasis; }
    public void setEmphasis(String emphasis) { this.emphasis = emphasis; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}
