
import React, { useMemo } from 'react';
import { Case } from '../types';
import { CheckCircleIcon, XCircleIcon, ChartBarSquareIcon, TrophyIcon } from '../components/Icons';
import { allOfflineCases } from '../constants/offlineCases';

const StatCard: React.FC<{ title: string; value: string | number; subvalue?: string }> = ({ title, value, subvalue }) => (
    <div className="p-4 rounded-lg border border-stone-300 dark:border-stone-700/50 flex flex-col items-center justify-center text-center h-full
                   bg-stone-100 dark:bg-stone-900/50 shadow-lg shadow-black/10 dark:shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
        <h4 className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-2">{title}</h4>
        <p className="text-4xl font-bold font-typewriter text-amber-700 dark:text-amber-300">{value}</p>
        {subvalue && <p className="text-xs text-stone-500 mt-1">{subvalue}</p>}
    </div>
);

const ProgressBar: React.FC<{ value: number; max: number; colorClass: string }> = ({ value, max, colorClass }) => {
    const percentage = max > 0 ? (value / max) * 100 : 0;
    return (
        <div className="w-full bg-stone-300 dark:bg-stone-800/50 rounded-full h-3 my-1 border border-black/10 dark:border-black/20 shadow-inner">
            <div className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass}`} style={{ 
                width: `${percentage}%`,
                backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)`
            }}></div>
        </div>
    );
};


