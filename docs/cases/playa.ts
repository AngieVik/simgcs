import { Case } from '../../types';

export const playaCases: Case[] = [
    {
        id: 'offline-playa-1',
        title: 'El Sol Inmisericorde',
        category: 'Playa',
        narrative: "Mediodía. El calor es aplastante, el aire vibra sobre la arena. Un turista de unos 50 años yace en su toalla, rodeado de gente. 'Lleva así un rato, no se mueve', dice un bañista. Su piel está de un rojo intenso, seca y caliente como una brasa. Sus ojos están cerrados. Al llamarlo, no responde. Juntas tus dedos índice y pulgar en la base de su cuello, entre el hombro y la oreja, y aplicas una presión firme. El paciente emite un quejido gutural y sus brazos se doblan rígidamente sobre el pecho, los puños apretados. A su lado, una botella de agua casi llena y ninguna sombrilla a la vista. El sol cae a plomo sobre él.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "El paciente sufre un golpe de calor clásico. La hipertermia ha provocado un fallo multiorgánico agudo con grave afectación neurológica. Su piel seca y caliente (ausencia de sudoración) es un signo clave. La postura de decorticación indica un daño cerebral severo.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo, ni verbal ni doloroso.
Verbal(2): Solo emite sonidos incomprensibles al dolor, como se narra en: "El paciente emite un quejido gutural...".
Motora(3): Responde al dolor con una postura de flexión anormal, como se describe en: "...sus brazos se doblan rígidamente sobre el pecho, los puños apretados.".
        `.trim(),
    },
    {
        id: 'offline-playa-2',
        title: 'Ascenso Mortal',
        category: 'Playa',
        narrative: "Un grupo de buceadores gesticula frenéticamente en la orilla, junto a su zodiac. Uno de ellos, un hombre de 40 años, está tendido en la arena, con el traje de neopreno a medio quitar. Sus compañeros dicen que 'subió demasiado rápido, se saltó la parada de seguridad'. Tiene los ojos abiertos y os sigue con la mirada, confuso. Le preguntáis qué le pasa. 'No... siento... las piernas', dice, con el habla notablemente lenta y arrastrada. Le pedís que os apriete las manos, y lo hace con fuerza. 'Intenté moverme, pero no puedo'.",
        correctGCS: { ocular: 4, verbal: 4, motor: 0 },
        conclusion: "El paciente sufre una enfermedad por descompresión (ED) grave tras un ascenso rápido, probablemente con afectación de la médula espinal (paraplejia). Su estado confusional (habla lenta) y la parálisis de las extremidades inferiores hacen que la respuesta motora sea No Valorable.",
        gcsJustification: `
Ocular(4): Está despierto y mantiene el contacto visual, como se ve en: "Tiene los ojos abiertos y os sigue con la mirada...".
Verbal(4): Está confuso y desorientado, con disartria, como se narra en: "...dice, con el habla notablemente lenta y arrastrada.".
Motora(NV): La parálisis por la enfermedad por descompresión impide valorar su respuesta motora, como él mismo refiere en: "'Intenté moverme, pero no puedo'.".
        `.trim(),
    },
    {
        id: 'offline-playa-3',
        title: 'El Salto al Vacío',
        category: 'Playa',
        narrative: "Un joven de 18 años está flotando boca abajo en el agua, peligrosamente cerca de unas rocas. Con ayuda de los socorristas, lo sacáis a la arena sobre un tablero espinal. No abre los ojos. '¡Oye, chaval, estamos aquí para ayudarte!', le gritas. Abre los ojos, te mira con pánico y dice con una voz clara y aterrada: 'No siento nada del cuello para abajo'. Le pides que parpadee dos veces si te entiende, y lo hace sin dudar. Su respiración es superficial, moviendo solo el abdomen.",
        correctGCS: { ocular: 3, verbal: 5, motor: 0 },
        conclusion: "El paciente tiene una lesión medular cervical alta tras saltar de cabeza en aguas poco profundas. Está completamente consciente y orientado (O3, V5, y obedece órdenes complejas con los párpados), pero la tetraplejia hace que su respuesta motora sea No Valorable.",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se narra en: "'¡Oye, chaval...!', le gritas. Abre los ojos...".
Verbal(5): Está completamente orientado y es capaz de describir sus síntomas, como se ve en: "'No siento nada del cuello para abajo'.".
Motora(NV): La lesión medular provoca una parálisis que impide la valoración motora. Aún así, obedece órdenes con los párpados, como se describe en: "Le pides que parpadee dos veces si te entiende, y lo hace sin dudar.".
        `.trim(),
    },
    {
        id: 'offline-playa-4',
        title: 'La Marea Etílica',
        category: 'Playa',
        narrative: "Es de noche. En medio de un grupo de jóvenes que celebran una fiesta con música y una hoguera, uno de ellos yace inmóvil. Huele intensamente a alcohol y a vómito. No responde a vuestra voz. Aplicáis una presión firme en el músculo trapecio. Como única respuesta, retira el hombro de vuestra mano con un movimiento brusco pero sin dirección, como un reflejo. No abre los ojos ni emite sonidos. Sus amigos dicen que 'lleva bebiendo chupitos toda la tarde'.",
        correctGCS: { ocular: 1, verbal: 1, motor: 4 },
        conclusion: "El paciente está en un coma etílico. La intoxicación aguda por alcohol ha deprimido su sistema nervioso central hasta el punto de la inconsciencia. La respuesta de retirada al dolor sin localizar indica una disfunción cerebral moderada-grave.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No emite ningún sonido, ni siquiera al dolor.
Motora(4): Muestra un movimiento de retirada al dolor, como se describe en: "...retira el hombro de vuestra mano con un movimiento brusco pero sin dirección...".
        `.trim(),
    },
    {
        id: 'offline-playa-5',
        title: 'El Desvanecimiento del Corredor',
        category: 'Playa',
        narrative: "Un corredor de unos 30 años, vestido con ropa de competición, se ha desplomado en el paseo marítimo. Está pálido y empapado en sudor. Al llegar, tiene los ojos abiertos y os mira, parpadeando. '¿Qué ha pasado?', pregunta, desorientado. 'Me llamo Carlos, estoy bien, solo... un mareo'. Sabe que está en la playa, pero cree que es por la mañana, cuando en realidad es casi el atardecer. Se levanta por sí mismo sin que se lo pidáis y intenta seguir corriendo.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El paciente ha sufrido un síncope por calor y deshidratación. La breve pérdida de flujo sanguíneo al cerebro le ha causado un corto periodo de confusión (desorientación en tiempo), pero su recuperación es rápida y completa, sin déficits neurológicos.",
        gcsJustification: `
Ocular(4): Está vigil, con apertura ocular espontánea, como se ve en: "...tiene los ojos abiertos y os mira, parpadeando.".
Verbal(4): Está confuso, desorientado en tiempo, como se narra en: "...cree que es por la mañana, cuando en realidad es casi el atardecer.".
Motora(6): Obedece órdenes y se mueve espontáneamente, como se describe en: "Se levanta por sí mismo sin que se lo pidáis...".
        `.trim(),
    },
    {
        id: 'offline-playa-6',
        title: 'El Abrazo Ardiente',
        category: 'Playa',
        narrative: "Una mujer grita de dolor en la orilla, con una marca roja e hinchada con aspecto de latigazo en el brazo. '¡No puedo respirar!', jadea. Tiene los ojos muy abiertos y una expresión de pánico. Le preguntáis qué le ha pasado. Intenta responder, pero su voz es un silbido agudo y apenas audible: '...medusa... ahogo...'. Le pedís que os apriete la mano, y su agarre es firme. Se rasca el cuello, donde empiezan a aparecer ronchas.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "La paciente está sufriendo una reacción anafiláctica severa a la picadura de una medusa. El angioedema de la vía aérea le está causando el estridor y la incapacidad para hablar. Su nivel de conciencia está intacto (M6), pero la respuesta verbal es No Valorable por la obstrucción.",
        gcsJustification: `
Ocular(4): Está despierta y en alerta, como se ve en: "Tiene los ojos muy abiertos y una expresión de pánico.".
Verbal(NV): Es No Valorable. La obstrucción física de la vía aérea impide la fonación, como se narra en: "...su voz es un silbido agudo y apenas audible...".
Motora(6): Obedece órdenes motoras, confirmando que está consciente, como se describe en: "Le pedís que os apriete la mano, y su agarre es firme.".
        `.trim(),
    },
    {
        id: 'offline-playa-7',
        title: 'El Castillo de Arena Silencioso',
        category: 'Playa',
        narrative: "Una madre grita desesperada, sosteniendo a su hijo de 4 años, a quien acaba de sacar del agua. El niño está flácido y azulado, con arena pegada a su cara. No abre los ojos. No responde. Le aplicáis un pellizco firme en el músculo trapecio. Como única respuesta, su espalda se arquea y sus brazos y piernas se extienden de forma rígida y antinatural. No emite ningún sonido.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "El niño ha sufrido una parada cardiorrespiratoria por ahogamiento. La hipoxia cerebral severa ha provocado un daño catastrófico en el tronco encefálico, lo que se manifiesta en la postura de descerebración (extensión anormal).",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No hay respuesta verbal, ni siquiera al dolor.
Motora(2): Responde al dolor con una postura de extensión anormal, como se describe en: "...su espalda se arquea y sus brazos y piernas se extienden de forma rígida...".
        `.trim(),
    },
    {
        id: 'offline-playa-8',
        title: 'El Miedo al Agua',
        category: 'Playa',
        narrative: "Una joven está sentada en la arena, hiperventilando y temblando. Sus amigos dicen que 'le dio un ataque de pánico' y no se mueve ni habla. Tiene los ojos cerrados fuertemente. Al llamarla, no los abre. Intentáis levantarle suavemente un párpado, pero ella lo aprieta con más fuerza, oponiendo una resistencia clara y temblorosa. No dice ni una palabra. Le pedís que mueva un pie si os oye, y lo mueve ligeramente dentro de su sandalia.",
        correctGCS: { ocular: 0, verbal: 1, motor: 6 },
        conclusion: "La paciente está sufriendo una crisis de ansiedad con una respuesta de disociación. Su negativa a abrir los ojos es un acto funcional (psicógeno), no un déficit neurológico. La resistencia activa y el hecho de que obedezca una orden motora sutil demuestran que está consciente.",
        gcsJustification: `
Ocular(NV): Es No Valorable. La paciente se resiste activamente a la apertura, como se narra en: "...ella lo aprieta con más fuerza, oponiendo una resistencia clara...".
Verbal(1): No emite ningún sonido (mutismo psicógeno).
Motora(6): Obedece una orden motora simple, como se ve en: "Le pedís que mueva un pie si os oye, y lo mueve ligeramente...".
        `.trim(),
    },
    {
        id: 'offline-playa-9',
        title: 'La Sombra en el Paseo',
        category: 'Playa',
        narrative: "Un hombre mayor, diabético según su pulsera de alerta médica, está sentado en un banco del paseo marítimo, temblando y sudando frío a pesar del calor. Está despierto. '¿Se encuentra bien?', le preguntáis. 'Cincuenta y tres', responde, con la mirada perdida y la voz pastosa. Le preguntáis su nombre. 'Martes... frío'. Las palabras son claras pero no tienen sentido. Obedece vuestra orden de sacar la lengua.",
        correctGCS: { ocular: 4, verbal: 3, motor: 6 },
        conclusion: "El paciente sufre una hipoglucemia. La falta de azúcar en el cerebro está causando su comportamiento errático y su habla incoherente (palabras inapropiadas). A pesar de ello, su nivel de conciencia le permite obedecer órdenes.",
        gcsJustification: `
Ocular(4): Está con apertura ocular espontánea.
Verbal(3): Emite palabras claras pero sin contexto ni coherencia, como se ve en: "'Cincuenta y tres', responde... 'Martes... frío'.".
Motora(6): Obedece órdenes motoras simples, como se describe en: "Obedece vuestra orden de sacar la lengua.".
        `.trim(),
    },
    {
        id: 'offline-playa-10',
        title: 'El Horizonte Torcido',
        category: 'Playa',
        narrative: "Una mujer de 70 años está sentada en una silla de playa, con la cabeza ladeada y un hilo de saliva en la comisura de los labios. Su marido, alarmado, os dice que 'de repente dejó de hablar bien'. Ella os mira al llegar, con los ojos bien abiertos. 'Señora, ¿cómo se encuentra?'. Ella responde con una jerga ininteligible, una ensalada de sonidos que parecen palabras pero no lo son. Parece frustrada al ver que no la entendéis. Le pedís que levante el brazo derecho. Lo intenta, pero solo consigue un leve movimiento. El izquierdo lo levanta sin problemas.",
        correctGCS: { ocular: 4, verbal: 2, motor: 6 },
        conclusion: "La paciente está sufriendo un ictus que afecta al área de Wernicke (causando una afasia receptiva, V2) y al área motora (causando una hemiparesia derecha). Está despierta y colaboradora (M6 con el lado sano), pero su capacidad de lenguaje está severamente alterada.",
        gcsJustification: `
Ocular(4): Está despierta y vigil, como se narra en: "Ella os mira al llegar, con los ojos bien abiertos.".
Verbal(2): Produce sonidos incomprensibles, como se describe en: "...responde con una jerga ininteligible, una ensalada de sonidos...".
Motora(6): Obedece órdenes con el hemicuerpo no afectado, como se ve en: "El izquierdo lo levanta sin problemas.". Se puntúa la mejor respuesta.
        `.trim(),
    }
];