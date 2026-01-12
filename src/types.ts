export enum Screen {
  Home = "HOME",
  Case = "CASE",
  Result = "RESULT",
  Archive = "ARCHIVE",
  Stats = "STATS",
  Settings = "SETTINGS",
}

export type AppBackground = "basic" | "background1";

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
  playedAt?: string; // Timestamp de cuando se jugó
}
