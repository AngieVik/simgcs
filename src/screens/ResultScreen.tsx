import React, { useState, useEffect } from 'react';
import { Case } from '../types';
import { getGcsTotalDisplay } from '../utils/gcs';
import { AmbulanceIcon, PowerIcon, CheckCircleIcon, XCircleIcon, RegistryIcon, GlobeIcon } from '../components/Icons';
import { SUCCESS_QUOTES, FAILURE_QUOTES } from '../constants/quotes';

const getRandomQuote = (quotes: string[]) => quotes[Math.floor(Math.random() * quotes.length)];

const JustificationDisplay: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n');
    return (
        <div className="text-stone-700 dark:text-stone-300 leading-relaxed text-sm">
            {lines.map((line, index) => {
                const match = line.match(/^(Ocular|Verbal|Motora)(\(.*\)): (.*)$/);
                if (match) {
                    const [, label, score, description] = match;
                    return (
                        <div key={index} className="mb-2 last:mb-0">
                            <code className="font-typewriter bg-amber-100 text-amber-800 dark:bg-slate-700/80 px-1 py-0.5 rounded dark:text-amber-300 mr-1">
                                {label}{score}
                            </code>
                            <span>{description}</span>
                        </div>
                    );
                }
                return <p key={index}>{line}</p>;
            })}
        </div>
    );
};

const ScoreDisplay: React.FC<{
    userScore: number | string | null;
    correctScore: number | string;
    label: 'O' | 'V' | 'M' | 'T';
}> = ({ userScore, correctScore, label }) => {
    const isCorrect = userScore === correctScore;

    const displayValue = (score: number | string | null) => {
        if (score === null) return '?';
        if (typeof score === 'string') return score; // Handles 'NT'
        if (score === 0) return 'NV';
        return score;
    };
    
    const iconClass = "w-5 h-5"; 
    const UserIcon = isCorrect ? <CheckCircleIcon /> : <XCircleIcon />;
    const ClonedUserIcon = React.cloneElement(UserIcon, { className: iconClass });


    return (
        <div className="text-center flex flex-col items-center justify-start p-2">
            <p className="font-lora font-bold text-xl text-stone-800 dark:text-stone-300 mb-2">{label}</p>
            <div className={`grid grid-cols-[24px,1fr,24px] items-center justify-center gap-1 w-full text-center ${isCorrect ? 'text-amber-600 dark:text-amber-300' : 'player-score-text'}`}>
                 <div className="text-center">{ClonedUserIcon}</div>
                <p className={`font-bold font-typewriter text-4xl text-center`}>
                    {displayValue(userScore)}
                </p>
                <div></div>
            </div>
            <p className="text-xl font-bold font-typewriter text-amber-600 dark:text-amber-300 mt-1">
                {displayValue(correctScore)}
            </p>
        </div>
    );
};


interface ResultScreenProps {
    lastCase: Case;
    onNewCase: () => void;
    onEndService: () => void;
    onStartOfflineCase: () => void;
    onStartGlobalCase: () => void;
}

const actionButtonBase = "flex items-center justify-center gap-2 px-2 py-2 rounded-lg text-xl font-league-gothic tracking-wider transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400";
const primaryButton = `${actionButtonBase} flex-1 bg-gradient-to-b from-amber-500 to-amber-700 text-white border border-amber-900/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(251,191,36,0.8),0_8px_15px_rgba(0,0,0,0.4)] hover:from-amber-400 hover:to-amber-600 fancy-hover-effect`;
const secondaryButton = `${actionButtonBase} flex-1 bg-gradient-to-b from-stone-100 to-stone-200 text-stone-800 border border-stone-300/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.08)] hover:from-stone-50 hover:to-stone-100 hover:text-amber-600 dark:from-stone-800 dark:to-stone-900 dark:text-stone-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.7),0_8px_20px_rgba(0,0,0,0.5)] dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300 dark:hover:border-stone-700/50 fancy-hover-effect`;

