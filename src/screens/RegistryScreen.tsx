import React, { useState, useMemo } from 'react';
import { Case } from '../types';
import { caseCategories, allOfflineCases } from '../constants/offlineCases';
import { FolderIcon, ReplayIcon } from '../components/Icons';

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

    const attemptedCasesByCategory = useMemo(() => {
        const categoryMap = new Map<string, number>();
        Object.entries(caseCategories).forEach(([category, cases]) => {
            const count = cases.filter(c => attemptedCasesStatus.has(c.id)).length;
            categoryMap.set(category, count);
        });
        return categoryMap;
    }, [attemptedCasesStatus]);
    
    const toggleCategory = (category: string) => {
        setExpandedCategory(prev => (prev === category ? null : category));
    };

    
    const smallButtonBase = "flex items-center transition-all duration-800 active:scale-95 fancy-hover-effect";
    const roundSmall = `${smallButtonBase} p-2 rounded-full bg-gradient-to-b from-stone-200 to-stone-300 text-stone-800 border border-stone-400/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_6px_rgba(0,0,0,0.1)] dark:from-stone-800 dark:to-stone-900 dark:text-stone-300 dark:border-black/50 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_5px_rgba(0,0,0,0.4)] hover:from-stone-100 hover:to-stone-200 hover:text-amber-600 dark:hover:from-stone-700 dark:hover:to-stone-800 dark:hover:text-amber-300`;


    return (
        <div className="font-sans relative">
            <div className="space-y-0">
                {Object.entries(caseCategories).map(([category, cases]) => {
                    const attemptedCount = attemptedCasesByCategory.get(category) || 0;
                    const isExpanded = expandedCategory === category;

                    return (
                        <div key={category} className="border-b border-stone-300 dark:border-stone-700 last:border-b-0">
                            <button 
                                type="button"
                                aria-expanded={isExpanded}
                                className="w-full text-left p-1 flex items-center cursor-pointer hover:bg-stone-200/50 dark:hover:bg-stone-700/50 transition-colors rounded-t-lg shadow-sm shadow-black/5"
                                onClick={() => toggleCategory(category)}
                            >
                                <FolderIcon className="text-stone-500 dark:text-stone-400" />
                                <span className="font-medium text-stone-800 dark:text-stone-200 flex-1 text-[8px]">{category}</span>
                                <span className="text-[8px] text-stone-500 dark:text-stone-400 mr-2">
                                    {attemptedCount}/{cases.length}
                                </span>
                            </button>
                            {isExpanded && (
                                <div className="divide-y divide-stone-200 dark:divide-stone-700/60 bg-stone-100/50 dark:bg-stone-900/50">
                                    {cases.length > 0 ? (
                                        cases.map((c, index) => {
                                            const status = attemptedCasesStatus.get(c.id);
                                            const hasBeenAttempted = attemptedCasesStatus.has(c.id);
                                            
                                            let textColor = 'text-stone-400 dark:text-stone-500'; // Default gray for unattempted
                                            if (hasBeenAttempted) {
                                                textColor = status ? 'text-green-600 dark:text-green-400' : 'text-rose-600 dark:text-rose-400';
                                            }
                                            
                                            return (
                                                <div key={c.id} className="px-4 flex items-center justify-between">
                                                    <span className={`truncate ${textColor} ${hasBeenAttempted ? 'font-typewriter text-sm' : 'font-serif text-xs italic'}`}>
                                                        {hasBeenAttempted ? c.title : `Caso #${index + 1}`}
                                                    </span>
                                                    {hasBeenAttempted ? (
                                                        <button 
                                                            onClick={() => onPlay(c)}
                                                            className={roundSmall}
                                                            aria-label={`Recordar ${c.title}`}
                                                        >
                                                            <ReplayIcon />
                                                        </button>
                                                    ) : (
                                                        <span className="text-xs text-stone-400 italic px-1 py-1 opacity-60 cursor-default select-none">
                                                            Pendiente
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p className="py-3 px-4 text-sm text-stone-500 dark:text-stone-400 italic">No hay casos en esta categoría.</p>
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