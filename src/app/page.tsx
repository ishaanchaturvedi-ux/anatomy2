'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Dumbbell, Shield, Sparkles, Layers, Activity, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center py-12 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Container */}
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase shadow-glow-cyan"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive 3D Muscular Anatomy Platform</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
        >
          KNOW YOUR BODY. <br />
          <span className="text-gradient-cyan">TRAIN WITH PURPOSE.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Explore the human muscular system, understand how your muscles work, and discover the exercises that train them.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/anatomy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-glow-cyan hover:scale-105 active:scale-95 transition-all"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Anatomy</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>

          <Link
            href="/exercises"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white glass-panel-interactive rounded-xl hover:border-cyan-500/40 transition-all"
          >
            <Dumbbell className="w-5 h-5 text-cyan-400" />
            <span>View Exercises</span>
          </Link>
        </motion.div>
      </div>

      {/* Feature Grid Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-20 z-10"
      >
        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Activity className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="font-display text-lg font-bold text-white mb-2">3D Interactive Viewer</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Manipulate, rotate, and zoom into individual muscle groups in an extensible 3D viewport.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="font-display text-lg font-bold text-white mb-2">4-Tier Anatomy Hierarchy</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Drill down from Top Muscle Group → Training Region → Anatomical Muscle → Targeted Movements.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="font-display text-lg font-bold text-white mb-2">Exercise Relationships</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover exercises weighted by Primary, Secondary, and Stabilizer emphasis levels.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
