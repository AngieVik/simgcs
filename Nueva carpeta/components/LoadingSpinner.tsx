import React from 'react';

interface LoadingSpinnerProps {
  onCancel: () => void;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ onCancel }) => {
  return (
    <div className="relative text-center">
       <button 
        onClick={onCancel} 
        className="absolute -top-4 -right-4 text-stone-400 hover:text-white transition-colors text-3xl font-bold z-10" 
        aria-label="Cancelar"
      >
        &times;
      </button>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative w-24 h-24">
          <div className="siren-light animate-siren-red absolute w-full h-full rounded-full"></div>
          <div className="siren-light animate-siren-blue absolute w-full h-full rounded-full" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <p className="text-lg font-lora italic text-amber-200">Recibiendo aviso...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;