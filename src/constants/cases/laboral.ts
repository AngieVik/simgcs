import { Case } from '../../types';

export const laboralCases: Case[] = [
    {
        id: 'offline-laboral-1',
        title: 'El Andamio Traicionero',
        category: 'Laboral',
        narrative: "Estáis en una obra. Un estruendo metálico seguido de gritos os alerta. Un obrero de 40 años yace en el suelo de hormigón, a los pies de un andamio de tres pisos. No lleva casco; está a un lado, roto en dos. No abre los ojos. No responde a vuestra voz. Al aplicar un pellizco firme en el músculo entre su cuello y hombro, sus brazos y piernas se extienden de forma rígida y antinatural, con las muñecas giradas hacia fuera. No emite sonido alguno.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "El paciente ha sufrido un traumatismo craneoencefálico severo con una probable lesión del tronco encefálico debido a la caída de gran altura. Su postura de descerebración (extensión anormal) es un signo de pronóstico extremadamente grave.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No emite ningún sonido, ni siquiera al dolor.
Motora(2): Responde al estímulo doloroso con una postura de extensión anormal, como se describe en: "...sus brazos y piernas se extienden de forma rígida y antinatural...".
        `.trim(),
    },
    {
        id: 'offline-laboral-2',
        title: 'El Silbido del Taller',
        category: 'Laboral',
        narrative: "Es un taller mecánico cerrado. Un compañero del trabajador os ha llamado porque 'no contestaba al teléfono'. El aire está viciado y huele a gases de escape. Encontráis a un hombre de unos 50 años desplomado junto a un coche que tiene el motor en marcha. Su piel tiene un llamativo color rojo cereza. No responde. Al aplicar un pellizco firme en su trapecio, emite un quejido gutural y sus brazos se flexionan rígidamente sobre el pecho. Su cara está relajada, sin expresión.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "Intoxicación grave por monóxido de carbono (CO). El motor en marcha en un espacio cerrado ha saturado el ambiente. El color rojo cereza de la piel es un signo clásico, y la postura de decorticación revela un daño cerebral severo por la hipoxia.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(2): Solo emite sonidos incomprensibles como respuesta al dolor, como se ve en: "...emite un quejido gutural...".
Motora(3): Adopta una postura de flexión anormal al estímulo doloroso, como se narra en: "...y sus brazos se flexionan rígidamente sobre el pecho.".
        `.trim(),
    },
    {
        id: 'offline-laboral-3',
        title: 'La Cosecha Amarga',
        category: 'Laboral',
        narrative: "En un invernadero, el calor es sofocante y huele a químicos. Un joven agricultor yace en el suelo, temblando. Cerca de él hay un pulverizador de pesticidas volcado. Los temblores cesan. El paciente está inconsciente, con una salivación excesiva y las pupilas del tamaño de una cabeza de alfiler. Al llamarle no responde. Le aplicas un estímulo doloroso en el hombro y retira el brazo de forma débil, un movimiento lento y sin fuerza.",
        correctGCS: { ocular: 1, verbal: 1, motor: 4 },
        conclusion: "El paciente sufre una intoxicación aguda por organofosforados, un tipo de pesticida. Esto ha provocado una crisis colinérgica (salivación, miosis) y una convulsión. Su nivel de conciencia está muy deprimido.",
        gcsJustification: `
Ocular(1): Permanece con los ojos cerrados, sin respuesta a estímulos.
Verbal(1): No emite ningún sonido, está en estado postictal.
Motora(4): Muestra un movimiento de retirada al estímulo doloroso, como se narra en: "...y retira el brazo de forma débil, un movimiento lento y sin fuerza.".
        `.trim(),
    },
    {
        id: 'offline-laboral-4',
        title: 'La Chispa Final',
        category: 'Laboral',
        narrative: "El aviso es en la cocina de un restaurante. Un cocinero joven está en el suelo, junto a una freidora industrial. Sus compañeros dicen que 'dio un grito y se cayó'. Está despierto, pero aturdido, con los ojos abiertos. '¿Qué ha pasado?', pregunta, mirando a su alrededor. Sabe su nombre, pero cree que es por la mañana. Le pedís que os apriete las manos, y lo hace con fuerza. Tiene una pequeña quemadura en la mano derecha.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El paciente ha sufrido una electrocución de bajo voltaje al tocar un aparato defectuoso. La corriente le ha provocado una fibrilación ventricular momentánea (síncope) y ahora se encuentra en un estado post-shock confusional.",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea, como se ve en: "Está despierto... con los ojos abiertos.".
Verbal(4): Está confuso y desorientado en tiempo, como se narra en: "'¿Qué ha pasado?', pregunta... cree que es por la mañana.".
Motora(6): Obedece órdenes motoras, como se describe en: "Le pedís que os apriete las manos, y lo hace con fuerza.".
        `.trim(),
    },
    {
        id: 'offline-laboral-5',
        title: 'El Informe Inacabado',
        category: 'Laboral',
        narrative: "Una llamada os lleva a un moderno edificio de oficinas. Una mujer de 45 años está en el suelo de su despacho. Sus compañeros dicen que 'de repente empezó a hablar raro y se cayó'. La encontráis con los ojos abiertos, mirándoos. Le preguntáis cómo está. Responde con una jerga fluida pero completamente ininteligible. Al pedirle que levante el brazo derecho, no lo hace. Sin embargo, levanta el izquierdo sin problemas.",
        correctGCS: { ocular: 4, verbal: 2, motor: 6 },
        conclusion: "La paciente está sufriendo un ictus agudo que le ha provocado una afasia de Wernicke (V2) y una hemiparesia derecha. A pesar de los déficits, su capacidad para obedecer órdenes con el lado sano indica que el nivel de conciencia para la motricidad está preservado.",
        gcsJustification: `
Ocular(4): Está despierta y vigil, como se narra en: "...con los ojos abiertos, mirándoos.".
Verbal(2): Su habla es una jerga incomprensible, como se describe en: "Responde con una jerga fluida pero completamente ininteligible.".
Motora(6): Obedece órdenes con el hemicuerpo no afectado, como se ve en: "...levanta el izquierdo sin problemas.".
        `.trim(),
    },
    {
        id: 'offline-laboral-6',
        title: 'La Caída del Pintor',
        category: 'Laboral',
        narrative: "Un pintor de brocha gorda ha caído de una escalera de mano desde unos dos metros. Yace en el suelo sobre un charco de pintura blanca. No responde a vuestra voz. Al aplicar una presión en el ángulo de su mandíbula, abre los ojos, emite un quejido y retira el brazo del estímulo. La pintura enmascara posibles heridas en la cabeza.",
        correctGCS: { ocular: 2, verbal: 2, motor: 4 },
        conclusion: "El paciente tiene un traumatismo craneoencefálico de moderado a grave. Su nivel de conciencia está significativamente deprimido, con respuestas que solo aparecen ante el dolor y son de naturaleza defensiva, no localizada.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta a un estímulo doloroso, como se ve en: "Al aplicar una presión... abre los ojos...".
Verbal(2): Emite sonidos incomprensibles, como se narra en: "...emite un quejido...".
Motora(4): Muestra un movimiento de retirada al dolor, como se describe en: "...y retira el brazo del estímulo.".
        `.trim(),
    },
    {
        id: 'offline-laboral-7',
        title: 'Fiebre de Metal',
        category: 'Laboral',
        narrative: "En un taller de soldadura, un hombre de unos 30 años está sentado en una esquina, temblando y sudando. 'Me encuentro fatal', dice. Está despierto y os mira. Sabe su nombre y dónde está, pero no sabe qué día de la semana es. Obedece todas vuestras órdenes motoras, aunque con lentitud. Se queja de un dolor de cabeza terrible y náuseas. Su compañero menciona que ha estado soldando acero galvanizado sin mascarilla.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El paciente sufre fiebre del soldador o fiebre de los humos metálicos, una reacción inflamatoria aguda por la inhalación de óxido de zinc. Provoca síntomas pseudogripales y un estado confusional transitorio.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea, como se narra en: "Está despierto y os mira.".
Verbal(4): Está confuso y desorientado en tiempo, como se ve en: "...no sabe qué día de la semana es.".
Motora(6): Obedece órdenes, como se describe en: "Obedece todas vuestras órdenes motoras...".
        `.trim(),
    },
    {
        id: 'offline-laboral-8',
        title: 'La Sombra del Leñador',
        category: 'Laboral',
        narrative: "En un aserradero, un trabajador forestal ha sido golpeado por la rama de un árbol. Lo encontráis en el suelo, con una herida visible en la cabeza. No abre los ojos. No responde a vuestra voz. Al aplicar un pellizco firme en su trapecio, emite un quejido y sus brazos se flexionan rígidamente sobre el pecho, con los puños cerrados. Sus piernas están extendidas.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "El paciente ha sufrido un traumatismo craneoencefálico severo. Su postura de decorticación (flexión anormal) al dolor indica una lesión grave por encima del tronco encefálico.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(2): Solo emite sonidos incomprensibles al dolor, como se ve en: "...emite un quejido...".
Motora(3): Adopta una postura de flexión anormal, como se narra en: "...y sus brazos se flexionan rígidamente sobre el pecho...".
        `.trim(),
    },
    {
        id: 'offline-laboral-9',
        title: 'El Velo Químico',
        category: 'Laboral',
        narrative: "Alarma en un laboratorio. Una técnico ha derramado un frasco de ácido clorhídrico. El vapor es irritante. La encontráis de pie, luchando por respirar, con la cara enrojecida. Está despierta, con los ojos abiertos de par en par. Os señala la garganta. Intenta hablar, pero solo sale un silbido agudo. Le hacéis un gesto de 'pulgar arriba' y ella os imita.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "La paciente sufre una quemadura química de la vía aérea por inhalación de vapores de ácido. Esto le está provocando un edema de glotis. Está plenamente consciente, pero la valoración verbal es imposible.",
        gcsJustification: `
Ocular(4): Está despierta y en estado de alerta, como se describe en: "...con los ojos abiertos de par en par.".
Verbal(NV): La obstrucción de la vía aérea impide la valoración verbal, como se narra en: "...solo sale un silbido agudo.".
Motora(6): Obedece órdenes gestuales, confirmando su nivel de conciencia, como se ve en: "Le hacéis un gesto de 'pulgar arriba' y ella os imita.".
        `.trim(),
    },
    {
        id: 'offline-laboral-10',
        title: 'El Guardián Helado',
        category: 'Laboral',
        narrative: "El aviso es en una gran cámara frigorífica de un almacén de alimentos. Un trabajador se ha quedado encerrado. Lo encontráis en el suelo, tiritando violentamente. Tiene los ojos cerrados. Le gritáis su nombre y abre los ojos. '¿Qué...?', balbucea, desorientado. 'Tengo... mucho... frío'. Con su mano, intenta apartar la vuestra cuando le tocáis el brazo.",
        correctGCS: { ocular: 3, verbal: 4, motor: 5 },
        conclusion: "El paciente sufre una hipotermia severa. La baja temperatura corporal ha deprimido su sistema nervioso central, causando un estado confusional y somnolencia. Su capacidad para localizar una molestia indica un nivel de conciencia aún preservado.",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se ve en: "Le gritáis su nombre y abre los ojos.".
Verbal(4): Está confuso y desorientado, como se narra en: "'¿Qué...?', balbucea, desorientado.".
Motora(5): Localiza un estímulo y trata de apartarlo, como se describe en: "Con su mano, intenta apartar la vuestra cuando le tocáis el brazo.".
        `.trim(),
    }
];