const ResultScreen: React.FC<ResultScreenProps> = ({ lastCase, onNewCase, onEndService, onStartOfflineCase, onStartGlobalCase }) => {
    const [quote, setQuote] = useState('');
    const [isStamped, setIsStamped] = useState(false);
    
    useEffect(() => {
        setQuote(getRandomQuote(lastCase.isCorrect ? SUCCESS_QUOTES : FAILURE_QUOTES));
        
        const timer = setTimeout(() => {
            setIsStamped(true);
        }, 100);

        return () => clearTimeout(timer);

    }, [lastCase.isCorrect]);

    if (!lastCase.userGCS) return null;

    const userTotal = getGcsTotalDisplay(lastCase.userGCS);
    const correctTotal = getGcsTotalDisplay(lastCase.correctGCS);
    
    // Detectar tipos de casos (Globales empiezan por 'global-', Estándar por 'offline-')
    const isGlobalCase = lastCase.id.startsWith('global-');
    // Consideramos "Offline" (para el botón de continuar) a ambos tipos: registro estándar y globales
    const isOfflineMode = lastCase.id.startsWith('offline-') || lastCase.id.startsWith('global-');

    return (
        <div>
            <p className="text-lg italic my-4 text-center text-stone-600 dark:text-stone-400">"{quote}"</p>
            
            <div className="relative p-4 my-6 bg-stone-100/50 dark:bg-stone-900/20 rounded-lg border border-stone-300 dark:border-stone-700 shadow-inner shadow-lg shadow-black/10">
                <div className={`verdict-stamp ${isStamped ? 'stamped' : ''} ${lastCase.isCorrect ? 'text-green-800 border-green-800 dark:text-green-400 dark:border-green-400' : 'text-rose-900 border-rose-900 dark:text-rose-400 dark:border-rose-400'} z-10`}>
                    {lastCase.isCorrect ? 'CORRECTO' : 'INCORRECTO'}
                </div>
                <h4 className="font-lora font-bold text-lg text-stone-800 dark:text-stone-300 mb-3 text-center">Informe de Valoración</h4>
                <div className="grid grid-cols-4 items-start text-center divide-x divide-stone-300 dark:divide-stone-700">
                    <ScoreDisplay userScore={lastCase.userGCS.ocular} correctScore={lastCase.correctGCS.ocular} label="O" />
                    <ScoreDisplay userScore={lastCase.userGCS.verbal} correctScore={lastCase.correctGCS.verbal} label="V" />
                    <ScoreDisplay userScore={lastCase.userGCS.motor} correctScore={lastCase.correctGCS.motor} label="M" />
                    <ScoreDisplay userScore={userTotal} correctScore={correctTotal} label="T" />
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <details className="bg-stone-200/50 dark:bg-stone-900/30 rounded-lg border border-stone-300 dark:border-stone-700 transition-all duration-300 open:bg-stone-200 dark:open:bg-stone-900/50 open:shadow-lg shadow-md shadow-black/5">
                    <summary className="font-bold text-lg text-amber-700 dark:text-amber-400 p-4">Lectura del caso</summary>
                    <div className="px-4 pb-4 border-t border-stone-300 dark:border-stone-700">
                      <p className="text-stone-700 dark:text-stone-300 whitespace-pre-wrap leading-relaxed mt-2">{lastCase.narrative}</p>
                    </div>
                </details>
                <div className="p-4 bg-transparent rounded-lg border border-stone-300 dark:border-stone-700 shadow-lg shadow-black/10">
                    <h4 className="font-bold text-lg text-amber-700 dark:text-amber-400 mb-2">Conclusión del Caso</h4>
                    <p className="text-stone-700 dark:text-stone-300 italic leading-relaxed">"{lastCase.conclusion}"</p>
                </div>
                <div className="p-4 bg-transparent rounded-lg border border-stone-300 dark:border-stone-700 shadow-lg shadow-black/10">
                    <h4 className="font-bold text-lg text-amber-700 dark:text-amber-400 mb-2">Justificación GCS</h4>
                    <JustificationDisplay text={lastCase.gcsJustification} />
                </div>
            </div>

            <p className="text-lg text-center mt-8 mb-4 text-stone-700 dark:text-stone-300">
                {isOfflineMode ? '¿Continuamos la simulación?' : '¿Listo para tu próximo aviso?'}
            </p>
            <div className="flex gap-3 w-full mt-2">
                 {isOfflineMode ? (
                    <>
                        <button
                            onClick={isGlobalCase ? onStartGlobalCase : onStartOfflineCase}
                            className={primaryButton}
                        >
                            {isGlobalCase ? <GlobeIcon className="w-7 h-7" /> : <RegistryIcon className="w-7 h-7" />}
                            Buscar...
                        </button>
                        <button
                            onClick={onEndService}
                            className={secondaryButton}
                        >
                            <PowerIcon className="w-7 h-7" />
                            Volver
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={onNewCase}
                            className={primaryButton}
                        >
                            <AmbulanceIcon className="w-7 h-7" />
                            Nuevo aviso
                        </button>
                        <button
                            onClick={onEndService}
                            className={secondaryButton}
                        >
                            <PowerIcon className="w-7 h-7" />
                            Fin del servicio
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResultScreen;