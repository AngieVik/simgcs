import { Case } from '../types';
import { hogarCases } from './cases/hogar';
import { traficoCases } from './cases/trafico';
import { playaCases } from './cases/playa';
import { feriaCases } from './cases/feria';
import { deportivosCases } from './cases/deportivos';
import { imvCases } from './cases/imv';
import { laboralCases } from './cases/laboral';
import { urbanoCases } from './cases/urbano';
import { conciertosCases } from './cases/conciertos';
import { incendiosCases } from './cases/incendios';
import { casosGlobalesCases } from './cases/casosglobales';

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

export const caseCategories: Record<string, Case[]> = {
  'Hogar': hogarCases,
  'Tráfico': traficoCases,
  'Playa': playaCases,
  'Feria y Fiestas': feriaCases,
  'Deportivos': deportivosCases,
  'IMV': imvCases,
  'Laboral': laboralCases,
  'Urbano': urbanoCases,
  'Conciertos': conciertosCases,
  'Incendios': incendiosCases,
};

export { casosGlobalesCases };