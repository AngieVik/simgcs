import { Case } from '../../types';

export const traficoCases: Case[] = [
    {
        id: 'offline-trafico-1',
        title: 'La Pausa Engañosa',
        category: 'Tráfico',
        narrative: "Un ciclista de unos 20 años está sentado en el bordillo, atendido por un viandante que le sujeta una gasa en la cabeza. Su casco, a su lado, tiene una fisura visible en forma de araña. Está despierto y os mira al llegar, parpadeando. 'Hola, me llamo Alex', dice. Sabe que está en el parque, pero al preguntarle qué ha pasado, responde: 'No estoy seguro, creo que me caí'. Obedece órdenes motoras simples como apretaros las manos con fuerza. Sin embargo, dos minutos después, mientras le exploráis, pregunta con genuina sorpresa: 'Perdonad, ¿qué ha pasado?'. Su conversación es coherente, pero parece incapaz de retener información nueva, como si su memoria se reiniciara cada pocos minutos.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El paciente presentaba un 'intervalo lúcido', un signo de alarma clásico de un hematoma epidural. A pesar de parecer inicialmente orientado y obediente, su incapacidad para formar nuevos recuerdos (amnesia anterógrada) y su estado confuso sobre el evento lo clasifican como V4, indicando una lesión intracraneal grave.",
        gcsJustification: `
Ocular(4): Está con los ojos abiertos espontáneamente, como se describe en: "Está despierto y os mira al llegar, parpadeando.".
Verbal(4): Está confuso. Es incapaz de retener nueva información, como se ve en: "...pregunta con genuina sorpresa: 'Perdonad, ¿qué ha pasado?'.".
Motora(6): Obedece órdenes motoras simples, como se narra en: "Obedece órdenes motoras simples como apretaros las manos con fuerza.".
        `.trim(),
    },
    {
        id: 'offline-trafico-2',
        title: 'El Espejismo en el Asfalto',
        category: 'Tráfico',
        narrative: "El coche está detenido en un semáforo en verde, causando un atasco monumental. El conductor, un hombre de unos 60 años, está recostado sobre el volante, con el motor aún en marcha. Al llegar a su ventanilla, veis que tiene los ojos abiertos, fijos en un punto indefinido del salpicadero. Le habláis, pero no responde. De su garganta sale un sonido húmedo, rítmico con su respiración, no es una vocalización. 'Señor, ¿puede apretar mi mano?', le decís, ofreciéndole vuestra mano izquierda. Él la aprieta con una fuerza sorprendente. Repetís la orden para la mano derecha, pero esta yace flácida sobre su regazo, como si no le perteneciera.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "El paciente ha sufrido un ictus masivo que ha provocado una afasia global y una hemiplejia derecha. Aunque está despierto (O4) y es capaz de obedecer órdenes con su lado izquierdo (M6), su incapacidad total para el lenguaje hace que la respuesta verbal sea No Valorable. El evento neurológico causó que se detuviera.",
        gcsJustification: `
Ocular(4): Mantiene una apertura ocular espontánea, como se describe en: "...tiene los ojos abiertos, fijos en un punto indefinido del salpicadero.".
Verbal(NV): Es imposible valorar su orientación debido a la afasia severa, como se ve en: "De su garganta sale un sonido húmedo... no es una vocalización.".
Motora(6): Obedece órdenes motoras con su hemicuerpo no afectado, como se narra en: "'Señor, ¿puede apretar mi mano?', le decís... Él la aprieta con una fuerza sorprendente.".
        `.trim(),
    },
    {
        id: 'offline-trafico-3',
        title: 'El Silbato en la Oscuridad',
        category: 'Tráfico',
        narrative: "Es de noche en una carretera secundaria sin iluminar. Una motocicleta está destrozada contra un guardarraíl. El piloto yace a varios metros, boca arriba. Lleva puesto un casco integral con la visera oscura bajada, impidiendo ver su cara. Le llamáis en voz alta, sin obtener respuesta. Vuestro compañero estabiliza su cuello mientras aplicáis una presión firme en la base de su hombro. En respuesta, un gruñido ahogado se oye desde dentro del casco y el paciente intenta encoger el hombro para zafarse de vuestra mano. El sonido es gutural, imposible de discernir si es una palabra o un quejido.",
        correctGCS: { ocular: 0, verbal: 2, motor: 4 },
        conclusion: "El paciente tiene un traumatismo craneoencefálico grave. Dado que el casco no se puede retirar de forma segura en la escena inicial, la respuesta ocular es No Valorable. El sonido audible es un V2, y la respuesta motora una retirada.",
        gcsJustification: `
Ocular(NV): La valoración es imposible debido al casco, como se describe en: "Lleva puesto un casco integral con la visera oscura bajada, impidiendo ver su cara.".
Verbal(2): Se oye un sonido gutural e incomprensible, como se narra en: "...un gruñido ahogado se oye desde dentro del casco...".
Motora(4): Muestra una respuesta de retirada al dolor, como se ve en: "...el paciente intenta encoger el hombro para zafarse de vuestra mano.".
        `.trim(),
    },
    {
        id: 'offline-trafico-4',
        title: 'La Carga Pesada',
        category: 'Tráfico',
        narrative: "Un camión ha volcado en una curva cerrada, su carga de troncos esparcida por la carretera. El conductor está atrapado en la cabina, presionado por el volante contra el asiento. Está consciente. Al oír vuestra voz, abre los ojos y os mira. 'Ayuda... no puedo salir', dice con dificultad. '¿Cómo te llamas?', le preguntáis. 'Soy... soy camionero'. Parece desorientado. '¿Puedes mover los brazos?', le pedís. 'No... no me responden'. Le pedís que mueva los dedos de los pies, pero tampoco hay respuesta. Sus ojos se mueven con pánico, pero su cuerpo, del cuello para abajo, parece desconectado.",
        correctGCS: { ocular: 3, verbal: 4, motor: 0 },
        conclusion: "El paciente, además de estar atrapado físicamente, probablemente sufre una lesión medular a nivel cervical que le provoca una tetraplejia. Aunque está consciente y confuso (O3, V4), su incapacidad para mover cualquier extremidad por la lesión neurológica hace que la respuesta motora sea No Valorable.",
        gcsJustification: `
Ocular(3): Abre los ojos en respuesta a la orden verbal, como se describe en: "Al oír vuestra voz, abre los ojos y os mira.".
Verbal(4): Está confuso y desorientado, como se ve en: "'¿Cómo te llamas?', le preguntáis. 'Soy... soy camionero'.".
Motora(NV): No se puede valorar la respuesta motora debido a la parálisis, como se narra en: "'¿Puedes mover los brazos?', le pedís. 'No... no me responden.'".
        `.trim(),
    },
    {
        id: 'offline-trafico-5',
        title: 'El Vuelo Inesperado',
        category: 'Tráfico',
        narrative: "El coche está boca abajo en la cuneta, el techo hundido. La policía os informa que el conductor fue eyectado. Lo encontráis a veinte metros, entre la maleza alta, en una posición extraña. No abre los ojos. No responde a vuestras llamadas. Apoyáis vuestros dedos en el ángulo de su mandíbula y ejercéis una presión creciente. Como única respuesta, el paciente emite un gemido gutural y sus brazos se flexionan rígidamente sobre el pecho, con los puños fuertemente apretados y las piernas extendidas.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "El paciente sufre un traumatismo craneoencefálico severo con daño axonal difuso como resultado de la eyección. Su postura de decorticación (flexión anormal) al dolor es un signo ominoso de lesión cerebral grave por encima del tronco encefálico.",
        gcsJustification: `
Ocular(1): No hay apertura ocular, ni siquiera al dolor.
Verbal(2): No articula palabras, solo sonidos incomprensibles, como se narra en: "...el paciente emite un gemido gutural...".
Motora(3): Muestra una postura de flexión anormal al dolor, como se describe en: "...sus brazos se flexionan rígidamente sobre el pecho...".
        `.trim(),
    },
    {
        id: 'offline-trafico-6',
        title: 'El Llanto en el Asiento Trasero',
        category: 'Tráfico',
        narrative: "Un coche ha frenado bruscamente para evitar a un perro. No hay colisión, pero la madre, muy nerviosa, os dice que su hijo de 18 meses 'dio un latigazo y ahora no reacciona'. El niño está en su silla, con los ojos cerrados. Lo llamáis suavemente, sin respuesta. Le aplicáis un pellizco suave en el músculo trapecio. Abre los ojos, os mira y empieza a llorar de una forma aguda e irritada, un llanto que no se calma aunque su madre intente consolarlo. Cuando intentas valorar su cabeza, aparta vuestra mano con la suya con un movimiento certero.",
        correctGCS: { ocular: 2, verbal: 3, motor: 5 },
        conclusion: "El niño ha sufrido un traumatismo craneal leve por el mecanismo de latigazo cervical (aceleración-desaceleración). Su estado es de irritabilidad postraumática. Aunque la GCS pediátrica es moderada, la clave es el llanto inconsolable, que en un preverbal equivale a 'palabras inapropiadas'.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta al estímulo doloroso, como se ve en: "Le aplicáis un pellizco suave... Abre los ojos...".
Verbal(3): (Pediátrica) El llanto es persistente e inconsolable, como se describe en: "...un llanto que no se calma aunque su madre intente consolarlo.".
Motora(5): (Pediátrica) Muestra un movimiento dirigido a localizar y retirar el estímulo, como se narra en: "...aparta vuestra mano con la suya con un movimiento certero.".
        `.trim(),
    },
    {
        id: 'offline-trafico-7',
        title: 'La Doble Tragedia',
        category: 'Tráfico',
        narrative: "Un coche se ha salido de la vía y ha chocado contra una farola. El conductor, un hombre mayor, no tiene pulso y presenta lesiones incompatibles con la vida. La pasajera, su esposa, está en el asiento del copiloto, inconsciente. Tiene una herida en la frente. Le aplicáis un pellizco firme en el músculo trapecio. Abre los ojos y empieza a gritar palabras sueltas, inconexas: '¡No! ¡Vete! ¡Duele!'. Con su mano izquierda, agarra vuestra muñeca con precisión para intentar quitaros la mano de su cara.",
        correctGCS: { ocular: 2, verbal: 3, motor: 5 },
        conclusion: "La paciente ha sufrido un traumatismo craneoencefálico de moderado a grave. El evento estresante (el accidente y la muerte de su marido) contribuye a su estado de agitación. Su capacidad para localizar el dolor indica que una parte del córtex cerebral funciona, pero su respuesta verbal muestra una disfunción significativa.",
        gcsJustification: `
Ocular(2): Solo abre los ojos como respuesta al estímulo doloroso, como se narra en: "Le aplicáis un pellizco firme... Abre los ojos...".
Verbal(3): Emite palabras claras pero sin formar frases coherentes, como se describe en: "...empieza a gritar palabras sueltas, inconexas: '¡No! ¡Vete! ¡Duele!'.".
Motora(5): Realiza un movimiento intencionado que cruza la línea media para localizar y retirar el estímulo, como se ve en: "...agarra vuestra muñeca con precisión...".
        `.trim(),
    },
    {
        id: 'offline-trafico-8',
        title: 'El Color del Peligro',
        category: 'Tráfico',
        narrative: "Un hombre yace en un paso de cebra, atropellado por un coche que se dio a la fuga. Está pálido, con la piel fría y pegajosa. 'Oiga, ¿está bien?', le preguntáis mientras vuestro compañero controla la hemorragia de una pierna. Abre los ojos y os mira, agitado. 'Me duele... la barriga...', dice. Le preguntáis su nombre. 'Me llamo... no me acuerdo... ¿es de día?'. Parece perdido. Cuando le pedís que os apriete las manos, lo hace con fuerza en ambas.",
        correctGCS: { ocular: 3, verbal: 4, motor: 6 },
        conclusion: "El paciente ha sido atropellado y sufre un shock hipovolémico por hemorragia interna (probablemente por fractura de pelvis o lesión de un órgano abdominal). La falta de riego sanguíneo al cerebro (hipoperfusión cerebral) está causando su estado confusional, no necesariamente un golpe directo en la cabeza.",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se narra en: "'Oiga, ¿está bien?', le preguntáis... Abre los ojos...".
Verbal(4): Está confuso y desorientado, como se ve en: "'Me llamo... no me acuerdo... ¿es de día?'.".
Motora(6): Es capaz de comprender y obedecer órdenes motoras, como se describe en: "Cuando le pedís que os apriete las manos, lo hace con fuerza...".
        `.trim(),
    },
    {
        id: 'offline-trafico-9',
        title: 'La Parada del Autobús',
        category: 'Tráfico',
        narrative: "Un autobús urbano está parado en doble fila con las luces de emergencia. En el pasillo, un hombre de mediana edad yace en el suelo. Los pasajeros dicen que 'se desplomó de repente'. No responde a vuestra voz. Apoyáis vuestros dedos en el ángulo de su mandíbula y ejercéis una presión creciente. En respuesta, su espalda se arquea, sus brazos y piernas se extienden rígidamente a los lados del cuerpo, y sus muñecas giran hacia fuera. No abre los ojos ni emite ningún sonido. Su cara está congestionada y azulada.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "El paciente ha sufrido un evento neurológico catastrófico, probablemente una hemorragia intracraneal masiva o un ictus del tronco encefálico. Su postura de descerebración (extensión anormal) es un signo de daño muy grave en el tronco cerebral y de un pronóstico extremadamente malo.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No emite ningún sonido, ni siquiera al dolor.
Motora(2): Responde al dolor con una postura de extensión anormal, como se ve en: "...su espalda se arquea, sus brazos y piernas se extienden rígidamente...".
        `.trim(),
    },
    {
        id: 'offline-trafico-10',
        title: 'El Último Kilómetro',
        category: 'Tráfico',
        narrative: "Atardece y la temperatura ha bajado bruscamente. Un policía os guía hasta un corredor tirado en la cuneta de una carretera rural. 'Parece un atropello y fuga, lleva aquí un rato', os dice. El paciente lleva ropa ligera y su piel está muy fría al tacto. Lo llamáis, sin respuesta. Juntáis vuestros dedos índice y pulgar en la base de su cuello y aplicáis una presión firme. Sus párpados se entreabren un instante y un quejido muy débil escapa de sus labios. Mueve el brazo lentamente para apartarlo del estímulo, un movimiento torpe y sin fuerza.",
        correctGCS: { ocular: 2, verbal: 2, motor: 4 },
        conclusion: "El paciente es víctima de un atropello, pero su estado actual está gravemente complicado por una hipotermia severa. La exposición al frío ha deprimido su sistema nervioso central, magnificando los efectos del traumatismo craneal. Su respuesta lenta y débil es característica de este estado.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta a un estímulo doloroso, como se narra en: "aplicáis una presión firme... Sus párpados se entreabren un instante...".
Verbal(2): Su única respuesta vocal son sonidos incomprensibles, como se describe en: "...un quejido muy débil escapa de sus labios.".
Motora(4): Muestra un movimiento de retirada al dolor, como se ve en: "Mueve el brazo lentamente para apartarlo del estímulo...".
        `.trim(),
    }
];