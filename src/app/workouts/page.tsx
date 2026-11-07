'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Plus, Trash2, PlayCircle, CheckCircle, Clock, Dumbbell, AlertCircle, X, ChevronDown } from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { apiClient } from '../../services/apiClient';

interface RoutineExercise {
  exerciseId: string;
  exerciseName: string;
  orderIndex?: number;
  plannedSets: number;
  plannedReps: string;
  restSeconds: number;
}

interface Routine {
  id?: number;
  name: string;
  description?: string;
  splitFocus?: string;
  exercises: RoutineExercise[];
  createdAt?: string;
}

interface WorkoutSession {
  id?: number;
  routineId?: number;
  routineName?: string;
  durationSeconds?: number;
  status?: string;
  notes?: string;
  startTime?: string;
  endTime?: string;
  sets?: {
    exerciseId: string;
    exerciseName: string;
    setNumber: number;
    weightKg: number;
    repsCompleted: number;
    targetMuscle?: string;
  }[];
}

const COMMON_EXERCISES = [
  { id: 'barbell-bench-press', name: 'Barbell Flat Bench Press' },
  { id: 'squat', name: 'Barbell Back Squat' },
  { id: 'deadlift', name: 'Conventional Deadlift' },
  { id: 'pull-up', name: 'Pull-Up' },
  { id: 'overhead-press', name: 'Barbell Overhead Press' },
  { id: 'barbell-row', name: 'Barbell Bent-Over Row' },
  { id: 'incline-dumbbell-press', name: 'Incline Dumbbell Press' },
  { id: 'leg-press', name: 'Leg Press' },
  { id: 'cable-lateral-raise', name: 'Cable Lateral Raise' },
  { id: 'dumbbell-curl', name: 'Dumbbell Bicep Curl' },
];

