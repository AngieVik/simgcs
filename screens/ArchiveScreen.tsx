import React from 'react';
import { Case } from '../types';
import { DownloadIcon, TrashIcon, ReplayIcon } from '../components/Icons';

interface ArchiveScreenProps {
    archive: Case[];
    onSave: () => void;
    onClear: () => void;
    onReplay: (caseToReplay: Case) => void;
}

const smallButtonBase = "flex items-center justify-center text-sm rounded-md transition-all duration-150 active:scale-95 fancy-hover-effect disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-inner disabled:!bg-stone-300 disabled:!text-stone-500 disabled:!border-stone-400 dark:disabled:!bg-stone-800 dark:disabled:!text-stone-500 dark:disabled:!border-stone-700";
const secondarySmall = `${smallButtonBase} p-2 bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(92,88,85,0.7),0_4px_10px_rgba(0,0,0,0.5)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300 dark:hover:border-stone-700/50`;
const dangerSmall = `${smallButtonBase} p-2 bg-gradient-to-b from-rose-600 to-rose-700 text-rose-100 border border-rose-800/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_3px_rgba(159,18,57,0.2),0_4px_8px_rgba(159,18,57,0.2)] dark:from-rose-700 dark:to-rose-900 dark:text-rose-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(159,18,57,0.8),0_4px_10px_rgba(0,0,0,0.5)] hover:from-rose-500 hover:to-rose-600 hover:text-white dark:hover:from-rose-600 dark:hover:to-rose-800 dark:hover:text-white dark:hover:border-rose-700/50`;
const roundSmall = `${smallButtonBase} gap-2 text-xs px-3 py-1 rounded-full bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-300 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_5px_rgba(0,0,0,0.4)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300`;

const ArchiveScreen: React.FC<ArchiveScreenProps> = ({ archive, onSave, onClear, onReplay }) => (
    <>
        <div className="flex justify-end items-center gap-2 mb-4 pb-2 border-b border-stone-300 dark:border-stone-700">
            <button onClick={onSave} disabled={archive.length === 0} className={secondarySmall} aria-label="Guardar informes">
                <DownloadIcon className="w-5 h-5" />
            </button>
            <button onClick={onClear} disabled={archive.length === 0} className={dangerSmall} aria-label="Borrar informes">
                <TrashIcon className="w-5 h-5" />
            </button>
        </div>
        {archive.length === 0 ? (
            <p className="text-center text-stone-500 dark:text-stone-400 py-8 italic">No hay casos archivados.</p>
        ) : (
            <div className="space-y-2">
                {archive.map((c) => (
                    <details key={c.id} className="bg-stone-100/50 dark:bg-stone-800/50 rounded-lg border border-stone-300 dark:border-stone-700 transition-all duration-300 open:shadow-lg shadow-md shadow-black/5">
                        <summary className="p-3 flex items-center justify-between hover:bg-stone-200/70 dark:hover:bg-stone-700/70 rounded-lg">
                            <div className="flex items-center min-w-0">
                                <span className={`mr-3 ${c.isCorrect ? 'text-green-500 dark:text-green-400' : 'text-rose-500 dark:text-rose-400'}`}>●</span>
                                <span className="font-typewriter text-sm text-stone-800 dark:text-stone-300 truncate">{c.title}</span>
                            </div>
                             <button
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    onReplay(c);
                                }}
                                className={`ml-4 flex-shrink-0 ${roundSmall}`}
                            >
                                <ReplayIcon />
                                Recordar
                            </button>
                        </summary>
                        <div className="p-4 border-t border-stone-300 dark:border-stone-700 space-y-4 bg-stone-50/50 dark:bg-stone-900/50 rounded-b-lg text-sm">
                             <div>
                                <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Narrativa</h4>
                                <p className="text-stone-700 dark:text-stone-300 whitespace-pre-wrap leading-relaxed">{c.narrative}</p>
                             </div>
                             <div>
                                <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Conclusión</h4>
                                <p className="whitespace-pre-wrap italic leading-relaxed text-stone-700 dark:text-stone-300">"{c.conclusion}"</p>
                             </div>
                        </div>
                    </details>
                ))}
            </div>
        )}
    </>
);

export default ArchiveScreen;