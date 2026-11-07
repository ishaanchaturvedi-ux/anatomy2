'use client';

import { useEffect } from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';

export const ThemeSync = () => {
  const theme = useAnatomyStore((s) => s.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return null;
};
