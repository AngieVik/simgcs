import { Case } from '../../types';

export const deportivosCases: Case[] = [
    {
        id: 'offline-deportivos-1',
        title: 'El Décimo Segundo',
        category: 'Deportivos',
        narrative: "El olor a sudor y linimento inunda el aire. Un boxeador yace en la lona; el árbitro ha terminado la cuenta. Su entrenador le grita, pero no reacciona. No abre los ojos. Al aplicar un pellizco firme en el músculo de su hombro, el púgil emite un quejido gutural y sus brazos se flexionan rígidamente sobre su pecho, con los puños apretados como si aún estuviera en guardia. Sus piernas están tensas y extendidas. El público guarda un silencio sepulcral.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "El boxeador ha sufrido un traumatismo craneoencefálico grave por un knockout, resultando en un daño cerebral agudo. La postura de decorticación es un signo claro de una lesión por encima del tronco encefálico. Requiere inmovilización cervical y traslado urgente.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(2): Solo emite sonidos incomprensibles al dolor, como se narra en: "...el púgil emite un quejido gutural...".
Motora(3): Adopta una postura de flexión anormal al estímulo doloroso, como se describe en: "...sus brazos se flexionan rígidamente sobre su pecho...".
        `.trim(),
    },
    {
        id: 'offline-deportivos-2',
        title: 'La Melé Silenciosa',
        category: 'Deportivos',
        narrative: "El juego de rugby se detiene abruptly. Un jugador de la primera línea está en el suelo tras una melé que se ha derrumbado. Está boca arriba, con los ojos abiertos, siguiendo con la mirada a los compañeros que se arremolinan a su alrededor. 'No me puedo mover', dice con una voz clara pero llena de pánico. 'No siento nada de nada'. Le pides que te apriete la mano, pero no hay movimiento. Su respiración es superficial, puramente abdominal, un patrón que te pone en alerta máxima.",
        correctGCS: { ocular: 4, verbal: 5, motor: 0 },
        conclusion: "El jugador ha sufrido una lesión medular cervical aguda, probablemente una fractura o luxación vertebral. Está completamente consciente y orientado, pero la lesión le ha provocado una tetraplejia. La respuesta motora es No Valorable.",
        gcsJustification: `
Ocular(4): Está despierto, con apertura ocular espontánea, como se ve en: "...con los ojos abiertos, siguiendo con la mirada...".
Verbal(5): Está orientado y es capaz de describir sus síntomas, como se narra en: "'No me puedo mover... No siento nada de nada'.".
Motora(NV): Es No Valorable. La parálisis debida a la lesión medular impide la valoración, como se confirma en: "Le pides que te apriete la mano, pero no hay movimiento.".
        `.trim(),
    },
    {
        id: 'offline-deportivos-3',
        title: 'Kilómetro Cuarenta y Dos',
        category: 'Deportivos',
        narrative: "A pocos metros de la meta de la maratón, una corredora se tambalea y cae. Al llegar, está en el suelo, convulsionando violentamente. Tras un minuto, los temblores cesan, pero permanece inconsciente, con los ojos cerrados y la respiración ruidosa. No responde a la voz. Al aplicarle un pellizco firme en el trapecio, emite un quejido y retira el brazo con un movimiento defensivo. Su piel está empapada en sudor frío, y junto a ella hay varias botellas de agua vacías.",
        correctGCS: { ocular: 1, verbal: 2, motor: 4 },
        conclusion: "La corredora ha sufrido una hiponatremia grave asociada al ejercicio (intoxicación por agua), que le ha provocado un edema cerebral y una crisis convulsiva. Su estado postictal actual refleja la disfunción neurológica resultante de este desequilibrio electrolítico.",
        gcsJustification: `
Ocular(1): Permanece con los ojos cerrados, sin respuesta a ningún estímulo.
Verbal(2): Emite sonidos incomprensibles en respuesta al dolor, como se ve en: "...emite un quejido...".
Motora(4): Muestra un movimiento de retirada al estímulo doloroso, como se narra en: "...y retira el brazo con un movimiento defensivo.".
        `.trim(),
    },
    {
        id: 'offline-deportivos-4',
        title: 'El Segundo Impacto',
        category: 'Deportivos',
        narrative: "Un futbolista juvenil está sentado en el banquillo. El entrenador os dice que 'chocó cabezas hace diez minutos, pero dijo que estaba bien para seguir'. Ahora, el chico tiene la mirada perdida. Le habláis, pero no contesta. De repente, ante vuestros ojos, su espalda se arquea violentamente, su cabeza se echa hacia atrás, y sus cuatro extremidades se extienden de forma rígida y tensa. Su cuerpo está como una tabla.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "El paciente sufre un hematoma epidural de rápida evolución o un síndrome del segundo impacto. Tras un intervalo lúcido, la presión intracraneal ha aumentado de forma catastrófica, causando una herniación cerebral y la postura de descerebración.",
        gcsJustification: `
Ocular(1): No hay apertura ocular.
Verbal(1): No hay respuesta verbal.
Motora(2): Presenta una postura de extensión anormal espontánea, como se describe en: "...sus cuatro extremidades se extienden de forma rígida y tensa.".
        `.trim(),
    },
    {
        id: 'offline-deportivos-5',
        title: 'El Péndulo Humano',
        category: 'Deportivos',
        narrative: "En una pared de escalada, un hombre cuelga inerte de su arnés a diez metros de altura. Ha sufrido una caída pendular y se ha golpeado la cabeza contra la roca. Los bomberos lo bajan con cuidado, inmovilizado en una camilla nido. No abre los ojos ni responde a la voz. Apoyas tus dedos en el ángulo de su mandíbula y ejerces una presión creciente. Como respuesta, retira la cabeza y su brazo derecho se dobla lentamente hacia el estímulo, un movimiento de retirada torpe pero inconfundible, sin llegar a tocar vuestra mano. No emite ningún sonido.",
        correctGCS: { ocular: 1, verbal: 1, motor: 4 },
        conclusion: "El escalador tiene un traumatismo craneoencefálico de moderado a grave. La respuesta de retirada al dolor indica que hay una función cerebral por encima del tronco encefálico, pero la falta de localización sugiere una lesión significativa.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No hay respuesta verbal, ni siquiera al dolor.
Motora(4): Muestra una respuesta de retirada al dolor, como se ve en: "...su brazo derecho se dobla lentamente hacia el estímulo... sin llegar a tocar vuestra mano.".
        `.trim(),
    },
    {
        id: 'offline-deportivos-6',
        title: 'La Corchera Inmóvil',
        category: 'Deportivos',
        narrative: "Un socorrista os lleva hasta un nadador que ha sacado del agua en una piscina olímpica. 'Estaba flotando boca abajo durante el entrenamiento', dice. El paciente, un hombre de unos 60 años, está en el borde, cianótico y con espuma rosada saliendo de su boca. No responde a ningún estímulo, ni verbal ni doloroso. Su cuerpo está completamente flácido, sin el más mínimo tono muscular. Vuestro monitor no muestra ritmo.",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "El paciente ha sufrido una parada cardiorrespiratoria, probablemente por un evento cardiaco mientras nadaba, seguido de ahogamiento. La hipoxia prolongada ha llevado a un cese de la actividad cerebral detectable. La espuma rosada es un signo de edema agudo de pulmón.",
        gcsJustification: `
Ocular(1): No hay apertura ocular.
Verbal(1): No hay respuesta verbal.
Motora(1): No hay ninguna respuesta motora al dolor, como se describe en: "Su cuerpo está completamente flácido...".
        `.trim(),
    },
    {
        id: 'offline-deportivos-7',
        title: 'Doble Falta',
        category: 'Deportivos',
        narrative: "En una pista de tenis, un jugador senior (70 años) está sentado en un banco, pálido y sudoroso. 'Me he mareado', dice al veros, con la voz débil. Está despierto y os mira. Sabe su nombre y que está en el club de tenis, pero cuando le preguntáis la fecha, dice '1988'. Le pedís que os apriete ambas manos, y lo hace con fuerza y simetría. Se queja de un dolor opresivo en el pecho.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El paciente ha sufrido un síncope de origen cardiaco (probablemente una arritmia o un infarto) debido al esfuerzo. La breve interrupción del flujo sanguíneo cerebral le ha dejado en un estado confusional transitorio, a pesar de estar alerta y obedecer órdenes.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea, está alerta, como se ve en: "Está despierto y os mira.".
Verbal(4): Está confuso y desorientado en tiempo, como se narra en: "...cuando le preguntáis la fecha, dice '1988'.".
Motora(6): Obedece órdenes motoras correctamente, como se describe en: "Le pedís que os apriete ambas manos, y lo hace con fuerza...".
        `.trim(),
    },
    {
        id: 'offline-deportivos-8',
        title: 'Fuera de Pista',
        category: 'Deportivos',
        narrative: "Un esquiador ha chocado contra un árbol. Lo encontráis semi-enterrado en la nieve, tiritando violentamente. Su casco está roto. Tiene los ojos cerrados. Al llamarlo en voz alta, los abre, desorientado. '¿Qué... qué ha pasado?', pregunta con la voz temblorosa por el frío. 'Me duele todo'. Le pedís que mueva los dedos de los pies. Lo hace. Su habla es lenta y algo empastada.",
        correctGCS: { ocular: 3, verbal: 4, motor: 6 },
        conclusion: "El paciente presenta un traumatismo craneoencefálico y una hipotermia moderada. La hipotermia está contribuyendo a su estado confusional y somnolencia, y puede enmascarar la verdadera gravedad de la lesión cerebral. Es crucial tratar ambas lesiones simultáneamente.",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se narra en: "Al llamarlo en voz alta, los abre, desorientado.".
Verbal(4): Está confuso y desorientado sobre el suceso, como se ve en: "'¿Qué... qué ha pasado?', pregunta...".
Motora(6): Obedece órdenes motoras, como se describe en: "Le pedís que mueva los dedos de los pies. Lo hace.".
        `.trim(),
    },
    {
        id: 'offline-deportivos-9',
        title: 'El Levantamiento Olvidado',
        category: 'Deportivos',
        narrative: "En un gimnasio, un hombre joven está sentado en el suelo, rodeado de compañeros. 'Se desmayó levantando peso', os dicen. Al llegar, está despierto y os mira, algo pálido pero sonriente. '¿Te encuentras bien?'. 'Sí, perfectamente', responde. Sabe su nombre, dónde está y qué día es. Obedece todas vuestras órdenes motoras sin dificultad. 'No sé qué pasó, de repente todo se puso negro. Lo último que recuerdo es coger la barra'.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "El paciente ha sufrido un síncope por la maniobra de Valsalva durante el levantamiento de peso. El aumento de la presión intratorácica disminuyó el retorno venoso al corazón, causando una caída temporal del flujo sanguíneo cerebral. Su recuperación ha sido completa y espontánea.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea, como se ve en: "está despierto y os mira...".
Verbal(5): Completamente orientado, como se narra en: "Sabe su nombre, dónde está y qué día es.".
Motora(6): Obedece todas las órdenes motoras sin dificultad.
        `.trim(),
    },
    {
        id: 'offline-deportivos-10',
        title: 'El Agarre Final',
        category: 'Deportivos',
        narrative: "En un tatami de jiu-jitsu, un luchador yace en el suelo tras un combate. Su compañero dice que 'se quedó dormido' con una estrangulación, pero que ya ha pasado un minuto y no reacciona como otras veces. Ahora está despierto, con los ojos abiertos. 'Hola', decís. 'Los árboles son verdes', responde con claridad, con una sonrisa extraña. Le pedís que levante el pulgar. Levanta el pulgar. Le preguntáis dónde está. 'Mi coche es rojo'.",
        correctGCS: { ocular: 4, verbal: 3, motor: 6 },
        conclusion: "El luchador ha sufrido una hipoxia cerebral transitoria por la estrangulación. Esto ha provocado un estado confusional con un discurso de 'palabras inapropiadas'. Aunque puede obedecer órdenes, su función cognitiva superior está claramente alterada y requiere una evaluación más profunda para descartar una lesión más grave.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea.
Verbal(3): Usa palabras y frases irrelevantes y fuera de contexto, como se ve en: "'Los árboles son verdes'... 'Mi coche es rojo'.".
Motora(6): Obedece órdenes motoras simples, como se narra en: "Le pedís que levante el pulgar. Levanta el pulgar.".
        `.trim(),
    }
];