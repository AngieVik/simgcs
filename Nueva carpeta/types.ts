
export enum Screen {
  Home = 'HOME',
  Case = 'CASE',
  Result = 'RESULT',
  Archive = 'ARCHIVE',
  Registry = 'REGISTRY',
  Game = 'GAME',
  Stats = 'STATS',
}

export interface GCSScore {
  ocular: number | null;
  verbal: number | null;
  motor: number | null;
}

export interface Case {
  id: string;
  title: string;
  category: string;
  narrative: string;
  correctGCS: {
    ocular: number;
    verbal: number;
    motor: number;
  };
  conclusion: string;
  gcsJustification: string;
  userGCS?: GCSScore;
  isCorrect?: boolean;
}

export interface GameQuestion {
  frase: string;
  correcta: string;
  incorrecta1: string;
  incorrecta2: string;
}