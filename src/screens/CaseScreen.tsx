
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Case, GCSScore } from '../types';
import GCSSelector from '../components/GCSSelector';
import { AssessIcon } from '../components/Icons';
import { useAppState } from '../context/AppContext';

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);
    const intervalRef = useRef<number | null>(null);
    const { isTypewriterEnabled } = useAppState();

    useEffect(() => {
        // Si el efecto está desactivado en configuración, mostrar todo inmediatamente
        if (!isTypewriterEnabled) {
            setDisplayedText(text);
            return;
        }

        // Reiniciar el estado para un nuevo texto
        setDisplayedText('');
        indexRef.current = 0;
        
        intervalRef.current = window.setInterval(() => {
            // Comprobar si hemos alcanzado el final del texto
            if (indexRef.current >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                return;
            }
            
            // Incrementar el índice y actualizar el texto visible
            indexRef.current += 1;
            setDisplayedText(text.substring(0, indexRef.current));

        }, 20); // Velocidad de escritura

        // Limpiar el intervalo al desmontar el componente o cuando el texto cambie
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text, isTypewriterEnabled]);

    const isFinished = displayedText.length === text.length;

    return (
        <p 
            className={`font-lora text-base text-stone-700 dark:text-stone-300 mb-6 whitespace-pre-wrap leading-relaxed ${!isFinished ? 'typewriter-cursor' : ''}`}
        >
            {displayedText}
        </p>
    );
};

interface CaseScreenProps {
    currentCase: Case;
    onAssess: (userGCS: GCSScore) => void;
}

const CaseScreen: React.FC<CaseScreenProps> = ({ currentCase, onAssess }) => {
    const [userGCS, setUserGCS] = useState<GCSScore>({ ocular: null, verbal: null, motor: null });
    const [showWarning, setShowWarning] = useState(false);
    
    const isComplete = useMemo(() => {
        return userGCS.ocular !== null && userGCS.verbal !== null && userGCS.motor !== null;
    }, [userGCS]);

    const handleAssess = () => {
        if (!isComplete) {
            setShowWarning(true);
            return;
        }
        setShowWarning(false);
        onAssess(userGCS);
    };

    return (
        <div className="min-h-full paper-texture-overlay relative">   
            
            <Typewriter text={currentCase.narrative} />
            
            <div className="text-left">
                <GCSSelector
                    label="Respuesta Ocular"
                    options={[0, 1, 2, 3, 4]}
                    value={userGCS.ocular}
                    onChange={(v) => setUserGCS({ ...userGCS, ocular: v })}
                />
                <GCSSelector
                    label="Respuesta Verbal"
                    options={[0, 1, 2, 3, 4, 5]}
                    value={userGCS.verbal}
                    onChange={(v) => setUserGCS({ ...userGCS, verbal: v })}
                />
                <GCSSelector
                    label="Respuesta Motora"
                    options={[0, 1, 2, 3, 4, 5, 6]}
                    value={userGCS.motor}
                    onChange={(v) => setUserGCS({ ...userGCS, motor: v })}
                />
            </div>
            
            {showWarning && !isComplete && (
                <p className="text-center text-red-600 dark:text-red-400 mt-6 text-sm animate-pulse">Por favor, completa la valoración de las tres respuestas.</p>
            )}

            <div className="flex justify-center mt-6">
                <button
                    onClick={handleAssess}
                    disabled={!isComplete}
                    className={"flex flex-row items-center gap-3 aspect-[4/1] px-6 py-3 select-none text-[20px] sm:text-[25px] font-league-gothic tracking-wider rounded-xl " +
                    "bg-gradient-to-b from-stone-500 to-stone-700 text-white " +
                    "border border-amber-600/80 " +
                    "shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(251,191,36,0.8),0_8px_15px_rgba(0,0,0,0.4)] " +
                    "hover:from-amber-400 hover:to-amber-600 " +
                    "transition-all duration-150 transform hover:scale-105 active:scale-[0.98] active:shadow-inner " +
                    "disabled:from-stone-300 disabled:to-stone-300 disabled:text-stone-500 disabled:border-stone-400 dark:disabled:bg-stone-800 dark:disabled:from-stone-800 dark:disabled:to-stone-800 dark:disabled:text-stone-500 dark:disabled:border-stone-700 " +
                    "disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 " +
                    "fancy-hover-effect"}
                >
                    <AssessIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    VALORAR
                </button>
            </div>
        </div>
    );
};

export default CaseScreen;
