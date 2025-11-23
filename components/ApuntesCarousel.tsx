
"use client";
import React, { useRef, useState, useEffect } from "react";
import { playClickSound } from '../utils/soundUtils';

type Section = { title: string; content: React.ReactNode; Icon: React.ReactNode };

interface Props {
  sections: Section[];
  onSelect: (s: Section) => void;
  isMuted: boolean;
}

const ApuntesCarousel: React.FC<Props> = ({ sections, onSelect, isMuted }) => {
  const safeSections = sections ?? [];
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // --- Estados para arrastre del carrusel (Ratón) ---
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // --- Estados para la barra de progreso ---
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrubberDragging, setIsScrubberDragging] = useState(false);

  const updateProgress = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
      updateProgress();
      window.addEventListener('resize', updateProgress);
      return () => window.removeEventListener('resize', updateProgress);
  }, []);

  // --------------------------------------------------------
  // LÓGICA DE ARRASTRE GLOBAL
  // --------------------------------------------------------
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX);
    setInitialScrollLeft(sliderRef.current.scrollLeft);
  };

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isDown || !sliderRef.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1.2; 
      sliderRef.current.scrollLeft = initialScrollLeft - walk;
      
      if (Math.abs(x - startX) > 5) {
        setIsDragging(true);
      }
    };

    const handleWindowMouseUp = () => {
      if (isDown) {
        setIsDown(false);
        setTimeout(() => setIsDragging(false), 50); 
      }
    };

    if (isDown) {
      window.addEventListener('mousemove', handleWindowMouseMove);
      window.addEventListener('mouseup', handleWindowMouseUp);
      document.body.style.cursor = 'grabbing';
    }

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
      document.body.style.cursor = '';
    };
  }, [isDown, startX, initialScrollLeft]);

  // --------------------------------------------------------
  // LÓGICA SCRUBBER
  // --------------------------------------------------------
  const handleScrubberMouseDown = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsScrubberDragging(true);
      moveScrubber(e.clientX);
  };

  const moveScrubber = (clientX: number) => {
      if (!progressBarRef.current || !sliderRef.current) return;
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft = maxScroll * percentage;
  };

  useEffect(() => {
      const handleWindowScrubberMove = (e: MouseEvent) => {
          if (!isScrubberDragging) return;
          e.preventDefault();
          moveScrubber(e.clientX);
      };

      const handleWindowScrubberUp = () => {
          setIsScrubberDragging(false);
      };

      if (isScrubberDragging) {
          window.addEventListener('mousemove', handleWindowScrubberMove);
          window.addEventListener('mouseup', handleWindowScrubberUp);
          document.body.style.userSelect = 'none';
          document.body.style.cursor = 'grabbing';
      }

      return () => {
          window.removeEventListener('mousemove', handleWindowScrubberMove);
          window.removeEventListener('mouseup', handleWindowScrubberUp);
          document.body.style.userSelect = '';
          if (!isDown) document.body.style.cursor = '';
      };
  }, [isScrubberDragging, isDown]);

  const handleCardClick = (section: Section) => {
    if (isDragging) return; 
    if (!isMuted) playClickSound();
    onSelect(section);
  };

  return (
    <div className="w-full flex flex-col gap-6 fade-in">
      {/* CONTENEDOR DEL CARRUSEL */}
      <div
        ref={sliderRef}
        className={`
            flex gap-1 overflow-x-auto px-2 pb-2 pt-2 
            hide-scrollbar select-none touch-pan-y
            ${isDown ? 'cursor-grabbing' : 'cursor-grab'}
        `}
        onMouseDown={handleMouseDown}
        onScroll={updateProgress}
      >
        {safeSections.map((s, i) => (
          <button
            key={`${s.title}-${i}`}
            onMouseUp={() => handleCardClick(s)}
            className={
                // TU CLASE ORIGINAL RECUPERADA EXACTAMENTE
                "snap-center shrink-0 select-none w-[clamp(30px,19vw,100px)] aspect-[4/6] rounded-2xl font-league-gothic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:focus-visible:ring-amber-400 transition-all duration-600 flex flex-col items-center justify-between gap-1 p-2 text-center " +
                "text-stone-600 dark:text-stone-400 " +
                "bg-gradient-to-b from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 " +
                "border border-stone-300/50 hover:border-b-4 hover:border-r-4 dark:border-stone-300/50 " +
                "shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_8px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.5),0_4px_8px_rgba(0,0,0,0.5)] " +
                "hover:from-stone-50 hover:to-stone-100 hover:text-amber-600/90 hover:border-stone-300/50 " +
                "dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-600/90 dark:hover:border-stone-700/50 " + // Ajustado stone-650 a 800
                "active:scale-[0.98] fancy-hover-effect " +
                (isDown ? 'scale-[0.98]' : '')
            }
            title={s.title}
            tabIndex={0}
          >
             <div className="text-stone-500 dark:text-stone-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 pointer-events-none mt-2">
                {React.cloneElement(s.Icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10 sm:w-12 sm:h-12" })}
             </div>
            <span className="text-sm sm:text-lg font-league-gothic tracking-wide leading-tight pointer-events-none mb-1">
              {s.title}
            </span>
          </button>
        ))}
        <div className="shrink-0 w-2"></div>
      </div>

      {/* BARRA DESLIZANTE (SCRUBBER) */}
      <div className="px-4 w-full max-w-sm mx-auto flex items-center justify-center">
          <div 
            ref={progressBarRef}
            onMouseDown={handleScrubberMouseDown}
            className="relative w-full h-2 flex items-center cursor-pointer group touch-none"
            title="Deslizar"
          >
              <div className="absolute w-full h-[2px] bg-stone-300 dark:bg-stone-700 rounded-full overflow-hidden"></div>
              <div 
                  className={`
                      absolute h-3 w-3 text-amber-600 dark:bg-amber-600 rounded-full shadow-sm 
                      top-1/2 -translate-y-1/2 -ml-1.5
                      transition-transform duration-650 ease-out
                      group-hover:scale-125
                      ${isScrubberDragging ? 'scale-150 bg-amber-600 dark:bg-amber-600' : ''}
                  `}
                  style={{ left: `${scrollProgress}%` }} 
              >
                  <div className={`absolute inset-0 rounded-full bg-amber-600/30 dark:bg-amber-400/30 ${isScrubberDragging ? 'animate-pulse scale-150' : 'scale-0 group-hover:scale-150'} transition-transform duration-600`}></div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ApuntesCarousel;
