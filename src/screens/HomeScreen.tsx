import React from "react";
import EKGLine from "../components/EKGLine";
import { AmbulanceIcon, ChartBarSquareIcon } from "../components/Icons";
import { infoSections, referencesSection } from "../constants/infoContent";
import ApuntesCarousel from "../components/ApuntesCarousel";
import { indexButton } from "../styles/buttonStyles";

interface HomeScreenProps {
  onActivarnos: () => void;
  onShowStats: () => void;
  onShowInfo: (info: {
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
  }) => void;
  isMuted: boolean;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  onActivarnos,
  onShowInfo,
  onShowStats,
  isMuted,
}) => {
  return (
    <div className="w-full flex-grow flex flex-col items-center">
      {/* Cabecera */}
      <header className="w-full max-w-xl px-5 pb-8 pt-0 text-center">
        <p className="text-3xl sm:text-4xl font-lora text-stone-800 dark:text-stone-200">
          Estás de guardia…
        </p>
        <p className="text-lg sm:text-2xl font-lora italic text-stone-600 dark:text-stone-400 mt-2">
          ¿Listo para tu próximo aviso?
        </p>
      </header>

      {/* Acciones principales - 2 botones */}
      <section className="w-[90%] max-w-xl py-2 px-2">
        <div className="flex flex-wrap justify-center gap-2 mx-auto">
          <button onClick={onActivarnos} className={indexButton}>
            <AmbulanceIcon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none" />
            <span>Activarnos</span>
          </button>
          <button onClick={onShowStats} className={indexButton}>
            <ChartBarSquareIcon className="w-[clamp(20px,10vw,50px)] h-[clamp(20px,10vw,50px)] pointer-events-none" />
            <span>Expediente</span>
          </button>
        </div>
      </section>

      {/* Línea EKG */}
      <div className="w-full max-w-3xl px-0 mt-2">
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
      <footer className="w-full max-w-4xl mt-auto pt-6 mb-2 text-center text-[10px] sm:text-[14px] text-stone-600 dark:text-stone-400">
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
