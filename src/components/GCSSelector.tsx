import React from 'react';

interface GCSSelectorProps {
  label: string;
  options: number[];
  value: number | null;
  onChange: (value: number) => void;
}

const GCSSelector: React.FC<GCSSelectorProps> = ({ label, options, value, onChange }) => {
  return (
    <fieldset className="mb-3">
      <legend className="text-stone-600 dark:text-stone-300 text-sm font-bold mb-1 ml-1">{label}</legend>
      <div className="flex flex-wrap gap-2 items-center">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              onChange(option);
            }}
            className={`w-10 h-12 sm:w-12 sm:h-14 rounded-lg flex items-center justify-center font-abril-fatface text-[18px] transition-all duration-200 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-stone-800
              ${value === option 
                ? 'bg-amber-500/90 text-slate-900 shadow-lg ring-2 ring-stone-500/50 scale-105' 
                : 'bg-stone-200/80 text-stone-700 shadow-md shadow-black/5 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700 dark:shadow-black/20 focus:ring-amber-400'
              }`}
            aria-label={`Puntuación ${option === 0 ? 'No Valorable' : option}`}
          >
            {option === 0 ? 'NV' : option}
          </button>
        ))}
      </div>
    </fieldset>
  );
};

export default GCSSelector;