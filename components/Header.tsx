
import React, { useMemo } from 'react';
import { FolderIcon, OpenFolderIcon, XMarkIcon, Cog6ToothIcon } from './Icons';
import { useAppState } from '../context/AppContext';

interface HeaderProps {
    onShowArchive: () => void;
    onShowRegistry: () => void;
    onGoHome: () => void;
    onShowSettings: () => void;
    showCloseButton?: boolean;
}

const Ticker = () => {
    const { casesPlayed, unlockedRewards, archive } = useAppState();
    
    // Calcular aciertos para el objetivo de música
    const totalCorrectCases = useMemo(() => {
        return archive.filter(c => c.isCorrect).length;
    }, [archive]);

    let text = "";

    if (!unlockedRewards.includes('bg_ems')) {
        text = `OBJETIVO: JUGAR 3 CASOS (${casesPlayed}/3) • RECOMPENSA: FONDO OPERATIVO EMS`;
    } else if (!unlockedRewards.includes('music_pack_1')) {
        text = `OBJETIVO: 5 CASOS ACERTADOS (${totalCorrectCases}/5) • RECOMPENSA: BSO ORIGINAL`;
    } else {
        text = `SERVICIO OPERATIVO • TODAS LAS RECOMPENSAS DESBLOQUEADAS`;
    }

    return (
        <div className="flex-1 mx-3 overflow-hidden relative h-7 bg-black/10 dark:bg-black/30 rounded flex items-center border border-stone-300/30 dark:border-stone-600/30 shadow-inner">
            <div className="ticker-wrap w-full">
                <div className="ticker-move font-league-gothic text-[15px] text-stone-600 dark:text-stone-400 tracking-widest uppercase px-4" style={{ animationDuration: '45s' }}>
                    {text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text}
                </div>
            </div>
            {/* Degradados laterales muy sutiles */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-stone-200/50 to-transparent dark:from-stone-900/50 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-stone-200/50 to-transparent dark:from-stone-900/50 pointer-events-none"></div>
        </div>
    );
};

const FolderButton =
  "group relative flex items-center justify-start gap-1 " +
  "w-[clamp(10ch,22vw,13ch)] h-[clamp(2rem,3vw,3rem)] px-1 rounded-lg " +
  "bg-gradient-to-b from-stone-200 to-stone-100 text-stone-700 " + // Light mode base
  "dark:from-stone-800 dark:to-stone-900 dark:text-stone-100 " + // Dark mode
  "border border-stone-400/50 dark:border-black/50 " +
  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.08)] " + // Light mode shadow
  "dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.7),0_5px_15px_rgba(0,0,0,0.4)] " +
  "text-[clamp(1.125rem,2.6vw,1.375rem)] font-league-gothic tracking-wide " +
  "hover:from-stone-100 hover:to-stone-50 hover:text-amber-600/90 " + // Light mode hover
  "dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-600/90 dark:hover:border-stone-700/50 " +
  "active:scale-[0.98] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/90 dark:focus-visible:ring-amber-400 " +
  "transition-all duration-150 touch-manipulation fancy-hover-effect";

const Header: React.FC<HeaderProps> = ({ onShowArchive, onShowRegistry, onGoHome, onShowSettings, showCloseButton = true }) => {
    const iconButton = "p-1.5 rounded-full bg-gradient-to-b from-stone-200 to-stone-100 text-stone-500 border border-stone-300/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] hover:from-stone-100 hover:to-stone-50 hover:text-amber-500 dark:from-stone-800 dark:to-stone-900 dark:text-stone-400 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300 transition-all duration-150 active:scale-95 fancy-hover-effect z-100 shrink-0";

    return (
        <header className="absolute top-0 left-0 right-0 pt-2 pb-6 px-2 flex justify-between items-center bg-transparent z-40 gap-2">
            <div className="flex items-center gap-2 z-50 shrink-0">
                {showCloseButton && (
                    <button onClick={onGoHome} className={`${iconButton} hover:!text-rose-500 dark:hover:!text-rose-400`} aria-label="Cerrar"><XMarkIcon className="w-5 h-5" /></button>
                )}
                <button onClick={onShowSettings} className={iconButton} aria-label="Configuración">
                    <Cog6ToothIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Ticker Integrado en el hueco central */}
            <Ticker />

            <div className="flex items-center gap-1 z-50 shrink-0">
                <button onClick={onShowRegistry} className={FolderButton}>
                    <FolderIcon className="shrink-0 block group-hover:hidden w-[clamp(1.25rem,2.6vw,1.75rem)] h-[clamp(1.25rem,2.6vw,1.75rem)]" />
                    <OpenFolderIcon className="shrink-0 hidden group-hover:block w-[clamp(1.25rem,2.6vw,1.75rem)] h-[clamp(1.25rem,2.6vw,1.75rem)]" />
                    Registro
                </button>
                <button onClick={onShowArchive} className={FolderButton}>
                    <FolderIcon className="shrink-0 block group-hover:hidden w-[clamp(1.25rem,2.6vw,1.75rem)] h-[clamp(1.25rem,2.6vw,1.75rem)]" />
                    <OpenFolderIcon className="shrink-0 hidden group-hover:block w-[clamp(1.25rem,2.6vw,1.75rem)] h-[clamp(1.25rem,2.6vw,1.75rem)]" />
                    Informes
                </button>
            </div>
        </header>
    );
};

export default Header;
