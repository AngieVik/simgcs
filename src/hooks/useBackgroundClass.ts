import { useEffect } from "react";
import { AppBackground } from "../types";

/**
 * Hook que gestiona la clase de fondo en el body del documento.
 * Aplica automáticamente las clases CSS correspondientes según el fondo seleccionado.
 *
 * @param background - El tipo de fondo actual ('basic' | 'background1')
 */
export function useBackgroundClass(background: AppBackground): void {
  useEffect(() => {
    // Limpiar clases anteriores
    document.body.classList.remove(
      "home-background",
      "bg-basic",
      "bg-background1"
    );

    // Aplicar clase base
    document.body.classList.add("home-background");

    // Aplicar clase específica del fondo
    if (background === "background1") {
      document.body.classList.add("bg-background1");
    } else {
      document.body.classList.add("bg-basic");
    }
  }, [background]);
}

export default useBackgroundClass;
