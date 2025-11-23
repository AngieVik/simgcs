import React, { useEffect, useRef, useState } from 'react';
import { XMarkIcon } from './Icons';

interface InfoModalProps {
    title: string;
    content: React.ReactNode;
    onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ title, content, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const drag = useRef({
        active: false,
        startY: 0,
        startScroll: 0,
    });

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const handleFocusTrap = (event: KeyboardEvent) => {
            if (event.key !== 'Tab' || !modalRef.current) return;

            const focusableElements = Array.from(
                modalRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            ).filter(el => el.offsetParent !== null);

            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        };
        
        const closeButton = modalRef.current?.querySelector('button');
        if (closeButton) {
            closeButton.focus();
        }

        window.addEventListener('keydown', handleEsc);
        const currentModal = modalRef.current;
        currentModal?.addEventListener('keydown', handleFocusTrap);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            currentModal?.removeEventListener('keydown', handleFocusTrap);
        };
    }, [onClose]);

    // Lógica para auto-scroll al cambiar el contenido
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [content]);

    // Lógica de arrastre táctil
    const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
        const contentEl = contentRef.current;
        if (!contentEl || (e.target as HTMLElement).closest('button, a, input, select, textarea, summary')) {
            return;
        }
        drag.current = {
            active: true,
            startY: e.clientY,
            startScroll: contentEl.scrollTop,
        };
        setIsDragging(true);
        contentEl.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
        if (!drag.current.active || !contentRef.current) return;
        const dy = e.clientY - drag.current.startY;
        contentRef.current.scrollTop = drag.current.startScroll - dy;
    };

    const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
        if (!drag.current.active || !contentRef.current) return;
        contentRef.current.releasePointerCapture?.(e.pointerId);
        drag.current.active = false;
        setIsDragging(false);
    };

    return (

        
        <div 
            className="fixed inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={onClose}
        >
            <div 
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className={`
                            relative w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] flex flex-col rounded-lg animate-in fade-in-0 zoom-in-95 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] 
                            bg-stone-100 dark:bg-stone-800 
                            border border-stone-300 dark:border-stone-600/50 
                            shadow-xl shadow-black/15
                            `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Anillas del cuaderno */}
                    <div className="absolute top-0 bottom-0 left-0 w-5 bg-stone-200 dark:bg-stone-900/70 border-r border-stone-300 dark:border-black/30 shadow-inner flex flex-col items-center py-4 justify-between">
                        <div className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600 ring-1 ring-stone-500/50 dark:ring-black/50 shadow-inner"></div>
                        <div className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600 ring-1 ring-stone-500/50 dark:ring-black/50 shadow-inner"></div>
                        <div className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600 ring-1 ring-stone-500/50 dark:ring-black/50 shadow-inner"></div>
                        <div className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600 ring-1 ring-stone-500/50 dark:ring-black/50 shadow-inner"></div>
                        <div className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600 ring-1 ring-stone-500/50 dark:ring-black/50 shadow-inner"></div>
                        <div className="w-2 h-2 rounded-full bg-stone-400 dark:bg-stone-600 ring-1 ring-stone-500/50 dark:ring-black/50 shadow-inner"></div>
                        
                </div>
                
                <div className="flex-1 flex flex-col min-h-0 pl-8 pr-4 py-4">
                  <header className="relative flex items-start justify-between pb-3 border-b-2 border-stone-300/60 dark:border-stone-500/30 shrink-0">
                      <h3 
                          id="modal-title" 
                          className="font-typewriter text-lg sm:text-xl font-bold text-stone-800 bg-amber-200/90 px-3 py-1 rounded-sm shadow-md -rotate-2 -ml-2 mt-1 z-10"
                      >
                          {title}
                      </h3>
                      <button 
                          onClick={onClose} 
                          className="absolute -top-2 -right-2 z-20 p-0 rounded-full bg-gradient-to-b from-stone-200 to-stone-100 text-stone-500 border border-stone-300/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] hover:from-stone-100 hover:to-stone-50 hover:!text-rose-500 dark:from-stone-800 dark:to-stone-900 dark:text-stone-400 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:!text-rose-400 transition-all duration-150 active:scale-95 fancy-hover-effect"
                          aria-label="Cerrar"
                      >
                          <XMarkIcon className="w-6 h-6" />
                      </button>
                  </header>

                  <div 
                      ref={contentRef}
                      className="overflow-y-auto space-y-5 selection:bg-amber-200/50 dark:selection:bg-stone-400/25 hide-scrollbar p-4 -mx-2 active:cursor-grabbing"
                      onPointerDown={onPointerDown}
                      onPointerMove={onPointerMove}
                      onPointerUp={onPointerUp}
                      onPointerCancel={onPointerUp}
                  >
                      {content}
                  </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;