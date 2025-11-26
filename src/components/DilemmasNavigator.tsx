import React, { useState } from 'react';
import { dilemmasData, DilemmaContentBlock } from '../constants/dilemmasData';
import { modalTextStyles as s } from '../constants/textStyles';

const DilemmaContentRenderer: React.FC<{ content: DilemmaContentBlock[] }> = ({ content }) => {
    return (
        <div className="space-y-4">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'p':
                        return <p key={index} className={s.narrative}>{block.bold ? <strong className="text-stone-800 dark:text-stone-200">{block.bold}</strong> : null}{block.text}</p>;
                    case 'h4':
                        return <h4 key={index} className={s.heading}>{block.text}</h4>;
                    case 'subheading':
                         return <p key={index} className={`${s.narrative} font-semibold text-stone-800 dark:text-stone-300`}>{block.text}</p>;
                    case 'list':
                        return (
                            <ul key={index} className={`${s.narrative} list-disc list-inside ml-4 mt-1 space-y-1`}>
                                {block.items.map((item, i) => (
                                    <li key={i}>{item.bold ? <strong className="text-stone-800 dark:text-stone-200">{item.bold}</strong> : null}{item.text}</li>
                                ))}
                            </ul>
                        );
                    case 'sublist':
                        return (
                             <ul key={index} className={`${s.narrative} list-['–'] list-inside ml-8 space-y-1`}>
                                {block.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )
                    case 'pearl':
                        return (
                            <p key={index} className={`${s.narrative} mt-2 ml-4 pl-4 border-l-2 border-amber-500 dark:border-amber-800/50`}>
                                {block.bold ? <strong className="text-amber-600 dark:text-amber-300">{block.bold}</strong> : null}{block.text}
                            </p>
                        );
                    case 'divider':
                        return <p key={index} className={`${s.narrative} mt-2 pt-2 border-t border-stone-300 dark:border-slate-700`}>{block.bold ? <strong className="text-amber-600 dark:text-amber-300">{block.bold}</strong> : null}{block.text}</p>
                    default:
                        return null;
                }
            })}
        </div>
    );
};


// Componente que maneja la navegación dentro de la sección de Dilemas
const DilemmasNavigator = () => {
    const [selectedDilemmaTitle, setSelectedDilemmaTitle] = useState<string | null>(null);

    if (selectedDilemmaTitle) {
        const dilemma = dilemmasData.find(d => d.title === selectedDilemmaTitle);
        return (
            <div>
                <button 
                    onClick={() => setSelectedDilemmaTitle(null)}
                    className="flex items-center text-amber-600 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200 mb-4 transition-colors text-sm"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Volver a la lista de dilemas
                </button>
                {dilemma ? (
                    <>
                        <h4 className={s.title}>{dilemma.title}</h4>
                        <DilemmaContentRenderer content={dilemma.content} />
                    </>
                ) : <p>Dilema no encontrado.</p>}
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <p className={`${s.narrative} text-stone-500 dark:text-stone-400 mb-4`}>Selecciona un dilema para ver las perlas clínicas y las técnicas de diferenciación.</p>
            {dilemmasData.map((dilemma, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedDilemmaTitle(dilemma.title)}
                    className="group w-full text-left py-2 px-3 flex items-center justify-between bg-stone-100/80 dark:bg-stone-900/50 hover:bg-stone-200/80 dark:hover:bg-stone-800/50 rounded-md transition-all duration-200 border border-stone-300 dark:border-stone-700 hover:border-amber-500/40 dark:hover:border-amber-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                    <span className="text-stone-800 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">{dilemma.title}</span>
                    <svg className="w-5 h-5 text-stone-500 dark:text-stone-400 shrink-0 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            ))}
        </div>
    );
};

export default DilemmasNavigator;