
import React from "react";
import EKGLine from "../components/EKGLine";
import { AmbulanceIcon, ChartBarSquareIcon, Codigo3Icon, RegistryIcon, GlobeIcon, EnvelopeIcon } from "../components/Icons";
import { infoSections, referencesSection } from "../constants/infoContent";
import ApuntesCarousel from "../components/ApuntesCarousel";

interface HomeScreenProps {
  onNewCase: () => void;
  onStartOfflineCase: () => void;
  onStartGlobalCases: () => void;
  onStartGame: () => void;
  onShowStats: () => void;
  onShowLetter: () => void;
  onShowInfo: (info: { title: string; content: React.ReactNode; icon?: React.ReactNode }) => void;
  isMuted: boolean;
}

const indexButton = `
flex flex-row items-center justify-start gap-3 w-full aspect-[3/1] max-w-[220px] rounded-2xl px-2 select-none
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
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 dark:focus-visible:ring-amber-400/70
disabled:opacity-60 disabled:cursor-not-allowed disabled:grayscale disabled:shadow-none disabled:hover:scale-100 disabled:active:scale-100
transition-all duration-150
`;

const HomeScreen: React.FC<HomeScreenProps> = ({
  onNewCase,
  onStartOfflineCase,
  onStartGlobalCases,
  onShowInfo,
  onStartGame,
  onShowStats,
  onShowLetter,
  isMuted
}) => {
  return (
    <div className="w-full flex-grow flex flex-col items-center">
      {/* Cabecera */}
      <header className="w-full max-w-xl px-5 pb-8 pt-0 text-center">
        <p className="text-3xl sm:text-4xl font-lora text-stone-800 dark:text-stone-200">Estás de guardia…</p>
        <p className="text-lg sm:text-2xl font-lora italic text-stone-600 dark:text-stone-400 mt-2">
          ¿Listo para tu próximo aviso?
        </p>
      </header>

      {/* Acciones principales */}
      <section className="w-full max-w-xl px-5">
        <div className="grid grid-cols-2 gap-4 justify-items-center mx-auto">
          <button onClick={onNewCase} className={indexButton}>
            <AmbulanceIcon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none"/>
            <span>Activarnos</span>
          </button>
          <button onClick={onStartOfflineCase} className={indexButton}>
            <RegistryIcon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none" />
            <span>Registro</span>
          </button>
          <button onClick={onStartGame} className={indexButton}>
            <Codigo3Icon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none" />
            <span>Código3</span>
          </button>
          <button onClick={onShowStats} className={indexButton}>
            <ChartBarSquareIcon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none" />
            <span>Expediente</span>
          </button>
          <button onClick={onStartGlobalCases} className={indexButton}>
            <GlobeIcon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none" />
            <span>Casos Globales</span>
          </button>
          <button onClick={onShowLetter} className={indexButton}>
            <EnvelopeIcon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none" />
            <span>La Carta</span>
          </button>
        </div>
      </section>
      
      {/* Línea EKG */}
      <div className="w-full max-w-3xl px-5 mt-2">
        <EKGLine />
      </div>

      {/* Apuntes (Carrusel) */}
      <section className="w-full mt-8">
        <ApuntesCarousel
          sections={infoSections}
          onSelect={onShowInfo}
          isMuted={isMuted}
        />
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-auto pt-6 mb-2 text-center text-[8px] sm:text-xs text-stone-600 dark:text-stone-400">
        <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4">
          <a
            href="https://www.glasgowcomascale.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 dark:hover:text-amber-300 transition-colors underline-offset-2 hover:underline whitespace-nowrap"
          >
            glasgowcomascale.org
          </a>
          <span className="whitespace-nowrap">@AngiecloudEMS</span>
          <span className="whitespace-nowrap">@Gemini</span>
          <button
            onClick={() => onShowInfo(referencesSection)}
            className="hover:text-amber-500 dark:hover:text-amber-300 transition-colors underline-offset-2 hover:underline whitespace-nowrap"
            title="Referencias"
          >
            @Referencias
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
