import { Case } from '../../types';

export const urbanoCases: Case[] = [
    {
        id: 'offline-urbano-1',
        title: 'El Espectador Inmóvil',
        category: 'Urbano',
        narrative: "Un coche frena chirriando en un paso de cebra. Un hombre de mediana edad yace en el asfalto, un charco de sangre empieza a formarse bajo su cabeza. No abre los ojos. Le gritas, sin respuesta. Tu compañero estabiliza su cuello mientras tú apoyas tus dedos en el ángulo de su mandíbula y ejerces una presión creciente. Sus ojos se abren, desenfocados, y emite un gemido gutural. Luego, sus brazos y piernas se extienden de forma rígida y tensa, como si una corriente eléctrica recorriera su cuerpo.",
        correctGCS: { ocular: 2, verbal: 2, motor: 2 },
        conclusion: "El paciente sufre un traumatismo craneoencefálico severo por el atropello, con signos de daño crítico en el tronco encefálico. La postura de descerebración (extensión anormal) es un indicador de pronóstico muy grave.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta a un estímulo doloroso, como se narra en: "...ejerces una presión creciente. Sus ojos se abren...".
Verbal(2): Emite sonidos incomprensibles al dolor, como se describe en: "...y emite un gemido gutural.".
Motora(2): Responde al dolor con una postura de extensión anormal, como se ve en: "...sus brazos y piernas se extienden de forma rígida y tensa...".
        `.trim(),
    },
    {
        id: 'offline-urbano-2',
        title: 'El Silencio de la Fuente',
        category: 'Urbano',
        narrative: "Es una mañana fría de otoño. Una llamada os alerta de una persona 'dormida' en un banco del parque, junto a una fuente ornamental. Es un hombre sin hogar, cubierto con periódicos húmedos que se han pegado a su ropa. No responde a vuestra voz. Al aplicar un pellizco en el músculo de su hombro, abre los ojos y dice con voz pastosa y casi inaudible: 'Dejadme... casa...'. Su aliento huele a vino barato. Con su mano, intenta apartar la vuestra con un movimiento dirigido pero muy lento, casi sin fuerza. Su piel está helada al tacto.",
        correctGCS: { ocular: 2, verbal: 3, motor: 5 },
        conclusion: "El paciente sufre una hipotermia severa complicada por una intoxicación etílica y una posible hipoglucemia. La combinación de frío, alcohol y desnutrición ha deprimido su sistema nervioso central, causando su estado de somnolencia y discurso con palabras inapropiadas.",
        gcsJustification: `
Ocular(2): Abre los ojos solo como respuesta a un estímulo doloroso, como se narra en: "Al aplicarle un pellizco... abre los ojos...".
Verbal(3): Usa palabras reconocibles, pero son inapropiadas para el contexto, como se ve en: "...dice con voz pastosa...: 'Dejadme... casa...'.".
Motora(5): Realiza un movimiento localizado para retirar el estímulo doloroso, como se describe en: "Con su mano, intenta apartar la vuestra con un movimiento dirigido...".
        `.trim(),
    },
    {
        id: 'offline-urbano-3',
        title: 'La Sombra del Metro',
        category: 'Urbano',
        narrative: "El aviso es en los baños de una estación de metro. Un joven está tirado en el suelo de un cubículo, rodeado de parafernalia de drogas. Su respiración es muy lenta y superficial, apenas perceptible, como un suspiro cada diez segundos. Sus pupilas son del tamaño de una cabeza de alfiler. No responde a vuestra voz ni al zarandearlo. Al aplicar un estímulo doloroso central, retira el hombro débilmente, sin más reacción.",
        correctGCS: { ocular: 1, verbal: 1, motor: 4 },
        conclusion: "El paciente presenta un cuadro clásico de intoxicación por opiáceos. La miosis puntiforme, la depresión respiratoria y la falta de respuesta son signos clave. La respuesta motora es una retirada al dolor.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No hay respuesta verbal.
Motora(4): Muestra un movimiento de retirada al dolor, como se narra en: "...retira el hombro débilmente, sin más reacción.".
        `.trim(),
    },
    {
        id: 'offline-urbano-4',
        title: 'El Grito en la Gran Vía',
        category: 'Urbano',
        narrative: "En medio de una concurrida calle comercial, una mujer empieza a gritar y luego se desploma. Al llegar, la encontráis en el suelo con los ojos fuertemente apretados, temblando. No responde a su nombre. Al intentar levantarle un párpado, sentís una clara resistencia activa. Permanece en silencio. Le decís suavemente: 'Si me oye, apriéteme la mano'. Sentís un ligero apretón en vuestra mano, casi imperceptible.",
        correctGCS: { ocular: 0, verbal: 1, motor: 6 },
        conclusion: "La paciente está experimentando un trastorno neurológico funcional (crisis psicógena). La resistencia activa a la apertura ocular es la pista clave. Su capacidad para obedecer una orden motora confirma que su nivel de conciencia está intacto.",
        gcsJustification: `
Ocular(NV): Es No Valorable. La resistencia activa a la apertura de los párpados impide la valoración, como se ve en: "...sentís una clara resistencia activa.".
Verbal(1): Mutismo. No emite ningún sonido.
Motora(6): Obedece una orden simple, como se narra en: "Sentís un ligero apretón en vuestra mano...".
        `.trim(),
    },
    {
        id: 'offline-urbano-5',
        title: 'El Último Truco',
        category: 'Urbano',
        narrative: "Un grupo de adolescentes rodea a un amigo en un skatepark. 'Se cayó de cabeza sin casco', os dicen. El joven, de unos 16 años, está sentado, aturdido. Abre los ojos cuando le habláis. Sabe su nombre, 'Lucas', pero al preguntarle dónde está, dice 'en el instituto'. Obedece vuestra orden de levantar ambos brazos, pero lo hace con lentitud. Vomita repentinamente.",
        correctGCS: { ocular: 3, verbal: 4, motor: 6 },
        conclusion: "El paciente sufre una conmoción cerebral (traumatismo craneoencefálico leve). Presenta un estado confusional con amnesia del suceso y desorientación espacial, a pesar de estar somnoliento pero obediente. El vómito es un signo de aumento de la presión intracraneal.",
        gcsJustification: `
Ocular(3): No está con los ojos abiertos espontáneamente, los abre a la orden verbal: "Abre los ojos cuando le habláis.".
Verbal(4): Está confuso y desorientado en lugar, como se ve en: "...al preguntarle dónde está, dice 'en el instituto'.".
Motora(6): Obedece órdenes motoras, como se narra en: "Obedece vuestra orden de levantar ambos brazos...".
        `.trim(),
    },
    {
        id: 'offline-urbano-6',
        title: 'El Café Amargo',
        category: 'Urbano',
        narrative: "En la terraza de una cafetería, una mujer joven lucha por respirar. Su cara y labios están visiblemente hinchados. Está despierta, con los ojos abiertos de par en par, llenos de pánico. Os señala la garganta. Intentáis hablarle, pero de su boca solo sale un silbido agudo (estridor). Le hacéis un gesto de 'ok' con la mano, y ella os imita. En su mesa, un café y un trozo de pastel con almendras.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "Reacción anafiláctica severa, probablemente a los frutos secos del pastel. El angioedema le está obstruyendo la vía aérea. Está plenamente consciente, como demuestra su capacidad para seguir una orden gestual.",
        gcsJustification: `
Ocular(4): Está despierta y en estado de alerta, como se ve en: "...con los ojos abiertos de par en par, llenos de pánico.".
Verbal(NV): No Valorable. La obstrucción física de la vía aérea impide la fonación, como se narra en: "...de su boca solo sale un silbido agudo (estridor).".
Motora(6): Obedece una orden no verbal, confirmando que su nivel de conciencia está intacto, como se describe en: "Le hacéis un gesto de 'ok' con la mano, y ella os imita.".
        `.trim(),
    },
    {
        id: 'offline-urbano-7',
        title: 'El Baile en el Callejón',
        category: 'Urbano',
        narrative: "La policía os pide que valoréis a un hombre en un callejón tras una pelea. Yace en el suelo, con un fuerte olor a alcohol. No responde a vuestra voz. Al aplicar un pellizco en su hombro, emite un quejido y sus brazos se doblan rígidamente sobre el pecho, los puños apretados. Hay un charco de orina a su lado y una herida sangrante en la cabeza.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "El paciente ha sufrido una crisis convulsiva, probablemente desencadenada por el traumatismo craneal de la pelea y/o la intoxicación etílica. La incontinencia y el estado postictal con postura de decorticación indican una disfunción cerebral severa.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(2): Solo emite sonidos incomprensibles al dolor, como se narra en: "...emite un quejido...".
Motora(3): Responde al dolor con una postura de flexión anormal, como se describe en: "...y sus brazos se doblan rígidamente sobre el pecho...".
        `.trim(),
    },
    {
        id: 'offline-urbano-8',
        title: 'El Mapa Perdido',
        category: 'Urbano',
        narrative: "Una turista de edad avanzada está sentada en un banco, visiblemente angustiada. Su marido os dice que 'empezó a hablar raro de repente'. Ella os mira, despierta. Le preguntáis qué tal está. Ella responde con una sonrisa y una parrafada fluida pero completamente ininteligible, una 'ensalada de palabras'. Le pedís que os dé la mano, pero no parece entender la orden. Al tomarle la tensión, retira el brazo de forma brusca.",
        correctGCS: { ocular: 4, verbal: 2, motor: 4 },
        conclusion: "La paciente está sufriendo un ictus agudo que afecta al área de Wernicke, causando una afasia receptiva (no comprende el lenguaje) y expresiva (habla sin sentido). No puede obedecer órdenes, pero sí presenta una respuesta motora de retirada.",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea, como se ve en: "Ella os mira, despierta.".
Verbal(2): Su habla es una jerga ininteligible, como se describe en: "...una parrafada fluida pero completamente ininteligible...".
Motora(4): No obedece órdenes ni localiza, pero sí retira la extremidad ante un estímulo molesto, como se narra en: "Al tomarle la tensión, retira el brazo de forma brusca.".
        `.trim(),
    },
    {
        id: 'offline-urbano-9',
        title: 'La Parada Silenciosa',
        category: 'Urbano',
        narrative: "En una parada de autobús, un hombre mayor se desploma mientras espera. Al llegar, está en el suelo. No responde a ningún estímulo verbal o doloroso. Está completamente flácido, sin ninguna respuesta motora. Su piel está fría y pálida. No respira. Vuestro monitor muestra una línea plana.",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "El paciente está en parada cardiorrespiratoria, probablemente por un evento cardiaco súbito. La ausencia total de respuesta en las tres categorías de la GCS es indicativa de cese de la función cerebral por falta de oxígeno.",
        gcsJustification: `
Ocular(1): No hay apertura ocular.
Verbal(1): No hay respuesta verbal.
Motora(1): Ausencia total de respuesta motora, como se narra en: "Está completamente flácido, sin ninguna respuesta motora.".
        `.trim(),
    },
    {
        id: 'offline-urbano-10',
        title: 'El Reflejo Roto',
        category: 'Urbano',
        narrative: "Un joven ha chocado contra la cristalera de un escaparate huyendo de un robo. Está sentado en el suelo, rodeado de cristales, con múltiples cortes. Abre los ojos cuando le habláis. '¿Sabes qué ha pasado?'. 'Cristal... roto...', susurra, con dificultad para encontrar las palabras. Le pedís que os apriete las manos. Aprieta con fuerza la mano izquierda, pero la derecha no responde en absoluto.",
        correctGCS: { ocular: 3, verbal: 3, motor: 6 },
        conclusion: "El paciente tiene un traumatismo craneoencefálico que le ha provocado una hemiparesia derecha (déficit motor focal) y una afasia expresiva (palabras inapropiadas). A pesar del déficit, obedece órdenes con su lado sano, por lo que su GCS motor es 6.",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se describe en: "Abre los ojos cuando le habláis.".
Verbal(3): Solo es capaz de emitir palabras sueltas, como se narra en: "'Cristal... roto...', susurra...".
Motora(6): Obedece órdenes motoras con su hemicuerpo no afectado, como se ve en: "Aprieta con fuerza la mano izquierda...".
        `.trim(),
    }
];