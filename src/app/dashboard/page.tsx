'use client';

import React, { useState, useEffect } from 'react';
import { BarChart2, Flame, Clock, CheckCircle, TrendingUp, Dumbbell, AlertCircle, Calendar } from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { apiClient } from '../../services/apiClient';

interface RecentWorkout {
  id: number;
  routineName?: string;
  startTime?: string;
  durationSeconds?: number;
  status?: string;
}

interface DashboardSummary {
  totalWorkoutsCompleted: number;
  workoutsThisWeek: number;
  totalDurationMinutes: number;
  currentStreakDays: number;
  muscleFrequency: Record<string, number>;
  mostTrainedExercises: string[];
  recentWorkouts: RecentWorkout[];
}

function MuscleBar({ label, value, max, isDark }: { label: string; value: number; max: number; isDark: boolean }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  const readable = label
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className={isDark ? 'text-gray-400' : 'text-slate-500'}>{readable}</span>
        <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{value}</span>
      </div>
      <div className={`h-1.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const theme = useAnatomyStore((s) => s.theme);
  const isDark = theme === 'dark';

  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<DashboardSummary>('/dashboard')
      .then(setSummary)
      .catch(() =>
        setError('Cannot reach backend. Start the Java server: cd backend && mvnw.cmd spring-boot:run')
      )
      .finally(() => setLoading(false));
  }, []);

  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200';
  const muted = isDark ? 'text-gray-400' : 'text-slate-500';

  const muscleEntries = summary
    ? Object.entries(summary.muscleFrequency).sort((a, b) => b[1] - a[1]).slice(0, 8)
    : [];
  const maxMuscleVal = muscleEntries[0]?.[1] ?? 1;

  const statCards = summary
    ? [
        {
          icon: CheckCircle,
          label: 'Total Workouts',
          value: summary.totalWorkoutsCompleted,
          color: 'text-emerald-400',
          bg: 'bg-emerald-500/10',
        },
        {
          icon: Calendar,
          label: 'This Week',
          value: summary.workoutsThisWeek,
          color: 'text-cyan-400',
          bg: 'bg-cyan-500/10',
        },
        {
          icon: Clock,
          label: 'Total Time (min)',
          value: summary.totalDurationMinutes,
          color: 'text-blue-400',
          bg: 'bg-blue-500/10',
        },
        {
          icon: Flame,
          label: 'Day Streak',
          value: summary.currentStreakDays,
          color: 'text-orange-400',
          bg: 'bg-orange-500/10',
        },
      ]
    : [];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#07090e] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header */}
      <div className={`px-6 py-10 border-b ${isDark ? 'border-white/10 bg-gradient-to-r from-[#0d1117] to-[#07090e]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400">
              <BarChart2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          </div>
          <p className={`text-sm ${muted}`}>Your fitness progress at a glance.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {error && (
          <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {loading && (
          <div className={`text-center py-20 ${muted}`}>
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            Loading dashboard…
          </div>
        )}

        {summary && !loading && (
          <>
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statCards.map(({ icon: Icon, label, value, color, bg }) => (
                <div key={label} className={`rounded-2xl border p-5 ${cardBg}`}>
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div className="text-2xl font-bold">{value}</div>
                  <div className={`text-xs mt-0.5 ${muted}`}>{label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Muscle Frequency */}
              {muscleEntries.length > 0 && (
                <div className={`rounded-2xl border p-6 space-y-4 ${cardBg}`}>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <h2 className="font-semibold">Muscle Frequency</h2>
                  </div>
                  <div className="space-y-3">
                    {muscleEntries.map(([muscle, count]) => (
                      <MuscleBar
                        key={muscle}
                        label={muscle}
                        value={count}
                        max={maxMuscleVal}
                        isDark={isDark}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Most Trained Exercises */}
              {summary.mostTrainedExercises.length > 0 && (
                <div className={`rounded-2xl border p-6 space-y-4 ${cardBg}`}>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-purple-400" />
                    <h2 className="font-semibold">Most Trained</h2>
                  </div>
                  <div className="space-y-2">
                    {summary.mostTrainedExercises.map((name, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                          isDark ? 'bg-white/10 text-gray-400' : 'bg-slate-100 text-slate-500'
                        }`}>{i + 1}</span>
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Recent Workouts */}
            {summary.recentWorkouts.length > 0 && (
              <div className={`rounded-2xl border p-6 ${cardBg}`}>
                <h2 className="font-semibold mb-4">Recent Workouts</h2>
                <div className="space-y-3">
                  {summary.recentWorkouts.map((w) => (
                    <div key={w.id} className={`flex items-center justify-between rounded-xl border p-3 ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="text-sm font-medium">{w.routineName || 'Workout'}</div>
                          <div className={`text-xs ${muted}`}>
                            {w.startTime
                              ? new Date(w.startTime).toLocaleDateString('en-IN', { dateStyle: 'medium' })
                              : '—'}
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${muted}`}>
                        <Clock className="w-3.5 h-3.5" />
                        {w.durationSeconds ? `${Math.round(w.durationSeconds / 60)} min` : '—'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {summary.totalWorkoutsCompleted === 0 && (
              <div className={`text-center py-16 rounded-2xl border ${cardBg}`}>
                <BarChart2 className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p className={muted}>No workouts logged yet.</p>
                <p className={`text-xs mt-1 ${muted}`}>Head to Workouts to log your first session!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
