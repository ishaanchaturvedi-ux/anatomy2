'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Dumbbell, Sparkles, Settings, Menu, X, Compass, Sun, Moon, User, BarChart2, Zap } from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ModelGender } from '../../types/anatomy';

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useAnatomyStore((s) => s.theme);
  const toggleTheme = useAnatomyStore((s) => s.toggleTheme);
  const selectedModel = useAnatomyStore((s) => s.selectedModel);
  const setSelectedModel = useAnatomyStore((s) => s.setSelectedModel);

  const isDark = theme === 'dark';

  const navItems = [
    { label: 'Anatomy', href: '/anatomy', icon: Compass },
    { label: 'Exercises', href: '/exercises', icon: Dumbbell },
    { label: 'Workouts', href: '/workouts', icon: Sparkles },
    { label: 'Recommend', href: '/recommendations', icon: Zap },
    { label: 'Dashboard', href: '/dashboard', icon: BarChart2 },
    { label: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full glass-panel border-b backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? 'border-white/10 bg-[#07090e]/80 text-white'
          : 'border-slate-200 bg-white/85 text-slate-900 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-glow-cyan group-hover:scale-105 transition-transform">
              <div
                className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                  isDark ? 'bg-[#07090e]' : 'bg-white'
                }`}
              >
                <Activity className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-wider">
              ANATOMY<span className="text-gradient-cyan">FIT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-white/10 text-cyan-400 border border-cyan-500/30 shadow-glow-cyan'
                        : 'bg-cyan-50 text-cyan-700 border border-cyan-300 font-semibold'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`px-2 py-0.5 text-[10px] font-semibold rounded-full border ${
                        isDark
                          ? 'bg-purple-950/80 text-purple-300 border-purple-500/30'
                          : 'bg-purple-100 text-purple-700 border-purple-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Gender + Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Gender Switcher */}
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
                  className={`px-2 py-1 rounded-lg transition-all ${
                    selectedModel === gender
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-glow-cyan'
                      : isDark
                      ? 'text-gray-400 hover:text-white'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {gender === 'male' ? '♂ MALE' : '♀ FEMALE'}
                </button>
              ))}
            </div>

            {/* Dark / Light Theme Toggle (Section 16-20) */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
              className={`p-2 rounded-xl border transition-all ${
                isDark
                  ? 'bg-white/5 border-white/10 text-yellow-300 hover:bg-white/10 shadow-glow-amber'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Explore CTA */}
            <Link
              href="/anatomy"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black transition-all bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-glow-cyan hover:scale-105 active:scale-95"
            >
              Explore 3D
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                isDark ? 'border-white/10 text-yellow-300' : 'border-slate-300 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg glass-panel ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-black'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`md:hidden glass-panel border-b px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200 ${
            isDark ? 'border-white/10 bg-[#07090e]/95' : 'border-slate-200 bg-white/95 text-slate-900'
          }`}
        >
          {/* Mobile Gender Switcher */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold">
            <span className="text-gray-400">Anatomy Profile:</span>
            <div className="flex items-center gap-1">
              {(['male', 'female'] as ModelGender[]).map((gender) => (
                <button
                  key={gender}
                  onClick={() => setSelectedModel(gender)}
                  className={`px-3 py-1 rounded-lg ${
                    selectedModel === gender
                      ? 'bg-cyan-400 text-black font-extrabold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {gender === 'male' ? '♂ MALE' : '♀ FEMALE'}
                </button>
              ))}
            </div>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : isDark
                    ? 'text-gray-300 hover:bg-white/5'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs bg-purple-950/80 text-purple-300 border border-purple-500/30 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/anatomy"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 text-base font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-glow-cyan"
            >
              Explore 3D Anatomy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
