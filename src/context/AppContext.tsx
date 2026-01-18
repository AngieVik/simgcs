import React, { createContext, useReducer, useContext, useEffect } from "react";
import { Screen, Case, GCSScore, AppBackground } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

// 1. Definir la forma del estado
interface AppState {
  screen: Screen;
  currentCase: Case | null;
  isLoading: boolean;
  error: string | null;
  archive: Case[];
  infoContent: { title: string; content: React.ReactNode } | null;
  isMuted: boolean;
  theme: "light" | "dark";
  isTypewriterEnabled: boolean;
  appBackground: AppBackground;
  casesPlayed: number;
}

// 2. Definir los tipos de acciones
type Action =
  | { type: "START_NEW_CASE" }
  | { type: "CASE_LOADED"; payload: Omit<Case, "id"> }
  | { type: "REPLAY_CASE"; payload: Case }
  | { type: "API_ERROR"; payload: string }
  | { type: "ASSESS_CASE"; payload: GCSScore }
  | { type: "GO_HOME" }
  | { type: "SHOW_ARCHIVE" }
  | { type: "SHOW_STATS" }
  | { type: "SHOW_SETTINGS" }
  | { type: "SHOW_INFO"; payload: { title: string; content: React.ReactNode } }
  | { type: "CLOSE_INFO" }
  | { type: "SET_SCREEN"; payload: Screen }
  | { type: "CLEAR_ARCHIVE" }
  | { type: "TOGGLE_MUTE" }
  | { type: "TOGGLE_THEME" }
  | { type: "TOGGLE_TYPEWRITER" }
  | { type: "SET_BACKGROUND"; payload: AppBackground };

// Contextos separados para el estado y para el despachador de acciones (dispatch)
const AppStateContext = createContext<AppState | null>(null);
const AppDispatchContext = createContext<React.Dispatch<Action> | null>(null);

// 3. Función Reducer: El cerebro que maneja las transiciones de estado
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "START_NEW_CASE":
      return {
        ...state,
        isLoading: true,
        error: null,
        casesPlayed: state.casesPlayed + 1,
      };
    case "CASE_LOADED":
      return {
        ...state,
        isLoading: false,
        // Preservar el ID original del JSON, añadir timestamp de partida
        currentCase: {
          ...action.payload,
          playedAt: new Date().toISOString(),
        },
        screen: Screen.Case,
      };
    case "REPLAY_CASE":
      const caseToReplay = { ...action.payload };
      // Reset user-specific data for the replay
      delete caseToReplay.userGCS;
      delete caseToReplay.isCorrect;
      return {
        ...state,
        isLoading: false,
        currentCase: caseToReplay,
        screen: Screen.Case,
        casesPlayed: state.casesPlayed + 1,
      };
    case "API_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "ASSESS_CASE": {
      if (!state.currentCase) return state;
      const userGCS = action.payload;
      const isCorrect =
        userGCS.ocular === state.currentCase.correctGCS.ocular &&
        userGCS.verbal === state.currentCase.correctGCS.verbal &&
        userGCS.motor === state.currentCase.correctGCS.motor;
      const solvedCase: Case = { ...state.currentCase, userGCS, isCorrect };

      let newArchive = [...state.archive];
      const existingCaseIndex = state.archive.findIndex(
        (c) => c.id === solvedCase.id,
      );

      if (existingCaseIndex > -1) {
        // Si el caso ya existe (p. ej., un caso offline rejugado), actualízalo.
        newArchive[existingCaseIndex] = solvedCase;
      } else {
        // Si es un caso nuevo (online o el primer intento de un offline), añádelo.
        newArchive = [solvedCase, ...newArchive];
      }

      return {
        ...state,
        currentCase: solvedCase,
        archive: newArchive,
        screen: Screen.Result,
      };
    }
    case "GO_HOME":
      return {
        ...state,
        screen: Screen.Home,
        currentCase: null,
        error: null,
        isLoading: false,
      };
    case "SHOW_ARCHIVE":
      return { ...state, screen: Screen.Archive };
    case "SHOW_STATS":
      return { ...state, screen: Screen.Stats };
    case "SHOW_SETTINGS":
      return { ...state, screen: Screen.Settings };
    case "SHOW_INFO":
      return { ...state, infoContent: action.payload };
    case "CLOSE_INFO":
      return { ...state, infoContent: null };
    case "SET_SCREEN":
      return { ...state, screen: action.payload };
    case "CLEAR_ARCHIVE":
      return { ...state, archive: [] };
    case "TOGGLE_MUTE":
      return { ...state, isMuted: !state.isMuted };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "TOGGLE_TYPEWRITER":
      return { ...state, isTypewriterEnabled: !state.isTypewriterEnabled };
    case "SET_BACKGROUND":
      return { ...state, appBackground: action.payload };
    default:
      return state;
  }
};

