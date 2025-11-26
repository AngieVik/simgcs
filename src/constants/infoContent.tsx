import React from 'react';
import {
    SrGlasgowItem,
    PupilarGlasgowIcon,
    PatientIcon,
    AyIcon,
    LittleGlasgowItem,
    MuteIcon,
    PaperAlertIcon,
    MindIcon,
    PunchItem,
    DilemasIcons,
    EyeBrainIcon,
    ComunGronwIcon,
    PuzzleIcon,
    SmallAlgorritmeIcon,
    LearnIcon,
    BookOpenIcon
} from '../components/Icons';
import DilemmasNavigator from '../components/DilemmasNavigator';
import { modalTextStyles as s } from './textStyles';

export const infoSections = [
    {
        title: 'GCS',
        Icon: <SrGlasgowItem />,
        content: (
            <div className="space-y-6">
                <div>
                    <h3 className={s.heading}>👁️ Apertura ocular (O)</h3>
                    <div className="space-y-2 pl-4">
                        <p className={s.narrative}><code className={s.marker}>4:</code> Espontánea (vigil, despierto, ojos abiertos por sí mismo).</p>
                        <p className={s.narrative}><code className={s.marker}>3:</code> A la orden verbal (abre al hablarle, al llamarlo, al estímulo auditivo).</p>
                        <p className={s.narrative}><code className={s.marker}>2:</code> Al dolor (abre solo al aplicar un estímulo doloroso, nociceptivo o presión).</p>
                        <p className={s.narrative}><code className={s.marker}>1:</code> Ninguna (no abre los ojos, ojos cerrados permanentemente).</p>
                        <p className={s.narrative}><code className={s.marker}>NV:</code> No valorable (ej. párpados cerrados por hinchazón severa, hematoma, vendaje, respuesta funcional).</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>🗣️ Respuesta verbal (V)</h3>
                    <div className="space-y-2 pl-4">
                        <p className={s.narrative}><code className={s.marker}>5:</code> Orientada (lúcido, consciente, ubicado, situado en tiempo, espacio y persona).</p>
                        <p className={s.narrative}><code className={s.marker}>4:</code> Confusa (desorientado, perdido, desubicado, conversación coherente pero errónea, no sabe la fecha o el lugar).</p>
                        <p className={s.narrative}><code className={s.marker}>3:</code> Palabras inapropiadas (palabras sueltas, frases sin contexto, sin sentido ni lógica, lenguaje inconexo, exclamaciones).</p>
                        <p className={s.narrative}><code className={s.marker}>2:</code> Sonidos incomprensibles (quejidos, gruñidos, gemidos, ruidos guturales, sin articular palabra).</p>
                        <p className={s.narrative}><code className={s.marker}>1:</code> Ninguna (silencio, mutismo, afonía, sin sonido).</p>
                        <p className={s.narrative}><code className={s.marker}>NV:</code> No valorable (ej. paciente intubado, traqueostomía, afasia severa, sordera, barrera idiomática).</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>🦾 Respuesta motora (M)</h3>
                    <div className="space-y-2 pl-4">
                        <p className={s.narrative}><code className={s.marker}>6:</code> Obedece órdenes (sigue instrucciones simples, colabora, movimiento voluntario al mandato).</p>
                        <p className={s.narrative}><code className={s.marker}>5:</code> Localiza el dolor (movimiento intencionado y dirigido, cruza la línea media, intenta retirar la mano del examinador).</p>
                        <p className={s.narrative}><code className={s.marker}>4:</code> Retirada al dolor (flexión normal, movimiento de huida o defensivo, aleja la extremidad pero sin localizar).</p>
                        <p className={s.narrative}><code className={s.marker}>3:</code> Flexión anormal (postura de decorticación, flexión patológica rígida sobre el pecho).</p>
                        <p className={s.narrative}><code className={s.marker}>2:</code> Extensión anormal (postura de descerebración, extensión patológica rígida de brazos y piernas).</p>
                        <p className={s.narrative}><code className={s.marker}>1:</code> Ninguna (sin movimiento, flacidez, arrefléxico).</p>
                        <p className={s.narrative}><code className={s.marker}>NV:</code> No valorable (ej. parálisis previa por ictus, lesión medular, extremidad inmovilizada, sedación farmacológica).</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'GCS-P Pupilar',
        Icon: <PupilarGlasgowIcon />,
        content: (
            <div className="space-y-6">
                <p className={s.narrative}>La GCS-P es una herramienta clínica diseñada para mejorar la evaluación y el pronóstico de pacientes con Traumatismo Craneoencefálico (TCE). Modifica la tradicional Escala de Coma de Glasgow (GCS) incorporando la reactividad pupilar, un indicador clave de la función del tronco encefálico.</p>
                <div>
                    <h3 className={s.heading}>1. La Fórmula de Cálculo (GCS-P = GCS - PRS)</h3>
                    <p className={s.narrative}>La GCS-P se calcula utilizando una fórmula de resta simple que ajusta la puntuación motora, verbal y ocular de la GCS según el estado de las pupilas.</p>
                    <p className={`${s.narrative} mt-2`}>La fórmula es:</p>
                    <p className="font-mono bg-slate-900/50 p-3 rounded-lg border border-slate-700 text-center text-amber-300 my-2">GCS-P = GCS - PRS</p>
                    <ul className={`${s.narrative} list-disc list-inside ml-4 mt-2 space-y-1`}>
                        <li><strong>GCS:</strong> Es la puntuación total de la Escala de Coma de Glasgow (que va de 3 a 15).</li>
                        <li><strong>PRS:</strong> Es el Pupil Reactivity Score (que va de 0 a 2).</li>
                    </ul>
                    <p className={`${s.narrative} mt-2`}>Por lo tanto, la puntuación GCS-P resultante puede ir desde 1 (un GCS de 3 con un PRS de 2) hasta 15 (un GCS de 15 con un PRS de 0).</p>
                </div>
                <div>
                    <h3 className={s.heading}>2. Cálculo del PRS (Pupil Reactivity Score)</h3>
                    <p className={s.narrative}>El PRS (Pupil Reactivity Score) cuantifica la pérdida de la reactividad pupilar a la luz. Se puntúa en una escala de 0 a 2, basándose en cuántas pupilas no reaccionan a un estímulo de luz brillante.</p>
                    <p className={`${s.narrative} mt-2`}>El cálculo es el siguiente:</p>
                    <div className="space-y-2 pl-4 mt-2">
                        <p className={s.narrative}><code className={s.marker}>PRS = 0:</code> Ambas pupilas son reactivas a la luz.</p>
                        <p className={s.narrative}><code className={s.marker}>PRS = 1:</code> Una pupila no es reactiva (fija) a la luz.</p>
                        <p className={s.narrative}><code className={s.marker}>PRS = 2:</code> Ninguna de las dos pupilas es reactiva (ambas están fijas) a la luz.</p>
                    </div>
                    <p className={`${s.narrative} italic text-stone-400 mt-2`}>Una pupila "no reactiva" se define comúnmente como una ausencia total de respuesta del esfínter pupilar, o una respuesta mínima (menor a 1 mm), al ser estimulada con una luz brillante.</p>
                </div>
                <div>
                    <h3 className={s.heading}>3. Evidencia y Superioridad Pronóstica (TCE Grave)</h3>
                    <p className={s.narrative}>La GCS-P se desarrolló porque la GCS tradicional, aunque fundamental, tiene limitaciones. Por ejemplo, un paciente con un GCS de 4 (Motor 2, Verbal 1, Ojos 1) tiene un pronóstico muy diferente si sus pupilas están reactivas (PRS 0) o si están fijas (PRS 2). La GCS-P captura esta diferencia vital.</p>
                    <p className={`${s.narrative} mt-2`}>La evidencia que solicitaste se refiere a la mejora significativa en la capacidad pronóstica (predicción de mortalidad a 6 meses o resultado neurológico desfavorable) al usar GCS-P en lugar de GCS sola.</p>
                    <p className={`${s.narrative} mt-2`}><strong>Superioridad Estadística (P &lt; .0001):</strong> Estudios a gran escala (como los del consorcio CRASH y CENTER-TBI, que analizan miles de pacientes con TCE) han validado la GCS-P.</p>
                    <p className={`${s.narrative} mt-2`}>Estos estudios demuestran que el modelo pronóstico que utiliza la GCS-P es significativamente más preciso que el modelo que solo utiliza la GCS.</p>
                    <p className={`${s.narrative} mt-2`}>El valor P &lt; .0001 indica que esta superioridad no es casual; es una diferencia estadísticamente robusta y altamente significativa. En términos simples, la probabilidad de que la GCS-P sea mejor que la GCS solo por azar es inferior al 0.01%.</p>
                    <p className={`${s.narrative} mt-2`}>En resumen, añadir el PRS (la información pupilar) a la GCS proporciona una herramienta pronóstica mucho más potente y precisa para los médicos que tratan a pacientes con TCE grave.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Descerebración y decorticación',
        Icon: <PatientIcon />,
        content: (
            <>
                <h2 className={s.title}>¿Qué son esas posturas anormales?</h2>
                <p className={`${s.narrative} mb-4`}>La información, y las puntuaciones motoras M3 y M2 son cruciales en neurología:</p>
                <div className="space-y-4">
                    <div>
                        <h3 className={s.heading}>GCS Motor 3 (M3) - Decorticación (Flexión Anormal):</h3>
                        <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600`}>Cuando se aplica dolor, el paciente flexiona rígidamente los brazos sobre el pecho, con los puños cerrados y las piernas extendidas.</p>
                        <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600 mt-2`}><strong className="text-amber-400">Significado:</strong> Indica un daño grave en las vías nerviosas por encima del tronco encefálico (en el córtex cerebral o la cápsula interna).</p>
                    </div>
                    <div>
                        <h3 className={s.heading}>GCS Motor 2 (M2) - Descerebración (Extensión Anormal):</h3>
                        <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600`}>Cuando se aplica dolor, el paciente extiende rígidamente los brazos a los lados del cuerpo, rota las muñecas hacia afuera y extiende las piernas.</p>
                        <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600 mt-2`}><strong className="text-amber-400">Significado:</strong> Indica un daño aún más grave, localizado en el propio tronco encefálico. Generalmente tiene peor pronóstico que la decorticación.</p>
                    </div>
                </div>
            </>
        )
    },
    {
        title: 'Estímulos dolorosos',
        Icon: <AyIcon />,
        content: (
            <>
                <h2 className={s.title}>Técnicas Aceptadas y Desaconsejadas</h2>
                <p className={`${s.narrative} mb-4`}>El objetivo de un estímulo doloroso en la GCS no es causar daño, sino aplicar un estímulo estandarizado para provocar una respuesta en un paciente que no responde a la voz. Las técnicas deben ser fiables y seguras.</p>
                
                <p className={`${s.narrative} mt-4`}>
                    Los estímulos nociceptivos se dividen en dos categorías principales: <strong className="text-stone-200">centrales</strong> y <strong className="text-stone-200">periféricos</strong>.
                </p>
                <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600`}>
                    <strong className="text-amber-400">Estímulos Centrales:</strong> Se aplican al "núcleo" del cuerpo (cabeza, cuello o tronco). Están diseñados para evaluar la respuesta cerebral integrada. Un estímulo central provoca una respuesta que requiere que el cerebro procese la sensación y coordine una respuesta motora, reflejando así la función cortico-encefálica.
                </p>
                <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600 mt-2`}>
                    <strong className="text-amber-400">Estímulos Periféricos:</strong> Se aplican a las extremidades, como la presión sobre el lecho ungueal. Estos son útiles para provocar una respuesta, pero conllevan una salvedad crítica: pueden desencadenar un <strong className="text-rose-400">reflejo puramente espinal</strong>.
                </p>
                <p className={`${s.narrative} mt-2`}>
                    El uso incorrecto de un estímulo periférico para evaluar la respuesta motora (M) es un <strong className="text-rose-400">error metodológico grave</strong>. Un paciente con una lesión cerebral grave (que resultaría en M1, sin respuesta cerebral) pero con una médula espinal intacta, podría teóricamente presentar una flexión refleja de la extremidad (similar a M4) al aplicarle presión ungueal. Esto llevaría a una <strong className="text-rose-400">sobreestimación peligrosa</strong> del nivel de conciencia. Por lo tanto, para valorar el componente motor (M1-M5), la aplicación de un estímulo central es <strong className="text-amber-300">mandatoria</strong>.
                </p>
                
                <div className="space-y-4 mt-4">
                    <div>
                        <h3 className={`${s.heading} text-green-400`}>✅ Técnicas Recomendadas (Estandar de oro)</h3>
                        <div className="ml-4 mt-2 space-y-3">
                            <div>
                                <h4 className="font-semibold text-stone-300">1. Pellizco en el Trapecio (Estímulo Central)</h4>
                                <p className={`${s.narrative} ml-4`}>Excelente para evaluar la respuesta cerebral global (O, V, M). Se toma una porción del músculo trapecio (entre el hombro y el cuello) con el pulgar y el índice y se pellizca con firmeza.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-stone-300">2. Presión Mandibular (Estímulo Central)</h4>
                                <p className={`${s.narrative} ml-4`}>Se aplica presión en el ángulo de la mandíbula (articulación temporomandibular). Es una excelente alternativa a la presión supraorbitaria, especialmente si hay trauma facial.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-stone-300">3. Presión en el Lecho Ungueal (Estímulo Periférico)</h4>
                                <p className={`${s.narrative} ml-4`}>Método muy fiable, pero siendo consciente de la posibilidad de reflejos espinales. Se aplica presión con un objeto romo (como un bolígrafo) sobre el lecho de la uña durante unos segundos.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className={`${s.heading} text-sky-400`}>📖 Otros Estímulos de Presión</h3>
                        <p className={`${s.narrative} mb-2 ml-4 italic text-stone-400`}>La literatura clínica describe otros puntos para aplicar "estímulos de presión", aunque su uso es menos frecuente o estandarizado. Aquí tiene una lista de métodos alternativos documentados:</p>
                        <ul className={`${s.narrative} list-disc list-inside ml-4 space-y-2`}>
                            <li><strong className="text-sky-300">Pellizco en la base del músculo esternocleidomastoideo (SCM):</strong> Estímulo central, similar al pellizco del trapecio, aplicando presión en la base de este músculo en el cuello.</li>
                            <li><strong className="text-sky-300">Pellizco de la membrana interdigital:</strong> Estímulo periférico pellizcando la piel entre el pulgar y el dedo índice.</li>
                            <li><strong className="text-sky-300">Pellizco sobre el músculo tríceps:</strong> Estímulo periférico aplicando un pellizco en la piel que recubre el tríceps en la parte posterior del brazo.</li>
                            <li>
                                <strong className="text-sky-300">Variaciones de la presión ungueal:</strong>
                                <ul className="list-['–'] list-inside ml-6 mt-1 space-y-1">
                                    <li>Presión específica en el área de la lúnula (la base blanca de la uña).</li>
                                    <li>Presión aplicada en el lateral del dedo, junto al borde de la uña.</li>
                                    <li>Presión en la punta del dedo.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={`${s.heading} text-rose-400`}>❌ Técnicas PROHIBIDAS o en Desuso</h3>
                         <p className={`${s.narrative} mb-2 ml-4 italic text-stone-400`}>Las siguientes técnicas están desaconsejadas por referentes como glasgowcomascale.org por ser poco fiables, potencialmente dañinas o causar lesiones no deseadas.</p>
                        <ul className={`${s.narrative} list-disc list-inside ml-4 space-y-2`}>
                            <li><strong className="text-rose-300">Fricción Esternal (Sternal Rub):</strong> Prohibida. Es una técnica agresiva que puede causar hematomas y lesiones cutáneas, especialmente en ancianos. Su respuesta es difícil de estandarizar.</li>
                            <li><strong className="text-rose-300">Presión Supraorbitaria:</strong> Prohibida. Consiste en presionar el nervio supraorbitario. Es peligrosa, ya que puede causar fracturas faciales o craneales no detectadas, y la respuesta puede ser un reflejo facial en lugar de una respuesta cerebral.</li>
                            <li><strong className="text-rose-300">Pellizcos en otras zonas (axila, pezones):</strong> Prohibidos. Se consideran poco profesionales, inapropiados y no estandarizados.</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    },
    {
        title: 'pGCS Pediátrica',
        Icon: <LittleGlasgowItem />,
        content: (
            <>
                <p className={`${s.narrative} mb-4`}>Adaptación verbal para niños que aún no hablan (preverbales, generalmente menores de 2-3 años).</p>
                <div className={`${s.narrative} space-y-3`}>
                    <p><strong>A4 (Espontánea):</strong> Ojos abiertos, sigue objetos.</p>
                    <p><strong>A3 (A la orden verbal):</strong> Abre los ojos cuando le hablas.</p>
                    <p><strong>A2 (Al dolor):</strong> Solo abre los ojos tras estímulo doloroso.</p>
                    <p><strong>A1 (Ninguna):</strong> No hay apertura ocular.</p>
                    <hr className="border-slate-600 my-3" />
                    <p><strong>V5 (Balbuceo / Sonríe):</strong> Balbucea, gorjea, interactúa apropiadamente (equivale a "orientado").</p>
                    <p><strong>V4 (Llanto Consolable):</strong> Llora, pero se calma con el consuelo (equivale a "confuso").</p>
                    <p><strong>V3 (Llanto Inconsolable / Gritos):</strong> Llora persistentemente y no se calma (equivale a "palabras inapropiadas").</p>
                    <p><strong>V2 (Quejidos / Gemidos):</strong> Emite sonidos guturales en respuesta al dolor (equivale a "sonidos incomprensibles").</p>
                    <p><strong>V1 (Ninguna):</strong> No hay respuesta verbal.</p>
                    <hr className="border-slate-600 my-3" />
                    <p><strong>M6 (Obedece / Mov. espontáneo):</strong> Muestra movimientos normales para su edad.</p>
                    <p><strong>M5 (Localiza el dolor):</strong> Intenta quitar la fuente del dolor.</p>
                    <p><strong>M4 (Retirada al dolor):</strong> Retira la extremidad del estímulo.</p>
                    <p><strong>M3 (Flexión anormal):</strong> Decorticación.</p>
                    <p><strong>M2 (Extensión anormal):</strong> Descerebración.</p>
                    <p><strong>M1 (Ninguna):</strong> Sin respuesta motora.</p>
                </div>
            </>
        )
    },
    {
        title: 'Afasia vs GCS',
        Icon: <MuteIcon />,
        content: (
            <div className="space-y-6">
                <div>
                    <h3 className={s.heading}>Afasia de Broca (Grave/Mutismo)</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p><strong>Problema:</strong> El paciente está despierto (O4), entiende lo que le dices (su cerebro está "orientado"), pero el ictus le impide físicamente formar palabras.</p>
                        <p><strong>Respuesta Verbal:</strong> Ninguna (mutismo).</p>
                        <p><strong>Puntuación:</strong> Si le pones V1 (Ninguna), su GCS baja injustamente, haciendo creer que está en coma.</p>
                        <p><strong>Solución:</strong> Se marca como <strong className="text-amber-300">V-NV (No Valorable)</strong>, porque un factor (el ictus en el centro motor del habla) te impide evaluar su orientación.</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Afasia de Wernicke</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p><strong>Problema:</strong> El paciente está despierto (O4). El ictus le impide comprender el lenguaje y, aunque puede hablar con fluidez, lo que dice no tiene ningún sentido ("ensalada de palabras").</p>
                        <p><strong>Respuesta Verbal:</strong> El paciente SÍ da una respuesta verbal. Si le preguntas "¿Cómo te llamas?", te puede responder: "El coche es azul por la mañana".</p>
                        <p><strong>Puntuación:</strong> Esta respuesta verbal SÍ se puede clasificar en la escala GCS.</p>
                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>No es V5 (Orientada).</li>
                            <li>No es V4 (Confusa - un confuso intenta responder, pero se equivoca de fecha o lugar).</li>
                            <li>Es <strong className="text-amber-300">V3 (Palabras Inapropiadas)</strong>. El paciente usa palabras reales, pero en un contexto y una sintaxis completamente incorrectos y sin sentido.</li>
                        </ul>
                        <p className="italic text-stone-400 mt-2">Un detalle importante: El paciente con afasia de Wernicke también puntuará más bajo en la escala motora. Como no entiende la orden "levante dos dedos", no podrá hacer un M6. Habrá que aplicarle dolor, y lo más probable es que puntúe un M5 (localiza el dolor).</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Afasia Global (La "Suma de Todas")</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p>Esta es la forma más grave de afasia.</p>
                        <p><strong>¿Qué es?</strong> Es tener Broca Y Wernicke al mismo tiempo. Generalmente es por un ictus masivo que afecta a gran parte del territorio de la arteria cerebral media.</p>
                        <p><strong>¿Cómo se presenta?</strong> El paciente no puede hablar (o como mucho emite algún sonido repetitivo) Y tampoco puede comprender lo que se le dice.</p>
                        <p><strong>Relevancia en la GCS:</strong> Esta es la más confusa de todas para puntuar.</p>
                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li><strong>Ocular:</strong> Estará despierto (O4).</li>
                            <li><strong>Verbal:</strong> No habla. Como el problema es que no puede formular Y no puede comprender, lo más correcto es puntuarlo como <strong className="text-amber-300">V-NV (No Valorable)</strong>. (Algunos, erróneamente, le pondrían V1 o V2, pero NV es más preciso).</li>
                            <li><strong>Motora:</strong> Como no comprende la orden ("levante dos dedos"), fallará el M6. Hay que aplicar dolor, y (si no tiene parálisis en ese lado) localizará (M5).</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Afasia de Conducción (La "Repetición Rota")</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p>Esta es la más "sutil" y específica.</p>
                        <p><strong>¿Qué es?</strong> Un ictus que rompe el "cable" (fascículo arqueado) que conecta el área de Wernicke (comprensión) con la de Broca (producción).</p>
                        <p><strong>¿Cómo se presenta?</strong> El paciente entiende perfectamente (comprende) y habla fluidamente (produce). El único gran síntoma es que NO PUEDE REPETIR frases que oye.</p>
                        <p><strong>Relevancia en la GCS:</strong> Esta afasia no afecta a la puntuación GCS. El paciente está:</p>
                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>O4 (despierto)</li>
                            <li>V5 (orientado, porque entiende y puede decir quién es y dónde está)</li>
                            <li>M6 (obedece órdenes, porque entiende)</li>
                        </ul>
                        <p className="mt-2">Su GCS será de 15/15, pero tiene un déficit neurológico claro que solo se descubre pidiéndole: "Repita la frase: 'ni sí, ni no'".</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Limitaciones',
        Icon: <PaperAlertIcon />,
        content: (
            <>
                <div className={`${s.narrative} space-y-4`}>
                    <div>
                        <h3 className={s.heading}>1. Factores que Impiden Evaluación</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Intubación:</strong> Impide la respuesta verbal. Se anota con "T" (ej. GCS 11T).</li>
                            <li><strong>Trauma Facial / Edema:</strong> Impide la respuesta ocular. Se anota con "C".</li>
                            <li><strong>Sedación y Drogas:</strong> Invalida toda la escala al reflejar el efecto de sustancias, no el daño neurológico.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={s.heading}>2. Condiciones Neurológicas Específicas</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Lesión Medular:</strong> Puede dar un M1 falso en un paciente consciente (ej. tetraplejia).</li>
                            <li><strong>Afasia:</strong> Un paciente consciente puede no ser capaz de hablar (V1-V2 bajo).</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={s.heading}>3. Lo que la GCS No Mide</h3>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Reflejos del Tronco Encefálico:</strong> No evalúa las pupilas, vital para detectar hernias cerebrales.</li>
                            <li><strong>Déficits Focales:</strong> No detecta debilidad en un solo lado del cuerpo (hemiparesia).</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    },
    {
        title: 'Definición neurológica',
        Icon: <MindIcon />,
        content: (
            <div className={`${s.narrative} space-y-3`}>
                <div>
                    <p><strong>GCS 15 Normal.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: El paciente está totalmente alerta y orientado. Responde coherentemente, abre los ojos espontáneamente y obedece órdenes motoras. Es el estado neurológico normal.</p>
                </div>
                <div>
                    <p><strong>GCS 14 Traumatismo o deterioro leve.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: El paciente está alerta, pero ligeramente confuso o desorientado (por ejemplo, no sabe la fecha o dónde está). Aún puede obedecer órdenes.</p>
                </div>
                <div>
                    <p><strong>GCS 13 Traumatismo o deterioro leve.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: El paciente presenta una alteración leve, pero clara. Puede estar despierto, pero confuso y no obedece órdenes, aunque sí localiza un estímulo doloroso.</p>
                </div>
                <div>
                    <p><strong>GCS 12 Traumatismo o deterioro moderado.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: El paciente está somnoliento (adormilado) y confuso. Requiere ser llamado para despertar, pero las respuestas verbales no son coherentes (por ejemplo, dice palabras inapropiadas).</p>
                </div>
                <div>
                    <p><strong>GCS 11 Traumatismo o deterioro moderado.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: Estado de somnolencia significativa. El paciente solo responde con palabras inapropiadas o sonidos y requiere estímulos para despertar. Aún puede localizar el dolor.</p>
                </div>
                <div>
                    <p><strong>GCS 10 Traumatismo o deterioro moderado.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: El paciente está muy somnoliento (estuporoso). Requiere estímulos dolorosos para responder, y la respuesta no es de localización, sino de simple retirada al dolor.</p>
                </div>
                <div>
                    <p><strong>GCS 9 Límite entre moderado y grave.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: Estado de estupor. El paciente apenas responde a estímulos (quizás abre los ojos al dolor) y sus respuestas son mínimas, como quejidos o retirada al dolor.</p>
                </div>
                <div>
                    <p><strong>GCS 8 Umbral Crítico / Traumatismo grave / Definición clínica de COMA.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: El paciente está en coma. Está inconsciente y es incapaz de proteger su propia vía aérea (alto riesgo de asfixia). Generalmente, requiere intubación. La respuesta al dolor es, como mucho, una retirada o flexión anormal.</p>
                </div>
                <div>
                    <p><strong>GCS 7 Coma.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: Estado de coma. El paciente no abre los ojos ni habla. La única respuesta a un estímulo doloroso intenso es una flexión anormal (postura de decorticación).</p>
                </div>
                <div>
                    <p><strong>GCS 6 Coma.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: Coma profundo. La respuesta al dolor es una extensión anormal (postura de descerebración). Esta respuesta indica un daño más severo y profundo en el tronco encefálico que la decorticación.</p>
                </div>
                <div>
                    <p><strong>GCS 5 Coma profundo.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: Estado de coma muy profundo. Generalmente, no hay respuesta ocular ni verbal, y la única respuesta al dolor es la postura de descerebración (extensión).</p>
                </div>
                <div>
                    <p><strong>GCS 4 Coma profundo.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: Coma extremadamente profundo. La única respuesta que se registra es una ligera respuesta motora de extensión (descerebración), o quizás solo apertura ocular al dolor, pero sin respuesta motora ni verbal.</p>
                </div>
                <div>
                    <p><strong>GCS 3 Coma arreactivo.</strong></p>
                    <p className="pl-4 text-stone-400">Definición: Es la puntuación más baja posible. Ausencia total de respuesta (sin apertura ocular, sin respuesta verbal y sin respuesta motora) incluso ante los estímulos dolorosos más fuertes. Indica un daño cerebral catastrófico.</p>
                </div>
            </div>
        )
    },
     {
        title: 'Glasgow y ansiedad',
        Icon: <PunchItem />,
        content: (
            <div className="space-y-4">
                <div>
                    <h3 className={s.heading}>El propósito de la GCS vs. la ansiedad</h3>
                    <p className={`${s.narrative} mt-2`}>La escala de coma de Glasgow (GCS) está diseñada para medir el nivel de conciencia debido a un daño neurológico (como un traumatismo craneoencefálico, un ictus o un problema metabólico).</p>
                    <p className={`${s.narrative} mt-2`}>Una crisis de pánico o ansiedad es un estado psicológico o funcional. El cerebro (neurológicamente) está despierto y funcionando, pero la persona está abrumada por el miedo o la disociación, lo que altera su comportamiento.</p>
                </div>
                <div>
                    <h3 className={s.heading}>Cómo se diferencia en la práctica</h3>
                    <p className={`${s.narrative} mt-2`}>Un evaluador experimentado notará una diferencia clave entre un paciente en coma (O1 verdadero) y un paciente con una crisis de ansiedad:</p>
                    <ul className={`${s.narrative} list-disc list-inside ml-4 mt-2 space-y-2`}>
                        <li><strong>Paciente en coma (O1 verdadero):</strong> Al aplicar un estímulo doloroso (ej. presión en el lecho ungueal), no hay respuesta. Los párpados están flácidos, sin tono.</li>
                        <li><strong>Paciente con ansiedad/pánico (O1 aparente):</strong> El paciente elige (consciente o inconscientemente) no abrir los ojos para "desconectarse" del entorno. A menudo, si el evaluador intenta levantar el párpado manualmente, el paciente aprieta los ojos con fuerza.</li>
                    </ul>
                    <p className={`${s.narrative} mt-2`}>Ese acto de "apretar los ojos" es una respuesta motora activa y voluntaria. Esto le dice al evaluador que el paciente no está en coma; de hecho, está obedeciendo (de forma opuesta) una orden o reaccionando a un estímulo. Si el evaluador determina que el paciente no abre los ojos debido a una respuesta psicógena (pánico, ansiedad, funcional) y no a un déficit neurológico, la escala ocular se marca como <strong className="text-amber-300">NV (No valorable)</strong>.</p>
                </div>
                <div>
                    <h3 className={s.heading}>¿Cómo se anotaría?</h3>
                    <p className={`${s.narrative} mt-2`}><code className={s.marker}>O–NV (paciente aprieta los párpados activamente, sugiere respuesta funcional)</code></p>
                    <p className={`${s.narrative} mt-3`}><strong>¿Puede una crisis de pánico hacer que alguien no abra los ojos?</strong> Sí.</p>
                    <p className={s.narrative}><strong>¿Significa esto que su puntuación ocular de Glasgow es 1?</strong> No.</p>
                    <p className={s.narrative}>Significa que la puntuación para ese componente es <strong className="text-amber-300">No Valorable (NV)</strong>, porque el comportamiento del paciente (debido al pánico) interfiere con la evaluación neurológica.</p>
                    <p className={`${s.narrative} mt-2 italic text-stone-400`}>Estos trastornos neurológicos funcionales a veces son llamados “imitadores” o simplemente “confundidores clínicos" cuando la causa es psicógena. El hallazgo orgánico o neurológico tiene características diferentes a un hallazgo funcional o psicógeno.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Dilemas...',
        Icon: <DilemasIcons />,
        content: <DilemmasNavigator />
    },
    {
        title: 'Valoración ocular y craneal',
        Icon: <EyeBrainIcon />,
        content: (
            <div className="space-y-6">
                <h2 className={s.title}>🧠 Esquema de Valoración Ocular y Craneal</h2>
                <div>
                    <h3 className={s.heading}>Tamaño y Simetría Pupilar</h3>
                    <div className={`${s.narrative} space-y-3 pl-4`}>
                        <p><strong>Isocoria:</strong> Ambas pupilas del mismo tamaño. Normal.</p>
                        <p><strong>Miosis (Puntiformes):</strong> Muy pequeñas. Sugiere intoxicación por opiáceos o lesión en tronco cerebral.</p>
                        <p><strong>Midriasis (Dilatadas):</strong> Muy grandes. Sugiere anoxia, intoxicación por estimulantes o muerte cerebral.</p>
                        <p><strong className="text-rose-400">Anisocoria:</strong> Tamaño desigual. ¡Alarma Crítica! Sugiere herniación cerebral.</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Reactividad a la Luz (Reflejo Fotomotor)</h3>
                    <div className={`${s.narrative} space-y-3 pl-4`}>
                        <p><strong>Reactivas:</strong> Contracción rápida y simultánea. Normal.</p>
                        <p><strong>Lenta o "Perezosa":</strong> Contracción lenta. Signo temprano de aumento de PIC.</p>
                        <p><strong>Arreactiva (Fija):</strong> No se contrae. Daño en la vía nerviosa. Midriasis arreactiva bilateral es signo de daño catastrófico.</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Reflejos del Tronco (Solo en Coma)</h3>
                    <div className={`${s.narrative} space-y-3 pl-4`}>
                        <p><strong>Reflejo Oculocefálico ("Ojos de Muñeca") Presente:</strong> Al girar la cabeza, los ojos se mueven al lado opuesto. Normal en coma (tronco intacto).</p>
                        <p><strong>Reflejo Oculocefálico Ausente:</strong> Los ojos se quedan fijos. Grave, lesión del tronco encefálico.</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Signos Observacionales de Trauma Craneal</h3>
                    <div className={`${s.narrative} space-y-3 pl-4`}>
                        <p><strong>Ojos de Mapache:</strong> Moretones periorbitales. Fractura de base de cráneo (fosa anterior).</p>
                        <p><strong>Signo de Battle:</strong> Moretón retroauricular. Fractura de base de cráneo (fosa media/posterior).</p>
                        <p><strong>Otorragia / Rinorragia con LCR:</strong> Salida de líquido claro "como agua de roca". Fractura de base de cráneo con desgarro meníngeo. Alto riesgo de meningitis.</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>🩺 Cómo Realizar las Pruebas</h3>
                    <p className={`${s.narrative} pl-4`}>Usar linterna médica, iluminando desde el lateral. Para la GCS, seguir la progresión de estímulos (verbal → táctil → doloroso). Los "Ojos de Muñeca" solo se realizan en coma profundo y tras descartar 100% lesión cervical.</p>
                </div>
                <div>
                    <h3 className={s.heading}>➕ Otros Signos Neurológicos Relevantes</h3>
                    <div className={`${s.narrative} space-y-3 pl-4`}>
                        <p><strong>Signo de Babinski:</strong> En un adulto, la extensión del dedo gordo del pie al estimular la planta es un signo de lesión en la vía piramidal.</p>
                        <p><strong>Signos Meníngeos (Rigidez de Nuca):</strong> Dolor/incapacidad para flexionar el cuello. Sugiere meningitis o hemorragia subaracnoidea.</p>
                        <p><strong>Desviación de la Comisura Bucal:</strong> Un lado de la boca no se eleva al sonreír. Signo clásico de ictus o parálisis facial.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Errores y perlas',
        Icon: <ComunGronwIcon />,
        content: (
            <div className="space-y-3">
                <ul className={`${s.narrative} list-disc list-inside ml-4 space-y-2`}>
                    <li>Evita “sumar por sumar”:Si hay un componente no valorable o no totalizable (Vt, NV, NT) no des un GCS total.Anota componentes.</li>
                    <li>La respuesta <strong>Motora</strong> es el factor pronóstico más importante.</li>
                    <li>Nunca sustituyas una V no valorable (Vt) por un V1; falsea gravemente la puntuación.</li>
                    <li><strong>Siempre</strong> revisa y corrige causas reversibles: hipoglucemia, hipoxia, hipotensión, hipotermia, tóxicos, postictal.</li>
                    <li>Revalora al paciente constantemente tras cualquier intervención (glucosa, O₂, naloxona,anticonvulsivantes, analgesia...).</li>
                    <li>En niños, el entorno (padres, chupete) es clave. Intenta calmar antes de valorar.</li>
                    <li>
                        Describe, además de puntuar:
                        <div className="ml-6 mt-1 text-stone-400 italic">
                            <p>“No abre ojos; emite gemidos al dolor; extensión al dolor” es más útil que una cifra sola.</p>
                            <p>“gime al dolor; extensión en EE. superiores”</p>
                        </div>
                    </li>
                    <li>Registra el mejor estado preintubación si vas a sedar/intubar.</li>
                    <li>Distingue M5 (localiza) de M4 (retira).</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Distinción',
        Icon: <PuzzleIcon />,
        content: (
            <div className="space-y-4">
                <p className={s.narrative}>Es crucial diferenciar "NV" de una puntuación de "M1":</p>
                <div>
                    <h3 className={s.heading}>M1 (Ausencia de respuesta):</h3>
                    <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600`}>Se aplica un estímulo doloroso y el paciente no muestra ninguna respuesta motora. Esto indica una disfunción cerebral muy grave.</p>
                </div>
                <div>
                    <h3 className={s.heading}>NV (No Valorable):</h3>
                    <p className={`${s.narrative} ml-4 pl-4 border-l-2 border-slate-600`}>No se puede realizar la prueba de forma fiable debido a uno de los factores mencionados (ej. está paralizado por fármacos). No sabemos cuál sería su respuesta motora si pudiera moverse.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Mini-algorritmo',
        Icon: <SmallAlgorritmeIcon />,
        content: (
            <div className={`${s.narrative} space-y-4 font-mono bg-slate-900/50 p-4 rounded-lg border border-slate-700`}>
                <p><strong className="text-amber-400">O:</strong> ¿espontánea? → ¿a la voz? → ¿al dolor?</p>
                <p><strong className="text-amber-400">V:</strong> ¿orientado/coherente? (o equivalente preverbal) → si intubado/afasia: marca no valorable.</p>
                <p><strong className="text-amber-400">M:</strong> ¿obedece? → si no, dolor: ¿localiza? ¿retira? ¿flexión? ¿extensión?</p>
                <hr className="border-slate-600" />
                <p className="text-sm text-stone-400">Anota O/V/M, condiciones no valorables (intubación, edema, sedación) y realiza GCS detallado tras las intervenciones.</p>
            </div>
        )
    },
    {
        title: 'Anotaciones',
        Icon: <LearnIcon />,
        content: (
            <div className="space-y-6">
                <div>
                    <h3 className={s.heading}>Ocular (O)</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p><code className={s.marker}>O1c</code> = Ojos cerrados por edema/trauma.</p>
                        <p>Alternativa: <code className={s.marker}>O–NV (edema palpebral)</code>.</p>
                        <p>Añadir estímulo: <code className={s.marker}>O3 (voz)</code>, <code className={s.marker}>O2 (dolor central)</code>.</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Verbal (V)</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p><code className={s.marker}>Vt</code> = Verbal no valorable por tubo.</p>
                        <p><code className={s.marker}>V–NV (afasia)</code> = No valorable por afasia, sordera, etc.</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Motora (M)</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p><code className={s.marker}>M–NV (sedación/relajación)</code> = No valorable por sedación, bloqueo neuromuscular, tetraplejia.</p>
                        <p>Describe fármacos/hora: “midazolam 2 mg iv hace 10’”.</p>
                        <p>Anotar asimetría: <code className={s.marker}>M6 izq / M4 dcha</code> (puntúa la mejor).</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Pediátrica (PGCS)</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p>Añadir sufijo: Ej.: <code className={s.marker}>O3 V4 M4 = 11 (PGCS)</code>.</p>
                        <p>En lactantes, V se puntúa por balbuceo/llanto (no es NV).</p>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>NV / NT = No Valorable / No Testeable</h3>
                    <div className={`${s.narrative} space-y-3 pl-4`}>
                        <p>Úsalo cuando un componente no puede evaluarse y explica por qué entre paréntesis.</p>
                        <h4 className="font-semibold text-stone-300 pt-2">Ejemplos de Anotación:</h4>
                        <div className="font-mono bg-slate-900/50 p-3 rounded-lg border border-slate-700 space-y-2 text-sm">
                            <p>Adulto somnoliento, obedece, confuso: <span className="text-amber-300">O3 V4 M6 = 13</span></p>
                            <p>Politrauma intubado con extensión: <span className="text-amber-300">O1 Vt M2 (No totalizable)</span></p>
                            <p>Ictus con afasia, obedece órdenes: <span className="text-amber-300">O3 V–NV (afasia) M6 (No totalizable)</span></p>
                            <p>Trauma facial, confusa, obedece: <span className="text-amber-300">O1c V4 M6 (No totalizable)</span></p>
                            <p>Lactante, abre a voz, llanto irritable, retira: <span className="text-amber-300">O3 V4 M4 = 11 (PGCS)</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className={s.heading}>Anotaciones Habituales</h3>
                    <div className={`${s.narrative} space-y-2 pl-4`}>
                        <p><strong className="text-amber-300">GCS / Escala de Glasgow:</strong> escala total (3–15) solo si las 3 áreas son valorables.</p>
                        <p><strong className="text-amber-300">Evita “ECG”:</strong> (se confunde con electrocardiograma).</p>
                        <p><strong className="text-amber-300">O / V / M:</strong> Anotar siempre por componentes.</p>
                        <p><strong className="text-amber-300">PGCS / GCSp:</strong> Glasgow Pediátrica (para preverbales, ~&lt;2 años).</p>
                    </div>
                </div>
            </div>
        )
    },
];

const referenceList = [
    { text: "Glasgow Coma Scale (GCS) - MDCalc, fecha de acceso: noviembre 5, 2025", url: "https://www.mdcalc.com/calc/64/glasgow-coma-scale-score-gcs" },
    { text: "Table: Escala de Coma de Glasgow*-Manual MSD versión para profesionales, fecha de acceso: noviembre 5, 2025", url: "https://www.msdmanuals.com/es/professional/multimedia/table/escala-de-coma-de-glasgow" },
    { text: "Glasgow Coma Scale, fecha de acceso: noviembre 5, 2025", url: "https://hhs.iowa.gov/media/8708/download?inline" },
    { text: "Modified Glasgow Coma Scale for Infants and Children - Merck Manuals, fecha de acceso: noviembre 5, 2025", url: "https://www.merckmanuals.com/professional/multimedia/table/modified-glasgow-coma-scale-for-infants-and-children" },
    { text: "Glasgow Coma Scale (GCS) – Strokengine, fecha de acceso: noviembre 5, 2025", url: "https://strokengine.ca/en/assessments/glasgow-coma-scale-gcs/" },
    { text: "Glasgow Coma Scale - StatPearls - NCBI Bookshelf, fecha de acceso: noviembre 5, 2025", url: "https://www.ncbi.nlm.nih.gov/books/NBK513298/" },
    { text: "¿Hasta qué punto son fiables los signos clínicos de TNF ..., fecha de acceso: noviembre 5, 2025", url: "https://neurosymptoms.org/es_ES/faq-2/how-reliable-are-the-clinical-signs-of-fnd/" },
    { text: "The Neurological Exam of a Comatose Patient: An Essential Practical Guide - PMC, fecha de acceso: noviembre 5, 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7605838/" },
    { text: "Psychogenic unresponsiveness: a functional neurological disorder on the border zone between neurology and clinical psychology - MedCrave online, fecha de acceso: noviembre 5, 2025", url: "https://medcraveonline.com/JNSK/psychogenic-unresponsiveness-a-functional-neurological-disorder-on-the-border-zone-between-neurology-and-clinical-psychology.html" },
    { text: "GLASGOW COMA SCALE, fecha de acceso: noviembre 5, 2025", url: "https://www.sralab.org/sites/default/files/2017-06/glasgow_coma.pdf" },
    { text: "GCS Aid - Glasgow Coma Scale, fecha de acceso: noviembre 5, 2025", url: "https://www.glasgowcomascale.org/gcs-aid/" },
    { text: "Sternal Rubs: Why not? - emsuk learning, fecha de acceso: noviembre 5, 2025", url: "https://www.emsuklearning.co.uk/q-sternal-rubs-why-paramedics-should-seek-alternative-pain-assessment-techniques/" },
    { text: "Nurses' understanding and experience of applying painful stimuli when assessing components of the Glasgow Coma Scale - Pure - Ulster University's Research Portal, fecha de acceso: noviembre 5, 2025", url: "https://pure.ulster.ac.uk/files/77440695/Main_Body_amended_post_review.pdf" },
    { text: "What is GCS-P - Glasgow Coma Scale, fecha de acceso: noviembre 5, 2025", url: "https://www.glasgowcomascale.org/what-is-gcs-p/" },
    { text: "ORIGINAL ARTICLE - External validation of the Glasgow Coma ..., fecha de acceso: noviembre 5, 2025", url: "https://revistaemergencias.org/wp-content/uploads/2023/12/039-043.pdf" },
    { text: "Glasgow Coma Scale Response, fecha de acceso: noviembre 5, 2025", url: "https://www.slocounty.ca.gov/departments/health-agency/public-health/emergency-medical-services/emergency-medical-services-agency/forms-documents/utilities/gcs" },
    { text: "Glasgow Coma Scale (GCS) - LITFL, fecha de acceso: noviembre 5, 2025", url: "https://litfl.com/glasgow-coma-scale-gcs/" },
    { text: "Utilidad de la escala de coma de Glasgow para el pediatra de Atención Primaria - FAPap, fecha de acceso: noviembre 5, 2025", url: "https://fapap.es/files/639-1477-RUTA/07_Escala_Glasgow.pdf" },
    { text: "Child's Glasgow Coma Scale - British Paediatric Neurology Association, fecha de acceso: noviembre 5, 2025", url: "https://bpna.org.uk/audit/GCS.PDF" },
    { text: "Paramedic use of the AVPU and Glasgow Coma Scale - MAG Online Library, fecha de acceso: noviembre 5, 2025", url: "https://www.magonlinelibrary.com/doi/10.12968/jpar.2025.0089" },
    { text: "Glasgow Coma Scale (GCS): What It Is, Interpretation & Chart, fecha de acceso: noviembre 5, 2025", url: "https://my.clevelandclinic.org/health/diagnostics/24848-glasgow-coma-scale-gcs" },
    { text: "The “coma sign”: An iatrogenic complication of neurological assessment - PMC - NIH, fecha de acceso: noviembre 5, 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6626607/" },
    { text: "Sternal rub causing presternal abrasion in a patient with capsuloganglionic haemorrhage - PMC - PubMed Central, fecha de acceso: noviembre 5, 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3987201/" },
    { text: "Post-traumatic headache: don't forget to test the supraorbital nerve! - PMC - NIH, fecha de acceso: noviembre 5, 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4543681/" },
    { text: "GLASGOW SCALE - HOW TO ASSESS LEVEL OF CONSCIOUSNESS - YouTube, fecha de acceso: noviembre 5, 2025", url: "https://www.youtube.com/watch?v=nYM9u6XI9Ak" },
    { text: "Comparison of the three strategies of verbal scoring of the Glasgow Coma Scale in patients with stroke - PubMed, fecha de acceso: noviembre 5, 2025", url: "https://pubmed.ncbi.nlm.nih.gov/9548004/" },
    { text: "Types of aphasia - Stroke Association, fecha de acceso: noviembre 5, 2025", url: "https://www.stroke.org.uk/stroke/effects/aphasia/types-of-aphasia" },
    { text: "Afasia - Enfermedades cerebrales, medulares y nerviosas - Manual MSD versión para público general, fecha de acceso: noviembre 5, 2025", url: "https://www.msdmanuals.com/es/hogar/enfermedades-cerebrales-medulares-y-nerviosas/disfunci%C3%B3n-cerebral/afasia" },
    { text: "Medically unexplained neurological symptoms - PMC - NIH, fecha de acceso: noviembre 5, 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2984351/" },
    { text: "The Drop Test for Feigned Coma - YouTube, fecha de acceso: noviembre 5, 2025", url: "https://www.youtube.com/watch?v=6IA04vjhiO8" },
    { text: "Generalidades sobre el coma y el deterioro de la consciencia ..., fecha de acceso: noviembre 5, 2025", url: "https://www.msdmanuals.com/es/professional/trastornos-neurol%C3%B3gicos/coma-y-deterioro-de-la-consciencia/generalidades-sobre-el-coma-y-el-deterioro-de-la-consciencia" },
    { text: "Hoover's sign for the diagnosis of functional weakness: a prospective unblinded cohort study in patients with suspected stroke - PubMed, fecha de acceso: noviembre 5, 2025", url: "https://pubmed.ncbi.nlm.nih.gov/22118379/" },
    { text: "Pseudoneurologic Syndromes: Recognition and Diagnosis - AAFP, fecha de acceso: noviembre 5, 2025", url: "https://www.aafp.org/pubs/afp/issues/1998/0515/p2485.html" },
    { text: "Del trastorno conversivo a los trastornos neurológicos funcionales. ¿Superando el diagnóstico por descarte? | Revista Colombiana de Psiquiatría - Elsevier, fecha de acceso: noviembre 5, 2025", url: "https://www.elsevier.es/es-revista-revista-colombiana-psiquiatria-379-articulo-del-trastorno-conversivo-los-trastornos-S0034745017301403" },
    { text: "Glasgow Coma Scale, fecha de acceso: noviembre 5, 2025", url: "https://www.glasgowcomascale.org/" },
    { text: "Pediatric Glasgow Coma Scale (pGCS) - MDCalc, fecha de acceso: noviembre 5, 2025", url: "https://www.mdcalc.com/calc/3702/pediatric-glasgow-coma-scale-pgcs" },
    { text: "The GCS-Pupils (GCS-P) score to assess outcomes after traumatic brain injury: a retrospective study - Taylor & Francis Online, fecha de acceso: noviembre 5, 2025", url: "https://www.tandfonline.com/doi/full/10.1080/02688697.2023.2301071" },
];

export const referencesSection = {
    title: '@Referencias',
    icon: <BookOpenIcon />,
    content: (
        <div>
            <h4 className={s.heading}>Obras citadas</h4>
            <ol className={`${s.narrative} list-decimal list-inside space-y-4`}>
                {referenceList.map((ref, index) => (
                    <li key={index}>
                        <p className="text-sm">{ref.text.replace(/,$/, '')}</p>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 underline hover:text-amber-200 transition-colors block mt-1 truncate">
                            {ref.url}
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    )
};