import React from 'react';
import { Case } from '../types';
import { ReplayIcon } from '../components/Icons';

interface ArchiveScreenProps {
    archive: Case[];
    onReplay: (caseToReplay: Case) => void;
}

const smallButtonBase = "flex items-center justify-center text-sm rounded-md transition-all duration-150 active:scale-95 fancy-hover-effect disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-inner disabled:!bg-stone-300 disabled:!text-stone-500 disabled:!border-stone-400 dark:disabled:!bg-stone-800 dark:disabled:!text-stone-500 dark:disabled:!border-stone-700";
const roundSmall = `${smallButtonBase} p-2 rounded-full bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-300 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_5px_rgba(0,0,0,0.4)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300`;

const ArchiveScreen: React.FC<ArchiveScreenProps> = ({ archive, onReplay }) => {
    // Filtrar casos: Mostrar casos Online (sin prefijo 'offline-') o Casos Globales ('global-')
    // Ocultar casos del Registro Estándar ('offline-hogar', 'offline-trafico', etc.)
    const visibleCases = archive.filter(c => !c.id.startsWith('offline-') || c.id.startsWith('global-'));

    return (
        <>
            {visibleCases.length === 0 ? (
                <p className="text-center text-stone-500 dark:text-stone-400 py-8 italic">No hay informes disponibles.<br/><span className="text-xs opacity-75">(Los casos del registro estándar se consultan en su propia sección)</span></p>
            ) : (
                <div className="divide-y divide-stone-200 dark:divide-stone-700/60 border-y border-stone-200 dark:border-stone-700/60">
                    {visibleCases.map((c) => (
                         <div key={c.id} className="px-4 flex items-center justify-between">
                            <div className="flex items-center min-w-0">
                                <span className={`mr-3 text-xs ${c.isCorrect ? 'text-green-500 dark:text-green-400' : 'text-rose-500 dark:text-rose-400'}`}>●</span>
                                <span className="font-typewriter text-sm text-stone-800 dark:text-stone-300 truncate">{c.title}</span>
                            </div>
                             <button
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    onReplay(c);
                                }}
                                className={`ml-4 flex-shrink-0 ${roundSmall}`}
                                aria-label={`Recordar ${c.title}`}
                            >
                                <ReplayIcon />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ArchiveScreen;