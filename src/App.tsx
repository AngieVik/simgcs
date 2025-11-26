
import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react';

// Types
import { Screen, Case, GCSScore, AppMusic } from './types';

// Context & Services
import { useAppState, useAppDispatch } from './context/AppContext';
import { generateNewCase } from './services/geminiService';

// Utils & Constants
import { gcsScoreToString, calculateTotalGCS } from './utils/gcs';
import { playClickSound } from './utils/soundUtils';
import { allOfflineCases, casosGlobalesCases } from './constants/offlineCases';

// Components
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import InfoModal from './components/InfoModal';
import { TrophyIcon } from './components/Icons';

// Screens
import HomeScreen from './screens/HomeScreen';
import CaseScreen from './screens/CaseScreen';
import ResultScreen from './screens/ResultScreen';
import ArchiveScreen from './screens/ArchiveScreen';
import RegistryScreen from './screens/RegistryScreen';
import GameScreen from './screens/GameScreen';
import StatsScreen from './screens/StatsScreen';
import SettingsScreen from './screens/SettingsScreen';
import LetterScreen from './screens/LetterScreen';

const TrophyDisplay: React.FC<{ archive: Case[] }> = ({ archive }) => {
    const uniqueCorrectCount = useMemo(() => {
        const standardCaseIds = new Set(allOfflineCases.map(c => c.id));
        const correctSolvedIds = new Set(
            archive
                .filter(c => c.isCorrect && standardCaseIds.has(c.id))
                .map(c => c.id)
        );
        return correctSolvedIds.size;
    }, [archive]);

    return (
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-amber-100/30 dark:bg-amber-800/20 rounded-full border border-amber-300/30 dark:border-amber-700/20 shadow-sm">
            <TrophyIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="font-game text-sm text-amber-700 dark:text-amber-300 tracking-wide -mb-0.5">
                {uniqueCorrectCount}/{allOfflineCases.length}
            </span>
        </div>
    );
};

// --- Mapeo de pistas de música ---
// IMPORTANTE: Asegúrate de colocar tus archivos mp3 en la carpeta public/music/
const MUSIC_TRACKS: Record<AppMusic, string> = {
    'none': '',
    'track1': '/music/track1.mp3', // Nombre de tu primera canción
    'track2': '/music/track2.mp3', // Nombre de tu segunda canción (opcional)
};

