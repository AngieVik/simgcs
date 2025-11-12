import React, { useCallback, useEffect, useState } from 'react';
import { Screen, Case, GCSScore } from './types';
import { generateNewCase } from './services/geminiService';
import { useAppState, useAppDispatch } from './context/AppContext';
import { gcsScoreToString, calculateTotalGCS } from './utils/gcs';
import { allOfflineCases } from './constants/offlineCases';
import { playClickSound } from './utils/soundUtils';

// Import new components
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import InfoModal from './components/InfoModal';
import HomeScreen from './screens/HomeScreen';
import CaseScreen from './screens/CaseScreen';
import ResultScreen from './screens/ResultScreen';
import ArchiveScreen from './screens/ArchiveScreen';
import RegistryScreen from './screens/RegistryScreen';
import GameScreen from './screens/GameScreen';
import StatsScreen from './screens/StatsScreen';

// --- Main App Component ---
const App: React.FC = () => {
    const { screen, currentCase, isLoading, error, archive, infoContent, codigo3HighScore, isMuted, theme } = useAppState();
    const dispatch = useAppDispatch();
    const [isConfirmingClear, setIsConfirmingClear] = useState(false);
    
    // Effect for scrolling to top on certain screen changes
    useEffect(() => {
        if (screen === Screen.Home) { // Scroll to top only on Home. Modal handles its own scroll.
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [screen]);

    // Effect for applying a background class to the body
    useEffect(() => {
        if (screen !== Screen.Game) {
            document.body.classList.add('home-background');
        } else {
            document.body.classList.remove('home-background');
        }
    }, [screen]);

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

    const handleStartOfflineCase = () => {
        if (allOfflineCases.length === 0) {
            alert("No hay casos offline disponibles en el registro.");
            return;
        }
        const randomCase = allOfflineCases[Math.floor(Math.random() * allOfflineCases.length)];
        dispatch({ type: 'REPLAY_CASE', payload: randomCase });
    };
    
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

    const handleGoHome = () => {
        dispatch({ type: 'GO_HOME' });
    };
    
    const handleStartGame = () => {
        dispatch({ type: 'START_GAME' });
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

    const handleSaveArchive = () => {
        if (archive.length === 0) return;

        const formatCaseForExport = (c: Case) => {
            const userGCS = c.userGCS || { ocular: null, verbal: null, motor: null };
            const correctGCS = c.correctGCS;
            const userTotal = calculateTotalGCS(userGCS);
            const correctTotal = calculateTotalGCS(correctGCS);

            return `
========================================
CASO: ${c.title}
FECHA: ${new Date(c.id).toLocaleString()}
RESULTADO: ${c.isCorrect ? 'CORRECTO' : 'INCORRECTO'}
========================================

NARRATIVA:
${c.narrative}

----------------------------------------

TU VALORACIÓN: GCS ${userTotal > 0 ? userTotal : 'No Totalizable'} (${gcsScoreToString(userGCS)})
RESOLUCIÓN: GCS ${correctTotal > 0 ? correctTotal : 'No Totalizable'} (${gcsScoreToString(correctGCS as GCSScore)})

----------------------------------------

CONCLUSIÓN DEL CASO:
"${c.conclusion}"

----------------------------------------

JUSTIFICACIÓN GCS:
${c.gcsJustification}
`;
        };

        const textContent = archive.slice().reverse().map(formatCaseForExport).join('\n\n');
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `informes-casos-gcs-${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
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

    const isModalScreen = [Screen.Case, Screen.Result, Screen.Archive, Screen.Registry, Screen.Stats].includes(screen);

    return (
        <div className={mainContainerClasses}>
            {screen !== Screen.Game && <Header onShowArchive={handleShowArchive} onShowRegistry={handleShowRegistry} onGoHome={handleGoHome} isMuted={isMuted} onToggleMute={handleToggleMute} theme={theme} onToggleTheme={handleToggleTheme} />}
            
            <main className={screen === Screen.Game ? "h-full" : "w-full flex-grow flex flex-col py-4 pt-20"}>
                {screen === Screen.Home && <HomeScreen onNewCase={handleNewCase} onStartOfflineCase={handleStartOfflineCase} onShowInfo={handleShowInfo} onStartGame={handleStartGame} onShowStats={handleShowStats} isMuted={isMuted} />}
                {screen === Screen.Game && <GameScreen onExit={handleGoHome} highScore={codigo3HighScore} onSetHighScore={handleSetCodigo3HighScore} />}
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
                        screen === Screen.Stats ? 'Expediente del Jugador' : ''
                    }
                    content={
                        infoContent ? infoContent.content :
                        screen === Screen.Case ? (currentCase && <CaseScreen currentCase={currentCase} onAssess={handleAssess} />) :
                        screen === Screen.Result ? (currentCase && <ResultScreen lastCase={currentCase} onNewCase={handleNewCase} onEndService={handleGoHome} onStartOfflineCase={handleStartOfflineCase} />) :
                        screen === Screen.Archive ? (<ArchiveScreen archive={archive} onSave={handleSaveArchive} onClear={handleClearArchive} onReplay={handleReplayCase} />) :
                        screen === Screen.Registry ? (<RegistryScreen archive={archive} onPlay={handleReplayCase} />) :
                        screen === Screen.Stats ? (<StatsScreen archive={archive} />) : null
                    }
                    onClose={infoContent ? handleCloseInfo : handleGoHome}
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