// 4. Componente Proveedor: Proporciona el estado y el dispatch a sus hijos
export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [persistedArchive, setPersistedArchive] = useLocalStorage<Case[]>(
    "gcs-case-archive",
    [],
  );
  const [persistedIsMuted, setPersistedIsMuted] = useLocalStorage<boolean>(
    "gcs-sound-muted",
    false,
  );
  const [persistedTheme, setPersistedTheme] = useLocalStorage<"light" | "dark">(
    "gcs-theme",
    "dark",
  );
  const [persistedTypewriter, setPersistedTypewriter] =
    useLocalStorage<boolean>("gcs-typewriter-enabled", true);
  const [persistedBackground, setPersistedBackground] = useLocalStorage<string>(
    "gcs-background",
    "basic",
  );
  const [persistedCasesPlayed, setPersistedCasesPlayed] =
    useLocalStorage<number>("gcs-cases-played-count", 0);

  // Constante con valores válidos para el fondo
  const VALID_BACKGROUNDS: AppBackground[] = ["basic", "background1"];
  const DEFAULT_BACKGROUND: AppBackground = "basic";

  // Validación segura del background type usando el array de valores válidos
  const validatedBackground: AppBackground = VALID_BACKGROUNDS.includes(
    persistedBackground as AppBackground,
  )
    ? (persistedBackground as AppBackground)
    : DEFAULT_BACKGROUND;

  const initialState: AppState = {
    screen: Screen.Home,
    currentCase: null,
    isLoading: false,
    error: null,
    archive: persistedArchive,
    infoContent: null,
    isMuted: persistedIsMuted,
    theme: persistedTheme,
    isTypewriterEnabled: persistedTypewriter,
    appBackground: validatedBackground,
    casesPlayed: persistedCasesPlayed,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Sincronizar el estado del archivo con LocalStorage cada vez que cambie
  useEffect(() => {
    setPersistedArchive(state.archive);
  }, [state.archive, setPersistedArchive]);

  // Sincronizar el estado de silencio con LocalStorage
  useEffect(() => {
    setPersistedIsMuted(state.isMuted);
  }, [state.isMuted, setPersistedIsMuted]);

  // Sincronizar el estado del tema con LocalStorage y la clase en <html>
  useEffect(() => {
    setPersistedTheme(state.theme);
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme, setPersistedTheme]);

  // Sincronizar configuración de typewriter
  useEffect(() => {
    setPersistedTypewriter(state.isTypewriterEnabled);
  }, [state.isTypewriterEnabled, setPersistedTypewriter]);

  // Sincronizar configuración de fondo
  useEffect(() => {
    setPersistedBackground(state.appBackground);
  }, [state.appBackground, setPersistedBackground]);

  // Sincronizar progreso de juego
  useEffect(() => {
    setPersistedCasesPlayed(state.casesPlayed);
  }, [state.casesPlayed, setPersistedCasesPlayed]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

// 5. Hooks personalizados para consumir el contexto fácilmente
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === null) {
    throw new Error(
      "useAppState debe ser usado dentro de un AppContextProvider",
    );
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === null) {
    throw new Error(
      "useAppDispatch debe ser usado dentro de un AppContextProvider",
    );
  }
  return context;
};
