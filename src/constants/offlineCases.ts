import { Case } from "../types";
import { hogarCases } from "./cases/hogar";
import { traficoCases } from "./cases/trafico";
import { playaCases } from "./cases/playa";
import { feriaCases } from "./cases/feria";
import { deportivosCases } from "./cases/deportivos";
import { imvCases } from "./cases/imv";
import { laboralCases } from "./cases/laboral";
import { urbanoCases } from "./cases/urbano";
import { conciertosCases } from "./cases/conciertos";
import { incendiosCases } from "./cases/incendios";

// Importar casos desde JSON (nuevo formato)
import casosGCSData from "../data/casosGCS.json";

// Casos offline para estadísticas (StatsScreen)
export const allOfflineCases: Case[] = [
  ...hogarCases,
  ...traficoCases,
  ...playaCases,
  ...feriaCases,
  ...deportivosCases,
  ...imvCases,
  ...laboralCases,
  ...urbanoCases,
  ...conciertosCases,
  ...incendiosCases,
];

// Casos para modo "Activarnos" (desde JSON)
export const casosGlobalesCases: Case[] = casosGCSData as Case[];
