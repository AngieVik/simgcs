# Guía de Estilo y Patrones del Proyecto SimGCS

Este documento define las convenciones, patrones de diseño y librerías preferidas del proyecto para que los futuros agentes y desarrolladores respeten el estilo establecido.

---

## 📦 Stack Tecnológico

| Categoría      | Tecnología                            |
| -------------- | ------------------------------------- |
| **Framework**  | React 19.2+                           |
| **Lenguaje**   | TypeScript 5.2+                       |
| **Bundler**    | Vite 5.2+                             |
| **Estilos**    | Vanilla CSS (sin frameworks CSS)      |
| **IA**         | `@google/genai` vía Netlify Functions |
| **Despliegue** | Netlify                               |

---

## 📁 Estructura de Carpetas

```
src/
├── components/     # Componentes reutilizables de UI
├── constants/      # Datos estáticos, configuración y contenido
│   └── cases/      # Casos clínicos individuales
├── context/        # React Context providers y reducers
├── hooks/          # Custom hooks reutilizables
├── screens/        # Componentes de pantalla/página completa
├── services/       # Llamadas a APIs externas
├── utils/          # Funciones de utilidad puras
├── App.tsx         # Componente raíz de la aplicación
├── index.tsx       # Punto de entrada
├── types.ts        # Definiciones de tipos globales
└── styles.css      # Estilos globales de la aplicación
```

### Convenciones de Nombres de Archivos

- **Componentes**: `PascalCase.tsx` (ej: `HomeScreen.tsx`, `InfoModal.tsx`)
- **Hooks**: `useCamelCase.ts` (ej: `useLocalStorage.ts`)
- **Utils/Services**: `camelCase.ts` (ej: `geminiService.ts`, `gcs.ts`)
- **Constantes**: `camelCase.ts` (ej: `gameData.ts`, `quotes.ts`)
- **Tipos**: Centralizar en `types.ts` para tipos globales

---

## 🎨 Patrones de Diseño

### 1. Estado Global: Context + useReducer

El estado global se maneja con **React Context** combinado con **useReducer**, NO con librerías externas.

```typescript
// Patrón en context/AppContext.tsx
interface AppState {
  /* ... */
}
type Action =
  | { type: "ACTION_NAME" }
  | { type: "ACTION_WITH_PAYLOAD"; payload: SomeType };

function appReducer(state: AppState, action: Action): AppState {
  /* ... */
}

const AppStateContext = createContext<AppState | null>(null);
const AppDispatchContext = createContext<React.Dispatch<Action> | null>(null);

// Hooks personalizados para consumir
export function useAppState() {
  /* ... */
}
export function useAppDispatch() {
  /* ... */
}
```

### 2. Componentes Funcionales con TypeScript

Siempre usar **componentes funcionales** con tipado explícito de props:

```typescript
interface ComponentProps {
  onAction: () => void;
  label: string;
  isDisabled?: boolean;  // Props opcionales con ?
}

const MyComponent: React.FC<ComponentProps> = ({ onAction, label, isDisabled = false }) => {
  return (/* JSX */);
};

export default MyComponent;
```

### 3. Custom Hooks para Lógica Reutilizable

Extraer lógica de estado compleja en hooks personalizados:

```typescript
// hooks/useLocalStorage.ts
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Lógica encapsulada
  return [storedValue, setValue];
}
export default useLocalStorage;
```

### 4. Iconos como Componentes SVG

Los iconos se definen como componentes React que renderizan SVG inline:

```typescript
// components/Icons.tsx
interface IconWithClassName {
  className?: string;
}

export function MyIcon({ className }: IconWithClassName) {
  return <svg className={className} /* props estándar */>{/* paths */}</svg>;
}
```

### 5. Screens como Contenedores de Página

Cada pantalla es un componente que recibe callbacks para navegación:

