import React from 'react';
import Link from 'next/link';
import { Activity } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 glass-panel bg-[#07090e] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="font-display font-bold text-lg text-white">ANATOMYFIT</span>
          <span className="text-xs text-gray-500 font-mono ml-2">Phase 1 Foundation</span>
        </div>

        <p className="text-xs text-gray-400">
          Interactive Human Anatomy & Targeted Strength Platform
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-400">
          <Link href="/anatomy" className="hover:text-cyan-400 transition-colors">
            3D Explorer
          </Link>
          <Link href="/exercises" className="hover:text-cyan-400 transition-colors">
            Exercises
          </Link>
          <Link href="/settings" className="hover:text-cyan-400 transition-colors">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};
