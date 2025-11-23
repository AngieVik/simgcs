import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { Screen, Case, GCSScore } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

// 1. Definir la forma del estado
interface AppState {
  screen: Screen;
  currentCase: Case | null;
  isLoading: boolean;
  error: string | null;
  archive: Case[];
  infoContent: { title: string; content: React.ReactNode } | null;
  codigo3HighScore: number;
  isMuted: boolean;
  theme: 'light' | 'dark';
}

// 2. Definir los tipos de acciones
type Action =
  | { type: 'START_NEW_CASE' }
  | { type: 'CASE_LOADED'; payload: Omit<Case, 'id'> }
  | { type: 'REPLAY_CASE'; payload: Case }
  | { type: 'API_ERROR'; payload: string }
  | { type: 'ASSESS_CASE'; payload: GCSScore }
  | { type: 'GO_HOME' }
  | { type: 'SHOW_ARCHIVE' }
  | { type: 'SHOW_REGISTRY' }
  | { type: 'SHOW_STATS' }
  | { type: 'START_GAME' }
  | { type: 'SHOW_INFO'; payload: { title: string; content: React.ReactNode } }
  | { type: 'CLOSE_INFO' }
  | { type: 'SET_SCREEN'; payload: Screen }
  | { type: 'CLEAR_ARCHIVE' }
  | { type: 'SET_CODIGO3_HIGH_SCORE', payload: number }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'TOGGLE_THEME' };

// Contextos separados para el estado y para el despachador de acciones (dispatch)
// Esto es una optimización: los componentes que solo necesitan 'dispatch' no se volverán a renderizar cuando cambie el estado.
const AppStateContext = createContext<AppState | null>(null);
const AppDispatchContext = createContext<React.Dispatch<Action> | null>(null);

// 3. Función Reducer: El cerebro que maneja las transiciones de estado
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'START_NEW_CASE':
      return { ...state, isLoading: true, error: null };
    case 'CASE_LOADED':
      return {
        ...state,
        isLoading: false,
        currentCase: { id: new Date().toISOString(), ...action.payload },
        screen: Screen.Case,
      };
    case 'REPLAY_CASE':
        const caseToReplay = { ...action.payload };
        // Reset user-specific data for the replay
        delete caseToReplay.userGCS;
        delete caseToReplay.isCorrect;
        return {
            ...state,
            isLoading: false,
            currentCase: caseToReplay,
            screen: Screen.Case,
        };
    case 'API_ERROR':
  return { ...state, isLoading: false, error: action.payload };
    case 'ASSESS_CASE': {
      if (!state.currentCase) return state;
      const userGCS = action.payload;
      const isCorrect = userGCS.ocular === state.currentCase.correctGCS.ocular &&
                        userGCS.verbal === state.currentCase.correctGCS.verbal &&
                        userGCS.motor === state.currentCase.correctGCS.motor;
      const solvedCase: Case = { ...state.currentCase, userGCS, isCorrect };
      
      let newArchive = [...state.archive];
      const existingCaseIndex = state.archive.findIndex(c => c.id === solvedCase.id);

      if (existingCaseIndex > -1) {
          // Si el caso ya existe (p. ej., un caso offline rejugado), actualízalo.
          newArchive[existingCaseIndex] = solvedCase;
      } else {
          // Si es un caso nuevo (online o el primer intento de un offline), añádelo.
          newArchive = [solvedCase, ...newArchive];
      }
      
      return { ...state, currentCase: solvedCase, archive: newArchive, screen: Screen.Result };
    }
    case 'GO_HOME':
      return { ...state, screen: Screen.Home, currentCase: null, error: null, isLoading: false };
    case 'SHOW_ARCHIVE':
      return { ...state, screen: Screen.Archive };
    case 'SHOW_REGISTRY':
        return { ...state, screen: Screen.Registry };
    case 'SHOW_STATS':
        return { ...state, screen: Screen.Stats };
    case 'START_GAME':
        return { ...state, screen: Screen.Game };
    case 'SHOW_INFO':
      return { ...state, infoContent: action.payload };
    case 'CLOSE_INFO':
      return { ...state, infoContent: null };
    case 'SET_SCREEN':
      return { ...state, screen: action.payload };
    case 'CLEAR_ARCHIVE':
      return { ...state, archive: [] };
    case 'SET_CODIGO3_HIGH_SCORE':
      if (action.payload > state.codigo3HighScore) {
        return { ...state, codigo3HighScore: action.payload };
      }
      return state;
    case 'TOGGLE_MUTE':
      return { ...state, isMuted: !state.isMuted };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    default:
      return state;
  }
};

// 4. Componente Proveedor: Proporciona el estado y el dispatch a sus hijos
export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [persistedArchive, setPersistedArchive] = useLocalStorage<Case[]>('gcs-case-archive', []);
  const [persistedHighScore, setPersistedHighScore] = useLocalStorage<number>('codigo3-high-score', 0);
  const [persistedIsMuted, setPersistedIsMuted] = useLocalStorage<boolean>('gcs-sound-muted', false);
  const [persistedTheme, setPersistedTheme] = useLocalStorage<'light' | 'dark'>('gcs-theme', 'dark');

  const initialState: AppState = {
    screen: Screen.Home,
    currentCase: null,
    isLoading: false,
    error: null,
    archive: persistedArchive,
    infoContent: null,
    codigo3HighScore: persistedHighScore,
    isMuted: persistedIsMuted,
    theme: persistedTheme,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Sincronizar el estado del archivo con LocalStorage cada vez que cambie
  useEffect(() => {
    setPersistedArchive(state.archive);
  }, [state.archive, setPersistedArchive]);

  // Sincronizar la puntuación máxima con LocalStorage
  useEffect(() => {
    setPersistedHighScore(state.codigo3HighScore);
  }, [state.codigo3HighScore, setPersistedHighScore]);

  // Sincronizar el estado de silencio con LocalStorage
  useEffect(() => {
    setPersistedIsMuted(state.isMuted);
  }, [state.isMuted, setPersistedIsMuted]);

  // Sincronizar el estado del tema con LocalStorage y la clase en <html>
  useEffect(() => {
    setPersistedTheme(state.theme);
    if (state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.theme, setPersistedTheme]);

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
    throw new Error('useAppState debe ser usado dentro de un AppContextProvider');
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === null) {
    throw new Error('useAppDispatch debe ser usado dentro de un AppContextProvider');
  }
  return context;
};