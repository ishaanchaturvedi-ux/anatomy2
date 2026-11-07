'use client';

import React, { useEffect, useState } from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { exerciseService } from '../../services/exerciseService';
import { Exercise } from '../../types/exercise';
import { ExerciseFilter } from '../../components/exercises/ExerciseFilter';
import { ExerciseCard } from '../../components/exercises/ExerciseCard';
import { Dumbbell, Sparkles, AlertCircle, User } from 'lucide-react';
import { ModelGender } from '../../types/anatomy';

export default function ExerciseLibraryPage() {
  const exerciseFilters = useAnatomyStore((s) => s.exerciseFilters);
  const selectedModel = useAnatomyStore((s) => s.selectedModel);
  const setSelectedModel = useAnatomyStore((s) => s.setSelectedModel);
  const theme = useAnatomyStore((s) => s.theme);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  const isDark = theme === 'dark';

  useEffect(() => {
    setLoading(true);
    exerciseService.filterExercises(exerciseFilters, selectedModel).then((res) => {
      setExercises(res);
      setLoading(false);
    });
  }, [exerciseFilters, selectedModel]);

  return (
    <div className="space-y-6 min-h-[calc(100vh-9rem)]">
      {/* Header Banner */}
      <div
        className={`glass-panel p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300 ${
          isDark ? 'border-white/10 text-white' : 'border-slate-200 bg-white/90 text-slate-900 shadow-sm'
        }`}
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Dumbbell className="w-6 h-6 text-cyan-400" />
            <h1 className="font-display font-bold text-3xl tracking-tight">
              Exercise Library
            </h1>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
            Targeted weight training, hypertrophy, and bodyweight movements mapped directly to anatomical muscle IDs.
          </p>
        </div>

        {/* Gender Profile Switcher & Count */}
        <div className="flex flex-wrap items-center gap-3">
          <div
            className={`flex items-center gap-1 p-1 rounded-xl border text-xs font-mono font-bold ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5 text-gray-400 ml-1" />
            {(['male', 'female'] as ModelGender[]).map((gender) => (
              <button
                key={gender}
                onClick={() => setSelectedModel(gender)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedModel === gender
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-glow-cyan font-bold'
                    : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {gender === 'male' ? '♂ MALE' : '♀ FEMALE'}
              </button>
            ))}
          </div>

          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border ${
              isDark
                ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                : 'bg-cyan-50 border-cyan-300 text-cyan-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>
              {exercises.length} Exercises ({selectedModel.toUpperCase()})
            </span>
          </div>
        </div>
      </div>

      {/* Filter Component */}
      <ExerciseFilter />

      {/* Exercise Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 glass-panel rounded-2xl bg-white/5" />
          ))}
        </div>
      ) : exercises.length === 0 ? (
        <div className="glass-panel p-12 rounded-2xl border border-white/10 text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-cyan-400 mx-auto" />
          <h3 className="font-display font-bold text-lg">No Exercises Found</h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            No exercises match your current filter parameters for the selected anatomy profile. Try resetting filters or broadening terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} />
          ))}
        </div>
      )}
    </div>
  );
}
