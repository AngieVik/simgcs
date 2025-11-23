import React from 'react';
import { SunIcon, MoonIcon } from './Icons';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';

  return (
    <label htmlFor="theme-toggle" className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only peer"
        checked={isDark}
        onChange={onToggle}
      />
      <div className="w-11 h-6 bg-stone-300 rounded-full peer dark:bg-stone-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-amber-500 dark:peer-focus:ring-amber-400 transition-colors"></div>
      <div className="absolute top-0.5 left-[2px] bg-white border-stone-300 border peer-checked:border-stone-500 rounded-full h-5 w-5 peer-checked:translate-x-full transition-all flex items-center justify-center">
        {isDark 
          ? <MoonIcon className="w-3 h-3 text-stone-500" /> 
          : <SunIcon className="w-3 h-3 text-amber-500" />
        }
      </div>
    </label>
  );
};

export default ThemeToggle;