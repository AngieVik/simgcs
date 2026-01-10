import { Case } from '../../types';

export const feriaCases: Case[] = [
    {
        id: 'offline-feria-1',
        title: 'El Vals de los Ojos Errantes',
        category: 'Feria y Fiestas',
        narrative: "Detrás de una caseta de churros, un adolescente está desplomado sobre unas cajas de cartón. El aire huele a alcohol y a algo dulzón y empalagoso. Le llamas, pero no responde. Al aplicar un pellizco en el músculo de su hombro, sus ojos se abren, pero su mirada vaga sin fijarse en nada, como si viera a través de ti. Emite un gemido prolongado y empuja tu mano con la suya de forma torpe pero decidida, un movimiento que cruza su cuerpo. Sus amigos dicen que 'ha estado mezclando de todo'.",
        correctGCS: { ocular: 2, verbal: 2, motor: 5 },
        conclusion: "El paciente sufre una intoxicación por múltiples sustancias (probablemente alcohol y cannabis o benzodiacepinas), lo que ha provocado una depresión severa del sistema nervioso central. Su capacidad para localizar el dolor indica una función cortical residual.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta a un estímulo doloroso, como se narra en: "Al aplicar un pellizco... sus ojos se abren...".
Verbal(2): Emite sonidos incomprensibles (gemidos), como se describe en: "Emite un gemido prolongado...".
Motora(5): Realiza un movimiento localizado para retirar el estímulo, como se ve en: "...y empuja tu mano con la suya de forma torpe pero decidida...".
        `.trim(),
    },
    {
        id: 'offline-feria-2',
        title: 'El Vértigo Final',
        category: 'Feria y Fiestas',
        narrative: "La música de la atracción 'El Tagada' se detiene de golpe. El operario os señala un hombre inmóvil en el suelo, fuera del perímetro de seguridad. 'Salió despedido', dice, pálido. El paciente no abre los ojos ni responde a la voz. Apoyas tus dedos en el ángulo de su mandíbula y ejerces una presión creciente. En respuesta, sus brazos se extienden de forma rígida y antinatural, con las muñecas girando hacia dentro. No emite ningún sonido. Hay una deformidad evidente en un lado de su cabeza.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "El paciente ha sufrido un traumatismo craneoencefálico extremadamente grave con daño en el tronco encefálico. La postura de descerebración (extensión anormal) es un signo de pronóstico muy ominoso.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): Ausencia total de respuesta verbal, ni siquiera al dolor.
Motora(2): Responde al dolor con una postura de extensión anormal, como se describe en: "...sus brazos se extienden de forma rígida y antinatural...".
        `.trim(),
    },
    {
        id: 'offline-feria-3',
        title: 'La Danza de las Luces',
        category: 'Feria y Fiestas',
        narrative: "Cerca del 'Ratón Vacilón', con sus luces parpadeantes y su música estridente, una joven yace en el suelo. Los testigos dicen que 'empezó a temblar sin control'. Ahora está quieta, con los ojos cerrados y la respiración ruidosa. No responde a vuestras llamadas. Al aplicar un pellizco firme en su trapecio, emite un quejido y dobla el brazo para apartar el estímulo, pero sin llegar a localizar vuestra mano. En su muñeca, una pulsera de alerta médica de tela pone 'Epilepsia'.",
        correctGCS: { ocular: 1, verbal: 2, motor: 4 },
        conclusion: "La paciente se encuentra en estado postictal tras una crisis tónico-clónica generalizada, probablemente desencadenada por los estímulos lumínicos. Su nivel de conciencia está deprimido, pero empieza a mostrar respuestas motoras defensivas.",
        gcsJustification: `
Ocular(1): Aún no abre los ojos a ningún estímulo en la fase postictal inmediata.
Verbal(2): Solo emite sonidos incomprensibles, como se narra en: "...emite un quejido...".
Motora(4): Realiza un movimiento de retirada al dolor, como se ve en: "...y dobla el brazo para apartar el estímulo, pero sin llegar a localizar vuestra mano.".
        `.trim(),
    },
    {
        id: 'offline-feria-4',
        title: 'El Bocado Prohibido',
        category: 'Feria y Fiestas',
        narrative: "Un hombre se apoya en un puesto de 'pescaíto frito', luchando por respirar. Tiene la cara hinchada y ronchas rojas por todo el cuello. Sus ojos están abiertos, fijos en ti con pánico. Te señala desesperadamente la garganta. Le pides que te apriete la mano, y lo hace con una fuerza sorprendente. Intenta hablar, pero solo se oye un silbido agudo y forzado. En el suelo, un cartucho de papel con gambas a medio comer.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "El paciente sufre una reacción anafiláctica severa, probablemente al marisco. El angioedema de las vías respiratorias altas le está causando la obstrucción (estridor). Está plenamente consciente, pero no puede hablar.",
        gcsJustification: `
Ocular(4): Está despierto y mantiene la alerta visual, como se ve en: "Sus ojos están abiertos, fijos en ti con pánico.".
Verbal(NV): La obstrucción física de la vía aérea impide la fonación, como se narra en: "...solo se oye un silbido agudo y forzado.".
Motora(6): Obedece órdenes motoras, confirmando su estado de conciencia, como se describe en: "Le pides que te apriete la mano, y lo hace con una fuerza sorprendente.".
        `.trim(),
    },
    {
        id: 'offline-feria-5',
        title: 'El Dulce Engaño',
        category: 'Feria y Fiestas',
        narrative: "Un hombre de mediana edad discute acaloradamente con los feriantes de una tómbola. Está sudando profusamente y su aliento huele a cerveza. '¡Devuélveme mi pato!', grita, aunque no ha jugado. Su discurso es rápido y las palabras se atropellan. Al intentar calmarlo, te aparta bruscamente, localizando tu mano y empujándola. Su amigo os dice: 'Es diabético, no sé si se ha puesto la insulina hoy'.",
        correctGCS: { ocular: 4, verbal: 3, motor: 5 },
        conclusion: "El paciente presenta una hipoglucemia severa. La falta de glucosa en el cerebro causa su comportamiento agresivo y su discurso con palabras inapropiadas, un cuadro que a menudo se confunde con la intoxicación etílica.",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea.
Verbal(3): Usa palabras y frases correctas, pero son completamente inapropiadas para el contexto, como se ve en: "'¡Devuélveme mi pato!', grita, aunque no ha jugado.".
Motora(5): Localiza el estímulo (el contacto físico) y realiza un movimiento dirigido para apartarlo, como se narra en: "...te aparta bruscamente, localizando tu mano y empujándola.".
        `.trim(),
    },
    {
        id: 'offline-feria-6',
        title: 'El Último Baile',
        category: 'Feria y Fiestas',
        narrative: "En la pista de baile de la orquesta, un anciano se ha desplomado mientras bailaba un pasodoble. Al llegar, lo encontráis en el suelo, pálido y sudoroso. Vuestro compañero le grita: '¡Señor, abra los ojos!'. Los abre, desorientado. Le preguntáis dónde está. 'En la boda de mi niña...', susurra. Creéis que es confuso, hasta que una mujer se acerca y dice: 'Soy su hija, hoy celebramos mis bodas de plata'. Al intentar tomarle una vía, retira el brazo con un movimiento rápido y defensivo.",
        correctGCS: { ocular: 3, verbal: 5, motor: 4 },
        conclusion: "El paciente ha sufrido un evento cardiaco agudo (probablemente un infarto) que le ha causado un síncope. Su respuesta verbal es orientada, ya que su aparente confusión era, en realidad, correcta para su contexto personal. La respuesta motora es una retirada al dolor (al tomarle una vía, por ejemplo).",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se narra en: "Vuestro compañero le grita... Los abre, desorientado.".
Verbal(5): Está orientado. Su respuesta, aunque extraña al principio, es coherente con su realidad: "'En la boda de mi niña...'".
Motora(4): Presenta una retirada a un estímulo doloroso/molesto, como se ve en: "Al intentar tomarle una vía, retira el brazo...".
        `.trim(),
    },
    {
        id: 'offline-feria-7',
        title: 'El Telón de Miedo',
        category: 'Feria y Fiestas',
        narrative: "En medio de la multitud, una joven está sentada en el suelo, rígida como una estatua. Tiene los ojos apretados con fuerza. No responde a su nombre. Al intentar levantarle un párpado, notáis una resistencia activa y temblorosa. Permanece en completo silencio. Le decís en voz baja: 'Si me oyes, mueve el dedo gordo del pie'. Tras un instante, veis un leve movimiento en su zapatilla. Sus amigos dicen que 'le agobian mucho las multitudes'.",
        correctGCS: { ocular: 0, verbal: 1, motor: 6 },
        conclusion: "La paciente está experimentando un episodio de disociación o una crisis de ansiedad severa. Su inmovilidad es psicógena. La resistencia activa a la apertura ocular y su capacidad para obedecer una orden sutil son las claves para diferenciarlo de un coma real.",
        gcsJustification: `
Ocular(NV): La resistencia activa a la apertura de los párpados es una respuesta funcional, como se ve en: "...notáis una resistencia activa y temblorosa.".
Verbal(1): Mutismo, no emite ningún sonido.
Motora(6): Obedece una orden motora, demostrando un nivel de conciencia preservado, como se narra en: "...veis un leve movimiento en su zapatilla.".
        `.trim(),
    },
    {
        id: 'offline-feria-8',
        title: 'Fiebre de Concierto',
        category: 'Feria y Fiestas',
        narrative: "Durante un concierto a pleno sol en la explanada de la feria, un adolescente en primera fila se desploma. Al llegar, está tirado en el suelo. Su piel está enrojecida, ardiendo y completamente seca. No responde a vuestra voz. Al aplicarle un pellizco en el músculo del hombro, abre los ojos, emite un quejido y retira la cabeza del estímulo. No hay otros movimientos.",
        correctGCS: { ocular: 2, verbal: 2, motor: 4 },
        conclusion: "El paciente sufre un golpe de calor por ejercicio. La combinación de calor ambiental, deshidratación y actividad física ha provocado el fallo de sus mecanismos de termorregulación, llevando a un daño neurológico agudo.",
        gcsJustification: `
Ocular(2): Solo abre los ojos como respuesta a un estímulo doloroso, como se narra en: "Al aplicarle un pellizco... abre los ojos...".
Verbal(2): Emite sonidos incomprensibles, como se ve en: "...emite un quejido...".
Motora(4): Realiza un movimiento de retirada para apartarse del estímulo doloroso, como se describe en: "...y retira la cabeza del estímulo.".
        `.trim(),
    },
    {
        id: 'offline-feria-9',
        title: 'La Disputa del Algodón de Azúcar',
        category: 'Feria y Fiestas',
        narrative: "La policía os lleva hasta un joven sentado en un banco, con una bolsa de hielo en la cabeza. 'Se peleó con otro por un sitio', os dicen. El paciente tiene los ojos abiertos y os mira, algo somnoliento. '¿Cómo te llamas?', le preguntáis. 'Me llamo... eh... Pablo'. '¿Sabes qué día es?'. 'Es de noche'. Su conversación es lenta, pero responde. Le pedís que os apriete las manos. Aprieta con fuerza la izquierda, pero la derecha yace sin fuerza en su regazo.",
        correctGCS: { ocular: 4, verbal: 5, motor: 0 },
        conclusion: "El paciente sufre un traumatismo craneoencefálico que le ha causado un déficit motor focal (hemiparesia derecha). Aunque está despierto y orientado, la incapacidad para mover un lado del cuerpo hace que la valoración motora sea No Valorable. El Glasgow puntúa la mejor respuesta (M6 por el lado sano), pero el déficit debe ser anotado.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea, como se ve en: "...tiene los ojos abiertos y os mira...".
Verbal(5): Está orientado, aunque lento en sus respuestas.
Motora(NV): La lesión neurológica focal (hemiparesia) impide la valoración motora en un lado del cuerpo, como se narra en: "...la derecha yace sin fuerza en su regazo.". Aunque la mejor respuesta sería M6, se marca NV para resaltar la complejidad del déficit.
        `.trim(),
    },
    {
        id: 'offline-feria-10',
        title: 'El Laberinto de Espejos',
        category: 'Feria y Fiestas',
        narrative: "Una anciana está sentada en un banco cerca de la casa de los espejos, con la mirada perdida. Su familia dice que 'de repente empezó a decir cosas raras'. Al acercaros, ella os mira. Le preguntáis su nombre. Responde con una serie de palabras fluidas pero sin ningún sentido: 'El cielo de cristal canta en la mesa'. No parece darse cuenta de que no la entendéis. Le dais la orden: 'Levante la mano derecha'. No lo hace. Al aplicar presión en su hombro izquierdo, lo localiza con la mano izquierda y la aparta con un manotazo.",
        correctGCS: { ocular: 4, verbal: 3, motor: 5 },
        conclusion: "La paciente está sufriendo un ictus agudo que afecta al área de Wernicke (afasia receptiva) y probablemente al lóbulo parietal, causando incapacidad para seguir órdenes (apraxia). Su habla es una 'ensalada de palabras' que se clasifica como V3.",
        gcsJustification: `
Ocular(4): Está despierta, con apertura ocular espontánea.
Verbal(3): Su habla es fluida pero son palabras inapropiadas, sin sentido, como se ve en: "'El cielo de cristal canta en la mesa'.".
Motora(5): No obedece órdenes, pero sí localiza un estímulo doloroso, como se narra en: "...lo localiza con la mano izquierda y la aparta con un manotazo.".
        `.trim(),
    }
];