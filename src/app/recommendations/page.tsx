'use client';

import React, { useState } from 'react';
import { Zap, ChevronDown, Dumbbell, Target, Award, AlertCircle } from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { apiClient } from '../../services/apiClient';

interface RecommendationResponse {
  exercise: {
    id: string;
    name: string;
    description: string;
    equipment?: string;
    difficulty?: string;
    movementPattern?: string;
    recommendedSets?: string;
    recommendedReps?: string;
    primaryMuscles?: { muscleId: string; emphasis: string; level: string }[];
  };
  score: number;
  matchReasons: string[];
  programmingAdvice?: string;
}

const MUSCLE_OPTIONS = [
  { value: '', label: 'Any Muscle' },
  { value: 'pectoralis-major', label: 'Chest (Pectoralis Major)' },
  { value: 'latissimus-dorsi', label: 'Back (Latissimus Dorsi)' },
  { value: 'deltoid', label: 'Shoulders (Deltoid)' },
  { value: 'biceps-brachii', label: 'Biceps' },
  { value: 'triceps-brachii', label: 'Triceps' },
  { value: 'quadriceps', label: 'Quadriceps' },
  { value: 'hamstrings', label: 'Hamstrings' },
  { value: 'gluteus-maximus', label: 'Glutes' },
  { value: 'gastrocnemius', label: 'Calves' },
  { value: 'rectus-abdominis', label: 'Abs' },
];

const EQUIPMENT_OPTIONS = [
  'Barbell', 'Dumbbell', 'Cable', 'Machine', 'Bodyweight',
  'Kettlebell', 'Resistance Band', 'Pull-up Bar',
];

const GOAL_OPTIONS = [
  { value: 'strength', label: '💪 Strength' },
  { value: 'hypertrophy', label: '📈 Hypertrophy' },
  { value: 'endurance', label: '🏃 Endurance' },
  { value: 'mobility', label: '🧘 Mobility' },
];

const DIFFICULTY_OPTIONS = ['Beginner', 'Intermediate', 'Advanced'];

const SCORE_COLORS: Record<string, string> = {
  high: 'text-emerald-400',
  medium: 'text-amber-400',
  low: 'text-orange-400',
};

function scoreLabel(score: number) {
  if (score >= 75) return { label: 'Excellent Match', color: SCORE_COLORS.high };
  if (score >= 55) return { label: 'Good Match', color: SCORE_COLORS.medium };
  return { label: 'Possible Match', color: SCORE_COLORS.low };
}

