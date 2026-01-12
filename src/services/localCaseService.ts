/**
 * Servicio local para cargar casos desde JSON.
 * Modo Offline-First: no requiere conexión a internet.
 */

import casosData from "../data/casosGCS.json";
import { Case } from "../types";

const cases: Case[] = casosData as Case[];

/**
 * Devuelve un caso aleatorio del JSON local.
 * Simula una pequeña demora para UX (spinner visible).
 */
export const getRandomCase = (): Promise<Case> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * cases.length);
      const selectedCase = cases[randomIndex];
      resolve(selectedCase);
    }, 2500); // 2500ms de demora simulada
  });
};

/**
 * Devuelve un caso aleatorio que no haya sido jugado correctamente.
 * Si todos han sido jugados, devuelve cualquiera.
 */
export const getRandomUnplayedCase = (
  solvedIds: Set<string>
): Promise<Case> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const unplayedCases = cases.filter((c) => !solvedIds.has(c.id));
      const pool = unplayedCases.length > 0 ? unplayedCases : cases;
      const randomIndex = Math.floor(Math.random() * pool.length);
      resolve(pool[randomIndex]);
    }, 2500);
  });
};
