"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { playClickSound } from '../utils/soundUtils';

type Section = { title: string; content: React.ReactNode; Icon: React.ReactNode };

interface Props {
  sections: Section[];
  onSelect: (s: Section) => void;
  isMuted: boolean;
  infinite?: boolean;
}

const ArrowBtn: React.FC<{
  disabled?: boolean;
  onClick?: () => void;
  side: "left" | "right";
}> = ({ disabled, onClick, side }) => (
  <button
    onClick={disabled ? undefined : onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 pb-2 md:pb-8
                h-20 w-20 rounded-full shadow-lg focus-visible:outline-none
                focus-visible:ring-1 focus-visible:ring-amber-400 transition-all duration-200
                flex items-center justify-center
                ${side === "left" ? "-left-11 pl-9 overflow-hidden" : "-right-11 pr-9 overflow-hidden"}
                ${disabled
                  ? "bg-stone-300/20 text-stone-500 dark:bg-black/10 dark:text-stone-700 cursor-not-allowed"
                  : "bg-white/30 text-stone-600 hover:bg-white/60 dark:bg-stone-900/30 dark:text-stone-300 dark:hover:bg-stone-800/60 dark:hover:text-white"
                }`}
                style={{
      boxShadow: "0 4px 28px rgba(0,0,0,0.30)",  // Sombra más notoria
      backdropFilter: "blur(1px)",               // Opcional: Glassmorphism sutil
    }}
    aria-label={side === "left" ? "Anterior" : "Siguiente"}
    title={side === "left" ? "Anterior" : "Siguiente"}
    tabIndex={-1} // Los botones son decorativos para el ratón, la navegación por teclado es en el track.
  >
    <span className="text-4xl font-bold pb-1 pointer-events-none">{side === "left" ? "‹" : "›"}</span>
  </button>
);

const ApuntesCarousel: React.FC<Props> = ({ sections, onSelect, isMuted, infinite = true }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const drag = useRef<{
    active: boolean;
    startX: number;
    startScroll: number;
    moved: boolean;
    target?: EventTarget | null;
  }>({ active: false, startX: 0, startScroll: 0, moved: false });

  const [dragging, setDragging] = useState(false);

  const safeSections = useMemo(() => sections ?? [], [sections]);
  const n = safeSections.length;

  // Vista con clones para loop al arrastrar
  const viewSections = useMemo(() => {
    if (!infinite || n === 0) return safeSections.map((s, i) => ({ s, key: `real-${i}`, realIndex: i }));
    const head = safeSections.map((s, i) => ({ s, key: `head-${i}`, realIndex: i, clone: "head" as const }));
    const real = safeSections.map((s, i) => ({ s, key: `real-${i}`, realIndex: i }));
    const tail = safeSections.map((s, i) => ({ s, key: `tail-${i}`, realIndex: i, clone: "tail" as const }));
    return [...tail, ...real, ...head];
  }, [safeSections, infinite, n]);

  const startIndex = infinite ? n : 0; // primer real
  const [current, setCurrent] = useState(startIndex);

  // Evitar doble actualización de estado (mejora 9)
  const updatingRef = useRef(false);

  // Borde para modo no-infinito (bloquear flechas)
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollToIndex = (idx: number, smooth = true, focus = false) => {
    const el = itemRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", inline: "center", block: "nearest" });
    setCurrent(idx);
    // Mejora 2: Focus al moverse con flechas
    if (focus) el.focus();
  };

  // Mejora 3: Índice real nunca negativo
  const getRealIdx = (i: number) => ((i % n) + n) % n;

  const getClosestIndex = (): number => {
    const track = trackRef.current;
    if (!track) return current;
    const centerX = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = current, bestDist = Number.POSITIVE_INFINITY;
    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const d = Math.abs((rect.left + rect.width / 2) - centerX);
      if (d < bestDist) { bestDist = d; best = i; }
    }
    return best;
  };

  const updateEdges = () => {
    if (infinite) return;
    const track = trackRef.current;
    if (!track) return;
    const near = 6;
    setAtStart(track.scrollLeft <= near);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - near);
  };

  // Coloca la vista en el primer real y sincroniza el current (como te recomendé antes)
  useEffect(() => {
   
    if (viewSections.length === 0) return;
    const id = window.setTimeout(() => {
      scrollToIndex(startIndex, false);
      setTimeout(() => {
        const idx = getClosestIndex();
        setCurrent(idx);
      }, 50);
      updateEdges();
    }, 0);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, infinite, viewSections.length, startIndex]);

  // Scroll (incluye teletransporte cuando pisa clones)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (updatingRef.current) {
            ticking = false;
            return;
          }
          const idx = getClosestIndex();
          setCurrent(idx);

          if (infinite && n > 0 && !drag.current.active) {
            const leftLimit = n - 1;
            const rightLimit = 2 * n;
            if (idx <= leftLimit) scrollToIndex(idx + n, false);
            else if (idx >= rightLimit) scrollToIndex(idx - n, false);
          } else if (!infinite) {
            updateEdges();
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infinite, n, viewSections.length]);

  // Rueda del ratón → scroll horizontal
  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      track.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  // Lógica de Drag & Click unificada
  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const track = trackRef.current;
    if (!track || e.button !== 0) return; // solo botón izq
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: track.scrollLeft,
      moved: false,
      target: e.target,
    };
    setDragging(true);
    track.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(dx) > 5) {
      drag.current.moved = true;
    }
    if (drag.current.moved) {
      track.scrollLeft = drag.current.startScroll - dx;
      // Mejora 11: Evitar scroll del body al arrastrar en móvil
      e.preventDefault();
    }
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    track.releasePointerCapture?.(e.pointerId);

    if (updatingRef.current) return;

    if (!drag.current.moved) {
      // Es un CLICK
      e.preventDefault(); // Evita que se dispare un evento 'click' posterior
      const button = (drag.current.target as HTMLElement)?.closest('button[data-index]') as HTMLButtonElement;
      const indexStr = button?.dataset.index;
      if (indexStr && n > 0) {
        if (!isMuted) {
          playClickSound();
        }
        const i = parseInt(indexStr, 10);
        const realIdx = getRealIdx(i);
        onSelect(safeSections[realIdx]);
      }
    } else {
      // Es un DRAG
      updatingRef.current = true;
      const idx = getClosestIndex();
      scrollToIndex(idx, true, true); // focus al item
      setTimeout(() => {
        updatingRef.current = false;
      }, 300); // Espera la animación de snap
    }

    drag.current.active = false;
    setDragging(false);
  };

  // Botones laterales
  const go = (dir: -1 | 1) => {
    if (viewSections.length === 0) return;
    let next;
    if (infinite && n > 0) next = current + dir;
    else next = Math.min(Math.max(current + dir, 0), viewSections.length - 1);

    updatingRef.current = true;
    scrollToIndex(next, true, true);
    setTimeout(() => {
      updatingRef.current = false;
    }, 300);
  };

  return (
    <div className="relative w-full">
      {/* Controles (ahora son hermanos del track) */}
      <ArrowBtn side="left"  disabled={!infinite && atStart} onClick={() => go(-1)} />
      <ArrowBtn side="right" disabled={!infinite && atEnd}   onClick={() => go(1)} />
      {/* Pista */}
      <div
        ref={trackRef}
        className={`flex gap-2 overflow-x-auto overflow-y-visible overscroll-x-contain
  ${dragging ? "scroll-auto snap-none" : "scroll-smooth snap-x snap-mandatory"}
  px-5 py-5 hide-scrollbar
  cursor-grab active:cursor-grabbing select-none [touch-action:pan-x]`}
        aria-label="Carrusel de apuntes"
        tabIndex={0}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
          else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const realIdx = getRealIdx(current);
            onSelect(safeSections[realIdx]);
          }
        }}
      >
        {viewSections.map(({ s }, i) => (
          <button
            key={`${s.title}-${i}`}
            ref={(el) => { itemRefs.current[i] = el; }}
            data-index={i}
            className={"snap-center shrink-0 select-none w-[clamp(30px,19vw,100px)] aspect-[4/6] rounded-2xl font-league-gothic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 dark:focus-visible:ring-amber-400 transition-all duration-150 flex flex-col items-center justify-between gap-1 p-2 text-center " + 
            "text-stone-600 dark:text-stone-400 " +
            "bg-gradient-to-b from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 " +
            "border border-stone-300/50 hover:border-b-4 hover:border-r-4 dark:border-stone-300/50 hover:border-b-4 hover:border-r-4" +
            "shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_8px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.5),0_4px_8px_rgba(0,0,0,0.5)] " +
            "hover:from-stone-50 hover:to-stone-100 hover:text-amber-600/90 hover:border-stone-300/50 dark:hover:from-stone-700 dark:hover:to-stone-650 dark:hover:text-amber-600/90 dark:hover:border-stone-700/50 active:scale-[0.98] fancy-hover-effect"}

            title={s.title}
            aria-label={s.title}
            tabIndex={-1}
          >
             {/* ICONO */}
            <div className="[&>svg]:w-[clamp(42px,10vw,80px)] [&>svg]:h-[clamp(42px,10vw,52px)] pointer-events-none">
              {s.Icon}
            </div>
            {/* TEXTO  */}
            <span className="text-[14px] sm:text-[18px] leading-tight line-clamp-2 pointer-events-none">
              {s.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApuntesCarousel;