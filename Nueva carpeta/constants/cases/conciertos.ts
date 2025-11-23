import { Case } from '../../types';

export const conciertosCases: Case[] = [
    {
        id: 'offline-conciertos-1',
        title: 'El Ritmo Roto',
        category: 'Conciertos',
        narrative: "El bajo retumba en tu pecho. En medio de la pista de baile de un festival de música electrónica, un joven yace en el suelo. La gente baila a su alrededor sin darse cuenta. No responde a vuestra voz sobre la música. Le aplicas un pellizco firme en el hombro. Sus brazos se doblan rígidamente sobre el pecho y sus piernas se extienden. Sus pupilas están muy dilatadas y su piel arde al tacto. No emite ningún sonido.",
        correctGCS: { ocular: 1, verbal: 1, motor: 3 },
        conclusion: "El paciente sufre una intoxicación grave por estimulantes (probablemente MDMA o similar), que ha provocado una hipertermia maligna y un daño neurológico agudo. La postura de decorticación es un signo de lesión cerebral severa.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No emite ningún sonido, ni siquiera al dolor.
Motora(3): Responde al dolor con una postura de flexión anormal, como se narra en: "Sus brazos se doblan rígidamente sobre el pecho y sus piernas se extienden.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-2',
        title: 'El Muro de Sonido',
        category: 'Conciertos',
        narrative: "Estás en la primera fila de un concierto de rock. Una avalancha de la multitud empuja a una chica contra la valla de seguridad. Está atrapada, con la cara congestionada y los ojos muy abiertos, llenos de pánico. Le gritas si está bien. Intenta responder, pero el aire apenas sale de sus pulmones en un silbido. Le haces un gesto de 'ok' con la mano. Ella, con dificultad, levanta el pulgar. Ves las marcas de la valla en su pecho.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "La paciente sufre una asfixia traumática por compresión torácica. Está completamente consciente, pero la presión le impide ventilar y hablar. Es una emergencia crítica que requiere liberación inmediata.",
        gcsJustification: `
Ocular(4): Está despierta y mantiene la alerta visual, como se ve en: "...con la cara congestionada y los ojos muy abiertos, llenos de pánico.".
Verbal(NV): Es No Valorable. La compresión torácica le impide físicamente la fonación, como se narra en: "...el aire apenas sale de sus pulmones en un silbido.".
Motora(6): Obedece una orden gestual, confirmando que su nivel de conciencia está intacto, como se describe en: "Ella, con dificultad, levanta el pulgar.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-3',
        title: 'Flash Epiléptico',
        category: 'Conciertos',
        narrative: "Las luces estroboscópicas barren a la multitud. Un joven cae al suelo, convulsionando violentamente. Cuando los temblores cesan, queda inmóvil. Tiene los ojos cerrados. No responde a vuestra voz. Al aplicar una presión en el ángulo de la mandíbula, emite un quejido y retira el brazo de forma refleja, un movimiento rápido y defensivo. Su respiración es ruidosa y profunda.",
        correctGCS: { ocular: 1, verbal: 2, motor: 4 },
        conclusion: "El paciente ha sufrido una crisis epiléptica fotosensible, desencadenada por las luces del concierto. Se encuentra en el periodo postictal, con un nivel de conciencia muy deprimido.",
        gcsJustification: `
Ocular(1): No hay apertura ocular en la fase postictal inmediata.
Verbal(2): Solo emite sonidos incomprensibles al dolor, como se ve en: "...emite un quejido...".
Motora(4): Realiza un movimiento de retirada al estímulo doloroso, como se narra en: "...y retira el brazo de forma refleja, un movimiento rápido y defensivo.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-4',
        title: 'El Desvanecimiento del Fan',
        category: 'Conciertos',
        narrative: "Festival de verano a pleno sol. Un hombre de mediana edad se desploma en la zona de césped. Al llegar, está despierto y os mira, parpadeando lentamente. 'Mucho calor...', dice con dificultad. Sabe su nombre, pero cree que está en la playa, no en un concierto. Le pedís que levante los brazos, y lo hace sin problemas. Su piel está muy sudorosa y pálida.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "El paciente sufre un agotamiento por calor. La deshidratación y la vasodilatación han causado una hipoperfusión cerebral transitoria, resultando en un estado confusional. Aún no es un golpe de calor, ya que todavía suda.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea, como se describe en: "está despierto y os mira, parpadeando lentamente.".
Verbal(4): Está confuso y desorientado en lugar, como se ve en: "...cree que está en la playa, no en un concierto.".
Motora(6): Obedece órdenes motoras, como se narra en: "Le pedís que levante los brazos, y lo hace sin problemas.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-5',
        title: "El Vuelo del 'Roadie'",
        category: 'Conciertos',
        narrative: "Durante el montaje del escenario, un técnico cae desde una torre de iluminación de unos 8 metros. Lo encontráis en el suelo, boca arriba. No responde a ningún estímulo verbal o doloroso. Está completamente flácido. Hay una deformidad evidente en su cráneo y otorragia bilateral. No hay esfuerzo respiratorio.",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "El paciente ha sufrido un traumatismo craneoencefálico catastrófico incompatible con la vida. La ausencia total de respuesta indica un cese de la función del tronco encefálico.",
        gcsJustification: `
Ocular(1): No hay apertura ocular.
Verbal(1): No hay respuesta verbal.
Motora(1): No hay respuesta motora, como se narra en: "Está completamente flácido.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-6',
        title: 'Pánico en el Pogo',
        category: 'Conciertos',
        narrative: "La seguridad saca a una joven del 'pogo' (el centro del baile violento). Está rígida, con los ojos apretados con una fuerza increíble. No responde a su nombre. Al intentar abrirle un ojo, la resistencia es máxima. Permanece en silencio. Le decís en voz baja: 'Estamos aquí para ayudar. Si nos oyes, mueve un dedo'. Tras un segundo, veis un pequeño movimiento en su mano. Está hiperventilando.",
        correctGCS: { ocular: 0, verbal: 1, motor: 6 },
        conclusion: "La paciente está teniendo una reacción de disociación severa (trastorno neurológico funcional) por la sobreestimulación y el agobio de la multitud. La resistencia activa a la apertura ocular y la obediencia a una orden sutil son las claves para diferenciarlo de un coma.",
        gcsJustification: `
Ocular(NV): La resistencia activa a la apertura ocular es una respuesta funcional, como se ve en: "...con los ojos apretados con una fuerza increíble... la resistencia es máxima.".
Verbal(1): Mutismo, no emite ningún sonido.
Motora(6): Obedece una orden motora, demostrando que está consciente, como se narra en: "...veis un pequeño movimiento en su mano.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-7',
        title: 'El Último Bis',
        category: 'Conciertos',
        narrative: "En la zona VIP, un hombre mayor, elegantemente vestido, se queja de dolor en el pecho y se desploma. Al llegar, está en el suelo. Le llamáis, y abre los ojos, confuso. '¿Dónde estoy?', pregunta. Le explicáis que está en un concierto. 'No puede ser, mi mujer me espera para cenar en casa'. Os obedece cuando le pedís que os apriete las manos. Se lleva la mano al pecho.",
        correctGCS: { ocular: 3, verbal: 4, motor: 6 },
        conclusion: "El paciente ha sufrido un síncope de origen cardiaco (probablemente un infarto). La hipoperfusión cerebral le ha dejado en un estado confusional, con desorientación en lugar y situación.",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se narra en: "Le llamáis, y abre los ojos, confuso.".
Verbal(4): Está confuso y desorientado, como se ve en: "'¿Dónde estoy?', pregunta... 'No puede ser...'.".
Motora(6): Obedece órdenes, como se describe en: "Os obedece cuando le pedís que os apriete las manos.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-8',
        title: 'El Cóctel del Backstage',
        category: 'Conciertos',
        narrative: "En el backstage, una estrella de rock está sentada en un sofá, hablando sola. Tiene los ojos abiertos y la mirada errática. 'Las luces de neón me persiguen', dice. Le preguntáis su nombre. 'Soy el rey lagarto'. Cuando intentáis tomarle el pulso, os aparta la mano con fuerza, un manotazo preciso.",
        correctGCS: { ocular: 4, verbal: 3, motor: 5 },
        conclusion: "El paciente sufre una psicosis tóxica aguda, probablemente por una combinación de alcohol y drogas alucinógenas o estimulantes. Su discurso es de 'palabras inapropiadas' y muestra una respuesta motora de localización.",
        gcsJustification: `
Ocular(4): Apertura ocular espontánea, como se ve en: "Tiene los ojos abiertos y la mirada errática.".
Verbal(3): Usa frases bien formadas, pero son delirantes e inapropiadas, como se narra en: "'Las luces de neón me persiguen'... 'Soy el rey lagarto'.".
Motora(5): Localiza el estímulo (vuestro contacto) y lo aparta, como se describe en: "...os aparta la mano con fuerza, un manotazo preciso.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-9',
        title: 'El Sabor del Merchandising',
        category: 'Conciertos',
        narrative: "Cerca de un puesto de comida, un hombre se rasca el cuello frenéticamente. Tiene ronchas por toda la cara. 'No... respiro...', jadea, con un silbido audible. Está de pie, con los ojos abiertos de par en par. Os señala un perrito caliente a medio comer que tiene cacahuetes espolvoreados. Obedece vuestra orden de sentarse en el suelo.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "Reacción anafiláctica severa a los cacahuetes. El angioedema laríngeo le está causando el estridor y la dificultad para hablar. Está plenamente consciente.",
        gcsJustification: `
Ocular(4): Está despierto y alerta, como se ve en: "...con los ojos abiertos de par en par.".
Verbal(NV): La obstrucción de la vía aérea impide la valoración verbal, como se narra en: "'No... respiro...', jadea, con un silbido audible.".
Motora(6): Obedece órdenes, confirmando que su nivel de conciencia está intacto, como se describe en: "Obedece vuestra orden de sentarse en el suelo.".
        `.trim(),
    },
    {
        id: 'offline-conciertos-10',
        title: 'La Nota Final',
        category: 'Conciertos',
        narrative: "Al final del concierto, durante la salida, se produce una pelea. Un joven yace en el suelo, con una herida sangrante en el abdomen. Está pálido y sudoroso. 'Oye, ¿me oyes?', le decís. Abre los ojos. 'Sí...', susurra. '¿Cómo te llamas?'. 'Carlos... tengo... frío... no sé qué ha pasado'. Le pedís que mueva los pies, y lo hace.",
        correctGCS: { ocular: 3, verbal: 4, motor: 6 },
        conclusion: "El paciente tiene una herida penetrante abdominal y está en shock hipovolémico. La hipoperfusión cerebral le causa el estado confusional y la somnolencia. Es una emergencia quirúrgica.",
        gcsJustification: `
Ocular(3): Abre los ojos a la orden verbal, como se narra en: "'Oye, ¿me oyes?', le decís. Abre los ojos.".
Verbal(4): Está confuso y letárgico, como se ve en: "'...no sé qué ha pasado'.".
Motora(6): Obedece órdenes motoras, como se describe en: "Le pedís que mueva los pies, y lo hace.".
        `.trim(),
    }
];