export default function WorkoutsPage() {
  const theme = useAnatomyStore((s) => s.theme);
  const isDark = theme === 'dark';

  const [routines, setRoutines] = useState<Routine[]>([]);
  const [sessions, setSessions] = useState<WorkoutSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Create routine modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newRoutine, setNewRoutine] = useState<Routine>({ name: '', description: '', exercises: [] });
  const [saving, setSaving] = useState(false);

  // Log session modal state
  const [loggingRoutine, setLoggingRoutine] = useState<Routine | null>(null);
  const [sessionDuration, setSessionDuration] = useState('');
  const [sessionNotes, setSessionNotes] = useState('');
  const [logging, setLogging] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [r, s] = await Promise.all([
        apiClient.get<Routine[]>('/routines'),
        apiClient.get<WorkoutSession[]>('/workouts'),
      ]);
      setRoutines(r);
      setSessions(s);
      setError('');
    } catch {
      setError('Cannot reach backend. Start the Java server: cd backend && mvnw.cmd spring-boot:run');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleCreateRoutine = async () => {
    if (!newRoutine.name.trim()) return;
    setSaving(true);
    try {
      await apiClient.post('/routines', newRoutine);
      setShowCreateModal(false);
      setNewRoutine({ name: '', description: '', exercises: [] });
      fetchData();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to create routine');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteRoutine = async (id: number) => {
    if (!confirm('Delete this routine?')) return;
    try {
      await apiClient.delete(`/routines/${id}`);
      fetchData();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete');
    }
  };

  const handleLogSession = async () => {
    if (!loggingRoutine) return;
    setLogging(true);
    try {
      const now = new Date().toISOString();
      await apiClient.post('/workouts', {
        routineId: loggingRoutine.id,
        routineName: loggingRoutine.name,
        durationSeconds: sessionDuration ? parseInt(sessionDuration) * 60 : null,
        notes: sessionNotes || null,
        status: 'COMPLETED',
        startTime: now,
        endTime: now,
        sets: loggingRoutine.exercises.map((ex, i) => ({
          exerciseId: ex.exerciseId,
          exerciseName: ex.exerciseName,
          setNumber: i + 1,
          weightKg: 0,
          repsCompleted: parseInt(ex.plannedReps) || 10,
        })),
      });
      setLoggingRoutine(null);
      setSessionDuration('');
      setSessionNotes('');
      fetchData();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to log session');
    } finally {
      setLogging(false);
    }
  };

  const addExerciseToNew = (ex: typeof COMMON_EXERCISES[0]) => {
    setNewRoutine((prev) => ({
      ...prev,
      exercises: [
        ...prev.exercises,
        { exerciseId: ex.id, exerciseName: ex.name, plannedSets: 3, plannedReps: '8-12', restSeconds: 60 },
      ],
    }));
  };

  const removeExerciseFromNew = (idx: number) => {
    setNewRoutine((prev) => ({
      ...prev,
      exercises: prev.exercises.filter((_, i) => i !== idx),
    }));
  };

  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200';
  const modalBg = isDark ? 'bg-[#0d1117] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900';
  const inputCls = isDark
    ? 'bg-white/10 border-white/20 text-white placeholder-gray-500'
    : 'bg-slate-50 border-slate-300 text-slate-900';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#07090e] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header */}
      <div className={`px-6 py-10 border-b ${isDark ? 'border-white/10 bg-gradient-to-r from-[#0d1117] to-[#07090e]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">My Workouts</h1>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Build routines, log sessions, and track your training history.
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <Plus className="w-4 h-4" />
            New Routine
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-10">
        {error && (
          <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {loading && (
          <div className={`text-center py-20 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            Loading…
          </div>
        )}

        {/* Routines */}
        {!loading && (
          <section>
            <h2 className="font-semibold text-xl mb-4">My Routines ({routines.length})</h2>
            {routines.length === 0 ? (
              <div className={`text-center py-16 rounded-2xl border ${cardBg}`}>
                <Dumbbell className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className={isDark ? 'text-gray-500' : 'text-slate-400'}>No routines yet. Create your first one!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {routines.map((r) => (
                  <div key={r.id} className={`rounded-2xl border p-5 space-y-3 ${cardBg}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{r.name}</h3>
                        {r.description && (
                          <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>{r.description}</p>
                        )}
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setLoggingRoutine(r)}
                          className="p-1.5 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                          title="Log workout"
                        >
                          <PlayCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteRoutine(r.id!)}
                          className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Delete routine"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {r.exercises.map((ex, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded-full text-xs border ${
                          isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-slate-100 border-slate-200 text-slate-500'
                        }`}>
                          {ex.exerciseName}
                        </span>
                      ))}
                      {r.exercises.length === 0 && (
                        <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-slate-400'}`}>No exercises added</span>
                      )}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-600' : 'text-slate-400'}`}>
                      {r.exercises.length} exercise{r.exercises.length !== 1 ? 's' : ''}
                      {r.createdAt && ` · Created ${new Date(r.createdAt).toLocaleDateString()}`}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Recent Sessions */}
        {!loading && sessions.length > 0 && (
          <section>
            <h2 className="font-semibold text-xl mb-4">Recent Sessions ({sessions.length})</h2>
            <div className="space-y-3">
              {sessions.slice(0, 10).map((s) => (
                <div key={s.id} className={`flex items-center justify-between rounded-xl border p-4 ${cardBg}`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{s.routineName || 'Workout Session'}</div>
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
                        {s.startTime ? new Date(s.startTime).toLocaleDateString('en-IN', { dateStyle: 'medium' }) : '—'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {s.durationSeconds ? `${Math.round(s.durationSeconds / 60)} min` : '—'}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── Create Routine Modal ── */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`w-full max-w-lg rounded-2xl border p-6 space-y-5 max-h-[90vh] overflow-y-auto ${modalBg}`}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Create New Routine</h3>
              <button onClick={() => setShowCreateModal(false)} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Routine name *"
              value={newRoutine.name}
              onChange={(e) => setNewRoutine((p) => ({ ...p, name: e.target.value }))}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm ${inputCls}`}
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={newRoutine.description}
              onChange={(e) => setNewRoutine((p) => ({ ...p, description: e.target.value }))}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm ${inputCls}`}
            />

            {/* Quick-add exercises */}
            <div>
              <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                Add Exercises
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {COMMON_EXERCISES.map((ex) => (
                  <button
                    key={ex.id}
                    onClick={() => addExerciseToNew(ex)}
                    className={`px-2.5 py-1 rounded-lg text-xs border transition-all ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                        : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    + {ex.name}
                  </button>
                ))}
              </div>

              {newRoutine.exercises.length > 0 && (
                <div className="space-y-2">
                  {newRoutine.exercises.map((ex, i) => (
                    <div key={i} className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="text-sm">{ex.exerciseName}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
                          {ex.plannedSets} × {ex.plannedReps}
                        </span>
                        <button onClick={() => removeExerciseFromNew(i)} className="text-red-400 hover:text-red-300">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleCreateRoutine}
              disabled={saving || !newRoutine.name.trim()}
              className="w-full py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
            >
              {saving ? 'Saving…' : 'Create Routine'}
            </button>
          </div>
        </div>
      )}

      {/* ── Log Session Modal ── */}
      {loggingRoutine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`w-full max-w-md rounded-2xl border p-6 space-y-5 ${modalBg}`}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Log Workout</h3>
              <button onClick={() => setLoggingRoutine(null)} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              Completing: <span className="font-medium text-white">{loggingRoutine.name}</span>
            </p>

            <input
              type="number"
              placeholder="Duration (minutes)"
              value={sessionDuration}
              onChange={(e) => setSessionDuration(e.target.value)}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm ${inputCls}`}
            />
            <textarea
              placeholder="Notes (optional)"
              value={sessionNotes}
              onChange={(e) => setSessionNotes(e.target.value)}
              rows={3}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm resize-none ${inputCls}`}
            />

            <button
              onClick={handleLogSession}
              disabled={logging}
              className="w-full py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-emerald-400 to-cyan-500 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
            >
              {logging ? 'Logging…' : '✅ Mark as Completed'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
