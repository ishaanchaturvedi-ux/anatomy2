package com.anatomyfit.backend.service;

import com.anatomyfit.backend.dto.RoutineDTO;
import com.anatomyfit.backend.dto.RoutineExerciseDTO;
import com.anatomyfit.backend.dto.WorkoutSessionDTO;
import com.anatomyfit.backend.dto.WorkoutSetDTO;
import com.anatomyfit.backend.entity.RoutineExercise;
import com.anatomyfit.backend.entity.WorkoutRoutine;
import com.anatomyfit.backend.entity.WorkoutSession;
import com.anatomyfit.backend.entity.WorkoutSet;
import com.anatomyfit.backend.repository.WorkoutRoutineRepository;
import com.anatomyfit.backend.repository.WorkoutSessionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WorkoutService {

    private final WorkoutRoutineRepository routineRepository;
    private final WorkoutSessionRepository sessionRepository;

    public WorkoutService(WorkoutRoutineRepository routineRepository, WorkoutSessionRepository sessionRepository) {
        this.routineRepository = routineRepository;
        this.sessionRepository = sessionRepository;
    }

    // ── ROUTINES ─────────────────────────────────────────────────────────────

    public List<RoutineDTO> getAllRoutines() {
        return routineRepository.findAllByOrderByCreatedAtDesc().stream()
                .map(this::convertRoutineToDTO)
                .collect(Collectors.toList());
    }

    public Optional<RoutineDTO> getRoutineById(Long id) {
        return routineRepository.findById(id).map(this::convertRoutineToDTO);
    }

    @Transactional
    public RoutineDTO createRoutine(RoutineDTO dto) {
        if (dto.getName() == null || dto.getName().isBlank()) {
            dto.setName("Custom Workout Routine");
        }

        WorkoutRoutine routine = new WorkoutRoutine(dto.getName(), dto.getDescription(), dto.getSplitFocus());
        if (dto.getExercises() != null) {
            int idx = 0;
            for (RoutineExerciseDTO exDto : dto.getExercises()) {
                RoutineExercise item = new RoutineExercise(
                        exDto.getExerciseId(),
                        exDto.getExerciseName(),
                        idx++,
                        exDto.getPlannedSets() != null ? exDto.getPlannedSets() : 3,
                        exDto.getPlannedReps() != null ? exDto.getPlannedReps() : "8-12",
                        exDto.getRestSeconds() != null ? exDto.getRestSeconds() : 60
                );
                routine.addExercise(item);
            }
        }
        WorkoutRoutine saved = routineRepository.save(routine);
        return convertRoutineToDTO(saved);
    }

    @Transactional
    public Optional<RoutineDTO> updateRoutine(Long id, RoutineDTO dto) {
        return routineRepository.findById(id).map(routine -> {
            if (dto.getName() != null && !dto.getName().isBlank()) {
                routine.setName(dto.getName());
            }
            if (dto.getDescription() != null) {
                routine.setDescription(dto.getDescription());
            }
            if (dto.getSplitFocus() != null) {
                routine.setSplitFocus(dto.getSplitFocus());
            }

            // Replace exercises
            routine.getExercises().clear();
            if (dto.getExercises() != null) {
                int idx = 0;
                for (RoutineExerciseDTO exDto : dto.getExercises()) {
                    RoutineExercise item = new RoutineExercise(
                            exDto.getExerciseId(),
                            exDto.getExerciseName(),
                            idx++,
                            exDto.getPlannedSets() != null ? exDto.getPlannedSets() : 3,
                            exDto.getPlannedReps() != null ? exDto.getPlannedReps() : "8-12",
                            exDto.getRestSeconds() != null ? exDto.getRestSeconds() : 60
                    );
                    routine.addExercise(item);
                }
            }
            WorkoutRoutine updated = routineRepository.save(routine);
            return convertRoutineToDTO(updated);
        });
    }

    @Transactional
    public boolean deleteRoutine(Long id) {
        if (routineRepository.existsById(id)) {
            routineRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // ── WORKOUT SESSIONS ─────────────────────────────────────────────────────

    public List<WorkoutSessionDTO> getAllSessions() {
        return sessionRepository.findAllByOrderByStartTimeDesc().stream()
                .map(this::convertSessionToDTO)
                .collect(Collectors.toList());
    }

    public Optional<WorkoutSessionDTO> getSessionById(Long id) {
        return sessionRepository.findById(id).map(this::convertSessionToDTO);
    }

    @Transactional
    public WorkoutSessionDTO logWorkoutSession(WorkoutSessionDTO dto) {
        WorkoutSession session = new WorkoutSession(
                dto.getRoutineId(),
                dto.getRoutineName() != null ? dto.getRoutineName() : "Completed Workout",
                dto.getDurationSeconds() != null ? dto.getDurationSeconds() : 0,
                dto.getNotes()
        );
        session.setStatus(dto.getStatus() != null ? dto.getStatus() : "COMPLETED");
        if (dto.getStartTime() != null) {
            session.setStartTime(dto.getStartTime());
        }
        session.setEndTime(dto.getEndTime() != null ? dto.getEndTime() : LocalDateTime.now());

        if (dto.getSets() != null) {
            int setNum = 1;
            for (WorkoutSetDTO setDto : dto.getSets()) {
                WorkoutSet set = new WorkoutSet(
                        setDto.getExerciseId(),
                        setDto.getExerciseName(),
                        setDto.getSetNumber() != null ? setDto.getSetNumber() : setNum++,
                        setDto.getWeightKg() != null ? setDto.getWeightKg() : 0.0,
                        setDto.getRepsCompleted() != null ? setDto.getRepsCompleted() : 10,
                        setDto.getTargetMuscle()
                );
                session.addSet(set);
            }
        }

        WorkoutSession saved = sessionRepository.save(session);
        return convertSessionToDTO(saved);
    }

    /** Alias for logWorkoutSession — used by controller POST */
    @Transactional
    public WorkoutSessionDTO createSession(WorkoutSessionDTO dto) {
        return logWorkoutSession(dto);
    }

    /** Update an existing session */
    @Transactional
    public Optional<WorkoutSessionDTO> updateSession(Long id, WorkoutSessionDTO dto) {
        return sessionRepository.findById(id).map(session -> {
            if (dto.getStatus() != null) session.setStatus(dto.getStatus());
            if (dto.getNotes() != null) session.setNotes(dto.getNotes());
            if (dto.getDurationSeconds() != null) session.setDurationSeconds(dto.getDurationSeconds());
            if (dto.getEndTime() != null) session.setEndTime(dto.getEndTime());
            if (dto.getSets() != null) {
                session.getSets().clear();
                int setNum = 1;
                for (WorkoutSetDTO setDto : dto.getSets()) {
                    WorkoutSet set = new WorkoutSet(
                            setDto.getExerciseId(),
                            setDto.getExerciseName(),
                            setDto.getSetNumber() != null ? setDto.getSetNumber() : setNum++,
                            setDto.getWeightKg() != null ? setDto.getWeightKg() : 0.0,
                            setDto.getRepsCompleted() != null ? setDto.getRepsCompleted() : 10,
                            setDto.getTargetMuscle()
                    );
                    session.addSet(set);
                }
            }
            return convertSessionToDTO(sessionRepository.save(session));
        });
    }

    /** Delete a session */
    @Transactional
    public void deleteSession(Long id) {
        sessionRepository.deleteById(id);
    }

    // ── CONVERTERS ───────────────────────────────────────────────────────────

    public RoutineDTO convertRoutineToDTO(WorkoutRoutine r) {
        RoutineDTO dto = new RoutineDTO();
        dto.setId(r.getId());
        dto.setName(r.getName());
        dto.setDescription(r.getDescription());
        dto.setSplitFocus(r.getSplitFocus());
        dto.setCreatedAt(r.getCreatedAt());
        dto.setUpdatedAt(r.getUpdatedAt());

        if (r.getExercises() != null) {
            for (RoutineExercise re : r.getExercises()) {
                dto.getExercises().add(new RoutineExerciseDTO(
                        re.getExerciseId(),
                        re.getExerciseName(),
                        re.getOrderIndex(),
                        re.getPlannedSets(),
                        re.getPlannedReps(),
                        re.getRestSeconds()
                ));
            }
        }
        return dto;
    }

    public WorkoutSessionDTO convertSessionToDTO(WorkoutSession s) {
        WorkoutSessionDTO dto = new WorkoutSessionDTO();
        dto.setId(s.getId());
        dto.setRoutineId(s.getRoutineId());
        dto.setRoutineName(s.getRoutineName());
        dto.setStartTime(s.getStartTime());
        dto.setEndTime(s.getEndTime());
        dto.setDurationSeconds(s.getDurationSeconds());
        dto.setStatus(s.getStatus());
        dto.setNotes(s.getNotes());

        if (s.getSets() != null) {
            for (WorkoutSet ws : s.getSets()) {
                WorkoutSetDTO wsDto = new WorkoutSetDTO(
                        ws.getExerciseId(),
                        ws.getExerciseName(),
                        ws.getSetNumber(),
                        ws.getWeightKg(),
                        ws.getRepsCompleted(),
                        ws.getTargetMuscle()
                );
                wsDto.setId(ws.getId());
                wsDto.setCompletedAt(ws.getCompletedAt());
                dto.getSets().add(wsDto);
            }
        }
        return dto;
    }
}
