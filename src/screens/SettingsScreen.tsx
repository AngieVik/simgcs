
import React from 'react';
import { useAppState, useAppDispatch } from '../context/AppContext';
import { SoundOnIcon, SoundOffIcon, MoonIcon, SunIcon, PhotoIcon, MusicNoteIcon } from '../components/Icons';
import { AppBackground, AppMusic } from '../types';

const ToggleSwitch: React.FC<{
    label: string;
    isChecked: boolean;
    onChange: () => void;
    IconOn?: React.ReactNode;
    IconOff?: React.ReactNode;
}> = ({ label, isChecked, onChange, IconOn, IconOff }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-stone-200/50 dark:bg-stone-700/50 rounded-lg border border-stone-300 dark:border-stone-600 shadow-sm">
            <span className="font-lora text-stone-800 dark:text-stone-200 text-lg">{label}</span>
            <button
                onClick={onChange}
                className={`relative inline-flex items-center h-8 rounded-full w-14 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:focus:ring-offset-stone-900
                ${isChecked ? 'bg-amber-500' : 'bg-stone-400 dark:bg-stone-600'}`}
            >
                <span className="sr-only">{label}</span>
                <span
                    className={`inline-flex items-center justify-center w-6 h-6 transform bg-white rounded-full transition-transform duration-200 ease-in-out shadow-md
                    ${isChecked ? 'translate-x-7' : 'translate-x-1'}`}
                >
                     {isChecked ? (IconOn || null) : (IconOff || null)}
                </span>
            </button>
        </div>
    );
};

const BackgroundSelectCard: React.FC<{
    label: string;
    value: AppBackground;
    onChange: (value: AppBackground) => void;
    unlockedRewards: string[];
}> = ({ label, value, onChange, unlockedRewards }) => {
    // 1. Comprobamos si el usuario tiene la medalla/premio 'bg_ems'
    // (Este ID 'bg_ems' viene de LetterScreen.tsx cuando reclamas la carta)
    const isEmsUnlocked = unlockedRewards.includes('bg_ems');

    return (
        <div className="flex items-center justify-between p-4 bg-stone-200/50 dark:bg-stone-700/50 rounded-lg border border-stone-300 dark:border-stone-600 shadow-sm">
            <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-white dark:bg-stone-600 text-stone-600 dark:text-stone-300 shadow-sm">
                    <PhotoIcon className="w-4 h-4" />
                </div>
                <span className="font-lora text-stone-800 dark:text-stone-200 text-lg">{label}</span>
            </div>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as AppBackground)}
                className="bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-stone-800 dark:text-stone-200 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2.5 focus:outline-none transition-colors cursor-pointer hover:bg-white dark:hover:bg-stone-700 max-w-[150px]"
            >
                {/* La opción básica siempre está disponible */}
                <option value="basic">Básico</option>
                
                {/* 2. LA CONDICIÓN DE VISIBILIDAD:
                   Esta línea <option> solo se "dibuja" en la pantalla si isEmsUnlocked es TRUE.
                   Si no has jugado las 3 partidas y reclamado el premio, esta opción es invisible.
                */}
                {isEmsUnlocked && <option value="background1">Operativo EMS</option>}
            </select>
        </div>
    );
};

const MusicSelectCard: React.FC<{
    label: string;
    value: AppMusic;
    onChange: (value: AppMusic) => void;
    unlockedRewards: string[];
}> = ({ label, value, onChange, unlockedRewards }) => {
    const isMusicUnlocked = unlockedRewards.includes('music_pack_1');

    return (
        <div className="flex items-center justify-between p-4 bg-stone-200/50 dark:bg-stone-700/50 rounded-lg border border-stone-300 dark:border-stone-600 shadow-sm">
            <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-white dark:bg-stone-600 text-stone-600 dark:text-stone-300 shadow-sm">
                    <MusicNoteIcon className="w-4 h-4" />
                </div>
                <span className="font-lora text-stone-800 dark:text-stone-200 text-lg">{label}</span>
            </div>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as AppMusic)}
                className="bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-600 text-stone-800 dark:text-stone-200 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2.5 focus:outline-none transition-colors cursor-pointer hover:bg-white dark:hover:bg-stone-700 max-w-[150px]"
            >
                <option value="none">Silencio</option>
                {isMusicUnlocked && <option value="track1">BSO Original #1</option>}
            </select>
        </div>
    );
};

const SettingsScreen: React.FC = () => {
    const { isMuted, theme, isTypewriterEnabled, appBackground, unlockedRewards, appMusic } = useAppState();
    const dispatch = useAppDispatch();

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                 <ToggleSwitch
                    label="Sonido"
                    isChecked={!isMuted}
                    onChange={() => dispatch({ type: 'TOGGLE_MUTE' })}
                    IconOn={<SoundOnIcon className="w-4 h-4 text-amber-600" />}
                    IconOff={<SoundOffIcon className="w-4 h-4 text-stone-500" />}
                />
                
                <ToggleSwitch
                    label="Modo Oscuro"
                    isChecked={theme === 'dark'}
                    onChange={() => dispatch({ type: 'TOGGLE_THEME' })}
                    IconOn={<MoonIcon className="w-4 h-4 text-amber-600" />}
                    IconOff={<SunIcon className="w-4 h-4 text-amber-500" />}
                />

                <ToggleSwitch
                    label="Efecto Máquina de Escribir"
                    isChecked={isTypewriterEnabled}
                    onChange={() => dispatch({ type: 'TOGGLE_TYPEWRITER' })}
                    IconOn={<span className="font-typewriter text-xs font-bold text-amber-600">Tt</span>}
                    IconOff={<span className="font-sans text-xs font-bold text-stone-500">T</span>}
                />

                <BackgroundSelectCard
                    label="Fondo"
                    value={appBackground}
                    onChange={(val) => dispatch({ type: 'SET_BACKGROUND', payload: val })}
                    unlockedRewards={unlockedRewards}
                />

                <MusicSelectCard
                    label="Música"
                    value={appMusic}
                    onChange={(val) => dispatch({ type: 'SET_MUSIC', payload: val })}
                    unlockedRewards={unlockedRewards}
                />
            </div>
            
            <div className="p-1 bg-stone-100/50 dark:bg-stone-800/50 rounded-lg text-center text-sm text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
                <p className="font-league-gothic tracking-wider text-lg mb-1">Simulador de Casos Glasgow</p>
                <p>v2.0.0</p>
                <p className="mt-2 italic font-serif">"Nunca confíes en las impresiones generales, muchacho, concéntrate en los detalles."</p>
            </div>
        </div>
    );
};

export default SettingsScreen;
