import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
        className="fixed top-4 right-4 p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-900 dark:text-gray-100" />
      ) : (
        <Moon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
      )}
    </button>
  );
};