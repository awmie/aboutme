import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-2 md:top-4 right-2 md:right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-white-400" />
      ) : (
        <Moon className="w-5 h-5 text-black" />
      )}
    </button>
  );
};