export default function RecommendationsPage() {
  const theme = useAnatomyStore((s) => s.theme);
  const isDark = theme === 'dark';

  const [muscleId, setMuscleId] = useState('');
  const [equipment, setEquipment] = useState<string[]>([]);
  const [goal, setGoal] = useState('hypertrophy');
  const [difficulty, setDifficulty] = useState('');
  const [results, setResults] = useState<RecommendationResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generated, setGenerated] = useState(false);

  const toggleEquipment = (eq: string) =>
    setEquipment((prev) =>
      prev.includes(eq) ? prev.filter((e) => e !== eq) : [...prev, eq]
    );

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    try {
      const payload = {
        muscleId: muscleId || null,
        availableEquipment: equipment.length > 0 ? equipment : null,
        goal,
        experienceLevel: difficulty || null,
      };
      const data = await apiClient.post<RecommendationResponse[]>('/recommendations', payload);
      setResults(data);
      setGenerated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Backend unavailable — start the Java server on port 8080.');
    } finally {
      setLoading(false);
    }
  };

  const card = isDark
    ? 'bg-white/5 border-white/10 text-white'
    : 'bg-white border-slate-200 text-slate-900';
  const inputCls = isDark
    ? 'bg-white/10 border-white/20 text-white placeholder-gray-500'
    : 'bg-slate-50 border-slate-300 text-slate-900';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#07090e] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header */}
      <div className={`px-6 py-10 border-b ${isDark ? 'border-white/10 bg-gradient-to-r from-[#0d1117] to-[#07090e]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">AI Recommendations</h1>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
            Get personalised exercise suggestions scored by muscle match, equipment, difficulty, and fitness goal.
            <span className="ml-1 italic opacity-70">Not medical advice.</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Filters */}
        <div className={`rounded-2xl border p-6 space-y-6 ${card}`}>
          <h2 className="font-semibold text-lg">Your Preferences</h2>

          {/* Muscle */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Target Muscle
            </label>
            <div className="relative">
              <select
                value={muscleId}
                onChange={(e) => setMuscleId(e.target.value)}
                className={`w-full rounded-xl border px-4 py-2.5 text-sm appearance-none ${inputCls}`}
              >
                {MUSCLE_OPTIONS.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3 w-4 h-4 opacity-40 pointer-events-none" />
            </div>
          </div>

          {/* Equipment */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Available Equipment <span className="opacity-50">(select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {EQUIPMENT_OPTIONS.map((eq) => (
                <button
                  key={eq}
                  onClick={() => toggleEquipment(eq)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    equipment.includes(eq)
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                      : isDark
                      ? 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'
                      : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {eq}
                </button>
              ))}
            </div>
          </div>

          {/* Goal + Difficulty */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                Fitness Goal
              </label>
              <div className="grid grid-cols-2 gap-2">
                {GOAL_OPTIONS.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGoal(g.value)}
                    className={`py-2 px-3 rounded-xl text-sm font-medium border transition-all ${
                      goal === g.value
                        ? 'bg-purple-500/20 border-purple-400/50 text-purple-300'
                        : isDark
                        ? 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                Experience Level
              </label>
              <div className="flex flex-col gap-2">
                {DIFFICULTY_OPTIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(difficulty === d ? '' : d)}
                    className={`py-2 px-3 rounded-xl text-sm font-medium border transition-all text-left ${
                      difficulty === d
                        ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                        : isDark
                        ? 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-3 px-6 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-500 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? 'Generating…' : '⚡ Generate Recommendations'}
          </button>

          {error && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-400/30 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}
        </div>

        {/* Results */}
        {generated && results.length === 0 && !loading && (
          <div className={`text-center py-16 ${isDark ? 'text-gray-500' : 'text-slate-400'}`}>
            <Target className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No strong matches found. Try broadening your equipment or muscle selection.</p>
          </div>
        )}

        {results.length > 0 && (
          <div>
            <h2 className="font-semibold text-lg mb-4">
              {results.length} Recommended Exercise{results.length !== 1 ? 's' : ''}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((r, i) => {
                const { label: matchLabel, color: matchColor } = scoreLabel(r.score);
                return (
                  <div key={r.exercise.id} className={`rounded-2xl border p-5 space-y-3 transition-all hover:scale-[1.01] ${card}`}>
                    {/* Rank + name */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                          isDark ? 'bg-white/10 text-gray-400' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {i + 1}
                        </span>
                        <h3 className="font-semibold text-base leading-snug">{r.exercise.name}</h3>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className={`text-lg font-bold ${matchColor}`}>{r.score}</div>
                        <div className={`text-xs ${matchColor} opacity-80`}>{matchLabel}</div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-1.5">
                      {[r.exercise.equipment, r.exercise.difficulty, r.exercise.movementPattern].filter(Boolean).map((tag) => (
                        <span key={tag} className={`px-2 py-0.5 rounded-full text-xs border ${
                          isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-slate-100 border-slate-200 text-slate-500'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Sets/Reps */}
                    {(r.exercise.recommendedSets || r.exercise.recommendedReps) && (
                      <div className="flex items-center gap-3 text-xs">
                        <Dumbbell className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className={isDark ? 'text-gray-400' : 'text-slate-500'}>
                          {r.exercise.recommendedSets} × {r.exercise.recommendedReps}
                        </span>
                      </div>
                    )}

                    {/* Reasons */}
                    {r.matchReasons && r.matchReasons.length > 0 && (
                      <div className="space-y-1">
                        {r.matchReasons.map((reason, ri) => (
                          <div key={ri} className="flex items-start gap-1.5 text-xs">
                            <Award className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className={isDark ? 'text-gray-400' : 'text-slate-500'}>{reason}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Programming advice */}
                    {r.programmingAdvice && (
                      <p className={`text-xs italic border-t pt-2 ${
                        isDark ? 'border-white/10 text-gray-500' : 'border-slate-100 text-slate-400'
                      }`}>
                        💡 {r.programmingAdvice}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
