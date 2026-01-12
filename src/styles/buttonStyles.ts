/**
 * Estilos centralizados de botones para la aplicación.
 * Esto permite mantener consistencia visual y facilitar cambios globales.
 */

// ============================================================================
// BOTÓN BASE COMPARTIDO
// ============================================================================

/** Estilos base para todos los botones pequeños */
export const buttonBase = `
  flex items-center justify-center
  transition-all duration-150
  active:scale-95
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60
  dark:focus-visible:ring-amber-400/70
  disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-inner
`;

// ============================================================================
// BOTONES PRINCIPALES (Home Screen)
// ============================================================================

/** Botón grande para la pantalla de inicio (Activarnos, Expediente, etc.) */
export const indexButton = `
  flex flex-row items-center justify-start gap-3
  w-full aspect-[3/1] max-w-[220px] rounded-2xl px-2 select-none
  text-[clamp(22px,5vw,28px)] font-league-gothic tracking-wide
  bg-gradient-to-b from-[#f4f1ec] to-[#e0ded9]
  from-stone-200 to-stone-400 text-stone-800
  dark:from-stone-800 dark:to-stone-900 dark:text-stone-200
  hover:border-b-4 hover:border-r-4
  border-stone-600/40 dark:border-black/50
  shadow-[0_1px_3px_rgba(0,0,0,0.08)]
  hover:shadow-[inset_0_4px_20px_rgba(0,0,0,0.22),inset_0_-2px_10px_rgba(0,0,0,0.16),0_8px_32px_rgba(0,0,0,0.19)]
  dark:shadow-[0_4px_18px_rgba(0,0,0,0.36)]
  dark:hover:shadow-[inset_0_1.5px_10px_rgba(255,255,255,0.10),0_16px_40px_rgba(0,0,0,0.54),0_2px_8px_rgba(0,0,0,0.30)]
  hover:from-[#f8f7f2] hover:to-[#eae8e3] hover:text-amber-600/90
  dark:hover:from-stone-700 dark:hover:to-stone-900 dark:hover:text-amber-600/90
  hover:border-black-400/70 dark:hover:border-stone-700/70
  hover:scale-[0.98]
  active:scale-[0.95] active:shadow-inner
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60
  dark:focus-visible:ring-amber-400/70
  disabled:opacity-60 disabled:cursor-not-allowed disabled:grayscale
  disabled:shadow-none disabled:hover:scale-100 disabled:active:scale-100
  transition-all duration-150
`;

// ============================================================================
// BOTONES PEQUEÑOS (Archive, Modals, etc.)
// ============================================================================

/** Base para botones pequeños con efectos de hover estilo fancy */
export const smallButtonBase = `
  flex items-center justify-center text-sm rounded-md
  transition-all duration-150 active:scale-95 fancy-hover-effect
  disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-inner
  disabled:!bg-stone-300 disabled:!text-stone-500 disabled:!border-stone-400
  dark:disabled:!bg-stone-800 dark:disabled:!text-stone-500 dark:disabled:!border-stone-700
`;

/** Botón redondo pequeño (e.g., botón de replay en archivo) */
export const roundSmallButton = `
  ${smallButtonBase}
  p-2 rounded-full
  bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800
  border border-stone-400/50
  shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)]
  dark:from-stone-800 dark:to-stone-900 dark:text-stone-300 dark:border-black/50
  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_5px_rgba(0,0,0,0.4)]
  hover:from-stone-100 hover:to-stone-200 hover:text-amber-600
  dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300
`;

/** Botón de icono para header (settings, play/pause) */
export const iconButton = `
  p-1.5 rounded-full shrink-0 z-100
  bg-gradient-to-b from-stone-200 to-stone-100 text-stone-500
  border border-stone-300/80
  shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)]
  hover:from-stone-100 hover:to-stone-50 hover:text-amber-500
  dark:from-stone-800 dark:to-stone-900 dark:text-stone-400 dark:border-black/50
  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)]
  dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300
  transition-all duration-150 active:scale-95 fancy-hover-effect
`;