// --- Main App Component ---
const App: React.FC = () => {
    const { screen, currentCase, isLoading, error, archive, infoContent, codigo3HighScore, isMuted, theme, appBackground, appMusic } = useAppState();
    const dispatch = useAppDispatch();
    const [isConfirmingClear, setIsConfirmingClear] = useState(false);
    
    // Referencia para el elemento de audio
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Effect for scrolling to top on certain screen changes
    useEffect(() => {
        if (screen === Screen.Home) { // Scroll to top only on Home. Modal handles its own scroll.
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [screen]);

    // Effect for applying a background class to the body
    useEffect(() => {
        // Limpiar clases anteriores
        document.body.classList.remove('home-background', 'bg-basic', 'bg-ems');

        if (screen !== Screen.Game) {
            document.body.classList.add('home-background'); // Estilo base
            
            // Aplicar fondo seleccionado
            if (appBackground === 'ems') {
                document.body.classList.add('bg-ems');
            } else {
                document.body.classList.add('bg-basic');
            }
        }
    }, [screen, appBackground]);

    // Effect for UI click sounds
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!isMuted && (event.target as HTMLElement).closest('button')) {
                playClickSound();
            }
        };

        document.body.addEventListener('click', handleClick, true); // Use capture phase

        return () => {
            document.body.removeEventListener('click', handleClick, true);
        };
    }, [isMuted]);

    // --- Lógica del Reproductor de Música ---
    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio();
            audioRef.current.loop = true;
            audioRef.current.volume = 0.4; // Volumen moderado para fondo
        }

        const audio = audioRef.current;

        // Si está muteado o la música es 'none', pausar
        if (isMuted || appMusic === 'none') {
            audio.pause();
            return;
        }

        // Si estamos en el minijuego (Código3), pausar la música ambiental
        // porque el juego tiene sus propios efectos y quizás quieras poner música tensa de juego luego
        if (screen === Screen.Game) {
             audio.pause();
             return;
        }

        const trackUrl = MUSIC_TRACKS[appMusic];
        
        // Si la fuente ha cambiado, actualizar y reproducir
        // Usamos getAttribute('src') para comparar la ruta relativa/absoluta correctamente
        if (trackUrl && !audio.src.endsWith(trackUrl)) {
            audio.src = trackUrl;
            audio.play().catch(e => {
                // Los navegadores bloquean autoplay si no hay interacción previa.
                // Esto es normal, se reproducirá tras el primer clic del usuario.
                console.log("Reproducción automática bloqueada hasta interacción:", e);
            });
        } else if (trackUrl && audio.paused) {
            // Si es la misma pista pero estaba pausada (ej. al volver del juego o desmutear)
            audio.play().catch(() => {});
        }

    }, [appMusic, isMuted, screen]);


    const handleNewCase = useCallback(async () => {
        dispatch({ type: 'START_NEW_CASE' });
        try {
            const caseData = await generateNewCase();
            dispatch({ type: 'CASE_LOADED', payload: caseData });
        } catch (e) {
            const message = e instanceof Error ? e.message : "Fallaron las comunicaciones.";
            dispatch({ type: 'API_ERROR', payload: message });
        }
    }, [dispatch]);
    
    const handleStartGame = useCallback(() => {
        dispatch({ type: 'START_GAME' });
    }, [dispatch]);

    // Effect for PWA shortcuts
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const action = urlParams.get('action');

        if (action) {
            if (action === 'new-case') {
                handleNewCase();
            } else if (action === 'start-game') {
                handleStartGame();
            }
            
            // Clean up URL to avoid re-triggering on hot-reload or refresh
            if (window.history.replaceState) {
                const cleanUrl = window.location.pathname;
                window.history.replaceState({}, document.title, cleanUrl);
            }
        }
    }, [handleNewCase, handleStartGame]);

    const handleStartOfflineCase = () => {
        if (allOfflineCases.length === 0) {
            alert("No hay casos offline disponibles en el registro.");
            return;
        }
        
        // Filtrar casos que ya están resueltos correctamente en el archivo
        const solvedIds = new Set(archive.filter(c => c.isCorrect).map(c => c.id));
        const availableCases = allOfflineCases.filter(c => !solvedIds.has(c.id));
        
        // Si quedan casos por resolver, elegir de esos. Si no, elegir de todos (modo repaso).
        const pool = availableCases.length > 0 ? availableCases : allOfflineCases;
        
        const randomCase = pool[Math.floor(Math.random() * pool.length)];
        
        dispatch({ type: 'REPLAY_CASE', payload: randomCase });
    };

    const handleStartGlobalCase = () => {
        if (!casosGlobalesCases || casosGlobalesCases.length === 0) {
             alert("No hay casos globales disponibles por el momento.");
             return;
        }

        // Filtrar casos globales que ya están resueltos correctamente
        const solvedIds = new Set(archive.filter(c => c.isCorrect).map(c => c.id));
        const availableCases = casosGlobalesCases.filter(c => !solvedIds.has(c.id));

        // Si quedan casos por resolver, elegir de esos. Si no, elegir de todos.
        const pool = availableCases.length > 0 ? availableCases : casosGlobalesCases;

        const randomCase = pool[Math.floor(Math.random() * pool.length)];
        dispatch({ type: 'REPLAY_CASE', payload: randomCase });
    }
    
    const handleAssess = (userGCS: GCSScore) => {
        dispatch({ type: 'ASSESS_CASE', payload: userGCS });
    };

    const handleReplayCase = (caseToReplay: Case) => {
        dispatch({ type: 'REPLAY_CASE', payload: caseToReplay });
    };

    const handleShowArchive = () => {
        dispatch({ type: 'SHOW_ARCHIVE' });
    };
    
    const handleShowRegistry = () => {
        dispatch({ type: 'SHOW_REGISTRY' });
    };
    
    const handleShowStats = () => {
        dispatch({ type: 'SHOW_STATS' });
    };

    const handleShowSettings = () => {
        dispatch({ type: 'SHOW_SETTINGS' });
    }

    const handleShowLetter = () => {
        dispatch({ type: 'SHOW_LETTER' });
    }

    const handleGoHome = () => {
        dispatch({ type: 'GO_HOME' });
    };
    
    const handleSetCodigo3HighScore = (score: number) => {
        dispatch({ type: 'SET_CODIGO3_HIGH_SCORE', payload: score });
    };

    const handleShowInfo = (section: { title: string; content: React.ReactNode }) => {
        dispatch({ type: 'SHOW_INFO', payload: section });
    };
    
    const handleCloseInfo = () => {
        dispatch({ type: 'CLOSE_INFO' });
    };

    const handleToggleMute = () => {
        dispatch({ type: 'TOGGLE_MUTE' });
    };

    const handleToggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    const handleClearArchive = () => {
        if (archive.length > 0) {
            setIsConfirmingClear(true);
        }
    };

    const confirmClear = () => {
        dispatch({ type: 'CLEAR_ARCHIVE' });
        setIsConfirmingClear(false);
    };

    const cancelClear = () => {
        setIsConfirmingClear(false);
    };
    
    const mainContainerClasses = screen === Screen.Game 
        ? "h-screen w-screen" 
        : "min-h-screen text-stone-800 dark:text-stone-200 flex flex-col";

    const isModalScreen = [Screen.Case, Screen.Result, Screen.Archive, Screen.Registry, Screen.Stats, Screen.Settings, Screen.Letter].includes(screen);

    return (
        <div className={mainContainerClasses}>
            {screen !== Screen.Game && <Header onShowArchive={handleShowArchive} onShowRegistry={handleShowRegistry} onGoHome={handleGoHome} onShowSettings={handleShowSettings} showCloseButton={screen !== Screen.Home} />}
            
            <main className={screen === Screen.Game ? "h-full" : "w-full flex-grow flex flex-col py-4 pt-20"}>
                {screen === Screen.Home && <HomeScreen onNewCase={handleNewCase} onStartOfflineCase={handleStartOfflineCase} onStartGlobalCases={handleStartGlobalCase} onShowInfo={handleShowInfo} onStartGame={handleStartGame} onShowStats={handleShowStats} onShowLetter={handleShowLetter} isMuted={isMuted} />}
                {screen === Screen.Game && <GameScreen onExit={handleGoHome} highScore={codigo3HighScore} onSetHighScore={handleSetCodigo3HighScore} isMuted={isMuted} onToggleMute={handleToggleMute} />}
            </main>

            {isLoading && (
                <div className="fixed inset-0 bg-black/60 dark:bg-black/80 flex items-start justify-center z-50 p-6 pt-32">
                    <LoadingSpinner onCancel={handleGoHome} />
                </div>
            )}
            
            {(isModalScreen || infoContent) && !isLoading && (
                 <InfoModal
                    title={
                        infoContent ? infoContent.title :
                        screen === Screen.Case ? currentCase?.title ?? 'Caso en curso' :
                        screen === Screen.Result ? `Resolución: ${currentCase?.title}` ?? 'Resolución' :
                        screen === Screen.Archive ? 'Informes de Casos' :
                        screen === Screen.Registry ? 'Registro de Casos' : 
                        screen === Screen.Stats ? 'Expediente del Jugador' : 
                        screen === Screen.Settings ? 'Configuración' : 
                        screen === Screen.Letter ? 'La Carta' : ''
                    }
                    content={
                        infoContent ? infoContent.content :
                        screen === Screen.Case ? (currentCase && <CaseScreen currentCase={currentCase} onAssess={handleAssess} />) :
                        screen === Screen.Result ? (currentCase && <ResultScreen lastCase={currentCase} onNewCase={handleNewCase} onEndService={handleGoHome} onStartOfflineCase={handleStartOfflineCase} onStartGlobalCase={handleStartGlobalCase} />) :
                        screen === Screen.Archive ? (<ArchiveScreen archive={archive} onReplay={handleReplayCase} />) :
                        screen === Screen.Registry ? (<RegistryScreen archive={archive} onPlay={handleReplayCase} />) :
                        screen === Screen.Stats ? (<StatsScreen archive={archive} />) : 
                        screen === Screen.Settings ? (<SettingsScreen />) :
                        screen === Screen.Letter ? (<LetterScreen />) : null
                    }
                    onClose={infoContent ? handleCloseInfo : handleGoHome}
                    headerAction={
                        screen === Screen.Registry ? <TrophyDisplay archive={archive} /> : undefined
                    }
                />
            )}
            
            {error && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-md p-6 bg-stone-50 dark:bg-slate-900 rounded-2xl shadow-2xl border border-rose-400 dark:border-rose-700 text-center">
                        <h3 className="text-xl font-bold text-rose-800 dark:text-rose-300 mb-2">Error de Coordinación</h3>
                        <p className="text-rose-600 dark:text-rose-400 mb-6">{error}</p>
                        <div className="flex justify-center gap-4">
                            <button onClick={handleGoHome} className="px-4 py-2 rounded-lg text-sm transition-all duration-150 fancy-hover-effect active:scale-95 bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.08)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.7),0_4px_10px_rgba(0,0,0,0.5)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300 dark:hover:border-stone-700/50">Volver a la base</button>
                            <button onClick={handleNewCase} className="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-150 fancy-hover-effect active:scale-95 bg-gradient-to-b from-amber-500 to-amber-700 text-white border border-amber-900/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_0_0_1px_rgba(251,191,36,0.8),0_4px_10px_rgba(0,0,0,0.4)] hover:from-amber-400 hover:to-amber-600">Reintentar</button>
                        </div>
                    </div>
                </div>
            )}

            {isConfirmingClear && (
                 <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-md p-6 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-xl border border-stone-300 dark:border-stone-700 text-center">
                         <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-200 mb-2">Confirmar Acción</h3>
                         <p className="text-stone-600 dark:text-stone-400 mb-6">¿Estás seguro de que quieres borrar todos los informes de casos? Esta acción no se puede deshacer.</p>
                         <div className="flex justify-center gap-4">
                             <button onClick={cancelClear} className="px-4 py-2 rounded-lg text-sm transition-all duration-150 fancy-hover-effect active:scale-95 bg-gradient-to-b from-stone-100 to-stone-200 text-stone-700 border border-stone-300/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.08)] dark:from-stone-700 dark:to-stone-800 dark:text-stone-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.7),0_4px_10px_rgba(0,0,0,0.5)] hover:from-stone-50 hover:to-stone-100 hover:text-amber-600 dark:hover:from-stone-600 dark:hover:to-stone-700 dark:hover:text-amber-300 dark:hover:border-stone-600/50">Cancelar</button>
                             <button onClick={confirmClear} className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 fancy-hover-effect active:scale-95 bg-gradient-to-b from-rose-600 to-rose-800 text-white border border-rose-900/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,100,100,0.5),0_4px_10px_rgba(0,0,0,0.4)] hover:from-rose-500 hover:to-rose-700">Sí, borrar</button>
                         </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;