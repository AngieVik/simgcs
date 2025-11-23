
import React, { useMemo, useState, useRef, useEffect } from 'react';
import { useAppState, useAppDispatch } from '../context/AppContext';
import { PhotoIcon, MusicNoteIcon, EyeIcon, DownloadIcon, PlayCircleIcon, StopCircleIcon } from '../components/Icons';

const RewardCard: React.FC<{
    id: string;
    title: string;
    description: string;
    requirementText: string;
    currentProgress: number;
    target: number;
    isUnlocked: boolean;
    onClaim: () => void;
    icon: React.ReactNode;
    assetUrl: string;
    assetType: 'image' | 'audio';
}> = ({ id, title, description, requirementText, currentProgress, target, isUnlocked, onClaim, icon, assetUrl, assetType }) => {
    const progressPercent = Math.min(100, (currentProgress / target) * 100);
    const isCompletable = currentProgress >= target;
    
    // --- AUDIO PREVIEW LOGIC ---
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handleToggleAudio = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(assetUrl);
            audioRef.current.addEventListener('ended', () => setIsPlaying(false));
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Error al reproducir:", e));
        }
        setIsPlaying(!isPlaying);
    };

    // --- ACTION BUTTONS UI ---
    const ActionButton = ({ onClick, icon: Icon, label, href, download }: { onClick?: () => void, icon: React.ElementType, label: string, href?: string, download?: string }) => {
        const content = (
            <>
                <Icon className="w-3 h-3" />
                {label}
            </>
        );

        const classes = "flex items-center justify-center gap-2 px-3 py-1.5 rounded-md border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors text-xs font-bold uppercase tracking-wider select-none";

        if (href) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" download={download} className={classes}>
                    {content}
                </a>
            );
        }

        return (
            <button onClick={onClick} className={classes}>
                {content}
            </button>
        );
    };

    return (
        <div className="relative p-6 bg-stone-100 dark:bg-stone-800 border-2 border-stone-300 dark:border-stone-600 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.01]">
            {/* Sello de confidencial */}
            <div className="absolute -top-3 -right-3 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-sm shadow-md transform rotate-12 font-typewriter tracking-widest">
                CONFIDENCIAL
            </div>

            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400">
                    {icon}
                </div>
                <div>
                    <h3 className="font-league-gothic text-2xl text-stone-800 dark:text-stone-100 tracking-wide">{title}</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400 font-serif italic">{description}</p>
                </div>
            </div>

            <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-bold text-stone-500 uppercase tracking-wider">
                    <span>Objetivo: {requirementText}</span>
                    <span>{currentProgress}/{target}</span>
                </div>
                <div className="w-full bg-stone-300 dark:bg-stone-700 rounded-full h-2.5 overflow-hidden border border-stone-400/30">
                    <div 
                        className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>

            <button
                onClick={onClaim}
                disabled={!isCompletable || isUnlocked}
                className={`w-full py-3 px-4 rounded-lg font-league-gothic text-xl tracking-wider transition-all duration-200 shadow-md
                    ${isUnlocked 
                        ? 'bg-green-600 text-white cursor-default opacity-90 border border-green-700' 
                        : isCompletable 
                            ? 'bg-gradient-to-b from-amber-500 to-amber-700 text-white hover:from-amber-400 hover:to-amber-600 border border-amber-800 active:scale-95 cursor-pointer animate-pulse-slow' 
                            : 'bg-stone-300 dark:bg-stone-700 text-stone-500 dark:text-stone-500 cursor-not-allowed border border-stone-400 dark:border-stone-600'
                    }`}
            >
                {isUnlocked ? 'RECOMPENSA ADQUIRIDA' : isCompletable ? 'ADQUIRIR RECOMPENSA' : 'BLOQUEADO'}
            </button>

            {/* BOTONES DE ACCIÓN MINIMALISTAS (Solo si desbloqueado) */}
            {isUnlocked && (
                <div className="flex gap-2 mt-3 justify-center sm:justify-start animate-fade-in">
                    {assetType === 'image' && (
                        <ActionButton 
                            icon={EyeIcon} 
                            label="Ver" 
                            href={assetUrl}
                        />
                    )}
                    {assetType === 'audio' && (
                        <ActionButton 
                            onClick={handleToggleAudio}
                            icon={isPlaying ? StopCircleIcon : PlayCircleIcon}
                            label={isPlaying ? "Detener" : "Escuchar"} 
                        />
                    )}
                    <ActionButton 
                        icon={DownloadIcon} 
                        label="Descargar" 
                        href={assetUrl}
                        download={assetUrl.split('/').pop()}
                    />
                </div>
            )}
        </div>
    );
};

const LetterScreen: React.FC = () => {
    const { casesPlayed, unlockedRewards, archive } = useAppState();
    const dispatch = useAppDispatch();

    // Calculamos el número total de casos acertados para la misión de música
    const totalCorrectCases = useMemo(() => {
        return archive.filter(c => c.isCorrect).length;
    }, [archive]);

    const handleClaimEms = () => {
        dispatch({ type: 'CLAIM_REWARD', payload: 'bg_ems' });
        dispatch({ type: 'SET_BACKGROUND', payload: 'ems' });
    };

    const handleClaimMusic = () => {
        dispatch({ type: 'CLAIM_REWARD', payload: 'music_pack_1' });
        dispatch({ type: 'SET_MUSIC', payload: 'track1' });
    };

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2 mb-8">
                <h2 className="font-typewriter text-2xl font-bold text-stone-800 dark:text-stone-200">TABLÓN DE CARTAS</h2>
                <p className="font-serif text-stone-600 dark:text-stone-400 text-sm italic max-w-md mx-auto">
                    "Completa los objetivos operativos para desbloquear recursos adicionales y personalización."
                </p>
            </div>

            <RewardCard
                id="bg_ems"
                title="Fondo Operativo EMS"
                description="Desbloquea el fondo 'EMS'. Personaliza tu terminal con la imagen operativa estándar de la unidad."
                requirementText="Jugar 3 casos"
                currentProgress={casesPlayed}
                target={3}
                isUnlocked={unlockedRewards.includes('bg_ems')}
                onClaim={handleClaimEms}
                icon={<PhotoIcon className="w-8 h-8" />}
                assetUrl="/background.jpg"
                assetType="image"
            />

            <RewardCard
                id="music_pack_1"
                title="BSO track1"
                description="Desbloquea el primer track de la banda sonora original. Música ambiental para acompañar tus guardias."
                requirementText="5 Casos Acertados (Total)"
                currentProgress={totalCorrectCases}
                target={5}
                isUnlocked={unlockedRewards.includes('music_pack_1')}
                onClaim={handleClaimMusic}
                icon={<MusicNoteIcon className="w-8 h-8" />}
                assetUrl="/music/track1.mp3"
                assetType="audio"
            />

            {/* Placeholder para futuras cartas */}
            <div className="opacity-50 filter grayscale pointer-events-none relative p-6 bg-stone-100 dark:bg-stone-800 border-2 border-dashed border-stone-300 dark:border-stone-600 rounded-xl flex items-center justify-center h-32">
                <p className="font-typewriter text-stone-400 uppercase tracking-widest">Misión Bloqueada</p>
            </div>
        </div>
    );
};

export default LetterScreen;
