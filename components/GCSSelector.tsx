import React from 'react';

interface GCSSelectorProps {
  label: string;
  options: number[];
  value: number | null;
  onChange: (value: number) => void;
}

const GCSSelector: React.FC<GCSSelectorProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label className="flex flex-col items-start text-stone-600 dark:text-stone-300">{label}</label>
      <div className="flex flex-wrap gap-1 items-start">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              onChange(option);
            }}
            className={`w-11 h-11 rounded-md items-start font-abril-fatface text-[24px] transition-all duration-200 ease-in-out transform hover:scale-110 dark:hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-stone-800
              ${value === option 
                ? 'bg-amber-500/70 text-slate-900 shadow-lg ring-2 ring-stone-500/70' 
                : 'bg-stone-200 text-stone-700 shadow-inner shadow-black/10 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700 dark:shadow-black/30 focus:ring-amber-400'
              }`}
          >
            {option === 0 ? 'NV' : option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GCSSelector;