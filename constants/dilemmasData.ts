export type DilemmaContentBlock =
    | { type: 'p'; text: string; bold?: string; }
    | { type: 'h4'; text: string; }
    | { type: 'subheading'; text: string; }
    | { type: 'list'; items: { text: string; bold?: string; }[]; }
    | { type: 'sublist', items: string[]; }
    | { type: 'pearl'; text: string; bold?: string; }
    | { type: 'divider'; text: string; bold?: string; };

interface Dilemma {
    title: string;
    content: DilemmaContentBlock[];
}

export const dilemmasData: Dilemma[] = [
    {
        title: 'El dilema: el paciente que no abre los ojos',
        content: [
            { type: 'p', bold: 'Lo que parece:', text: ' El paciente está en coma. Sus ojos están cerrados. No los abre espontáneamente, ni cuando se le habla, ni cuando se le aplica un estímulo doloroso.' },
            { type: 'p', bold: 'El "imitador":', text: ' Estado de no respuesta psicógeno (disociación, conversión, pánico severo) o negativismo.' },
            { type: 'h4', text: 'Cómo diferenciarlo (las perlas clínicas):' },
            { type: 'subheading', text: 'La resistencia activa (el signo clave):' },
            {
                type: 'list', items: [
                    { bold: 'Orgánico (coma verdadero):', text: ' Los párpados del paciente están flácidos, sin tono (hipotonía palpebral). Si el evaluador levanta el párpado, este no ofrece resistencia. Al soltarlo, el párpado cae lentamente o se queda entreabierto.' },
                    { bold: 'Funcional (psicógeno):', text: ' El paciente aprieta los ojos con fuerza (blefaroespasmo). Cuando el médico intenta levantar el párpado, siente una resistencia activa y temblorosa. Las pestañas a menudo se "entierran".' }
                ]
            },
            { type: 'pearl', bold: 'La perla:', text: ' Este acto de apretar los ojos es una respuesta motora compleja y voluntaria. El paciente no está en coma, sino que está demostrando (involuntariamente) que su cerebro está despierto y activo.' },
            { type: 'subheading', text: 'La prueba de la caída de la mano:' },
            { type: 'p', text: 'Se levanta la mano del propio paciente (la que supuestamente está "flácida" o en coma) por encima de su cara y se suelta.'},
            {
                type: 'list', items: [
                    { bold: 'Orgánico (coma):', text: ' La mano caerá directamente sobre la cara del paciente, siguiendo la gravedad. (El examinador debe estar listo para detenerla y evitar lesiones).' },
                    { bold: 'Funcional (psicógeno):', text: ' La mano mágicamente se desviará en el último segundo y caerá a un lado de la cara, pero nunca sobre ella. Esto demuestra que el cerebro está consciente de la posición del cuerpo (propiocepción) y está activamente evitando el golpe.' }
                ]
            },
            { type: 'subheading', text: 'Reflejo de amenaza vs. parpadeo:' },
            {
                type: 'list', items: [
                    { bold: 'Orgánico (coma):', text: ' Si los ojos están abiertos (o el médico los abre) y se hace un gesto de amenaza rápido hacia el ojo (sin crear una corriente de aire), el paciente no parpadeará. (Nota: el reflejo corneal, tocando la córnea, puede seguir presente).' },
                    { bold: 'Funcional (psicógeno):', text: ' Incluso con los ojos "cerrados", un gesto de amenaza repentino a menudo causará un mayor apretón de los párpados.' }
                ]
            }
        ]
    },
    {
        title: 'El dilema: el paciente "ciego" (ojos abiertos, pero dice que no ve)',
        content: [
            { type: 'p', text: 'A veces, el paciente está despierto con los ojos abiertos, pero afirma que no puede ver nada.' },
            { type: 'p', bold: 'Lo que parece:', text: ' Ceguera real, causada por un ictus en el lóbulo occipital (ceguera cortical) o daño del nervio óptico.' },
            { type: 'p', bold: 'El "imitador":', text: ' Ceguera funcional o psicógena.' },
            { type: 'h4', text: 'Cómo diferenciarlo (las perlas clínicas):' },
            { type: 'subheading', text: 'La prueba del espejo:' },
            { type: 'p', text: 'Se coloca un espejo frente al paciente y se gira lentamente de lado a lado.'},
            { type: 'list', items: [
                { bold: 'Orgánico (ceguera real):', text: ' Los ojos no se moverán.' },
                { bold: 'Funcional (psicógeno):', text: ' Los ojos del paciente seguirán su propio reflejo de forma involuntaria. El cerebro no puede evitar "engancharse" al estímulo visual (esto se llama nistagmo optocinético).' }
            ]},
            { type: 'subheading', text: 'La prueba del objeto que cae:' },
            { type: 'p', text: 'Se deja caer un objeto silencioso (como un trozo de algodón) frente a la cara del paciente.'},
            { type: 'list', items: [
                { bold: 'Orgánico (ceguera real):', text: ' No hay reacción.' },
                { bold: 'Funcional (psicógeno):', text: ' El paciente a menudo parpadeará o seguirá el objeto con la mirada.' }
            ]},
            { type: 'divider', bold: 'En resumen, para la escala de Glasgow,', text: ' la resistencia activa al abrir los párpados es el signo más fuerte y definitivo para descartar un O1 verdadero y diagnosticar una respuesta funcional.' }
        ]
    },
    {
        title: 'El dilema: el paciente mudo',
        content: [
            { type: 'p', bold: 'Lo que parece:', text: ' El paciente no emite ningún sonido. Podría ser un coma (GCS V1 verdadero), una afasia motora global (incapacidad de producir habla por un ictus), o un síndrome de enclaustramiento.' },
            { type: 'p', bold: 'El "imitador":', text: ' Mutismo psicógeno o funcional. El paciente está despierto y neurológicamente capaz de hablar, pero no lo hace por un motivo psicológico (ansiedad extrema, disociación, negativismo).'},
            { type: 'h4', text: 'Cómo diferenciarlo (las perlas clínicas):' },
            { type: 'subheading', text: 'La discordancia del GCS: Esta es la clave.'},
            { type: 'list', items: [
                { bold: 'Orgánico (coma):', text: ' Un paciente en V1 verdadero (coma) estará también en O1/O2 y M1-M5. Su GCS total será bajo (8 o menos).'},
                { bold: 'Funcional (psicógeno):', text: ' El paciente estará despierto. Sus ojos estarán abiertos, te seguirá con la mirada y tendrá movimientos normales. Su puntuación sería: O4 + V1 + M6 = 11.'}
            ]},
            { type: 'pearl', text: 'Un GCS de 11 no es un coma. Esta discrepancia (totalmente alerta y motoramente normal, pero completamente mudo) es el mayor indicador de un mutismo funcional.'},
            { type: 'subheading', text: 'La prueba de escritura:'},
            { type: 'p', text: 'Si el paciente está alerta, pero mudo, se le da un papel y un bolígrafo y se le pide que escriba su nombre o qué le pasa.'},
            { type: 'list', items: [
                { bold: 'Orgánico (afasia motora grave):', text: ' El paciente a menudo también tendrá "agrafia" (no podrá escribir) O mostrará una inmensa frustración. Sabrá lo que quiere decir pero no podrá formularlo. Llorará, se señalará la garganta, etc. La frustración es un signo neurológico clave aquí.'},
                { bold: 'Funcional (mutismo psicógeno):', text: ' El paciente podrá:'}
            ]},
            { type: 'sublist', items: [
                'Escribir perfectamente lo que le pasa ("Tengo miedo", "No puedo hablar").',
                'Negarse a escribir (negativismo).',
                'Mostrar una extraña indiferencia (llamada "la belle indifférence"), sin la frustración motora del paciente con afasia.'
            ]},
            { type: 'subheading', text: 'La tos:'},
            { type: 'p', text: 'A veces se le pide al paciente que tosa. Toser es una función motora vocal voluntaria. Un paciente con mutismo psicógeno a menudo puede toser a la orden, demostrando que las cuerdas vocales y los nervios funcionan, aunque se niegue a hablar.'}
        ]
    },
     {
        title: 'El dilema: el paciente que habla raro',
        content: [
            { type: 'p', bold: 'Lo que parece:', text: ' El paciente habla confuso (V4) o dice palabras inapropiadas (V3). Podría ser un delirio (infección, hipoxia, droga), una demencia, o una afasia de Wernicke (un ictus que daña la comprensión).'},
            { type: 'p', bold: 'El "imitador":', text: ' Un trastorno de pensamiento formal (psicosis, esquizofrenia) o ansiedad severa.'},
            { type: 'h4', text: 'Cómo diferenciarlo (las perlas clínicas):'},
            { type: 'subheading', text: 'Forma vs. contenido:'},
            { type: 'list', items: [
                { bold: 'Orgánico (afasia de Wernicke):', text: ' El paciente habla fluido, pero el lenguaje no tiene sentido. Es una "ensalada de palabras". La gramática (sintaxis) está destrozada. Usan palabras incorrectas (parafasias) o inventadas (neologismos). Crucialmente: el paciente no se da cuenta de que no tiene sentido y se frustra porque tú no le entiendes.'},
                { bold: 'Funcional (psicosis):', text: ' El paciente habla raro, pero la gramática es perfecta. Las frases están bien construidas, pero el contenido es extraño (ej. "Los espías me vigilan a través del microondas"). Es una fuga de ideas o un delirio, pero la sintaxis está intacta.'}
            ]},
            { type: 'subheading', text: 'Comprensión:'},
            { type: 'list', items: [
                { bold: 'Orgánico (Wernicke):', text: ' El paciente no puede obedecer órdenes, ni siquiera simples ("cierre los ojos"), porque el centro de comprensión del lenguaje está dañado.'},
                { bold: 'Funcional (psicosis):', text: ' El paciente sí puede obedecer órdenes (su M6 funciona), aunque puede que no quiera o que responda de forma extraña. Su GCS motor será M6.'}
            ]},
            { type: 'divider', bold: 'El principio básico es: orgánico o neurológico / funcional o psicógeno.', text: ' La exploración neurológica busca diferenciar si el problema es:'},
             { type: 'list', items: [
                { bold: 'Orgánico o neurológico:', text: ' Un ictus, un tumor, una infección, un golpe.'},
                { bold: 'Funcional o psicógeno:', text: ' El cerebro está físicamente intacto, pero la mente está causando el síntoma. El término más usado es trastorno neurológico funcional (TNF).'}
            ]}
        ]
    },
    {
        title: 'El dilema: parálisis/debilidad de una pierna (monoparesia)',
        content: [
            { type: 'p', bold: 'Lo que parece:', text: ' El paciente no puede mover una pierna o la mueve con gran debilidad. Podría ser un ictus en una zona muy específica, una hernia discal grave (radiculopatía) o una lesión de la médula espinal.'},
            { type: 'p', bold: 'El "imitador":', text: ' Debilidad funcional.'},
            { type: 'h4', text: 'Cómo diferenciarlo (la perla clínica): el signo de Hoover'},
            { type: 'p', text: 'Esta es una de las maniobras más famosas.'},
            { type: 'p', text: 'Se pone una mano debajo del talón de la pierna "sana" y otra mano debajo del talón de la pierna "paralizada". Se le pide al paciente: "Levante la pierna \'sana\' con fuerza contra mi mano".'},
            { type: 'list', items: [
                { bold: 'Resultado orgánico:', text: ' Para levantar la pierna sana, el paciente involuntariamente hace fuerza hacia abajo con la pierna paralizada para estabilizar la pelvis. Se sentirá una fuerte presión hacia abajo en la mano bajo el talón "paralizado".'},
                { bold: 'Resultado funcional:', text: ' El paciente levanta la pierna "sana" sin hacer ninguna (o muy poca) presión hacia abajo con la pierna "paralizada". Demuestra que el cerebro no está enviando la señal de estabilización pélvica, a pesar de que la vía motora para hacerlo está intacta.'}
            ]}
        ]
    },
    {
        title: 'El dilema: parálisis de un brazo (hemiparesia)',
        content: [
            { type: 'p', bold: 'Lo que parece:', text: ' El paciente tiene un brazo "flácido" que no puede mantener levantado. El signo clásico de un ictus.'},
            { type: 'p', bold: 'El "imitador":', text: ' Debilidad funcional.'},
            { type: 'h4', text: 'Cómo diferenciarlo (la perla clínica): la caída del brazo'},
            { type: 'p', text: 'Se le pide al paciente que mantenga ambos brazos extendidos al frente con los ojos cerrados.'},
            { type: 'list', items: [
                { bold: 'Resultado orgánico (ictus):', text: ' El brazo afectado por el ictus comenzará a "derivar" (drift). Lo hará de una forma muy específica: lentamente caerá hacia abajo y rotará hacia adentro (pronación). Es un movimiento fluido e inconsciente.'},
                { bold: 'Resultado funcional:', text: ' Ocurren dos cosas: o el brazo se mantiene arriba perfectamente (porque el paciente se concentra en él) o, más comúnmente, el brazo "cede" de golpe, cayendo bruscamente como un peso muerto, sin la rotación característica. A veces, incluso se puede ver cómo los músculos (ej. deltoides) se contraen un instante antes de soltarlo.'}
            ]}
        ]
    },
    {
        title: 'El dilema: pérdida de sensibilidad en un lado del cuerpo (hemiestesia)',
        content: [
            { type: 'p', bold: 'Lo que parece:', text: ' El paciente dice que no siente nada (tacto, dolor) en exactamente la mitad de su cuerpo. De nuevo, un síntoma de ictus (síndrome talámico).'},
            { type: 'p', bold: 'El "imitador":', text: ' Pérdida de sensibilidad funcional.'},
            { type: 'h4', text: 'Cómo diferenciarlo (la perla clínica): la división de la línea media'},
            { type: 'p', text: 'Se prueba la sensibilidad (ej. con un alfiler o un objeto frío) moviéndose desde el lado "afectado" hacia el lado "sano", justo en la línea media del cuerpo (frente, esternón, abdomen).'},
            { type: 'list', items: [
                { bold: 'Resultado orgánico:', text: ' Las vías nerviosas se cruzan y tienen superposición. Un paciente con un ictus talámico nunca pierde la sensibilidad exactamente hasta el milímetro de la línea media. La sensación empezará a notarse antes de cruzar la línea o de forma difusa.'},
                { bold: 'Resultado funcional:', text: ' El paciente reportará que la sensación aparece "como si pulsara un interruptor" exactamente en la línea media. Esto no es anatómicamente posible.'}
            ]},
            { type: 'pearl', bold: 'Bonus:', text: ' Si se usa un diapasón vibrando sobre el esternón o la frente (que son huesos únicos) y el paciente dice que "no lo siente" en el lado "afectado", es un signo funcional, ya que la vibración se transmite por todo el hueso.'}
        ]
    },
    {
        title: 'El dilema: paciente en "coma" (inconsciencia)',
        content: [
            { type: 'p', bold: 'Lo que parece:', text: ' Paciente en coma. No responde a nada.'},
            { type: 'p', bold: 'El "imitador":', text: ' Estado psicógeno de no respuesta (como vimos antes) o síndrome de enclaustramiento (locked-in).'},
            { type: 'h4', text: 'Cómo diferenciarlo (la perla clínica): reflejos oculares y movimiento vertical'},
            { type: 'list', items: [
                { bold: 'Contra el estado psicógeno:', text: ' Aparte de apretar los ojos, se pueden probar los reflejos oculocefálicos (ojos de muñeca). Si se gira la cabeza del paciente (asumiendo que no hay lesión cervical), un paciente en coma verdadero (con tronco cerebral intacto) mantendrá los ojos fijos en un punto central (se mueven en dirección opuesta a la cabeza). Un paciente psicógeno suprimirá este reflejo y sus ojos se moverán con la cabeza, como los de una muñeca.'},
                { bold: 'Contra el locked-in:', text: ' Este SÍ es un problema neurológico gravísimo (una lesión en el tronco cerebral), pero el paciente está 100% consciente, solo que paralizado. La GCS aquí falla. La clave es que la vía para el movimiento ocular vertical suele estar intacta. El médico debe decir: "Si me oye, mueva los ojos hacia arriba". Si el paciente lo hace, no está en coma.'}
            ]}
        ]
    }
];