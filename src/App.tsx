import React, { useCallback, useEffect, useState, Suspense, lazy } from "react";

// Types
import { Screen, Case, GCSScore } from "./types";

// Context
import { useAppState, useAppDispatch } from "./context/AppContext";

// Hooks
import { useBackgroundClass } from "./hooks/useBackgroundClass";

// Utils & Constants
import { playClickSound } from "./utils/soundUtils";
import { getRandomUnplayedCase } from "./services/localCaseService";

// Components
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import InfoModal from "./components/InfoModal";

// Screens (Lazy-loaded for performance)
import HomeScreen from "./screens/HomeScreen"; // HomeScreen cargado normalmente (primera pantalla)
const CaseScreen = lazy(() => import("./screens/CaseScreen"));
const ResultScreen = lazy(() => import("./screens/ResultScreen"));
const ArchiveScreen = lazy(() => import("./screens/ArchiveScreen"));
const StatsScreen = lazy(() => import("./screens/StatsScreen"));
const SettingsScreen = lazy(() => import("./screens/SettingsScreen"));

// --- Main App Component ---
const App: React.FC = () => {
  const {
    screen,
    currentCase,
    isLoading,
    error,
    archive,
    infoContent,
    isMuted,
    theme,
    appBackground,
  } = useAppState();
  const dispatch = useAppDispatch();
  const [isConfirmingClear, setIsConfirmingClear] = useState(false);

  // Effect for scrolling to top on certain screen changes
  useEffect(() => {
    if (screen === Screen.Home) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [screen]);

  // Apply background class based on user preference
  useBackgroundClass(appBackground);

  // Effect for UI click sounds
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!isMuted && (event.target as HTMLElement).closest("button")) {
        playClickSound();
      }
    };

    document.body.addEventListener("click", handleClick, true);

    return () => {
      document.body.removeEventListener("click", handleClick, true);
    };
  }, [isMuted]);

  // Handler principal: carga un caso aleatorio usando el servicio local
  const handleActivarnos = useCallback(async () => {
    dispatch({ type: "START_NEW_CASE" });

    try {
      const solvedIds = new Set(
        archive.filter((c) => c.isCorrect).map((c) => c.id)
      );
      const randomCase = await getRandomUnplayedCase(solvedIds);
      dispatch({ type: "CASE_LOADED", payload: randomCase });
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Error al cargar el caso.";
      dispatch({ type: "API_ERROR", payload: message });
    }
  }, [archive, dispatch]);

  // Effect for PWA shortcuts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");

    if (action) {
      if (action === "new-case" || action === "global-case") {
        handleActivarnos();
      }

      if (window.history.replaceState) {
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    }
  }, [handleActivarnos]);

  const handleAssess = (userGCS: GCSScore) => {
    dispatch({ type: "ASSESS_CASE", payload: userGCS });
  };

  const handleReplayCase = (caseToReplay: Case) => {
    dispatch({ type: "REPLAY_CASE", payload: caseToReplay });
  };

  const handleShowArchive = () => {
    dispatch({ type: "SHOW_ARCHIVE" });
  };

  const handleShowStats = () => {
    dispatch({ type: "SHOW_STATS" });
  };

  const handleShowSettings = () => {
    dispatch({ type: "SHOW_SETTINGS" });
  };

  const handleGoHome = () => {
    dispatch({ type: "GO_HOME" });
  };

  const handleShowInfo = (section: {
    title: string;
    content: React.ReactNode;
  }) => {
    dispatch({ type: "SHOW_INFO", payload: section });
  };

  const handleCloseInfo = () => {
    dispatch({ type: "CLOSE_INFO" });
  };

  const handleToggleMute = () => {
    dispatch({ type: "TOGGLE_MUTE" });
  };

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleClearArchive = () => {
    if (archive.length > 0) {
      setIsConfirmingClear(true);
    }
  };

  const confirmClear = () => {
    dispatch({ type: "CLEAR_ARCHIVE" });
    setIsConfirmingClear(false);
  };

  const cancelClear = () => {
    setIsConfirmingClear(false);
  };

  const mainContainerClasses =
    "min-h-screen text-stone-800 dark:text-stone-200 flex flex-col";

  const isModalScreen = [
    Screen.Case,
    Screen.Result,
    Screen.Archive,
    Screen.Stats,
    Screen.Settings,
  ].includes(screen);

  return (
    <div className={mainContainerClasses}>
      <Header
        onShowArchive={handleShowArchive}
        onGoHome={handleGoHome}
        onShowSettings={handleShowSettings}
        showCloseButton={screen !== Screen.Home}
      />

      <main className="w-full flex-grow flex flex-col py-4 pt-20">
        {screen === Screen.Home && (
          <HomeScreen
            onActivarnos={handleActivarnos}
            onShowInfo={handleShowInfo}
            onShowStats={handleShowStats}
            isMuted={isMuted}
          />
        )}
      </main>

      {isLoading && (
        <div className="fixed inset-0 bg-black/60 dark:bg-black/80 flex items-start justify-center z-50 p-6 pt-32">
          <LoadingSpinner onCancel={handleGoHome} />
        </div>
      )}

      {(isModalScreen || infoContent) && !isLoading && (
        <InfoModal
          title={
            infoContent
              ? infoContent.title
              : screen === Screen.Case
              ? currentCase?.title ?? "Caso en curso"
              : screen === Screen.Result
              ? currentCase?.title
                ? `Resolución: ${currentCase.title}`
                : "Resolución"
              : screen === Screen.Archive
              ? "Informes de Casos"
              : screen === Screen.Stats
              ? "Expediente del Jugador"
              : screen === Screen.Settings
              ? "Configuración"
              : ""
          }
          content={
            <Suspense
              fallback={
                <div className="flex justify-center py-8">
                  <LoadingSpinner />
                </div>
              }
            >
              {infoContent ? (
                infoContent.content
              ) : screen === Screen.Case ? (
                currentCase && (
                  <CaseScreen
                    currentCase={currentCase}
                    onAssess={handleAssess}
                  />
                )
              ) : screen === Screen.Result ? (
                currentCase && (
                  <ResultScreen
                    lastCase={currentCase}
                    onActivarnos={handleActivarnos}
                    onEndService={handleGoHome}
                  />
                )
              ) : screen === Screen.Archive ? (
                <ArchiveScreen archive={archive} onReplay={handleReplayCase} />
              ) : screen === Screen.Stats ? (
                <StatsScreen archive={archive} />
              ) : screen === Screen.Settings ? (
                <SettingsScreen />
              ) : null}
            </Suspense>
          }
          onClose={infoContent ? handleCloseInfo : handleGoHome}
          headerAction={undefined}
        />
      )}

      {error && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md p-6 bg-stone-50 dark:bg-slate-900 rounded-2xl shadow-2xl border border-rose-400 dark:border-rose-700 text-center">
            <h3 className="text-xl font-bold text-rose-800 dark:text-rose-300 mb-2">
              Error de Coordinación
            </h3>
            <p className="text-rose-600 dark:text-rose-400 mb-6">{error}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleGoHome}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-150 fancy-hover-effect active:scale-95 bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.08)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.7),0_4px_10px_rgba(0,0,0,0.5)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300 dark:hover:border-stone-700/50"
              >
                Volver a la base
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmingClear && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md p-6 bg-stone-100 dark:bg-stone-800 rounded-lg shadow-xl border border-stone-300 dark:border-stone-700 text-center">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-200 mb-2">
              Confirmar Acción
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mb-6">
              ¿Estás seguro de que quieres borrar todos los informes de casos?
              Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelClear}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-150 fancy-hover-effect active:scale-95 bg-gradient-to-b from-stone-100 to-stone-200 text-stone-700 border border-stone-300/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.08)] dark:from-stone-700 dark:to-stone-800 dark:text-stone-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.7),0_4px_10px_rgba(0,0,0,0.5)] hover:from-stone-50 hover:to-stone-100 hover:text-amber-600 dark:hover:from-stone-600 dark:hover:to-stone-700 dark:hover:text-amber-300 dark:hover:border-stone-600/50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmClear}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 fancy-hover-effect active:scale-95 bg-gradient-to-b from-rose-600 to-rose-800 text-white border border-rose-900/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,100,100,0.5),0_4px_10px_rgba(0,0,0,0.4)] hover:from-rose-500 hover:to-rose-700"
              >
                Sí, borrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
