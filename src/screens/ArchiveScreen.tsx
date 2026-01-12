import React from "react";
import { Case } from "../types";
import { ReplayIcon } from "../components/Icons";
import { roundSmallButton } from "../styles/buttonStyles";

interface ArchiveScreenProps {
  archive: Case[];
  onReplay: (caseToReplay: Case) => void;
}

const ArchiveScreen: React.FC<ArchiveScreenProps> = ({ archive, onReplay }) => {
  // Filtrar casos: Mostrar casos del JSON ('case-') y excluir casos offline del registro
  // Ocultar casos del Registro Estándar ('offline-hogar', 'offline-trafico', etc.)
  const visibleCases = archive.filter(
    (c) => !c.id.startsWith("offline-") || c.id.startsWith("case-")
  );

  return (
    <>
      {visibleCases.length === 0 ? (
        <p className="text-center text-stone-500 dark:text-stone-400 py-8 italic">
          No hay informes disponibles.
          <br />
          <span className="text-xs opacity-75">
            (Los casos del registro estándar se consultan en su propia sección)
          </span>
        </p>
      ) : (
        <div className="divide-y divide-stone-200 dark:divide-stone-700/60 border-y border-stone-200 dark:border-stone-700/60">
          {visibleCases.map((c) => (
            <div key={c.id} className="px-4 flex items-center justify-between">
              <div className="flex items-center min-w-0">
                <span
                  className={`mr-3 text-xs ${
                    c.isCorrect
                      ? "text-green-500 dark:text-green-400"
                      : "text-rose-500 dark:text-rose-400"
                  }`}
                >
                  ●
                </span>
                <span className="font-typewriter text-sm text-stone-800 dark:text-stone-300 truncate">
                  {c.title}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onReplay(c);
                }}
                className={`ml-4 flex-shrink-0 ${roundSmallButton}`}
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