```typescript
// screens/HomeScreen.tsx
interface HomeScreenProps {
  onNavigateToX: () => void;
  onAction: (data: SomeType) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigateToX, onAction }) => {
  return (/* Layout completo de la pantalla */);
};
```

---

## 🖌️ Convenciones de Estilos CSS

### Archivo Principal: `styles.css`

- **Vanilla CSS** con clases de utilidad personalizadas
- **Variables CSS** para temas (light/dark)
- Organización en secciones con comentarios delimitadores:

```css
/* ============================================================================= */
/* NOMBRE DE SECCIÓN
/* ============================================================================= */
```

### Clases de Fuentes Personalizadas

```css
.font-league-gothic {
  font-family: "League Gothic", sans-serif;
}
.font-fugaz-one-regular {
  font-family: "Fugaz One", sans-serif;
}
.font-abril-fatface {
  font-family: "Abril Fatface", serif;
}
.font-typewriter {
  font-family: "Special Elite", monospace;
}
.font-game {
  font-family: "Luckiest Guy", cursive;
}
```

### Animaciones

Las animaciones se definen con `@keyframes` y se aplican mediante clases:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
```

### Soporte de Tema Oscuro

Usar la clase `.dark` en el padre para estilos de tema oscuro:

```css
.element {
  color: #333;
}
.dark .element {
  color: #ccc;
}
```

---

## 🔧 Servicios y APIs

### Llamadas a AI (Gemini)

Las llamadas a la API de Gemini se realizan mediante **Netlify Functions** (serverless):

```typescript
// services/geminiService.ts
export async function generateNewCase() {
  const response = await fetch("/.netlify/functions/generateNewCase");
  // Manejo de errores robusto
  if (!response.ok) {
    /* ... */
  }
  return await response.json();
}
```

> **Importante**: La API key de Gemini está en `.env.local` y se accede solo desde el servidor (funciones Netlify).

---

## 📋 Tipos y Enums

### Centralización en `types.ts`

```typescript
// Enums para valores discretos
export enum Screen {
  Home = "HOME",
  Case = "CASE",
  // ...
}

// Types para uniones de strings
export type AppBackground = "basic" | "background1";
export type AppMusic = "none" | "track1" | "track2";

// Interfaces para estructuras de datos
export interface GCSScore {
  ocular: number | null;
  verbal: number | null;
  motor: number | null;
}

export interface Case {
  id: string;
  title: string;
  // ...
}
```

---

## ✅ Buenas Prácticas

1. **TypeScript estricto**: Evitar `any`, usar tipos explícitos
2. **Componentes pequeños**: Extraer subcomponentes cuando crecen demasiado
3. **Props vs Context**: Usar props para datos de componente, Context para estado global
4. **Comentarios en español**: El proyecto usa comentarios en español
5. **Exports por defecto**: Usar `export default` para componentes principales
6. **Funciones puras en utils/**: Las utilidades deben ser funciones puras sin side effects
7. **Mobile-first**: Diseñar primero para móvil, luego adaptar a escritorio

---

## 🚫 Anti-Patrones a Evitar

- ❌ No usar librerías de estado externas (Redux, Zustand, etc.)
- ❌ No usar frameworks CSS (Tailwind inline en el código actual es legado)
- ❌ No hacer llamadas a API directamente desde componentes
- ❌ No usar `var` para variables CSS dinámicas en JavaScript
- ❌ No crear archivos `.css` por componente (centralizar en `styles.css`)
- ❌ No usar hooks en componentes clase (no hay clases en este proyecto)

---

## 📚 Dependencias Actuales

### Producción

- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `@google/genai`: ^1.28.0

### Desarrollo

- `typescript`: ^5.2.2
- `vite`: ^5.2.0
- `@vitejs/plugin-react`: ^4.2.1
- `eslint` + plugins de React/TypeScript
- `@types/node`, `@types/react`, `@types/react-dom`

---

_Última actualización: Enero 2026_
