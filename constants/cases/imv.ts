import { Case } from '../../types';

export const imvCases: Case[] = [
    {
        id: 'offline-imv-1',
        title: 'La Niebla Roja',
        category: 'IMV',
        narrative: "Las sirenas son devoradas por una niebla espesa y helada. Es una colisión múltiple en cadena en la autopista. Un policía os dirige hacia un sedán aplastado entre dos camiones. '¡El conductor no responde!', grita. Encontráis a un hombre desplomado sobre el volante, el airbag ya desinflado. Le llamáis, sin respuesta. Vuestro compañero estabiliza el cuello mientras aplicáis un pellizco firme en el músculo trapecio. El hombre emite un profundo gemido y sus brazos y piernas se extienden rígidamente, su espalda arqueándose contra el asiento.",
        correctGCS: { ocular: 1, verbal: 2, motor: 2 },
        conclusion: "El paciente sufre un traumatismo craneoencefálico severo con signos de herniación del tronco encefálico. La postura de descerebración (extensión) es un signo de pronóstico extremadamente grave que requiere una intervención neuroquirúrgica inmediata.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(2): Emite sonidos incomprensibles al dolor, como se narra en: "El hombre emite un profundo gemido...".
Motora(2): Responde al dolor con una postura de extensión anormal, como se describe en: "...sus brazos y piernas se extienden rígidamente, su espalda arqueándose...".
        `.trim(),
    },
    {
        id: 'offline-imv-2',
        title: 'El Peso del Silencio',
        category: 'IMV',
        narrative: "El aire está cargado de polvo alrededor del edificio de apartamentos derrumbado. Un bombero os guía hasta un hueco donde han localizado a una superviviente. Una joven está atrapada de cintura para abajo por una losa de hormigón. Sus ojos están abiertos, siguiendo las luces de vuestras linternas. 'Mis piernas... no las siento', dice, con una voz extrañamente tranquila y clara. 'Estaba en la cocina... creo que es martes'. Es viernes. Le pedís que os apriete las manos. Lo hace, con fuerza y simetría. No hay movimiento en sus piernas.",
        correctGCS: { ocular: 4, verbal: 4, motor: 0 },
        conclusion: "La paciente sufre un síndrome de aplastamiento con una muy probable lesión medular. Aunque su nivel de conciencia solo está ligeramente alterado (confusión en el tiempo), la parálisis le impide cualquier respuesta motora, haciendo este componente No Valorable.",
        gcsJustification: `
Ocular(4): Está despierta, con apertura ocular espontánea, como se ve en: "Sus ojos están abiertos, siguiendo las luces de vuestras linternas.".
Verbal(4): Está confusa en tiempo, como se narra en: "'...creo que es martes'. Es viernes.".
Motora(NV): Es No Valorable debido a la parálisis y el atrapamiento, como ella misma refiere en: "'Mis piernas... no las siento'.".
        `.trim(),
    },
    {
        id: 'offline-imv-3',
        title: 'El Aliento del Diablo',
        category: 'IMV',
        narrative: "Un olor acre a amoníaco quema vuestras fosas nasales a pesar de las mascarillas. Es una fuga en una planta industrial. Os asignan a un hombre tendido cerca de un tanque. Tiene la cara y el cuello enrojecidos, y sus párpados están tan hinchados que es imposible ver sus ojos. El hollín le cubre las fosas nasales. No responde a vuestra voz. Le aplicáis un pellizco firme en el hombro. Él localiza vuestra mano y la empuja con un movimiento coordinado y enérgico. De su garganta sale un sonido ronco, un graznido húmedo con cada respiración, pero no articula palabra alguna.",
        correctGCS: { ocular: 0, verbal: 2, motor: 5 },
        conclusion: "El paciente sufre quemaduras químicas graves en cara y vía aérea. El edema facial masivo hace la respuesta ocular No Valorable. El 'graznido' es un sonido incomprensible (V2) causado por el edema laríngeo. Sin embargo, su capacidad para localizar el dolor (M5) demuestra que su nivel de conciencia está preservado.",
        gcsJustification: `
Ocular(NV): Es No Valorable, ya que los párpados están sellados por el edema, como se describe en: "...sus párpados están tan hinchados que es imposible ver sus ojos.".
Verbal(2): Emite sonidos incomprensibles, como se narra en: "De su garganta sale un sonido ronco, un graznido húmedo...".
Motora(5): Realiza un movimiento dirigido y localizado para retirar el estímulo doloroso, como se ve en: "Él localiza vuestra mano y la empuja con un movimiento coordinado y enérgico.".
        `.trim(),
    },
    {
        id: 'offline-imv-4',
        title: 'El Vagón Inclinado',
        category: 'IMV',
        narrative: "El vagón de tren yace de costado, un caos de equipaje y heridos. Las tarjetas de triaje están por todas partes. Os encargáis de una mujer en un asiento de ventana, que ahora es el techo. Está despierta y os mira fijamente, parpadeando. 'Señora, ¿sabe dónde está?'. Ella responde: 'La lluvia canta en el zapato'. Las palabras son claras pero no tienen sentido. Notáis que su brazo derecho está inmóvil. 'Apriete mi mano izquierda', le ordenáis. Ella obedece al instante.",
        correctGCS: { ocular: 4, verbal: 3, motor: 6 },
        conclusion: "La paciente ha sufrido un traumatismo craneoencefálico (o un ictus coincidente) que le ha provocado una afasia expresiva (palabras inapropiadas) y una hemiparesia derecha. A pesar de los déficits focales, su capacidad para obedecer órdenes con el lado sano indica un GCS motor de 6.",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea, como se narra en: "Está despierta y os mira fijamente, parpadeando.".
Verbal(3): Emite palabras claras pero sin contexto ni sentido lógico, como se ve en: "'La lluvia canta en el zapato'.".
Motora(6): Obedece órdenes con su hemicuerpo no afectado, como se describe en: "'Apriete mi mano izquierda', le ordenáis. Ella obedece al instante.".
        `.trim(),
    },
    {
        id: 'offline-imv-5',
        title: 'La Fila Trece',
        category: 'IMV',
        narrative: "Un autobús de turistas ha volcado. La escena es dantesca. Mientras hacéis el triaje, os encontráis con un hombre mayor tendido en la hierba, con una herida en la cabeza. No responde a vuestros gritos. Apoyáis vuestros dedos en el ángulo de su mandíbula y ejercéis una presión creciente. Como única respuesta, abre los ojos, os mira un instante y los vuelve a cerrar. No se mueve ni emite sonido. Su cuerpo está completamente flácido.",
        correctGCS: { ocular: 2, verbal: 1, motor: 1 },
        conclusion: "El paciente tiene un traumatismo craneoencefálico muy grave. Su mínima respuesta (solo apertura ocular al dolor) y la ausencia total de respuesta motora o verbal indican una profunda depresión neurológica y un pronóstico muy reservado.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta a un estímulo doloroso, como se narra en: "...abre los ojos, os mira un instante y los vuelve a cerrar.".
Verbal(1): No hay respuesta verbal, ni siquiera al dolor.
Motora(1): No hay respuesta motora, como se describe en: "Su cuerpo está completamente flácido.".
        `.trim(),
    },
    {
        id: 'offline-imv-6',
        title: 'El Banquete Contaminado',
        category: 'IMV',
        narrative: "Es una boda al aire libre. Decenas de invitados sufren una gastroenteritis aguda. La mayoría están conscientes, pero os llaman para ver al padre de la novia, 'que no reacciona'. Lo encontráis en una silla, pálido, con la piel pastosa y fría. Al zarandearle el hombro y llamarle, abre los ojos. 'Estoy bien...', murmura, con el habla muy empastada y lenta. Cuando intentáis ponerle el manguito de tensión, aparta vuestro brazo con energía, un movimiento preciso y localizado.",
        correctGCS: { ocular: 3, verbal: 4, motor: 5 },
        conclusion: "El paciente sufre un shock hipovolémico severo debido a la deshidratación por la gastroenteritis. La hipoperfusión cerebral está causando su estado confusional y somnolencia. Su capacidad para localizar una molestia indica que no es un coma profundo.",
        gcsJustification: `
Ocular(3): Abre los ojos a la estimulación física y verbal, como se narra en: "Al zarandearle el hombro y llamarle, abre los ojos.".
Verbal(4): Está confuso, con el habla empastada y desorientado, como se ve en: "'Estoy bien...', murmura, con el habla muy empastada y lenta.".
Motora(5): Localiza un estímulo molesto y trata de apartarlo, como se describe en: "...aparta vuestro brazo con energía, un movimiento preciso y localizado.".
        `.trim(),
    },
    {
        id: 'offline-imv-7',
        title: 'La Cicatriz del Cielo',
        category: 'IMV',
        narrative: "Una tormenta eléctrica repentina ha barrido un campo de golf. Os dirigen hacia un hombre bajo un gran roble. Sus ropas están desgarradas y tiene extrañas marcas con forma de helecho en el pecho. No responde. Le aplicáis un estímulo doloroso central. Su cuerpo se sacude y sus brazos se doblan rígidamente sobre el tórax, con los puños cerrados y las piernas extendidas. No abre los ojos ni emite sonidos.",
        correctGCS: { ocular: 1, verbal: 1, motor: 3 },
        conclusion: "El paciente ha sido alcanzado por un rayo. Sufrió una parada cardiaca (posiblemente revertida) que ha resultado en una lesión cerebral anóxica grave. La postura de decorticación es un claro signo de esta lesión.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No hay respuesta verbal.
Motora(3): Responde al dolor con una postura de flexión anormal, como se ve en: "...sus brazos se doblan rígidamente sobre el tórax...".
        `.trim(),
    },
    {
        id: 'offline-imv-8',
        title: 'El Zumbido del Silencio',
        category: 'IMV',
        narrative: "Estáis en el área de triaje tras una explosión en el metro. El aire huele a quemado. Una joven está sentada contra una pared, sangrando por los oídos. Sus ojos están muy abiertos, moviéndose con pánico de un lado a otro. Le gritáis al oído: '¿Estás bien?'. No reacciona. Le mostráis dos dedos y le hacéis un gesto para que os imite. Ella levanta dos dedos. Intenta hablar, pero de su boca no sale sonido, solo aire.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "La paciente ha sufrido un barotrauma severo por la onda expansiva, que le ha roto ambos tímpanos (causando sordera) y posiblemente dañado sus cuerdas vocales. Su nivel de conciencia está intacto, como demuestra su capacidad para obedecer órdenes gestuales.",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea y está hiperalerta, como se describe en: "Sus ojos están muy abiertos, moviéndose con pánico...".
Verbal(NV): Es No Valorable debido a la sordera y a la posible lesión laríngea, como se ve en: "...de su boca no sale sonido, solo aire.".
Motora(6): Obedece órdenes no verbales, confirmando que está consciente, como se narra en: "Ella levanta dos dedos.".
        `.trim(),
    },
    {
        id: 'offline-imv-9',
        title: 'El Sueño Escarlata',
        category: 'IMV',
        narrative: "Los bomberos están sacando a una familia de un apartamento. '¡Fuga de CO, los niveles por las nubes!', os gritan. Os entregan a un niño de unos 8 años. Su piel tiene un extraño y saludable color rojo cereza. Tiene los ojos cerrados. No responde a la voz. Le aplicáis un pellizco firme en el trapecio. Los ojos del niño se abren, emite un débil quejido y los vuelve a cerrar. No hay más movimiento que un leve temblor.",
        correctGCS: { ocular: 2, verbal: 2, motor: 1 },
        conclusion: "El niño sufre una intoxicación gravísima por monóxido de carbono, que ha provocado una hipoxia cerebral profunda. Su mínima respuesta a un estímulo doloroso intenso y la falta de respuesta motora indican un estado neurológico crítico. El color rojo de la piel es un signo tardío y ominoso.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta a un estímulo doloroso, como se narra en: "Le aplicáis un pellizco... Los ojos del niño se abren...".
Verbal(2): Su única respuesta son sonidos incomprensibles, como se describe en: "...emite un débil quejido...".
Motora(1): Ausencia total de respuesta motora, como se ve en: "No hay más movimiento que un leve temblor.".
        `.trim(),
    },
    {
        id: 'offline-imv-10',
        title: 'El Triaje Inverso',
        category: 'IMV',
        narrative: "Accidente entre un coche y una bicicleta. El ciclista (tarjeta roja) ya está siendo atendido. Os encargáis del conductor del coche, que está deambulando por la escena, hablando por teléfono. Tiene una pequeña herida en la frente. 'Estoy bien, estoy perfectamente', os dice. Sabe su nombre y que ha tenido un accidente, pero cree que es el año 2005. Obedece todas vuestras órdenes sin problemas. Le ponéis una tarjeta verde (herido leve). Cinco minutos después, lo encontráis vomitando y diciendo: '¿Quiénes sois vosotros?'.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El paciente presentaba un intervalo lúcido, un signo de alarma de un hematoma epidural. Su aparente buen estado inicial (triaje verde) era engañoso. El deterioro neurológico rápido (aumento de la confusión) indica que la lesión intracraneal está expandiéndose. Requiere una re-evaluación inmediata (triaje rojo).",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea.
Verbal(4): Está confuso. Aunque inicialmente parece orientado, la desorientación temporal lo confirma, como se ve en: "...cree que es el año 2005.".
Motora(6): Obedece órdenes motoras, como se narra en: "Obedece todas vuestras órdenes sin problemas.".
        `.trim(),
    }
];