const StatsScreen: React.FC<{ archive: Case[] }> = ({ archive }) => {
    const stats = useMemo(() => {
        const total = archive.length;
        if (total === 0) {
            return {
                total: 0,
                correct: 0,
                incorrect: 0,
                successRate: 0,
                ocularCorrect: 0,
                verbalCorrect: 0,
                motorCorrect: 0,
                sortedCategories: [],
                uniqueTrophies: 0
            };
        }

        const correct = archive.filter(c => c.isCorrect).length;
        const incorrect = total - correct;
        const successRate = (correct / total) * 100;

        const ocularCorrect = archive.filter(c => c.userGCS && c.userGCS.ocular === c.correctGCS.ocular).length;
        const verbalCorrect = archive.filter(c => c.userGCS && c.userGCS.verbal === c.correctGCS.verbal).length;
        const motorCorrect = archive.filter(c => c.userGCS && c.userGCS.motor === c.correctGCS.motor).length;

        const categoryStats = archive.reduce<Record<string, { correct: number; total: number }>>((acc, c) => {
            if (!c.category) return acc;
            if (!acc[c.category]) {
                acc[c.category] = { correct: 0, total: 0 };
            }
            acc[c.category].total++;
            if (c.isCorrect) {
                acc[c.category].correct++;
            }
            return acc;
        }, {});

        const sortedCategories = Object.entries(categoryStats).sort(([, a], [, b]) => b.total - a.total);

        // Calculate unique trophies (standard registry cases solved)
        const standardCaseIds = new Set(allOfflineCases.map(c => c.id));
        const uniqueSolved = new Set(
            archive
                .filter(c => c.isCorrect && standardCaseIds.has(c.id))
                .map(c => c.id)
        );

        return { 
            total, correct, incorrect, successRate, 
            ocularCorrect, verbalCorrect, motorCorrect, 
            sortedCategories,
            uniqueTrophies: uniqueSolved.size
        };

    }, [archive]);

    if (stats.total === 0) {
        return (
            <div className="text-center py-8">
                <ChartBarSquareIcon className="mx-auto w-16 h-16 text-stone-400 dark:text-stone-600 mb-4" />
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-300">No hay datos suficientes</h3>
                <p className="text-stone-500 dark:text-stone-400 mt-2">Completa algunos casos para ver tus estadísticas.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Trophy Card */}
            <div className="relative p-4 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 border border-amber-300/50 dark:border-amber-600/30 shadow-md flex items-center justify-between overflow-hidden">
                <div className="z-10">
                    <h4 className="text-sm font-bold text-amber-800 dark:text-amber-200 uppercase tracking-wider mb-1">Colección de Trofeos</h4>
                    <p className="text-3xl font-game text-amber-600 dark:text-amber-400">
                        {stats.uniqueTrophies} <span className="text-lg text-stone-500 dark:text-stone-400">/ {allOfflineCases.length}</span>
                    </p>
                </div>
                <div className="z-10 p-3 bg-white/50 dark:bg-black/20 rounded-full backdrop-blur-sm shadow-sm">
                    <TrophyIcon className="w-10 h-10 text-amber-500 dark:text-amber-400" />
                </div>
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard title="Casos Resueltos" value={stats.total} />
                <StatCard title="Tasa de Acierto" value={`${stats.successRate.toFixed(0)}%`} subvalue={`${stats.correct} de ${stats.total}`} />
                 <div className="p-4 rounded-lg border border-stone-300 dark:border-stone-700/50 flex flex-col items-center justify-center text-center
                               bg-stone-100 dark:bg-stone-900/50 shadow-lg shadow-black/10 dark:shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                    <h4 className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-2">Aciertos / Fallos</h4>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                            <CheckCircleIcon />
                            <span className="text-2xl font-bold font-typewriter">{stats.correct}</span>
                        </div>
                        <div className="flex items-center gap-1 text-rose-600 dark:text-rose-400">
                            <XCircleIcon />
                            <span className="text-2xl font-bold font-typewriter">{stats.incorrect}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-lora font-bold text-lg text-stone-800 dark:text-stone-200 mb-3">Rendimiento por Componente</h3>
                <div className="p-4 rounded-lg border border-stone-300 dark:border-stone-700/50 space-y-3
                               bg-stone-100 dark:bg-stone-900/50 shadow-lg shadow-black/10 dark:shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                    <div>
                        <div className="flex justify-between text-sm">
                            <span className="font-semibold text-stone-800 dark:text-stone-300">👁️ Ocular</span>
                            <span className="font-mono text-stone-600 dark:text-stone-400">{stats.ocularCorrect}/{stats.total} ({((stats.ocularCorrect/stats.total)*100).toFixed(0)}%)</span>
                        </div>
                        <ProgressBar value={stats.ocularCorrect} max={stats.total} colorClass="bg-gradient-to-r from-sky-500 to-blue-600" />
                    </div>
                     <div>
                        <div className="flex justify-between text-sm">
                            <span className="font-semibold text-stone-800 dark:text-stone-300">🗣️ Verbal</span>
                            <span className="font-mono text-stone-600 dark:text-stone-400">{stats.verbalCorrect}/{stats.total} ({((stats.verbalCorrect/stats.total)*100).toFixed(0)}%)</span>
                        </div>
                        <ProgressBar value={stats.verbalCorrect} max={stats.total} colorClass="bg-gradient-to-r from-emerald-500 to-green-600" />
                    </div>
                     <div>
                        <div className="flex justify-between text-sm">
                            <span className="font-semibold text-stone-800 dark:text-stone-300">🦾 Motor</span>
                            <span className="font-mono text-stone-600 dark:text-stone-400">{stats.motorCorrect}/{stats.total} ({((stats.motorCorrect/stats.total)*100).toFixed(0)}%)</span>
                        </div>
                        <ProgressBar value={stats.motorCorrect} max={stats.total} colorClass="bg-gradient-to-r from-rose-500 to-red-600" />
                    </div>
                </div>
            </div>

             <div>
                <h3 className="font-lora font-bold text-lg text-stone-800 dark:text-stone-200 mb-3">Rendimiento por Categoría</h3>
                <div className="p-4 rounded-lg border border-stone-300 dark:border-stone-700/50 space-y-3 max-h-48 overflow-y-auto hide-scrollbar
                               bg-stone-100 dark:bg-stone-900/50 shadow-lg shadow-black/10 dark:shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                    {stats.sortedCategories.length > 0 ? stats.sortedCategories.map(([category, data]) => (
                         <div key={category}>
                            <div className="flex justify-between text-sm">
                                <span className="font-semibold text-stone-800 dark:text-stone-300 truncate pr-2">{category}</span>
                                <span className="font-mono text-stone-600 dark:text-stone-400 shrink-0">{data.correct}/{data.total}</span>
                            </div>
                            <ProgressBar value={data.correct} max={data.total} colorClass="bg-gradient-to-r from-amber-400 to-orange-500" />
                        </div>
                    )) : <p className="text-sm text-stone-500 italic text-center">No hay datos de categorías.</p>}
                </div>
            </div>
        </div>
    );
};

export default StatsScreen;