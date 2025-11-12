import React, { useState, useMemo } from 'react';
import { Case } from '../types';
import { caseCategories } from '../constants/offlineCases';
import { FolderIcon, DiceIcon, ReplayIcon } from '../components/Icons';

interface RegistryScreenProps {
    archive: Case[];
    onPlay: (caseToPlay: Case) => void;
}

const RegistryScreen: React.FC<RegistryScreenProps> = ({ archive, onPlay }) => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const attemptedCasesStatus = useMemo(() => 
        new Map(
            archive
                .filter(c => c.id.startsWith('offline-'))
                .map(c => [c.id, c.isCorrect])
        ),
        [archive]
    );

    const toggleCategory = (category: string) => {
        setExpandedCategory(prev => (prev === category ? null : category));
    };

    const handleRebuscarClick = (e: React.MouseEvent, cases: Case[]) => {
        e.stopPropagation(); // Evita que el click expanda/colapse la carpeta
        if (cases.length === 0) return;
        const randomCase = cases[Math.floor(Math.random() * cases.length)];
        onPlay(randomCase);
    };
    
    const smallButtonBase = "flex items-center transition-all duration-150 active:scale-95 fancy-hover-effect";
    const secondarySmall = `${smallButtonBase} gap-1 text-xs px-2 py-1 rounded-md bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-200 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_5px_rgba(0,0,0,0.4)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300`;
    const roundSmall = `${smallButtonBase} gap-2 text-xs px-3 py-1 rounded-full bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-300 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_5px_rgba(0,0,0,0.4)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300`;


    return (
        <div className="font-sans">
            <div className="space-y-1">
                {Object.entries(caseCategories).map(([category, cases]) => {
                    const attemptedCasesInCategory = cases.filter(c => attemptedCasesStatus.has(c.id));
                    const isExpanded = expandedCategory === category;

                    return (
                        <div key={category} className="border-b border-stone-300 dark:border-stone-700 last:border-b-0">
                            <button 
                                type="button"
                                aria-expanded={isExpanded}
                                className="w-full text-left p-3 flex items-center cursor-pointer hover:bg-stone-200/50 dark:hover:bg-stone-700/50 transition-colors rounded-t-lg shadow-sm shadow-black/5"
                                onClick={() => toggleCategory(category)}
                            >
                                <FolderIcon className="text-stone-500 dark:text-stone-400" />
                                <span className="font-medium text-stone-800 dark:text-stone-200 flex-1 text-sm ml-2">{category}</span>
                                <span className="text-xs text-stone-500 dark:text-stone-400 mr-4">
                                    {attemptedCasesInCategory.length}/{cases.length}
                                </span>
                                {cases.length > 0 && (
                                    <button
                                        onClick={(e) => handleRebuscarClick(e, cases)}
                                        className={`ml-auto ${secondarySmall}`}
                                        aria-label={`Rebuscar en ${category}`}
                                    >
                                        <DiceIcon className="w-3 h-3" />
                                        Rebuscar
                                    </button>
                                )}
                            </button>
                            {isExpanded && (
                                <div className="pl-8 pr-4 pb-2 bg-stone-100/50 dark:bg-stone-900/50">
                                    {cases.length > 0 ? (
                                        cases.map((c) => {
                                            const status = attemptedCasesStatus.get(c.id);
                                            const hasBeenAttempted = attemptedCasesStatus.has(c.id);
                                            let textColor = 'text-stone-600 dark:text-stone-400';
                                            if (hasBeenAttempted) {
                                                textColor = status ? 'text-green-600 dark:text-green-400' : 'text-rose-600 dark:text-rose-400';
                                            }
                                            
                                            return (
                                                <div key={c.id} className="py-2 flex items-center justify-between border-b border-stone-300 dark:border-stone-700 last:border-b-0">
                                                    <span className={`font-typewriter text-sm truncate pl-4 ${textColor}`}>
                                                        {c.title}
                                                    </span>
                                                    <button 
                                                        onClick={() => onPlay(c)}
                                                        className={roundSmall}
                                                        aria-label={`Recordar caso ${c.title}`}
                                                    >
                                                        <ReplayIcon />
                                                        Recordar
                                                    </button>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p className="py-3 pl-4 text-sm text-stone-500 dark:text-stone-400 italic">No hay casos en esta categoría.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RegistryScreen;