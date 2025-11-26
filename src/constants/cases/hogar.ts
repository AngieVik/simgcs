import { Case } from '../../types';

export const hogarCases: Case[] = [
    {
        id: 'offline-hogar-1',
        title: 'El Silencio del Azúcar',
        category: 'Hogar',
        narrative: "La llamada os lleva a un piso silencioso en la tercera planta. La hija del paciente, angustiada, os abre. 'Es mi padre, es diabético y no... no es él mismo', susurra. Lo encontráis en un viejo sillón de orejas, con la mirada vacía. Al llamarlo por su nombre, '¡Sr. García!', sus párpados se abren con lentitud exasperante, pero su mirada no os sigue, perdida. No articula palabra, solo emite un gemido prolongado y quejumbroso. Para valorar su respuesta, juntáis vuestros dedos índice y pulgar en la base de su cuello, entre el hombro y la oreja, y aplicáis una presión firme. En respuesta, retira el brazo bruscamente, un movimiento defensivo pero torpe y sin dirección. Sobre la mesita de café, junto a un vaso de agua, veis una pluma de insulina sin el capuchón protector.",
        correctGCS: { ocular: 3, verbal: 2, motor: 4 },
        conclusion: "El paciente sufría una hipoglucemia severa. La falta de glucosa en el cerebro provocó la drástica alteración del nivel de conciencia. La pluma de insulina destapada era la pista clave que sugería una posible sobredosis o una dosis administrada sin la ingesta de alimentos correspondiente.",
        gcsJustification: `
Ocular(3): Responde abriendo los ojos a la orden verbal, como se describe en: "Al llamarlo por su nombre, '¡Sr. García!', sus párpados se abren con lentitud exasperante...".
Verbal(2): Emite sonidos incomprensibles, como se narra en: "No articula palabra, solo emite un gemido prolongado y quejumbroso.".
Motora(4): Muestra un movimiento de retirada al dolor, como se ve en: "...retira el brazo bruscamente, un movimiento defensivo pero torpe y sin dirección.".
        `.trim(),
    },
    {
        id: 'offline-hogar-2',
        title: 'El Ladrón Invisible',
        category: 'Hogar',
        narrative: "Es una tarde gélida de invierno. La casa está herméticamente cerrada, con un calor sofocante en el interior. Una familia entera —dos adultos y un niño— yace en el salón. El padre está en el sofá, la madre y el niño en la alfombra, como si se hubieran desmayado. Lo más llamativo es el color de su piel: un rojo cereza intenso, casi antinatural. Al llamarlos, ninguno abre los ojos. Aplicas un pellizco firme en el músculo que une el cuello y el hombro del padre. Sus brazos y piernas se extienden de forma rígida, con las muñecas girando hacia fuera. La casa está extrañamente silenciosa, salvo por un leve zumbido que parece provenir de la caldera en la cocina contigua.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "La familia sufría una intoxicación masiva por monóxido de carbono (CO) debido a una caldera defectuosa. El color rojo cereza de la piel es un signo clásico (aunque tardío) de la carboxihemoglobina. La respuesta motora en extensión del padre indica un daño cerebral severo por la hipoxia.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo, ni verbal ni doloroso.
Verbal(1): No emite ningún sonido en respuesta al dolor.
Motora(2): Responde al estímulo doloroso con una postura de extensión anormal, como se narra en: "Sus brazos y piernas se extienden de forma rígida, con las muñecas girando hacia fuera.".
        `.trim(),
    },
    {
        id: 'offline-hogar-3',
        title: 'El Hilo Roto',
        category: 'Hogar',
        narrative: "Una mujer de 75 años yace en el suelo de la cocina. Su marido, tembloroso, dice que 'se desplomó de repente'. La paciente tiene los ojos abiertos y parpadea, siguiéndoos con la mirada. Intentas hablarle, 'Señora, ¿me oye?', y ella te mira fijamente, con una expresión de intensa frustración. Abre la boca para responder, pero solo emite un sonido gutural y ahogado, golpeando la mesa con su mano sana. Entendiendo la barrera, le haces un gesto claro: levantas dos dedos y luego señalas su brazo izquierdo. Sorprendentemente, ella levanta dos dedos con su mano izquierda. Repites el gesto para el brazo derecho; este permanece completamente inmóvil a su lado.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "La paciente estaba sufriendo un ictus agudo con afasia de Broca (o global) y hemiplejia derecha. Aunque estaba despierta (O4) y podía obedecer órdenes gestuales (M6), su incapacidad para producir lenguaje, a pesar de su claro intento y frustración, hace que la respuesta verbal sea No Valorable.",
        gcsJustification: `
Ocular(4): Está con los ojos abiertos espontáneamente y sigue el movimiento, como se ve en: "...tiene los ojos abiertos y parpadea, siguiéndoos con la mirada.".
Verbal(NV): La incapacidad para producir lenguaje (afasia), a pesar de un claro intento y frustración, impide valorar su orientación. Se describe en: "...solo emite un sonido gutural y ahogado, golpeando la mesa con su mano sana.".
Motora(6): Obedece órdenes no verbales (gestuales) con el hemicuerpo no afectado, como se narra en: "...ella levanta dos dedos con su mano izquierda.". Se puntúa la mejor respuesta.
        `.trim(),
    },
     {
        id: 'offline-hogar-4',
        title: 'El Baile Rígido',
        category: 'Hogar',
        narrative: "El vaho empaña el espejo del baño. Un joven de 25 años yace sobre las baldosas frías, con su compañero de piso arrodillado a su lado, pálido y tembloroso. 'Estábamos hablando y de repente se quedó callado, empezó a temblar por todo el cuerpo y se cayó', balbucea. El paciente tiene los ojos cerrados, la mandíbula apretada. Lo llamas por su nombre, sin obtener respuesta. Apoyas tus dedos en el ángulo de su mandíbula y ejerces una presión creciente. Su cuerpo reacciona violentamente: sus brazos se flexionan sobre el pecho como garras, con los puños apretados y las piernas extendidas y duras como el acero. No emite ni un quejido. Un olor acre a amoníaco te indica que ha habido una relajación de esfínteres.",
        correctGCS: { ocular: 1, verbal: 1, motor: 3 },
        conclusion: "El paciente se encuentra en estado postictal tras una crisis tónico-clónica generalizada. La incontinencia urinaria y el testimonio del testigo apoyan el diagnóstico. Su respuesta motora en flexión anormal (decorticación) indica una disfunción cerebral severa transitoria.",
        gcsJustification: `
Ocular(1): No abre los ojos a ningún estímulo, ni verbal ni doloroso.
Verbal(1): No emite ningún sonido, ni siquiera al dolor.
Motora(3): Responde al dolor con una postura de flexión anormal, como se describe en: "...sus brazos se flexionan sobre el pecho como garras, con los puños apretados y las piernas extendidas...".
        `.trim(),
    },
    {
        id: 'offline-hogar-5',
        title: 'La Siesta Profunda',
        category: 'Hogar',
        narrative: "Un hombre de mediana edad está profundamente dormido en su cama. Su pareja os dice que 'lleva horas intentando despertarlo, pero es como si no estuviera'. Al entrar, oís un ronquido grave y espaciado. Su piel está pálida y pegajosa al tacto. Al llamarlo por su nombre, no reacciona. Pellizcas la base de su cuello y abre los ojos brevemente, la mirada vidriosa, emitiendo un quejido antes de volver a cerrarlos. Al repetir el estímulo, su mano se mueve hacia la tuya para apartarla, pero sin la fuerza o precisión para localizarla y agarrarla. En la mesilla de noche, un blíster vacío de un medicamento llamado 'Lorazepam' y una botella de vino a medio terminar.",
        correctGCS: { ocular: 2, verbal: 2, motor: 4 },
        conclusion: "El paciente sufre una intoxicación por benzodiacepinas y alcohol, lo que ha provocado una depresión severa del sistema nervioso central. Su estado de somnolencia profunda y la respuesta mínima a estímulos dolorosos, junto con la evidencia del blíster vacío, confirman la sospecha.",
        gcsJustification: `
Ocular(2): Solo abre los ojos en respuesta a un estímulo doloroso, como se describe en: "Pellizcas la base de su cuello y abre los ojos brevemente...".
Verbal(2): Su única respuesta vocal son sonidos incomprensibles, como se ve en: "...emitiendo un quejido antes de volver a cerrarlos.".
Motora(4): Muestra un movimiento de retirada al dolor, pero no es un movimiento dirigido, como se narra en: "...su mano se mueve hacia la tuya para apartarla, pero sin la fuerza o precisión para localizarla...".
        `.trim(),
    },
    {
        id: 'offline-hogar-6',
        title: 'El Grito en la Escalera',
        category: 'Hogar',
        narrative: "Una mujer de 88 años yace al pie de las escaleras de madera. Su pierna derecha está acortada y girada hacia fuera de forma antinatural. Tiene los ojos cerrados. '¡Mamá!', grita su hija con la voz rota. Al oír el grito, la paciente abre los ojos, parpadeando confusamente. Le preguntáis cómo se llama. 'Margarita', susurra con voz débil. '¿Sabe dónde está?'. 'En... en mi casa'. '¿Qué día es hoy?'. 'No lo sé... me duele mucho...'. Cuando os acercáis para valorar la pierna, grita de dolor y su mano izquierda cruza el cuerpo decididamente para apartar vuestra mano.",
        correctGCS: { ocular: 3, verbal: 4, motor: 5 },
        conclusion: "La paciente presenta una fractura de cadera tras una caída. El dolor intenso y el traumatismo han provocado un estado confusional agudo. A pesar del dolor, su capacidad para localizar el estímulo doloroso y responder preguntas (aunque desorientada en tiempo) indica un nivel de conciencia relativamente preservado.",
        gcsJustification: `
Ocular(3): No tiene los ojos abiertos espontáneamente, pero los abre a la orden verbal, como se ve en: "Al oír el grito, la paciente abre los ojos...".
Verbal(4): Está confusa. Su conversación es coherente pero con errores, como se describe en: "'¿Qué día es hoy?'. 'No lo sé...'".
Motora(5): Localiza el dolor. Realiza un movimiento intencionado que cruza la línea media para retirar el estímulo, como se narra en: "...su mano izquierda cruza el cuerpo decididamente para apartar vuestra mano.".
        `.trim(),
    },
     {
        id: 'offline-hogar-7',
        title: 'El Sabor de la Muerte',
        category: 'Hogar',
        narrative: "Nos acercamos desde el fondo del pasillo a paso forzado, esquivando al perro que ladra y a los dos gatos que huyen. El sonido de su respiración es ya audible, agudo y forzado, como un silbido. '¿Se encuentra bien?', le gritas, y levantas tu pulgar mientras te acercas a él. Apenas a un metro, ves sus ojos abiertos de par en par, llenos de pánico. Levanta el pulgar a la vez que intenta responder, pero de su boca solo salen palabras sueltas, entrecortadas por la falta de aire: '...ayuda... no... aire...'. En la mesa del comedor, un plato de marisco a medio comer.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "El paciente está sufriendo una reacción anafiláctica severa, probablemente al marisco. El edema de las vías respiratorias (angioedema) le provoca la dificultad respiratoria y le impide hablar con normalidad. Su nivel de conciencia está intacto, como demuestra su capacidad para obedecer una orden compleja a distancia (verbal con mímica).",
        gcsJustification: `
Ocular(4): Está despierto, con los ojos abiertos espontáneamente y en estado de alerta.
Verbal(NV): La respuesta verbal es No Valorable. La obstrucción física de la vía aérea le impide articular palabras, como se describe en: "...de su boca solo salen palabras sueltas, entrecortadas por la falta de aire...".
Motora(6): Es capaz de comprender y obedecer una orden motora compleja, como se ve en: "Levanta el pulgar...".
        `.trim(),
    },
    {
        id: 'offline-hogar-8',
        title: 'Frío Penetrante',
        category: 'Hogar',
        narrative: "La casa está helada, el termostato marca 12 grados. Una anciana de 90 años está en la cama, cubierta con una manta fina. Su piel está marmórea y fría al tacto. Tiene los ojos cerrados. La llamáis en voz alta, sin respuesta. Aplicáis un pellizco firme en el músculo de su hombro. Abre los ojos, os mira sin comprender, y emite un gemido casi inaudible. No hay más respuesta. Al retirar la presión, sus ojos se cierran de nuevo. Su cuerpo permanece completamente inmóvil, sin un atisbo de movimiento defensivo. Junto a la cama, un plato de sopa intacto.",
        correctGCS: { ocular: 2, verbal: 2, motor: 1 },
        conclusion: "La paciente sufre una hipotermia severa, que ha causado una depresión generalizada de sus funciones vitales y nivel de conciencia. Su incapacidad para generar calor y la falta de respuesta motora son signos de un estado crítico, probablemente agravado por la desnutrición.",
        gcsJustification: `
Ocular(2): Solo abre los ojos ante un estímulo doloroso, como se narra en: "Aplicáis un pellizco firme en el músculo de su hombro. Abre los ojos...".
Verbal(2): Su única respuesta son sonidos incomprensibles, como se describe en: "...emite un gemido casi inaudible.".
Motora(1): No hay ninguna respuesta motora al dolor, como se ve en: "Su cuerpo permanece completamente inmóvil...".
        `.trim(),
    },
    {
        id: 'offline-hogar-9',
        title: 'La Taza de Té',
        category: 'Hogar',
        narrative: "Un hombre de 65 años está sentado en el sofá, con una taza de té intacta en la mesa. Su mujer os dice que 'empezó a decir tonterías hace un rato'. Lo encontráis despierto, con los ojos abiertos, siguiendo vuestros movements. 'Buenas tardes, señor, ¿cómo se encuentra?', le decís. Él responde con una sonrisa afable: 'Los pájaros vuelan sobre el tejado azul'. Le preguntáis su nombre y contesta: 'Ayer comí patatas'. Su habla es clara, pero no tiene ninguna relación con vuestras preguntas. Le pedís que os apriete la mano, y lo hace con normalidad.",
        correctGCS: { ocular: 4, verbal: 3, motor: 6 },
        conclusion: "El paciente presenta una afasia de Wernicke, probablemente causada por un ictus. Está despierto y es capaz de seguir órdenes motoras, pero su centro de comprensión y formulación del lenguaje está dañado, lo que le hace producir un habla fluida pero sin sentido (palabras inapropiadas).",
        gcsJustification: `
Ocular(4): Está vigil, con apertura ocular espontánea, como se describe en: "...con los ojos abiertos, siguiendo vuestros movements.".
Verbal(3): Utiliza palabras y frases bien formadas, pero son totalmente irrelevantes, como se ve en: "'Los pájaros vuelan sobre el tejado azul'.".
Motora(6): Comprende y ejecuta órdenes motoras simples, como se narra en: "Le pedís que os apriete la mano, y lo hace con normalidad.".
        `.trim(),
    },
    {
        id: 'offline-hogar-10',
        title: 'El Reflejo en el Suelo',
        category: 'Hogar',
        narrative: "Un adolescente de 16 años yace en el suelo de la cocina. Su madre explica, nerviosa, que estaba ayudándola a preparar la cena, se hizo un pequeño corte en un dedo, vio la sangre y 'se desplomó como un saco'. Ahora tiene los ojos abiertos y os sigue con la mirada, algo avergonzado. '¿Estás bien?', le preguntáis. 'Sí, sí... un poco mareado'. Sabe su nombre y que está en casa, pero cree que es por la mañana, aunque ya es de noche. Cuando le pedís que se siente despacio, lo hace sin dificultad, aunque se queja de ver 'lucecitas'.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El joven ha sufrido un síncope vasovagal, una reacción refleja común a un desencadenante como ver sangre. Tras la breve pérdida de conciencia, es normal un corto periodo de confusión (desorientación en tiempo) y síntomas leves como fosfenos ('lucecitas'). No indica una lesión neurológica grave.",
        gcsJustification: `
Ocular(4): Está despierto con los ojos abiertos, como se ve en: "...tiene los ojos abiertos y os sigue con la mirada...".
Verbal(4): Está orientado en persona y lugar, pero confuso en tiempo, como se narra en: "...cree que es por la mañana, aunque ya es de noche.".
Motora(6): Obedece órdenes y se mueve con normalidad, como se describe en: "Cuando le pedís que se siente despacio, lo hace sin dificultad...".
        `.trim(),
    }
];