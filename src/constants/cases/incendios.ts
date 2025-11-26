import { Case } from '../../types';

export const incendiosCases: Case[] = [
    {
        id: 'offline-incendios-1',
        title: 'La Cuna de Hollín',
        category: 'Incendios',
        narrative: "Los bomberos sacan a un niño de unos 4 años de un apartamento lleno de humo denso y negro. Te lo entregan en el rellano. El niño está cubierto de hollín, flácido en tus brazos. Su piel, donde no está manchada, es de un rosa brillante antinatural. No abre los ojos. Le aplicas un pellizco suave pero firme en el músculo trapecio. Abre los ojos, emite un llanto débil y agudo, y los vuelve a cerrar. Su cuerpo no muestra ninguna otra respuesta motora, permanece completamente inerte.",
        correctGCS: { ocular: 2, verbal: 3, motor: 1 },
        conclusion: "El niño sufre una intoxicación grave por monóxido de carbono y cianuro, productos de la combustión. La hipoxia severa ha causado una profunda depresión de su sistema nervioso central, dejándolo en un estado de coma arreactivo a nivel motor.",
        gcsJustification: `
Ocular(2): Solo abre los ojos como respuesta a un estímulo doloroso, como se narra en: "Le aplicas un pellizco... Abre los ojos...".
Verbal(3): (Pediátrica) Su llanto irritable e inconsolable al dolor se clasifica como V3, como se describe en: "...emite un llanto débil y agudo...".
Motora(1): Ausencia total de respuesta motora (flacidez), como se ve en: "Su cuerpo no muestra ninguna otra respuesta motora, permanece completamente inerte.".
        `.trim(),
    },
    {
        id: 'offline-incendios-2',
        title: 'El Rostro Anónimo',
        category: 'Incendios',
        narrative: "Una mujer ha sido rescatada del incendio de una cocina. Tiene quemaduras de segundo y tercer grado en la cara, cuello y pecho. Sus párpados están tan hinchados que es imposible ver sus ojos. El hollín le cubre las fosas nasales y la boca. Al llamarla, no responde. Al aplicar un pellizco en el trapecio, retira el brazo y emite un sonido ronco y ahogado, como un graznido. Su respiración es ruidosa.",
        correctGCS: { ocular: 0, verbal: 2, motor: 4 },
        conclusion: "La paciente tiene quemaduras graves con una lesión de la vía aérea por inhalación. El edema facial hace la respuesta ocular No Valorable. Los sonidos que emite son por el edema laríngeo. Su respuesta motora indica un nivel de conciencia deprimido.",
        gcsJustification: `
Ocular(NV): Es No Valorable. El edema palpebral masivo impide físicamente la apertura, como se ve en: "Sus párpados están tan hinchados que es imposible ver sus ojos.".
Verbal(2): Emite sonidos incomprensibles, como se narra en: "...emite un sonido ronco y ahogado, como un graznido.".
Motora(4): Muestra un movimiento de retirada al dolor, como se describe en: "...retira el brazo...".
        `.trim(),
    },
    {
        id: 'offline-incendios-3',
        title: 'El Salto del Ángel Caído',
        category: 'Incendios',
        narrative: "Un hombre ha saltado desde un segundo piso para escapar de las llamas. Yace en el pavimento en una posición antinatural, rodeado por los cristales de una ventana rota. No abre los ojos. No responde a vuestra voz. Al aplicar una presión en el ángulo de su mandíbula, sus brazos se extienden de forma rígida a los lados de su cuerpo, con las muñecas giradas hacia fuera. No hay otro movimiento.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "El paciente ha sufrido un traumatismo craneoencefálico catastrófico por la precipitación, con una lesión gravísima del tronco encefálico. La postura de descerebración es un signo de pronóstico ominoso.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No hay respuesta verbal, ni siquiera al dolor.
Motora(2): Responde al dolor con una postura de extensión anormal, como se narra en: "...sus brazos se extienden de forma rígida a los lados de su cuerpo...".
        `.trim(),
    },
    {
        id: 'offline-incendios-4',
        title: 'El Héroe de Acero',
        category: 'Incendios',
        narrative: "Un bombero sale tambaleándose del edificio en llamas y se quita el casco, cayendo de rodillas. Está empapado en sudor y cubierto de hollín. 'Estoy bien... solo necesito aire', jadea. Os mira, parpadeando. Sabe su nombre y que está en un incendio, pero no recuerda qué día es. Le pedís que siga vuestro dedo con la mirada y lo hace perfectamente. Su voz es ronca.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El bombero está sufriendo agotamiento por calor y una intoxicación leve por monóxido de carbono. Esto le ha provocado un estado confusional transitorio. No presenta déficits focales y obedece órdenes.",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea, como se ve en: "'Estoy bien...', jadea. Os mira, parpadeando.".
Verbal(4): Está confuso y desorientado en tiempo, como se narra en: "...no recuerda qué día es.".
Motora(6): Obedece órdenes complejas, como se describe en: "Le pedís que siga vuestro dedo con la mirada y lo hace perfectamente.".
        `.trim(),
    },
    {
        id: 'offline-incendios-5',
        title: 'La Puerta Equivocada',
        category: 'Incendios',
        narrative: "En la escalera de incendios, un hombre de mediana edad está sentado, tosiendo espasmódicamente. 'Me perdí en el humo', dice. Está despierto y orientado en tiempo, espacio y persona. Obedece todas vuestras órdenes motoras. Parece estar perfectamente bien, pero su voz es extremadamente ronca y cada vez más débil. Se lleva la mano al cuello como si le costara tragar.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "El paciente tiene una lesión de la vía aérea por inhalación de humo caliente que está progresando. Aunque su GCS es de 15, la ronquera progresiva es un signo de alarma de un edema de glotis inminente. Es una emergencia crítica a pesar de su buen nivel de conciencia.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea.
Verbal(5): Está completamente orientado, como se narra en: "Está despierto y orientado en tiempo, espacio y persona.".
Motora(6): Obedece órdenes, como se ve en: "Obedece todas vuestras órdenes motoras.".
        `.trim(),
    },
    {
        id: 'offline-incendios-6',
        title: 'El Eco de la Explosión',
        category: 'Incendios',
        narrative: "Ha habido una explosión de gas en un restaurante. Un hombre está sentado contra una pared, aturdido. Sangra por ambos oídos. Tiene los ojos muy abiertos, moviéndose de un lado a otro. Le gritáis, pero no parece oíros. Le hacéis un gesto para que levante el pulgar, y lo hace. Intenta hablar, pero no emite ningún sonido. Se señala la boca y niega con la cabeza.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "El paciente ha sufrido un barotrauma por la onda expansiva. Tiene ambos tímpanos rotos (sordera) y posiblemente una lesión laríngea que le impide hablar. Su nivel de conciencia está intacto, como demuestra al obedecer una orden no verbal.",
        gcsJustification: `
Ocular(4): Está despierto y hipervigilante, como se describe en: "Tiene los ojos muy abiertos, moviéndose de un lado a otro.".
Verbal(NV): Es No Valorable debido a la sordera y a la posible lesión laríngea, como se ve en: "...no emite ningún sonido.".
Motora(6): Obedece órdenes gestuales, como se narra en: "Le hacéis un gesto para que levante el pulgar, y lo hace.".
        `.trim(),
    },
    {
        id: 'offline-incendios-7',
        title: 'La Silla de Mimbre',
        category: 'Incendios',
        narrative: "Rescatan a una anciana de un apartamento con poco humo. Está sentada en su silla de mimbre, ilesa. 'Se negó a salir', dice el bombero. Ella os mira al llegar. 'No pienso moverme de mi casa', dice con firmeza. Le preguntáis su nombre. 'Soy la reina de Saba'. Le pedís que os dé la mano. 'No toquéis a la realeza'. Vuestro compañero intenta tomarle la tensión y ella le da un manotazo con sorprendente rapidez.",
        correctGCS: { ocular: 4, verbal: 3, motor: 5 },
        conclusion: "La paciente tiene una demencia de base o un trastorno psicótico. El incendio ha exacerbado su estado, pero su habla con 'palabras inapropiadas' (delirios) y su capacidad para 'localizar' un estímulo molesto (el manotazo) provienen de su condición psiquiátrica, no de una hipoxia aguda.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea, como se narra en: "Ella os mira al llegar.".
Verbal(3): Usa frases bien formadas, pero son delirantes e inapropiadas, como se ve en: "'Soy la reina de Saba'.".
Motora(5): Localiza un estímulo (el contacto) y lo aparta activamente, como se describe en: "...ella le da un manotazo con sorprendente rapidez.".
        `.trim(),
    },
    {
        id: 'offline-incendios-8',
        title: 'El Espectador Congelado',
        category: 'Incendios',
        narrative: "Al otro lado de la calle, lejos del peligro, una mujer está de pie, completamente inmóvil, mirando el fuego. Tiene los ojos apretados con fuerza. No responde a su nombre. Al tocarle el brazo, se estremece pero no se mueve. No habla. Le decís suavemente: 'Estás a salvo. Si me oyes, mueve la cabeza'. Tras un largo silencio, asiente lentamente, un movimiento casi imperceptible.",
        correctGCS: { ocular: 0, verbal: 1, motor: 6 },
        conclusion: "La mujer está sufriendo una reacción de estrés agudo con disociación (estado funcional). Está 'congelada' por el pánico. La resistencia activa a abrir los ojos y su capacidad para obedecer una orden demuestran que está consciente.",
        gcsJustification: `
Ocular(NV): La resistencia activa a la apertura ocular es una respuesta funcional, como se ve en: "Tiene los ojos apretados con fuerza.".
Verbal(1): Mutismo. No emite ningún sonido.
Motora(6): Obedece una orden, confirmando que su nivel de conciencia está preservado, como se narra en: "...asiente lentamente, un movimiento casi imperceptible.".
        `.trim(),
    },
    {
        id: 'offline-incendios-9',
        title: 'La Huida Tardía',
        category: 'Incendios',
        narrative: "Un hombre ha logrado salir del edificio en llamas, pero se desploma en vuestros brazos. No responde a vuestra voz. Al aplicarle un estímulo doloroso, emite un quejido y sus brazos se flexionan rígidamente sobre el pecho. Su piel está pálida, pero sus labios y uñas tienen un color azulado muy marcado. Tiene hollín alrededor de la boca y la nariz.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "El paciente sufre una intoxicación combinada y grave por monóxido de carbono y cianuro, que le ha provocado una hipoxia citotóxica y un colapso cardiovascular. La cianosis y la postura de decorticación indican un estado crítico.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(2): Emite sonidos incomprensibles al dolor, como se ve en: "...emite un quejido...".
Motora(3): Responde con una postura de flexión anormal, como se narra en: "...y sus brazos se flexionan rígidamente sobre el pecho.".
        `.trim(),
    },
    {
        id: 'offline-incendios-10',
        title: 'El Refugio Final',
        category: 'Incendios',
        narrative: "Los bomberos fuerzan la puerta de un baño y encuentran a un hombre en el suelo, inconsciente. Lo sacan al pasillo, que ya está ventilado. Al llamarle, no responde. Al aplicar un pellizco en su hombro, abre los ojos, os mira confusamente y dice: '¿Fuego?'. Luego, con un movimiento rápido y certero, agarra vuestra mano y la aparta de su cara.",
        correctGCS: { ocular: 2, verbal: 3, motor: 5 },
        conclusion: "El paciente se refugió en el baño y perdió la conciencia por la hipoxia y la inhalación de humo. Al ser rescatado y recibir oxígeno del aire fresco, su nivel de conciencia está mejorando rápidamente, aunque permanece confuso y con respuestas defensivas.",
        gcsJustification: `
Ocular(2): Solo abre los ojos como respuesta al dolor, como se ve en: "Al aplicar un pellizco... abre los ojos...".
Verbal(3): Emite una palabra suelta, inapropiada como respuesta conversacional, como se narra en: "...dice: '¿Fuego?'.".
Motora(5): Localiza el estímulo doloroso y lo aparta, como se describe en: "...con un movimiento rápido y certero, agarra vuestra mano y la aparta...".
        `.trim(),
    }
];