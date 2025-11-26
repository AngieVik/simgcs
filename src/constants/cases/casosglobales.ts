
import { Case } from '../../types';

export const casosGlobalesCases: Case[] = [
    {
        id: 'global-1',
        title: 'El Síndrome de la Clase Turista',
        category: 'Casos Globales',
        narrative: "Un pasajero de un vuelo transoceánico de 12 horas se desploma en la pasarela nada más desembarcar. Es un hombre de 50 años, obeso. Está cianótico y boquea buscando aire (gasping). No responde a vuestra voz. Al aplicar presión en el ángulo mandibular, sus ojos permanecen cerrados y no emite ningún sonido, pero sus brazos se extienden rígidamente a los lados del cuerpo, rotando las muñecas hacia fuera.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "El paciente ha sufrido un Tromboembolismo Pulmonar (TEP) masivo al movilizarse tras una inmovilidad prolongada. La hipoxia cerebral es crítica, provocando una postura de descerebración. Es una parada cardiorrespiratoria inminente o en curso.",
        gcsJustification: `
Ocular(1): No hay apertura ocular a ningún estímulo.
Verbal(1): No hay respuesta verbal, ni siquiera quejidos.
Motora(2): Responde al dolor con una postura de extensión anormal (descerebración), indicando sufrimiento severo del tronco encefálico por hipoxia.
        `.trim(),
    },
    {
        id: 'global-2',
        title: 'La Cumbre Prohibida',
        category: 'Casos Globales',
        narrative: "Estáis en un puesto médico avanzado a 4000 metros de altura. Un alpinista es traído por sus compañeros. Dicen que 'empezó a caminar como un borracho y a decir incoherencias'. El paciente está sentado, balanceándose. Al preguntarle cómo se llama, os mira con perplejidad y responde: 'Los zapatos azules bailan en la nieve'. No parece consciente de su error. Le pedís que se toque la nariz con el dedo índice. Lo intenta, pero su dedo se va hacia la oreja (ataxia). Sin embargo, obedece la orden de intentarlo.",
        correctGCS: { ocular: 4, verbal: 3, motor: 6 },
        conclusion: "El paciente presenta un Edema Cerebral de Altitud (HACE). La hipoxia hipobárica ha causado inflamación cerebral, resultando en ataxia y afasia/confusión severa. Aunque obedece órdenes (M6), su contenido verbal es inapropiado (V3) y delirante.",
        gcsJustification: `
Ocular(4): Mantiene la apertura ocular espontánea.
Verbal(3): Emite frases con estructura gramatical pero sin sentido lógico (palabras inapropiadas), como se ve en: "'Los zapatos azules bailan en la nieve'".
Motora(6): Obedece órdenes, aunque la ejecución sea torpe por la ataxia (coordinación), la intención motora es correcta.
        `.trim(),
    },
    {
        id: 'global-3',
        title: 'La Fiebre del Trópico',
        category: 'Casos Globales',
        narrative: "Una joven cooperante acaba de regresar de una zona endémica de malaria. Su familia avisa porque 'está ardiendo y no despierta'. La encontráis en la cama, empapada en sudor. El termómetro marca 41ºC. No responde a la voz. Al aplicar un pellizco firme en el trapecio, abre los ojos momentáneamente, murmura algo ininteligible y retira el hombro para alejarse de vuestra mano, volviendo a caer en la inconsciencia inmediatamente.",
        correctGCS: { ocular: 2, verbal: 2, motor: 4 },
        conclusion: "Sospecha de Malaria Cerebral. La fiebre muy alta y la alteración del nivel de conciencia son signos de alarma. El parásito está afectando la microcirculación cerebral. Su respuesta es de retirada al dolor, indicando un grado moderado-severo de afectación.",
        gcsJustification: `
Ocular(2): Solo abre los ojos ante el estímulo doloroso.
Verbal(2): Emite sonidos o murmullos incomprensibles.
Motora(4): Realiza un movimiento de retirada al dolor, sin llegar a localizar y apartar la mano del examinador.
        `.trim(),
    },
    {
        id: 'global-4',
        title: 'La Mula',
        category: 'Casos Globales',
        narrative: "Aduanas del aeropuerto. Un viajero nervioso ha empezado a convulsionar en la cola de control de pasaportes. Al llegar, la crisis ha cesado. Yace en el suelo, respirando ruidosamente. No abre los ojos. No responde a la voz. Al aplicar un estímulo doloroso central (presión mandibular), sus brazos se flexionan rígidamente sobre el pecho, con los puños cerrados. No emite ningún sonido.",
        correctGCS: { ocular: 1, verbal: 1, motor: 3 },
        conclusion: "El paciente es probablemente un 'body packer' (mula) y se le ha roto una cápsula de droga (cocaína/heroína) en el interior. Sufre una intoxicación masiva aguda. El estado postictal con postura de decorticación indica un daño neurológico grave y riesgo vital inmediato.",
        gcsJustification: `
Ocular(1): No hay apertura ocular, ni siquiera al dolor.
Verbal(1): Ausencia total de sonido.
Motora(3): Adopta una postura de flexión anormal (decorticación) ante el estímulo doloroso.
        `.trim(),
    },
    {
        id: 'global-5',
        title: 'El Veneno del Outback',
        category: 'Casos Globales',
        narrative: "Un naturalista aficionado ha sido mordido por una serpiente exótica de su colección privada. Lo encontráis sentado en un sillón, inmóvil. Tiene los ojos abiertos, pero los párpados caídos (ptosis). 'No... puedo... moverme...', susurra con voz apenas audible. Su respiración es muy superficial. Le pedís que levante el brazo. 'Lo... intento...', dice, pero el brazo no se mueve ni un milímetro. Sus pupilas están fijas.",
        correctGCS: { ocular: 4, verbal: 5, motor: 0 },
        conclusion: "El paciente sufre el efecto de una neurotoxina paralizante (tipo elápido). Está plenamente consciente y orientado (su cerebro funciona), pero la toxina bloquea la unión neuromuscular, impidiendo el movimiento. La respuesta motora es No Valorable por parálisis periférica.",
        gcsJustification: `
Ocular(4): Está despierto, con apertura ocular espontánea (aunque tenga ptosis, los mantiene abiertos en lo posible).
Verbal(5): Está orientado y describe sus síntomas con coherencia, aunque la voz sea débil.
Motora(NV): La parálisis flácida inducida por la toxina impide la respuesta motora, a pesar de que la orden cerebral se envía.
        `.trim(),
    },
    {
        id: 'global-6',
        title: 'Bambalinas de Cristal',
        category: 'Neurológico',
        narrative: "El sótano huele a ginebra rancia y laca antigua. Es un camerino viejo reconvertido en vivienda. Sobre el tocador, bajo un neón parpadeante, ves restos de polvo rosa (parece 'Tusi') junto a una tarjeta. En el sofá yace una mujer de 70 años, con bata de seda sucia. Al gritarle, no reacciona. Aplicas presión fuerte en el trapecio: abre los ojos de golpe mirándote con angustia, pero no emite ningún sonido, solo mueve la boca en silencio. Con tu mano aún en su trapecio causándole dolor, su mano izquierda sube rápida y precisa, agarrando tu muñeca para apartarte. El lado derecho de su cuerpo no se mueve.",
        correctGCS: { ocular: 2, verbal: 0, motor: 5 },
        conclusion: "Ictus Isquémico Hemisférico Izquierdo (Arteria Cerebral Media). No era droga (el polvo era maquillaje) ni alcohol. La paciente presenta Afasia Global (no habla ni comprende, por eso no obedece) y hemiplejia derecha. Se activa Código Ictus.",
        gcsJustification: `
Ocular(2): Solo abre los ojos ante el estímulo doloroso (presión en trapecio).
Verbal(NV): Afasia Global. Intenta hablar (mueve la boca) pero no puede emitir sonidos ni palabras. Se marca NV (0) porque es un déficit focal, no de conciencia.
Motora(5): Localiza el dolor. Su mano cruza la línea media y sube hasta el punto del dolor (tu mano) para intentar quitarla.
        `.trim(),
    },
    {
        id: 'global-7',
        title: 'La Pantera Rosa',
        category: 'Tóxicos (Pediatría)',
        narrative: "El piso es un caos de botellas rotas y música tecno aún sonando en bucle. La policía se lleva a los padres esposados. En el centro de la alfombra, junto a una bolsa de polvo rosa brillante ('Tusi'), encuentras a un niño de 3 años. Huele a fresa química y sudor. Está tumbado, letárgico. Al hablarle suavemente no reacciona. Le pellizcas el trapecio con cuidado: abre los ojos inmediatamente, empieza a gemir y llorar de forma inconsolable, y retira su brazo bruscamente encogiéndose sobre sí mismo para alejarse de tu estímulo.",
        correctGCS: { ocular: 2, verbal: 2, motor: 4 },
        conclusion: "Intoxicación accidental por 'Tusi' (mezcla de Ketamina, MDMA y cafeína). En pediatría (GCS-P), el llanto inconsolable o gemidos equivalen a un V2/V3. Su retirada al dolor indica que conserva funciones de protección, pero el nivel de conciencia está muy deprimido.",
        gcsJustification: `
Ocular(2): Abre los ojos solo ante el dolor.
Verbal(2): Emite gemidos y sonidos incomprensibles (en lactantes/niños pequeños equivale a llanto inconsolable/gemidos).
Motora(4): Retirada. Flexiona y aleja el cuerpo del estímulo doloroso, pero no tiene la coordinación para localizar y apartar tu mano.
        `.trim(),
    },
    {
        id: 'global-8',
        title: 'Silencio Administrativo',
        category: 'Infeccioso (Sepsis)',
        narrative: "Residencia de ancianos. Olor penetrante a orina concentrada y lejía. El auxiliar dice: 'El abuelo lleva dormido todo el día, no da guerra'. Al acercarte, notas el calor que irradia su piel. Está ardiendo. Su respiración es rápida y superficial (taquipnea). No responde a tu voz ni a los gritos. Aplicas presión mandibular fuerte: sus ojos se abren un instante, emite palabras sueltas sin ningún sentido ('...el tren... azul...') y su mano sube torpemente hasta su cara, intentando empujar tus dedos para que pares.",
        correctGCS: { ocular: 2, verbal: 3, motor: 5 },
        conclusion: "Sepsis grave (probablemente urinaria) causando encefalopatía séptica. La fiebre alta y la hipotensión están 'apagando' su cerebro. El personal confundió el coma séptico con 'dormir bien'. Es una emergencia tiempo-dependiente.",
        gcsJustification: `
Ocular(2): Apertura ocular solo al dolor.
Verbal(3): Palabras inapropiadas. Dice palabras reales ("tren", "azul") pero fuera de contexto y sin frase coherente.
Motora(5): Localiza el dolor. Su mano sube hasta el punto del estímulo (mandíbula) intentando quitar la fuente del dolor.
        `.trim(),
    },
    {
        id: 'global-9',
        title: 'Hierro y Sudor',
        category: 'Metabólico (Hipoglucemia)',
        narrative: "Vestuario del gimnasio de barrio. Un culturista de 120kg está sentado en el banco, empapado en un sudor frío que le gotea por la nariz. Sus compañeros dicen que 'se ha metido algo raro'. Tiene los ojos abiertos y mira a todos lados con agresividad. Le preguntas el nombre y te grita: '¡Las mancuernas verdes!'. Al intentar coger un dedo para medir la glucemia, te aparta la mano de un manotazo preciso y coordinado, mirándote con furia.",
        correctGCS: { ocular: 4, verbal: 3, motor: 6 },
        conclusion: "Hipoglucemia severa (Neuroglucopenia). No es un tóxico ni esteroides. El cerebro sin azúcar se comporta como una intoxicación etílica o psiquiátrica. Está despierto y se mueve bien, pero su 'software' (verbal) falla. Requiere glucosa iv urgente.",
        gcsJustification: `
Ocular(4): Espontánea. Tiene los ojos abiertos y vigila el entorno.
Verbal(3): Palabras inapropiadas. Grita frases sin sentido lógico en respuesta a preguntas simples.
Motora(6): Obedece/Movimiento voluntario complejo. Aunque agresivo, su rechazo es una acción voluntaria y coordinada, no un reflejo.
        `.trim(),
    },
    {
        id: 'global-10',
        title: 'Ensalada de Palabras',
        category: 'Neurológico (Ictus Wernicke)',
        narrative: "Llegas a una biblioteca antigua. El silencio es sepulcral hasta que oyes a un señor mayor, bien vestido, hablando sin parar con el bibliotecario asustado. El paciente te mira, sonríe y te dice con fluidez perfecta: 'El reloj azul nada por la mañana cuando el café salta'. No huele a alcohol. Está despierto y tranquilo. Le pides: 'Señor, levante los brazos', pero él sigue sonriendo y responde: 'Las nubes son de corcho'. Al pellizcarle el trapecio, su expresión cambia a enfado y su mano sube rápidamente para quitarte la tuya del hombro.",
        correctGCS: { ocular: 4, verbal: 3, motor: 5 },
        conclusion: "Afasia de Wernicke (Sensitiva). El paciente tiene un Ictus que afecta la comprensión. Habla fluido (no es V1 ni V2) pero el contenido no tiene sentido (V3). No obedece órdenes (no porque no quiera, sino porque no entiende), pero localiza el dolor perfectamente.",
        gcsJustification: `
Ocular(4): Espontánea. Está despierto y te mira.
Verbal(3): Palabras inapropiadas. Articula bien, pero es una 'ensalada de palabras' sin sentido lógico.
Motora(5): Localiza el dolor. No obedece órdenes (M6) porque no comprende el lenguaje, pero localiza el estímulo doloroso.
        `.trim(),
    },
    {
        id: 'global-11',
        title: 'El Juicio Final',
        category: 'Psicógeno (Funcional)',
        narrative: "Pasillos de los Juzgados. Una acusada se ha desplomado tras oír su sentencia. Está en el suelo, inmóvil. No responde a tu voz. Al intentar abrirle los ojos con tus dedos, notas una fuerza vibrante que los mantiene cerrados; ella hace fuerza hacia abajo para que no los abras. Levantas su mano inerte sobre su propia cara y la sueltas: la mano cae rápida, pero en el último milisegundo se desvía mágicamente hacia un lado, golpeando el suelo en lugar de su nariz.",
        correctGCS: { ocular: 0, verbal: 0, motor: 6 },
        conclusion: "Coma Psicógeno (Trastorno Conversivo). No es un coma real. Dos signos clave: Resistencia activa a la apertura ocular (Blefaroespasmo) y el signo de la mano que no se golpea la cara. Su cerebro está protegiéndola. Se puntúa NV en Ojos y Verbal por la naturaleza funcional, pero Motor es 6 porque el acto de desviar la mano implica obediencia/protección voluntaria inconsciente.",
        gcsJustification: `
Ocular(NV): Resistencia activa al abrir los párpados. Sugiere respuesta funcional, no orgánica.
Verbal(NV): Mutismo psicógeno. Fisiológicamente puede hablar, pero el bloqueo es funcional.
Motora(6): Obedece (inconscientemente). La evitación del golpe en la cara demuestra control motor voluntario preservado.
        `.trim(),
    },
    {
        id: 'global-12',
        title: 'Caída Libre',
        category: 'Trauma (Medular)',
        narrative: "Obra en construcción. Un albañil ha caído desde un segundo piso de espaldas sobre escombros. Está despierto, pálido, mirándote con terror. '¡No siento las piernas! ¡No puedo mover nada!', grita con claridad. Le pides que apriete tus manos: nada. Sus brazos y piernas están flácidos como trapos. Le pellizcas el brazo y no hace ni una mueca. Sin embargo, gira el cuello perfectamente para mirarte.",
        correctGCS: { ocular: 4, verbal: 5, motor: 0 },
        conclusion: "Shock Medular / Tetraplejia traumática. El cerebro está intacto (O4, V5), pero la 'conexión' con el cuerpo se ha cortado en el cuello. Es un M1 falso (parálisis), por lo que debe marcarse como NV. El paciente está consciente.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado. Sabe qué ha pasado y describe síntomas.
Motora(NV): No Valorable por lesión medular (Tetraplejia). Puntuar M1 sería incorrecto porque confundiría parálisis con coma.
        `.trim(),
    },
    {
        id: 'global-13',
        title: 'Dulces Sueños',
        category: 'Tóxicos (Benzodiacepinas)',
        narrative: "Habitación de hotel barata. En la mesilla, tres blísteres vacíos de Alprazolam y una botella de whisky a medias. El paciente yace en la cama roncando profundamente, con una respiración lenta y pesada (bradipnea). No responde a gritos. Al aplicar presión mandibular fuerte, deja de roncar un segundo y flexiona los brazos levemente sobre el pecho de forma normal (no rígida), como queriendo taparse, pero sin llegar a tu mano. Vuelve a roncar al instante.",
        correctGCS: { ocular: 1, verbal: 1, motor: 4 },
        conclusion: "Coma tóxico por depresores (Benzos + Alcohol). El riesgo principal es la vía aérea (ronquidos = obstrucción parcial). Su respuesta motora es retirada inespecífica (M4), no localiza. Requiere soporte ventilatorio y vigilancia.",
        gcsJustification: `
Ocular(1): No abre ojos ni al dolor intenso.
Verbal(1): Ninguna respuesta sonora, solo ronquidos respiratorios.
Motora(4): Retirada normal. Flexiona los brazos alejándose o protegiéndose, pero no tiene la capacidad de localizar el estímulo.
        `.trim(),
    },
    {
        id: 'global-14',
        title: 'Luces y Sombras',
        category: 'Neurológico (Post-Ictal)',
        narrative: "Andén de metro. Los vigilantes tienen retenido a un joven que, según dicen, 'se puso a bailar en el suelo'. Ahora está sentado, con la mirada perdida, babeando un poco. Tiene sangre en el labio (mordedura). Le hablas y te mira confuso, diciendo: 'Quiero... mamá... casa...'. Le pides que te enseñe la lengua y te mira sin hacer nada. Al pellizcarle el trapecio, se lleva la mano al hombro y te empuja con fuerza.",
        correctGCS: { ocular: 4, verbal: 4, motor: 5 },
        conclusion: "Estado Post-Ictal (tras crisis convulsiva tónico-clónica). La mordedura y la confusión son típicas. Está en periodo de recuperación. No obedece órdenes complejas aún por la confusión ('confusional state'), pero localiza el dolor perfectamente.",
        gcsJustification: `
Ocular(4): Espontánea. Tiene los ojos abiertos tras la crisis.
Verbal(4): Confuso. Es capaz de hablar y mantener una conversación básica, pero está desorientado o lento (bradipsiquia).
Motora(5): Localiza el dolor. No obedece órdenes todavía (fallo en M6), pero identifica y combate el estímulo doloroso.
        `.trim(),
    },
    {
        id: 'global-15',
        title: 'La Mirada Perdida',
        category: 'Neurológico (Ictus Hemisférico)',
        narrative: "El salón huele a cera vieja y medicamentos. Un anciano está desplomado en su butaca favorita, con la cabeza y los ojos desviados forzosamente hacia la izquierda, ignorando por completo el lado derecho de la habitación (Negligencia). Al llamarle, te busca con la mirada pero no pasa de la línea media. '¿Qué... pasa...?', articula con mucha dificultad (disartria). Le pides que levante los brazos. El brazo izquierdo sube obediente; el derecho cae a plomo, inerte. No parece darse cuenta de que su brazo derecho existe.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Ictus del Hemisferio Derecho (Arteria Cerebral Media). La desviación de la mirada hacia la lesión y la negligencia del lado izquierdo (anosognosia) son clásicas. Aunque tiene hemiplejia izquierda y disartria, está despierto, orientado y obedece con el lado sano. GCS total 15, pero neurológicamente grave.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado. Aunque habla mal (disartria) por parálisis facial, el contenido es coherente.
Motora(6): Obedece órdenes con el hemicuerpo sano. Se puntúa siempre la mejor respuesta motora.
        `.trim(),
    },
    {
        id: 'global-16',
        title: 'Vaho en el Espejo',
        category: 'Tóxicos (Opiáceos)',
        narrative: "Cuarto de baño de un hotel de lujo. El grifo sigue abierto, desbordando el lavabo. Un hombre joven yace en el suelo de mármol, pálido y frío. En su brazo ves pegado un parche transdérmico cortado por la mitad. Sus pupilas son puntiformes, del tamaño de un alfiler (miosis). Su respiración es agónica, apenas dos o tres suspiros por minuto. No responde a gritos. Aplicas presión mandibular máxima: no abre los ojos, no emite ningún sonido y su cuerpo permanece absolutamente flácido, sin el menor atisbo de movimiento.",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "Sobredosis de Fentanilo (parche manipulado). La tríada clásica (Miosis, Coma, Depresión Respiratoria) es evidente. El paciente está en parada respiratoria inminente. La flacidez total (M1) indica una depresión profunda del tronco encefálico.",
        gcsJustification: `
Ocular(1): No abre los ojos ante ningún estímulo.
Verbal(1): Silencio absoluto.
Motora(1): Ausencia de respuesta (flacidez). No hay retirada ni postura anormal.
        `.trim(),
    },
    {
        id: 'global-17',
        title: 'La Mano que Miente',
        category: 'Psicógeno (Funcional)',
        narrative: "Andén de metro, hora punta. Una mujer está tirada en el suelo, inmóvil, paralizando el servicio. La policía dice que 'se dejó caer suavemente'. Tiene los ojos cerrados. Al intentar abrírselos, notas una resistencia fuerte y vibrante en los párpados. No responde. Levantas su brazo inerte sobre su cara y lo sueltas de golpe: la mano cae rápida, pero en el último centímetro se desvía para golpear el suelo junto a su oreja, evitando su propia nariz.",
        correctGCS: { ocular: 0, verbal: 0, motor: 6 },
        conclusion: "Pseudocoma Psicógeno (Trastorno Conversivo). La 'prueba de la caída del brazo' es diagnóstica: un paciente en coma verdadero se golpearía la cara; ella la evita inconscientemente (propiocepción intacta). Se puntúa NV en Ojos y Verbal, pero M6 porque el acto de evitar el golpe implica un movimiento voluntario funcional.",
        gcsJustification: `
Ocular(NV): Resistencia activa a la apertura ocular (blefaroespasmo).
Verbal(NV): Mutismo funcional.
Motora(6): Obedece (inconscientemente). La evitación del golpe en la cara demuestra control motor voluntario preservado.
        `.trim(),
    },
    {
        id: 'global-18',
        title: 'Fuego en la Piel',
        category: 'Ambiental (Golpe de Calor)',
        narrative: "Carretera en obras, mediodía de agosto, 42ºC. Un operario de asfalto está tumbado en la cuneta. Al tocarle, retiras la mano instintivamente: su piel está seca y arde como una estufa. No suda. No responde a tu voz. Le pellizcas el trapecio con fuerza: sus ojos permanecen cerrados y emite un gruñido ronco, mientras sus brazos se extienden rígidamente a los lados con las muñecas rotadas hacia fuera, tensas como alambres.",
        correctGCS: { ocular: 1, verbal: 2, motor: 2 },
        conclusion: "Golpe de Calor (Heat Stroke). Emergencia vital. El fallo de la termorregulación (piel seca y caliente) ha cocido literalmente el cerebro, causando edema cerebral y disfunción del tronco (postura de descerebración). Requiere enfriamiento inmediato agresivo.",
        gcsJustification: `
Ocular(1): No hay apertura ocular.
Verbal(2): Sonidos incomprensibles.
Motora(2): Descerebración. Extensión anormal de extremidades ante el dolor.
        `.trim(),
    },
    {
        id: 'global-19',
        title: 'El Estallido',
        category: 'Neurológico (HSA)',
        narrative: "Baño de un restaurante. Un hombre está arrodillado frente al inodoro, vomitando bilis. Se agarra la cabeza con ambas manos y grita: '¡Me ha explotado la cabeza!'. Te mira con fotofobia (le molesta la luz de tu linterna). '¿Cómo te llamas?'. Te aparta de un empujón brusco y preciso mientras sigue gritando: '¡Apaga la luz! ¡Me muero!'. No responde a tus preguntas, solo se queja del dolor insoportable.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Hemorragia Subaracnoidea (HSA). La cefalea en trueno ('el peor dolor de mi vida') es el signo cardinal. Aunque está agitado y agresivo, está despierto (O4), su discurso es coherente con su dolor (V5) y sus movimientos son dirigidos y voluntarios (M6). No confundir agitación por dolor con confusión.",
        gcsJustification: `
Ocular(4): Espontánea. Mantiene los ojos abiertos (aunque le moleste la luz).
Verbal(5): Orientado. Sabe qué le pasa ("me explota la cabeza") y lo expresa coherentemente.
Motora(6): Obedece/Voluntario. Su rechazo es un acto consciente y coordinado ante la molestia.
        `.trim(),
    },
    {
        id: 'global-20',
        title: 'Alicia en el País',
        category: 'Tóxicos (Anticolinérgico)',
        narrative: "Jardín botánico. Un joven deambula desnudo de cintura para arriba. Su piel está roja como un tomate y seca. Sus pupilas son enormes (midriasis), casi no se ve el iris. Te mira, sonríe y empieza a 'coger' mariposas invisibles en el aire con delicadeza (carfología). Le preguntas qué toma. 'El té de la reina es morado', responde felizmente. Le pides que se siente, pero él sigue persiguiendo objetos que no existen, ignorando tu orden, aunque cuando le tocas el brazo, lo retira molesto.",
        correctGCS: { ocular: 4, verbal: 3, motor: 5 },
        conclusion: "Síndrome Anticolinérgico (Intoxicación por Estramonio/Burundanga/Atropina). Signos: 'Loco como una cabra' (delirio), 'Rojo como un tomate' (rubor), 'Ciego como un murciélago' (midriasis), 'Seco como un hueso'. Su GCS está alterado por el delirio alucinatorio.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(3): Palabras inapropiadas. Discurso alucinatorio sin conexión con la realidad.
Motora(5): Localiza/Retira. No obedece órdenes (M6) por el delirio, pero reacciona localizando el contacto físico no deseado.
        `.trim(),
    },
    {
        id: 'global-21',
        title: 'El Prisionero',
        category: 'Neurológico (Locked-in)',
        narrative: "UCI de traslado. El informe dice 'Coma tras infarto basilar'. El paciente yace inmóvil, intubado. Sin embargo, al acercarte, notas que sus ojos están abiertos y te siguen por la habitación con una intensidad aterradora. Le pellizcas: no se mueve. Le gritas: ni un gesto. Te acercas a su cara y le susurras: 'Si me oyes, mira hacia arriba'. Lentamente, sus ojos suben hacia el techo y luego vuelven a mirarte.",
        correctGCS: { ocular: 4, verbal: 0, motor: 0 },
        conclusion: "Síndrome de Enclaustramiento (Locked-in Syndrome). No es un coma. El paciente está plenamente consciente (O4), pero una lesión en el tronco cerebral ha cortado todas las vías motoras excepto la mirada vertical. Es la pesadilla definitiva: una mente despierta en un cadáver viviente. Se puntúa NV en Verbal y Motor por parálisis física, no por fallo cerebral.",
        gcsJustification: `
Ocular(4): Espontánea. Rastrea y fija la mirada.
Verbal(NV): Imposible por tubo y parálisis bulbar (anartria).
Motora(NV): Tetraplejia completa. La única vía motora preservada (ojos verticales) confirma la consciencia, invalidando un M1.
        `.trim(),
    },
    {
        id: 'global-22',
        title: 'La Estatua Viviente',
        category: 'Neurológico (Locked-in)',
        narrative: "Habitación de hospital, planta de ictus. El paciente, un hombre de 50 años, sufrió un infarto de tronco ayer. La familia grita que 'está en coma'. Él yace inmóvil, con los ojos abiertos, clavados en ti. No hay parpadeo espontáneo, pero su mirada te sigue con una intensidad aterradora. Le gritas y no se mueve. Le pellizcas fuerte el brazo y no hay retirada, ni mueca, nada. Está flácido (tetrapléjico). Sin embargo, recuerdas un truco. Te acercas a su cara y le susurras: 'Si me oye, mire hacia el techo'. Lentamente, sus ojos suben y bajan.",
        correctGCS: { ocular: 4, verbal: 1, motor: 1 },
        conclusion: "Síndrome de Cautiverio (Locked-in Syndrome). Es la pesadilla definitiva: el paciente está 100% consciente (O4, entiende órdenes) pero su cuerpo está desconectado por una lesión en el tronco (V1, M1). La GCS aquí falla estrepitosamente porque no mide el movimiento ocular vertical, que es lo único que les queda.",
        gcsJustification: `
Ocular(4): Espontánea. Mantiene los ojos abiertos y fija la mirada.
Verbal(1): Ninguna. Anatómicamente incapaz de hablar por parálisis (anartria), aunque está orientado mentalmente.
Motora(1): Ninguna. Tetraplejia completa. (Nota: Algunos protocolos permiten marcar M6 si obedece con los ojos, pero estrictamente en GCS estándar es M1 corporal).
    `.trim(),
    },
    {
        id: 'global-23',
        title: 'El Llanto de la Bestia',
        category: 'Pediatría (TCE)',
        narrative: "Parque infantil, atardecer. Un niño de 2 años se ha caído del tobogán golpeándose la cabeza contra el hormigón. Al llegar, el niño está en brazos de su madre, gritando con un llanto agudo y constante que te taladra los oídos. Tiene un gran hematoma en la frente. No se calma con nada, ni con la madre ni con juguetes. Al intentar examinarle las pupilas, aparta tu mano de un manotazo brusco y se gira para esconder la cara en el pecho de su madre.",
        correctGCS: { ocular: 4, verbal: 3, motor: 6 },
        conclusion: "TCE Leve-Moderado en Pediatría. El llanto inconsolable persistente es un signo de alarma (equivale a V3 - Palabras inapropiadas en adultos). Sin embargo, su respuesta motora es excelente: localiza y rechaza al sanitario, y busca refugio (M6 - Obedece/Espontáneo adecuado a edad).",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(3): Llanto inconsolable. En la escala GCS-Pediátrica, si no se consuela con nada, equivale a una alteración (V3). Si se calmara, sería V4.
Motora(6): Movimiento espontáneo normal / Obedece (según edad). El rechazo activo y buscar a la madre indica función cortical intacta.
    `.trim(),
    },
    {
        id: 'global-24',
        title: 'Niebla Tóxica',
        category: 'Tóxicos (Monóxido de Carbono)',
        narrative: "Invierno. Entras en una casa pequeña con las ventanas cerradas y una estufa de gas vieja a toda potencia. Hace un calor asfixiante. Encuentras a toda la familia 'dormida' en el salón. La abuela es la que peor está: piel rosada (cereza), respiración superficial. No responde a la voz. Al aplicar presión en el ángulo mandibular, abre los ojos, murmura '...tengo sueño... apaguen la luz...' y vuelve a cerrar los ojos sin hacer ningún movimiento defensivo con los brazos.",
        correctGCS: { ocular: 2, verbal: 4, motor: 1 },
        conclusion: "Intoxicación por Monóxido de Carbono (CO). El 'asesino silencioso'. La piel color cereza es un signo tardío y grave. La paciente está estuporosa (GCS bajo) por hipoxia cerebral. Su falta de respuesta motora (M1) con respuesta verbal conservada (V4) es atípica y sugiere debilidad extrema o hipoxia global.",
        gcsJustification: `
Ocular(2): Abre los ojos solo al estímulo doloroso.
Verbal(4): Confusa. Es capaz de formar frases coherentes ("tengo sueño"), aunque desorientada en la gravedad de la situación.
Motora(1): Ninguna. La hipoxia severa y la debilidad muscular extrema le impiden mover los brazos incluso sintiendo dolor.
    `.trim(),
    },
    {
        id: 'global-25',
        title: 'El Boxeador Ciego',
        category: 'Trauma (Facial)',
        narrative: "Pelea en un bar. El paciente ha recibido una paliza brutal. Su cara es una masa deforme de sangre y hematomas. Ambos ojos están tan hinchados que parecen pelotas de tenis moradas; es físicamente imposible ver sus ojos. Él está de pie, tambaleándose, gritando: '¡¿Quién ha sido?! ¡Os voy a matar a todos!'. Cuando intentas tocarle para curarle, te agarra el brazo con precisión y te empuja, diciendo: '¡Quita tus sucias manos de mí!'.",
        correctGCS: { ocular: 0, verbal: 5, motor: 6 },
        conclusion: "Trauma Facial Severo con GCS Motor y Verbal intactos. El riesgo aquí es la vía aérea por el sangrado y la inflamación. Aunque neurológicamente está perfecto (V5, M6), sus ojos son No Valorables por el edema palpebral mecánico.",
        gcsJustification: `
Ocular(NV): No Valorable (O-NV). El edema palpebral masivo impide la apertura mecánica. No es que no quiera o no pueda neurológicamente, es que físicamente no puede.
Verbal(5): Orientado. Mantiene conversación coherente y agresiva contextualizada.
Motora(6): Obedece/Localiza. M6 funcional. Es capaz de interactuar y rechazar con precisión.
    `.trim(),
    },
    {
        id: 'global-26',
        title: 'La Mirada Perdida',
        category: 'Neurológico (Status Epiléptico)',
        narrative: "Aviso por 'comportamiento extraño' en una oficina. Encuentras a una administrativa sentada en su silla. No se ha caído, no convulsiona. Simplemente está mirando al infinito, parpadeando rítmicamente de forma muy rápida (aleteo palpebral). No responde cuando le gritas su nombre. Al pellizcarle el trapecio con fuerza, no hace absolutamente nada: ni se retira, ni gime, ni cambia su expresión facial. Sigue con ese parpadeo rítmico incesante.",
        correctGCS: { ocular: 4, verbal: 1, motor: 1 },
        conclusion: "Crisis de Ausencia / Status Epiléptico No Convulsivo. No todas las convulsiones son sacudidas. El paciente está 'desconectado' del entorno aunque tenga los ojos abiertos. Es una emergencia neurológica sutil. GCS muy bajo engañoso.",
        gcsJustification: `
Ocular(4): Espontánea. Tiene los ojos abiertos permanentemente. (Nota: Clínicamente es engañoso, pero estrictamente en GCS es 4).
Verbal(1): Ninguna. Desconexión total del entorno.
Motora(1): Ninguna. No hay respuesta al dolor porque el cerebro está en descarga eléctrica continua.
    `.trim(),
    },
    {
        id: 'global-27',
        title: 'Barro y Gasolina',
        category: 'Trauma (Enduro)',
        narrative: "Barranco de difícil acceso. Lluvia y barro. Un piloto de enduro ha salido despedido contra una roca. El casco está partido. Huele a gasolina y tierra mojada. El piloto está sentado en el suelo, combativo, intentando quitarse el casco a la fuerza mientras sus compañeros lo sujetan. Te mira con ojos desorbitados y grita: '¡Arranca la moto! ¡Tengo que llegar!'. Al intentar inmovilizarle el cuello, te lanza un puñetazo dirigido a tu cara y se revuelve para que no lo toques.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "TCE con Agitación Psicomotriz (Lóbulo Frontal). El paciente está despierto (O4) y se mueve con propósito y fuerza (M6, te intenta pegar, es un movimiento voluntario complejo, no reflejo). Su lenguaje es coherente gramaticalmente pero desorientado en la situación (V4).",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso. Cree que sigue en carrera.
Motora(6): Obedece/Voluntario complejo. La agresión dirigida y el intento de quitarse el casco son actos voluntarios, no reflejos.
    `.trim(),
    },
    {
        id: 'global-28',
        title: 'El Silencio del Bosque',
        category: 'Trauma (Medular)',
        narrative: "Pista forestal. Impacto a alta velocidad contra un árbol. El piloto yace boca arriba, inmóvil. No hay sangre, solo un silencio aterrador roto por el motor al ralentí de su moto. Está pálido y sudoroso. Te mira fijamente, con terror absoluto. 'No siento nada... ¿por qué no me muevo?', te dice con voz clara pero débil. Le ordenas que apriete tus manos: nada. Le pellizcas fuerte el brazo: ni una mueca. Su cuerpo es un peso muerto desde el cuello hacia abajo.",
        correctGCS: { ocular: 4, verbal: 5, motor: 0 },
        conclusion: "Shock Medular Alto (Tetraplejia). Trauma cervical severo. El paciente está neurológicamente 'intacto' a nivel cerebral (O4, V5), pero desconectado del cuerpo. Puntuar M1 sería un error clínico grave, ya que indicaría daño cerebral. Se marca como No Valorable.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado. Describe sus síntomas con precisión.
Motora(NV): No Valorable. La lesión medular impide la transmisión de la orden. No es un coma.
    `.trim(),
    },
    {
        id: 'global-29',
        title: 'Murph',
        category: 'Metabólico (Golpe de Calor)',
        narrative: "Box de CrossFit, ambiente cargado, olor a caucho quemado y sudor rancio. Un atleta ha colapsado tras 45 minutos de intensidad extrema sin aire acondicionado. Está en el suelo, piel seca y ardiendo (anhidrosis). Tiembla. Le llamas y te mira con los ojos entrecerrados, vidriosos. Murmura: '...burpees... faltan cinco...'. Al pellizcarle el trapecio, se lleva la mano torpemente al cuello intentando quitarte, pero sin fuerza, y vuelve a caer.",
        correctGCS: { ocular: 4, verbal: 4, motor: 5 },
        conclusion: "Golpe de Calor por Esfuerzo. La piel seca y caliente es signo de fallo termorregulador. La confusión (V4) indica sufrimiento cerebral por hipertermia. Localiza el dolor (M5) pero está agotado.",
        gcsJustification: `
Ocular(4): Espontánea. Mantiene los ojos abiertos aunque la mirada sea vidriosa.
Verbal(4): Confuso. Desorientado en el contexto de la emergencia, sigue en su bucle de entrenamiento.
Motora(5): Localiza el dolor. Identifica la fuente del estímulo y trata de retirarla.
    `.trim(),
    },
    {
        id: 'global-30',
        title: 'Pre-Workout',
        category: 'Cardiovascular (Síncope)',
        narrative: "Vestuarios. Un joven de 20 años ha caído desplomado tras tomarse un 'cazo doble' de suplemento pre-entreno. Lo encuentras en el banco. Está pálido como el papel. Acaba de recuperar la consciencia, pero está muy lento. Le preguntas qué ha pasado y te dice: 'No sé... se me apagó la luz'. Le pides que levante los brazos y lo hace, aunque tiembla. Sus pupilas están dilatadas (por estimulantes) pero reaccionan.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Síncope recuperado (posible arritmia por estimulantes). Aunque está lento (bradipsiquia), su GCS es 15. La palidez y la amnesia del episodio son típicas del síncope. Neurologicamente íntegro.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado. Aunque lento, sabe quién es y reconoce que ha perdido el conocimiento.
Motora(6): Obedece órdenes correctamente.
    `.trim(),
    },
    {
        id: 'global-31',
        title: 'La Lona',
        category: 'Trauma (Conmoción)',
        narrative: "Velada nocturna. Ruido ensordecedor del público. Un luchador ha recibido una patada circular en la sien y ha caído plomizo. Llegas al ring en 10 segundos. El luchador está boca arriba, con los ojos cerrados. Tiene los brazos estirados rígidamente hacia el techo (Postura de Esgrima). No responde a nada. Tras 30 segundos, empieza a moverse, abre los ojos y pregunta repetitivamente: 'He ganado? He ganado?'.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "TCE con Conmoción Cerebral (Fenómeno de 'Fencing Response' transitorio). La rigidez inicial fue una desconexión breve del tronco. Ahora, en tu valoración actual, está despierto pero amnésico y repetitivo (loop confusional).",
        gcsJustification: `
Ocular(4): Espontánea (en el momento de tu valoración actual).
Verbal(4): Confuso. Preguntas repetitivas y amnesia del evento.
Motora(6): Obedece órdenes (si le pides que se tumbe, lo hace).
    `.trim(),
    },
    {
        id: 'global-32',
        title: 'Intervalo Lúcido',
        category: 'Neurológico (Hematoma Epidural)',
        narrative: "Vestuario del luchador. Ganó el combate hace 20 minutos por KO, pero ahora se queja de un dolor de cabeza explosivo. 'Me va a estallar', dice mientras vomita en una papelera. De repente, deja de hablar. Se tumba en el banco. Sus ojos se cierran. Le gritas y no responde. Le aplicas presión mandibular fuerte: sus ojos permanecen cerrados, emite un gruñido ininteligible y su brazo izquierdo se flexiona rígidamente sobre el pecho, rotando la muñeca hacia dentro.",
        correctGCS: { ocular: 1, verbal: 2, motor: 3 },
        conclusion: "Hematoma Epidural (Sangrado Arterial). El clásico 'habla y muere'. Pasó de estar bien (intervalo lúcido) a herniación cerebral rápida. La flexión anormal (decorticación) indica daño severo en la vía motora superior.",
        gcsJustification: `
Ocular(1): Ninguna. No abre ojos al dolor.
Verbal(2): Sonidos incomprensibles.
Motora(3): Flexión anormal (Decorticación). Signo de gravedad extrema.
    `.trim(),
    },
    {
        id: 'global-33',
        title: 'Cisne Negro',
        category: 'Metabólico (Hipoglucemia)',
        narrative: "Bambalinas del teatro. Una bailarina de 14 años, extremadamente delgada, se ha desmayado al salir de escena. Está en el suelo, pálida y con sudor frío empapando el tutú. Al estimularla, abre los ojos y te mira con terror, pero no focaliza. Le preguntas su nombre y balbucea: '...azúcar... frío...'. Al intentar pincharle el dedo para la glucemia, retira la mano bruscamente por instinto, pero no te empuja.",
        correctGCS: { ocular: 4, verbal: 4, motor: 4 },
        conclusion: "Hipoglucemia severa (Trastorno conducta alimentaria). La sudoración fría (diaforesis) y la delgadez son pistas clave. Su cerebro está sin combustible (neuroglucopenia). Responde retirando al dolor (instinto) pero no procesa lo suficiente para localizar.",
        gcsJustification: `
Ocular(4): Espontánea. Abre los ojos tras el estímulo y los mantiene abiertos.
Verbal(4): Confusa. Palabras coherentes ("azúcar") pero desorientada.
Motora(4): Retirada. Aleja la mano del pinchazo pero no localiza la fuente.
    `.trim(),
    },
    {
        id: 'global-34',
        title: 'Pánico Escénico',
        category: 'Psicógeno (Conversivo)',
        narrative: "Camerino. Una niña de 12 años está sentada llorando histéricamente. De repente, se queda rígida y cae al sofá. No responde a la voz ni a los gritos. Tiene los ojos cerrados. Al intentar abrírselos, notas que los aprieta con fuerza (resistencia activa). Levantas su brazo sobre su cara y lo sueltas: la mano cae rápida, pero se desvía en el último centímetro para golpear el sofá junto a su oreja, evitando su nariz.",
        correctGCS: { ocular: 0, verbal: 1, motor: 6 },
        conclusion: "Crisis psicógena (Trastorno Conversivo). La paciente no está en coma. La resistencia activa a la apertura ocular y el signo de la mano (evitar golpearse la cara) demuestran que su cerebro está despierto y protegiéndola inconscientemente.",
        gcsJustification: `
Ocular(NV): Resistencia activa (blefaroespasmo). Impide valoración orgánica.
Verbal(1): Ninguna respuesta (mutismo).
Motora(6): Obedece/Voluntario. La maniobra de la mano demuestra control motor voluntario preservado (evitación).
    `.trim(),
    },
    {
        id: 'global-35',
        title: 'El Silencio de la Cuna',
        category: 'Pediatría (Sepsis)',
        narrative: "Guardería. Aviso por bebé de 6 meses 'muy quieto'. Lo encuentras en la cuna. Está pálido, moteado (cutis marmorata) y con fiebre alta. No se mueve al cogerlo en brazos, está como un muñeco de trapo (hipotonía severa). Al pellizcarle la planta del pie, no retira la pierna, ni llora, ni abre los ojos. Solo emite un gemido casi inaudible con cada respiración.",
        correctGCS: { ocular: 1, verbal: 2, motor: 1 },
        conclusion: "Sepsis Meningocócica. El estado es crítico. La hipotonía, el color moteado y la falta de respuesta al dolor indican un shock séptico avanzado con afectación neurológica profunda.",
        gcsJustification: `
Ocular(1): No abre los ojos al dolor.
Verbal(2): Gemidos (V2 en escala pediátrica modificada).
Motora(1): Flacidez total. No retira ni flexiona.
        `.trim(),
    },
    {
        id: 'global-36',
        title: 'La Fiesta de la Espuma',
        category: 'Tóxicos (GHB)',
        narrative: "Discoteca. En el suelo del baño yace un joven. Sus amigos dicen que solo bebió una copa. Está profundamente inconsciente (coma arreactivo). No responde a nada. De repente, mientras le valoras, se despierta de golpe, se sienta, te mira confuso y dice: '¿Dónde está mi copa?'. Se levanta tambaleándose y trata de irse, pero vuelve a caer al suelo dormido en segundos.",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "Intoxicación por GHB (Éxtasis líquido). Característico efecto 'on-off'. Pasan del coma profundo (GCS 3) a la vigilia agitada y vuelta al coma en minutos. Durante la fase de coma, la puntuación es 3.",
        gcsJustification: `
Ocular(1): En fase coma: Ninguna.
Verbal(1): En fase coma: Ninguna.
Motora(1): En fase coma: Ninguna. (Nota: El caso describe la fluctuación, pero se puntúa el estado peor o actual de inconsciencia).
        `.trim(),
    },
    {
        id: 'global-37',
        title: 'El Hombre de Hielo',
        category: 'Neurológico (Parkinson/Rigidez)',
        narrative: "Domicilio. Paciente con Parkinson avanzado. La familia llama porque 'se ha quedado congelado'. Está sentado, ojos abiertos, mirando fijo. No parpadea. Le hablas y no contesta. Le pides que mueva la mano y no lo hace. Al intentar moverle tú el brazo, está duro como una piedra (rigidez en rueda dentada). Al pellizcarle fuerte, una lágrima cae por su mejilla y sus ojos te siguen con desesperación, pero su cuerpo no se mueve.",
        correctGCS: { ocular: 4, verbal: 1, motor: 1 },
        conclusion: "Crisis de Acinesia Aguda (Bloqueo off severo). El paciente está consciente (te mira, llora), pero su cuerpo es una prisión rígida. No es un coma. La GCS engaña aquí. Clínicamente está despierto, pero motoramente es un 1 por rigidez, no por flacidez.",
        gcsJustification: `
Ocular(4): Espontánea. Rastrea con la mirada.
Verbal(1): Ninguna (Anartria/Afonia por rigidez).
Motora(1): Ninguna (Rigidez extrema). (Nota: Algunos protocolos marcarían NV por enfermedad motora previa agudizada).
        `.trim(),
    },
    {
        id: 'global-38',
        title: 'El Peso de la Culpa',
        category: 'Psicógeno',
        narrative: "Iglesia. Una mujer grita durante la misa y cae al suelo 'paralizada'. Dice que Dios la ha castigado. Está despierta, llorando. 'No puedo mover las piernas, pesan mil kilos'. Le pides que las mueva: nada. Haces la maniobra de Hoover (pones la mano bajo su talón sano y le pides que levante la pierna paralizada). No sientes presión en tu mano.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Parálisis Funcional (Trastorno Conversivo). El signo de Hoover positivo (falta de empuje contralateral) confirma que no es orgánico. Su cerebro 'sabe' mover las piernas, pero hay un bloqueo funcional. Se puntúa M6 porque obedece con el resto del cuerpo y la parálisis no es real.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientada.
Motora(6): Obedece órdenes (con los brazos, cabeza, etc.). La paraplejia es funcional.
        `.trim(),
    },
    {
        id: 'global-39',
        title: 'Sangre en el Asfalto',
        category: 'Trauma (Moto)',
        narrative: "Carretera secundaria. Motorista accidentado. El casco ha salido despedido. El paciente está combativo, peleándose con los sanitarios. Tiene otorragia (sangre en el oído). '¡Dejadme en paz! ¡Me voy a casa!', grita, pero no es capaz de ponerse en pie. Cuando intentas ponerle el collarín, te agarra las manos con fuerza y te las aparta, mirándote con furia.",
        correctGCS: { ocular: 4, verbal: 4, motor: 5 },
        conclusion: "TCE con Fractura de Base de Cráneo (Otorragia) y agitación. La combatividad es signo de hipoxia o lesión frontal. Localiza el dolor (te quita las manos) pero no obedece (no se deja tratar).",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso. Desorientado en la situación de emergencia.
Motora(5): Localiza. Identifica la fuente de restricción (tus manos) y las retira activamente.
        `.trim(),
    },
    {
        id: 'global-40',
        title: 'La Última Dosis',
        category: 'Tóxicos (Heroína)',
        narrative: "Callejón trasero. Junto a un contenedor, un hombre yace con una jeringuilla clavada en el brazo. Cianosis labial. Respiración 4 rpm. Pupilas mióticas. No responde a nada. Al aplicar dolor intenso, hay una leve extensión de los brazos, muy débil, y luego vuelve a la flacidez total.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "Sobredosis de Heroína. La hipoxia cerebral es tan severa que está empezando a mostrar signos de descerebración (extensión) por sufrimiento de tronco, o es una respuesta agonica final. Situación de parada inminente.",
        gcsJustification: `
Ocular(1): Ninguna.
Verbal(1): Ninguna.
Motora(2): Extensión. Signo de gravedad extrema por hipoxia mantenida.
        `.trim(),
    },
    {
        id: 'global-41',
        title: 'El Laberinto',
        category: 'Geriatría (Demencia)',
        narrative: "Comisaría. Han encontrado a un anciano en pijama deambulando de noche. Está tranquilo sentado en una silla. Te mira y sonríe. '¿Cómo se llama?', le preguntas. 'Hace buen día para pescar truchas', responde. '¿Sabe dónde está?'. 'Mi madre me espera para merendar'. Se levanta y camina hacia la puerta cuando le dices 'Siéntese, por favor', ignorando tu orden completamente.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "Demencia (Alzheimer) en fase de vagabundeo. No es un coma ni un TCE. Su 'confusión' es crónica (V4). No obedece órdenes complejas por falta de procesamiento cognitivo, pero su función motora es voluntaria y espontánea (M6).",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso (Crónico). Desorientado en tiempo y espacio.
Motora(6): Obedece/Espontáneo. Deambula con propósito (ir a la puerta), aunque no siga instrucciones verbales.
        `.trim(),
    },
    {
        id: 'global-42',
        title: 'La Dulce Muerte',
        category: 'Psiquiátrico/Tóxico',
        narrative: "Habitación cerrada. Una chica joven ha intentado suicidarse inyectándose una pluma entera de insulina rápida. La encuentras sudando profusamente, temblando. Al estimularla, te mira con agresividad y grita: '¡Déjame morir!'. Intenta morderte cuando le acercas la glucosa.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Intento autolítico + Hipoglucemia incipiente. A pesar de la hipoglucemia (sudor, temblor), su nivel de conciencia aun es alto (te habla, sabe lo que quiere -morir-, y se defiende dirigidamente). La agresividad es típica de la neuroglucopenia.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientada (en su contexto suicida). Sabe lo que pasa.
Motora(6): Obedece/Intencionado. El intento de mordisco es un acto voluntario de rechazo.
        `.trim(),
    },
    {
        id: 'global-43',
        title: 'El Grito Ahogado',
        category: 'Respiratorio (OVACE)',
        narrative: "Restaurante. Un cliente se ha levanto llevándose las manos al cuello (Signo de la asfixia). Está rojo, con los ojos desorbitados, lagrimeando. Le preguntas: '¿Te ahogas?'. Asiente frenéticamente con la cabeza. Intenta hablar pero no sale sonido. Está de pie, consciente.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "Obstrucción de Vía Aérea (Atragantamiento). El paciente está plenamente consciente (O4, M6 - asiente, obedece). La falta de voz es mecánica, no neurológica. Requiere Heimlich inmediato.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(NV): Imposible por obstrucción mecánica.
Motora(6): Obedece. Asiente a preguntas y colabora.
        `.trim(),
    },
    {
        id: 'global-44',
        title: 'La Mirada de las Mil Yardas',
        category: 'Psiquiátrico (TEPT)',
        narrative: "Accidente de tráfico múltiple con fallecidos. Un conductor ileso está sentado en el quitamiedos, mirando a la nada. El caos le rodea. Le hablas y no te mira. Le gritas y no parpadea. Le pellizcas el brazo y ni se inmuta, no retira, no gime. Sus constantes son normales. Te pones frente a él y chasqueas los dedos: sus ojos te siguen un instante y vuelven al vacío.",
        correctGCS: { ocular: 4, verbal: 1, motor: 6 },
        conclusion: "Reacción de Estrés Agudo / Disociación. No es un daño cerebral. Es un 'apagón' psicológico ante el trauma. Mantiene la postura (tonus muscular normal), lo que descarta M1. Se considera que obedece (te sigue con la mirada) o al menos tiene motricidad conservada.",
        gcsJustification: `
Ocular(4): Espontánea. Ojos abiertos fijos.
Verbal(1): Ninguna (Mutismo disociativo).
Motora(6): Obedece/Normal. Mantiene postura sedente, tono normal. (Nota: Es un caso límite, algunos puntuarían M1, pero la ausencia de flacidez es clave).
        `.trim(),
    },
    {
        id: 'global-45',
        title: 'El Veneno Invisible',
        category: 'Tóxicos (Organofosforados)',
        narrative: "Campo de cultivo. Fumigador encontrado inconsciente. Hay un olor químico fuerte. El paciente tiene fasciculaciones (temblores musculares bajo la piel) en todo el cuerpo. Lagrimea y babea excesivamente. Pupilas puntiformes. Al dolor, retira débilmente la extremidad, pero los temblores no cesan.",
        correctGCS: { ocular: 1, verbal: 1, motor: 4 },
        conclusion: "Intoxicación por Organofosforados (Síndrome Colinérgico). Crisis de receptores. El paciente está en coma toxicológico. La retirada es la única respuesta defensiva que conserva.",
        gcsJustification: `
Ocular(1): Ninguna.
Verbal(1): Ninguna.
Motora(4): Retirada débil.
        `.trim(),
    },
    {
        id: 'global-46',
        title: 'La Caída del Rey',
        category: 'Geriatría (Hematoma Subdural)',
        narrative: "Domicilio. Anciano que 'se cae mucho'. Hoy no se levanta. Está en el suelo. Te mira cuando entras. 'Ayúdame, hijo, que no me tengo', dice. Le preguntas qué día es. 'Pues... domingo... creo'. Es jueves. Notas que arrastra las palabras y que el lado izquierdo de su cara está caído. Al pedirle que te de la mano izquierda, la mueve muy poco.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "Hematoma Subdural Crónico (o Ictus). La focalidad (parálisis facial, debilidad) y la desorientación temporal son típicas. A pesar de la focalidad motora, obedece órdenes con el lado sano (o intenta con el malo), por lo que es M6.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso en tiempo.
Motora(6): Obedece órdenes.
        `.trim(),
    },
    {
        id: 'global-47',
        title: 'Fiebre del Sábado Noche',
        category: 'Infeccioso (Meningitis)',
        narrative: "Urgencias. Joven de 18 años traído por cefalea y fiebre. Mientras esperaban, 'se ha quedado traspuesto'. Al acercarte, ves manchas rojas (petequias) en su pecho. Tiene rigidez de nuca. No abre los ojos al llamarle. Al presionar el lecho ungueal, gime de dolor y se lleva la mano a la cabeza, frotándose la frente como si le doliera horrores.",
        correctGCS: { ocular: 2, verbal: 2, motor: 5 },
        conclusion: "Meningitis Meningocócica. Emergencia vital (petequias = sepsis). La rigidez de nuca y la fotofobia (ojos cerrados) son signos meníngeos. Localiza el dolor (la cabeza es el origen de su mal).",
        gcsJustification: `
Ocular(2): Al dolor.
Verbal(2): Sonidos/Quejidos.
Motora(5): Localiza. Se toca la zona dolorida (cabeza) o intenta quitarte.
        `.trim(),
    },
    {
        id: 'global-48',
        title: 'El Corazón Roto',
        category: 'Cardio/Psico',
        narrative: "Funeral. La viuda se desploma. Está en el suelo, hiperventilando. '¡Me duele el pecho, me muero!', grita entre jadeos. Tiene las manos agarrotadas en forma de garra (espasmo carpopedal). Le pides que respire despacio. Te mira y asiente, intentándolo, pero sigue jadeando.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Crisis de Ansiedad / Hiperventilación (Tetania). Aunque refiere dolor torácico (descartar IAM/Takotsubo), su estado neurológico es perfecto. Las manos en garra son por la alcalosis respiratoria, no por daño cerebral.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientada.
Motora(6): Obedece órdenes.
        `.trim(),
    },
    {
        id: 'global-49',
        title: 'La Oscuridad Blanca',
        category: 'Ambiental (Nieve)',
        narrative: "Estación de esquí. Un esquiador sin gafas de sol pide ayuda. Tiene los ojos cerrados y llorosos. '¡No veo nada! ¡Me queman los ojos!', grita. Está perfectamente orientado. Le pides que abra los ojos para mirarle. '¡No puedo! ¡Duele mucho!', y aprieta los párpados con fuerza para evitar la luz.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Oftalmia de la Nieve (Quemadura solar corneal). No abre los ojos por dolor (fotofobia extrema), no por coma. Neurológicamente es un O4 (o O-NV por causa local), pero dado que interactúa y se le considera 'vigil', se asume la consciencia.",
        gcsJustification: `
Ocular(4): Espontánea (funcionalmente). Mantiene los ojos cerrados por dolor local, no por alteración de conciencia.
Verbal(5): Orientado.
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-50',
        title: 'El Soldado Caído',
        category: 'Ambiental (Golpe de Calor)',
        narrative: "Maniobras militares. Un soldado se ha desmayado en la marcha. Piel caliente y húmeda. Está en el suelo, vomitando. Le hablas y responde lento: 'Mi sargento... no siento las piernas...'. No sabe dónde está. Al pellizcarle, retira el brazo torpemente.",
        correctGCS: { ocular: 3, verbal: 4, motor: 4 },
        conclusion: "Agotamiento por Calor (fase previa al Golpe de Calor, aún suda). La confusión y la debilidad son signos de hipoperfusión cerebral. Retira al dolor pero no localiza con precisión por la debilidad extrema.",
        gcsJustification: `
Ocular(3): A la voz.
Verbal(4): Confuso.
Motora(4): Retirada.
        `.trim(),
    },
    {
        id: 'global-51',
        title: 'La Voz en la Cabeza',
        category: 'Psiquiátrico',
        narrative: "Calle. Un hombre joven grita a una pared. '¡Dejadme en paz!'. Te acercas. Te mira con desconfianza. '¿Tú también los oyes?', te pregunta. Sabe que está en la calle, pero insiste en que la CIA le vigila desde las alcantarillas. Le pides que te de la documentación y te la tira al suelo con desprecio.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "Brote Psicótico (Esquizofrenia). Está despierto. Obedece (te da el DNI, aunque sea de mala gana). Su verbal se considera Confuso (V4) porque el contenido delirante le desconecta de la realidad, aunque esté orientado en espacio.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso (Delirante).
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-52',
        title: 'El Calambre',
        category: 'Infeccioso (Tétanos)',
        narrative: "Jardinería. Un hombre se ha clavado un rastrillo oxidado hace días. Hoy acude por 'dolor de espalda'. Mientras le exploras, un ruido fuerte hace que se arquee en la camilla (opistótonos), con la mandíbula cerrada a cal y canto (trismus). Te mira con terror a través de los dientes apretados. Está sudando. 'Ayu...da...', sisea entre dientes.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Tétanos. La toxina causa espasmos musculares gravísimos, pero NO afecta el nivel de conciencia. El paciente está despierto, orientado y aterrorizado dentro de su cuerpo rígido. Puede obedecer (si el espasmo le deja).",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado (aunque hable mal por el trismus).
Motora(6): Obedece (intenta moverse a la orden, aunque los espasmos interfieran).
        `.trim(),
    },
    {
        id: 'global-53',
        title: 'La Resaca Mortal',
        category: 'Tóxicos (Metanol)',
        narrative: "Fiesta clandestina con alcohol destilado casero. Un asistente dice que 've niebla blanca'. Está sentado, muy somnoliento. Respiración rápida y profunda (Kussmaul). Le llamas y abre los ojos. 'No veo... está todo blanco', dice. Se vuelve a dormir. Al pellizcarle, se despierta y te empuja la mano.",
        correctGCS: { ocular: 3, verbal: 4, motor: 5 },
        conclusion: "Intoxicación por Metanol. La 'visión de nieve' es patognomónica. Acidosis metabólica severa (respiración Kussmaul). Está somnoliento (obnubilado) pero localiza el dolor.",
        gcsJustification: `
Ocular(3): A la voz.
Verbal(4): Confuso (por la ceguera y la acidosis).
Motora(5): Localiza.
        `.trim(),
    },
    {
        id: 'global-54',
        title: 'El Nudo en la Garganta',
        category: 'Anafilaxia',
        narrative: "Paciente hipertenso que toma Enalapril. Se ha despertado con la lengua hinchada. Al llegar, la lengua le sale de la boca, gigante. No puede hablar. Te mira con angustia, señalándose el cuello. Respira con estridor. Le dices: 'Si me entiendes, cierra el puño'. Lo hace al instante.",
        correctGCS: { ocular: 4, verbal: 0, motor: 6 },
        conclusion: "Angioedema por IECAs (bradiquinina). No es alérgico (no hay urticaria), es un efecto adverso del fármaco. La vía aérea está comprometida. Conciencia intacta.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(NV): Imposible por macroglosia (lengua gigante).
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-55',
        title: 'La Estatua de Sal',
        category: 'Psiquiátrico (Catatonia)',
        narrative: "Psiquiátrico. Paciente esquizofrénico que ha dejado la medicación. Está de pie en el pasillo, en una postura extraña, como una grulla. No se mueve. No parpadea. No responde. Si le levantas un brazo, se queda ahí arriba (flexibilidad cérea), desafiando la gravedad. No hace nada al dolor.",
        correctGCS: { ocular: 4, verbal: 1, motor: 1 },
        conclusion: "Catatonia. Es un síndrome psicomotor. Técnicamente tiene ojos abiertos (O4) pero ninguna conexión (V1, M1). Es un desafío para la GCS.",
        gcsJustification: `
Ocular(4): Espontánea (ojos abiertos fijos).
Verbal(1): Mutismo.
Motora(1): Ninguna (o M4/M6 si se considera que mantener la postura es 'obedecer' a la gravedad, pero en GCS estricto es ausencia de respuesta al estímulo externo).
        `.trim(),
    },
    {
        id: 'global-56',
        title: 'El Golpe de Gracia',
        category: 'Trauma (Occipital)',
        narrative: "Caída hacia atrás golpeándose la nuca. El paciente está sentado, aturdido. 'No veo nada', repite. Le haces pruebas: sus pupilas reaccionan a la luz perfectamente (reflejo intacto), pero él insiste en que está ciego total. Por lo demás, habla y se mueve bien.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Ceguera Cortical (Golpe en lóbulo occipital). Los ojos funcionan (pupilas OK), pero el cerebro no procesa la imagen. GCS 15, pero ciego.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado.
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-57',
        title: 'La Risa Floja',
        category: 'Neurológico (Pseudobulbar)',
        narrative: "Paciente con ELA avanzada. La familia llama porque 'se ahoga de risa'. El paciente está llorando y riendo a carcajadas al mismo tiempo, sin motivo aparente. Te mira con ojos de súplica, como pidiendo perdón, mientras su cara se contorsiona en una risa forzada. Obedece cuando le pides que cierre los ojos.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Afecto Pseudobulbar (Labilidad emocional). Desconexión entre la emoción sentida y la expresión facial. El paciente está lúcido (GCS 15) pero atrapado en una expresión emocional descontrolada.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado (si puede hablar entre risas, el contenido es coherente).
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-58',
        title: 'El Temblor',
        category: 'Tóxicos (Abstinencia)',
        narrative: "Alcohólico crónico que lleva 2 días sin beber por una gastritis. Está en la cama, empapado en sudor, temblando violentamente. Ve 'bichos' por las paredes. Te confunde con un demonio. Al intentar sujetarle para que no se caiga, lucha contra ti con una fuerza descomunal, gritando pánico.",
        correctGCS: { ocular: 4, verbal: 4, motor: 5 },
        conclusion: "Delirium Tremens. Abstinencia alcohólica grave. Mortal si no se trata. Alucinaciones visuales (zoopsias), agitación, sudoración. Confuso (V4) y localiza/lucha (M5).",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso (Alucinado).
Motora(5): Localiza (combativo).
        `.trim(),
    },
    {
        id: 'global-59',
        title: 'La Máscara',
        category: 'Neurológico (Miastenia)',
        narrative: "Mujer joven que acude por 'cansancio'. Mientras habla contigo, sus párpados se van cayendo (ptosis) hasta cerrarse. Su voz se vuelve gangosa y débil hasta desaparecer. Deja de respirar bien. Parece que se duerme. Le pides que abra los ojos: 'No... puedo...', susurra. Levanta el brazo un poco y se le cae.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Crisis Miasténica (Miastenia Gravis). Agotamiento muscular extremo. El cerebro está perfecto (GCS 15 teórica), pero los músculos 'se apagan'. Fallo respiratorio inminente. No es sueño, es parálisis.",
        gcsJustification: `
Ocular(4): Espontánea (intención). Los cierra por debilidad, no por sueño.
Verbal(5): Orientada.
Motora(6): Obedece (intención).
        `.trim(),
    },
    {
        id: 'global-60',
        title: 'El Buzo',
        category: 'Ambiental (Descompresión)',
        narrative: "Buceador profesional. Ha subido de emergencia. En el barco, empieza a toser sangre y se desploma. Convulsiona. Ahora está en coma. Pupilas desiguales (anisocoria). No respira. Al dolor, descerebra (extensión rígida).",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "Embolismo Gaseoso Arterial (EGA). El aire ha pasado a la sangre y ha ido al cerebro (ictus gaseoso masivo). Gravedad extrema.",
        gcsJustification: `
Ocular(1): Ninguna.
Verbal(1): Ninguna.
Motora(2): Descerebración.
        `.trim(),
    },
    {
        id: 'global-61',
        title: 'El Silencio de la Radio',
        category: 'Casos Globales',
        narrative: "Vigilante de seguridad nocturno. Lo encuentran sentado frente a los monitores, inmóvil. No responde a la radio. Al llegar, tiene los ojos abiertos, fijos. No parpadea. No respira. No tiene pulso. Su piel está fría y rígida (rigor mortis incipiente en mandíbula).",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "Muerte biológica. Parada cardiaca no presenciada de larga evolución. GCS 3. No se inicia RCP por signos de muerte cierta.",
        gcsJustification: `
Ocular(1): Ninguna (Ojos abiertos cadavéricos, no es O4).
Verbal(1): Ninguna.
Motora(1): Ninguna.
        `.trim(),
    },
    {
        id: 'global-62',
        title: 'Descenso al Infierno',
        category: 'Mountain Bike',
        narrative: "Campeonato de Downhill (DH). Un corredor ha impactado contra un árbol a 50 km/h en una sección técnica ('Rock Garden'). El casco integral está partido en dos. El piloto yace en una posición antinatural entre las rocas. Respiración irregular (Cheyne-Stokes). No responde a gritos. Al aplicar presión en el trapecio, sus brazos se extienden rígidamente y rotan hacia dentro, con las piernas tensas. Sangre por el oído (otorragia).",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "TCE Severo con fractura de base de cráneo y daño en tronco encefálico. La postura de descerebración (extensión) y el patrón respiratorio indican un pronóstico crítico. Código Trauma inminente.",
        gcsJustification: `
Ocular(1): No abre los ojos ante ningún estímulo.
Verbal(1): Silencio absoluto.
Motora(2): Descerebración. Extensión anormal ante el dolor.
        `.trim(),
    },
    {
        id: 'global-63',
        title: 'La Pájara',
        category: 'Mountain Bike',
        narrative: "Ruta de ultramaratón XC. Kilómetro 80. Encuentras a un ciclista sentado en el sendero, con la mirada perdida y temblando. Tiene geles energéticos sin abrir en la mano. Al preguntarle si está bien, te mira con agresividad y balbucea: '...los pedales... azules... no giran...'. Intenta ponerse de pie pero se cae. Al intentar ayudarle, te empuja la mano torpemente.",
        correctGCS: { ocular: 4, verbal: 3, motor: 5 },
        conclusion: "Hipoglucemia severa por agotamiento de glucógeno ('La Pájara'). Neuroglucopenia causando confusión y agresividad. Necesita glucosa rápida. No es un TCE.",
        gcsJustification: `
Ocular(4): Espontánea. Mantiene los ojos abiertos.
Verbal(3): Palabras inapropiadas. Incoherente y fuera de contexto.
Motora(5): Localiza el dolor/contacto. Rechaza la ayuda de forma dirigida.
        `.trim(),
    },
    {
        id: 'global-64',
        title: 'Raíces Negras',
        category: 'Mountain Bike',
        narrative: "Sendero boscoso, húmedo tras la lluvia. Un ciclista ha resbalado en una raíz mojada y ha caído de cabeza, comprimiendo el cuello. Está boca arriba, consciente, inmóvil. 'No siento el cuerpo... quítame la bici de encima', te pide con voz calmada pero aterrorizada. La bici está a dos metros de él. No mueve nada del cuello para abajo. Le pellizcas el brazo: ni se inmuta.",
        correctGCS: { ocular: 4, verbal: 5, motor: 0 },
        conclusion: "Lesión Medular Cervical (Tetraplejia). La 'ilusión' de tener la bici encima es por la pérdida de propiocepción. GCS Motor NV (no es M1, es parálisis). Está orientado y vigil.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado.
Motora(NV): No Valorable por lesión medular.
        `.trim(),
    },
    {
        id: 'global-65',
        title: 'El Salto Doble',
        category: 'Mountain Bike',
        narrative: "Bike Park. Un 'rider' se ha quedado corto en un salto doble grande. Ha impactado con el pecho contra el manillar y luego ha caído 3 metros. Está en el suelo, pálido, sudoroso, agarrándose el costado derecho. 'Me duele... mucho... no puedo... aire...', jadea. Está alerta. Le pides que levante las piernas y lo hace, aunque con dolor.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Trauma Torácico/Abdominal (Posible Neumotórax o rotura hepática). Shock traumático incipiente (palidez, sudor). Neurológicamente intacto (GCS 15), el problema es ventilatorio/circulatorio.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado.
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-66',
        title: 'Golpe de Calor en la Cima',
        category: 'Mountain Bike',
        narrative: "Ascenso en verano, 35ºC, sin sombra. Un ciclista está tirado junto a su bici en la cuneta. Piel roja, seca y muy caliente. No responde a la voz. Al pellizcarle el trapecio, abre los ojos, te mira con terror y grita: '¡Fuego! ¡Todo es fuego!'. Luego se intenta quitar el maillot desesperadamente, pero sus movimientos son torpes y no consigue desabrocharlo.",
        correctGCS: { ocular: 2, verbal: 3, motor: 5 },
        conclusion: "Golpe de Calor. Fallo termorregulador (piel seca). Delirio por hipertermia cerebral. Localiza el 'dolor' (el calor de su ropa) intentando desnudarse.",
        gcsJustification: `
Ocular(2): Al dolor.
Verbal(3): Palabras inapropiadas (Delirio).
Motora(5): Localiza (intenta quitarse la ropa que le agobia).
        `.trim(),
    },
    {
        id: 'global-67',
        title: 'Rock Garden',
        category: 'Mountain Bike',
        narrative: "Caída fea en una zona de piedras. El casco tiene un bollo importante. El ciclista está sentado, aturdido. 'Estoy bien, estoy bien', repite. Le preguntas qué ha pasado. 'Me he caído'. Cinco segundos después: '¿Qué hago aquí?'. Le explicas que se ha caído. 'Ah, vale'. Diez segundos después: '¿Pero qué ha pasado? ¿Por qué está la bici así?'. Obedece órdenes perfectamenente.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "Conmoción Cerebral (Amnesia Anterógrada). El bucle repetitivo es clásico. Está confuso (V4) aunque parezca conversar normal, porque no retiene la información ('memoria de pez').",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso (Amnesia repetitiva).
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-68',
        title: 'El Manillar',
        category: 'Mountain Bike',
        narrative: "Frenazo brusco y 'salir por las orejas' (OTB). El ciclista se ha clavado el extremo del manillar en la boca del estómago (plexo solar). Está en posición fetal, sin poder respirar, con los ojos desorbitados. No puede hablar por el espasmo diafragmático. Le dices: 'Tranquilo, respira despacio'. Él asiente y te aprieta la mano para que no le muevas.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Traumatismo abdominal cerrado / Espasmo diafragmático ('quedarse sin aire'). GCS 15 teórica (V5 aunque no hable por el espasmo momentáneo, se comunica y asiente). Descartar lesión interna grave.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado (se comunica por gestos coherentes mientras recupera el aliento).
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-69',
        title: 'Hipotermia en el Barro',
        category: 'Mountain Bike',
        narrative: "Carrera de invierno con lluvia y barro. Un corredor ha roto la cadena y lleva 1 hora parado intentando arreglarla bajo la lluvia. Lo encuentras sentado, ya no tirita. Está apático. 'Déjame... dormir...', murmura lentamente. Al pellizcarle, retira el brazo muy despacio, sin fuerza.",
        correctGCS: { ocular: 3, verbal: 4, motor: 4 },
        conclusion: "Hipotermia Moderada-Grave. El cese del temblor (tiritona) es mal signo. Bradipsiquia (lentitud mental) y apatía. Retirada lenta al dolor.",
        gcsJustification: `
Ocular(3): A la voz.
Verbal(4): Confuso/Palabras incomprensibles (balbuceo por frío). Se acepta V4 si frase coherente, o V2 si ininteligible. Aquí 'déjame dormir' es V4.
Motora(4): Retirada.
        `.trim(),
    },
    {
        id: 'global-70',
        title: 'Sprint Final',
        category: 'Mountain Bike',
        narrative: "Llegada a meta de una carrera XC. Un corredor cruza la línea y se desploma. No es cansancio. No se mueve. Al llegar tú, está cianótico. No respira (apnea). No tiene pulso carotídeo. Pupilas midriáticas arreactivas.",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "Parada Cardiorrespiratoria (Muerte Súbita del deportista). Fibrilación Ventricular probable. Iniciar RCP y DESA ya.",
        gcsJustification: `
Ocular(1): Ninguna.
Verbal(1): Ninguna.
Motora(1): Ninguna.
        `.trim(),
    },
    {
        id: 'global-71',
        title: 'Bloqueo en la Trialera',
        category: 'Mountain Bike',
        narrative: "Paso técnico muy expuesto con barranco al lado. Un ciclista está abrazado a una roca, hiperventilando, llorando. '¡Me voy a matar, no puedo bajar, no puedo!'. Tiene parestesias (hormigueo) en las manos y la boca ('hocico de carpa'). Está rígido. Le pides que respire en una bolsa (o con las manos juntas).",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Crisis de Ansiedad / Pánico (Bloqueo mental). Hiperventilación causando tetania (parestesias/manos rígidas). Neurológicamente sano.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado.
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-72',
        title: 'El Exorcista',
        category: 'Infeccioso (Neurología)',
        narrative: "Aviso por 'niña poseída'. La madre dice que la niña lleva días rara y ahora está 'catatónica'. La encuentras en la cama, con los ojos abiertos y fijos en el techo. No responde a nada. Tiene movimientos extraños con la boca (discinesias orofaciales), como si masticara aire. Le levantas el brazo y se queda en esa posición, rígida. Al pellizcarle, retira el brazo pero vuelve a su rigidez cérea inmediatamente.",
        correctGCS: { ocular: 4, verbal: 1, motor: 4 },
        conclusion: "Encefalitis Anti-NMDA (Enfermedad autoinmune). Típico en mujeres jóvenes. Síntomas psiquiátricos iniciales seguidos de catatonia y movimientos anormales. No es una posesión ni una rabieta. Grave.",
        gcsJustification: `
Ocular(4): Espontánea. Mirada fija.
Verbal(1): Mutismo.
Motora(4): Retirada (o rigidez catatónica). La respuesta motora es compleja, pero ante el dolor retira.
        `.trim(),
    },
    {
        id: 'global-73',
        title: 'La Mitad Oscura',
        category: 'Trauma (Brown-Séquard)',
        narrative: "Pelea con navajas. Joven apuñalado en la espalda (zona dorsal derecha). Está en el suelo, consciente. '¡No puedo mover la pierna derecha!', grita. Compruebas: la pierna derecha está paralizada (motor 0), pero siente cuando le tocas. En cambio, en la pierna izquierda (la que mueve bien), le clavas una aguja y dice que no siente absolutamente nada de dolor.",
        correctGCS: { ocular: 4, verbal: 5, motor: 6 },
        conclusion: "Síndrome de Brown-Séquard (Hemisección medular). La lesión corta la vía motora del mismo lado (derecha) y la vía del dolor del lado contrario (izquierda). GCS es 15 porque mueve los brazos y obedece órdenes.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado.
Motora(6): Obedece (con brazos y pierna sana).
        `.trim(),
    },
    {
        id: 'global-74',
        title: 'Tórax de Madera',
        category: 'Tóxicos (Fentanilo)',
        narrative: "Fiesta en un piso. Un chico se ha inyectado algo y ha caído fulminado. Está cianótico. Intentas ventilarle con el ambú pero es imposible: su pecho está duro como una roca, no se expande. Rigidez torácica extrema. No responde a nada. Pupilas puntiformes.",
        correctGCS: { ocular: 1, verbal: 1, motor: 1 },
        conclusion: "Síndrome del Tórax Leñoso (Rigidez torácica por Fentanilo iv rápido). Complicación mortal que impide la ventilación mecánica. Requiere Naloxona inmediata y relajantes musculares. Coma profundo.",
        gcsJustification: `
Ocular(1): Ninguna.
Verbal(1): Ninguna.
Motora(1): Ninguna (Rigidez generalizada, no respuesta al dolor).
        `.trim(),
    },
    {
        id: 'global-75',
        title: 'El Ciego que Veía',
        category: 'Neurológico (Síndrome de Anton)',
        narrative: "Paciente mayor encontrado deambulando en su casa, chocándose contra los muebles. Tiene un gran hematoma en la frente de golpearse. Te dice: 'Estoy perfectamente, aparta que voy a la cocina'. Camina directo hacia una pared. 'Señor, ¿ve usted esa pared?'. 'Claro que la veo, es una puerta preciosa', y se da de bruces contra ella. Niega estar ciego.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "Síndrome de Anton (Ceguera Cortical con Confabulación). Ictus occipital bilateral. El paciente está ciego pero su cerebro 'inventa' las imágenes y él se las cree (anosognosia). Está confuso (V4) porque su realidad no coincide con el mundo físico.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso (Confabulación).
Motora(6): Obedece (intenta caminar, obedece órdenes simples).
        `.trim(),
    },
    {
        id: 'global-76',
        title: 'La Reina Helada',
        category: 'Metabólico (Coma Mixedematoso)',
        narrative: "Invierno. Anciana encontrada en casa sin calefacción. Piel pálida, hinchada y cerosa (edema facial). Cicatriz antigua en el cuello (tiroidectomía). Temperatura 32ºC. Bradicardia extrema. Le pellizcas y apenas reacciona: abre un poco los ojos, murmura algo inaudible y vuelve a caer en estupor. Mueve la mano muy lentamente hacia el estímulo.",
        correctGCS: { ocular: 2, verbal: 2, motor: 4 },
        conclusion: "Coma Mixedematoso (Hipotiroidismo severo descompensado). Emergencia endocrina mortal. Todo el metabolismo está 'congelado'. La bradipsiquia y lentitud motora son extremas.",
        gcsJustification: `
Ocular(2): Al dolor.
Verbal(2): Sonidos incomprensibles (o palabras muy lentas e incoherentes).
Motora(4): Retirada lenta.
        `.trim(),
    },
    {
        id: 'global-77',
        title: 'Almendras Amargas',
        category: 'Tóxicos (Cianuro)',
        narrative: "Incendio en una fábrica de plásticos. Sacan a un trabajador. No tiene quemaduras, pero está en parada respiratoria (apnea). Piel rosada. Olor extraño en su ropa (como a almendras rancias). Le aplicas dolor intenso: hace una extensión brusca de los cuatro miembros y se queda rígido.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "Intoxicación por Cianuro (humo de plásticos). Bloqueo de la respiración celular. Muerte inminente. La descerebración (extensión) indica hipoxia cerebral catastrófica.",
        gcsJustification: `
Ocular(1): Ninguna.
Verbal(1): Ninguna.
Motora(2): Descerebración.
        `.trim(),
    },
    {
        id: 'global-78',
        title: 'El Falso Detenido',
        category: 'Simulación',
        narrative: "Calabozo. El detenido se ha 'desmayado' al saber que no le daban la libertad. Está en el suelo, ojos cerrados. No responde. Le levantas el brazo y se le cae flácido sobre el pecho (no se protege la cara, buen actor). Pero cuando le rozas suavemente las pestañas, sus párpados parpadean vigorosamente (reflejo cocleopalpebral). Le haces cosquillas en la nariz y arruga la cara.",
        correctGCS: { ocular: 0, verbal: 0, motor: 6 },
        conclusion: "Simulación (Malingering). A diferencia del trastorno conversivo (inconsciente), este paciente finge voluntariamente. Pero los reflejos de protección (pestañas, cosquillas) son difíciles de suprimir. GCS funcional normal.",
        gcsJustification: `
Ocular(NV): Resistencia funcional (parpadeo al roce).
Verbal(NV): Mutismo voluntario.
Motora(6): Obedece (retira al cosquilleo, reacción voluntaria conservada).
        `.trim(),
    },
    {
        id: 'global-79',
        title: 'El Conejo Blanco',
        category: 'Neurológico (Peduncular)',
        narrative: "Paciente post-ictus troncoencefálico. Está despierto en la cama. Te dice muy tranquilo: 'Doctor, dígale a esos conejos de colores que se bajen de la lámpara'. No tiene miedo, le divierten. Está orientado en persona y lugar, pero insiste en que hay animales en el techo. Obedece todas las órdenes.",
        correctGCS: { ocular: 4, verbal: 4, motor: 6 },
        conclusion: "Alucinosis Peduncular. Lesión en el mesencéfalo. Alucinaciones visuales vividas y coloridas (liliputienses) con juicio de realidad conservado (a veces saben que no son reales, a veces no). Se considera V4 por el contenido alucinatorio.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(4): Confuso (Alucinaciones visuales complejas).
Motora(6): Obedece.
        `.trim(),
    },
    {
        id: 'global-80',
        title: 'Olla a Presión',
        category: 'Trauma (Cushing)',
        narrative: "Skatepark. Caída sin casco hace 2 horas. Estuvo bien (intervalo lúcido), ahora vomita. De repente, su respiración se vuelve irregular (apneas). Pulso baja a 40 lpm (bradicardia). Tensión sube a 200/100. Le aplicas dolor: extiende brazos y piernas rígidamente.",
        correctGCS: { ocular: 1, verbal: 1, motor: 2 },
        conclusion: "Triada de Cushing (Herniación Cerebral inminente). Hipertensión + Bradicardia + Respiración irregular. El cerebro se está herniando por el agujero magno. Muerte inminente.",
        gcsJustification: `
Ocular(1): Ninguna.
Verbal(1): Ninguna.
Motora(2): Descerebración.
        `.trim(),
    },
    {
        id: 'global-81',
        title: 'El Rayo Azul',
        category: 'Ambiental (Rayo)',
        narrative: "Campo de golf. Tormenta. Un jugador ha sido alcanzado por un rayo. Tiene figuras de Lichtenberg (marcas rojas como helechos) en el torso. Está despierto, pero no puede mover las piernas ni los brazos. Están azules y fríos. 'No me siento nada', dice tranquilo. A los 20 minutos, empieza a mover los dedos.",
        correctGCS: { ocular: 4, verbal: 5, motor: 0 },
        conclusion: "Keraunoparálisis (Parálisis por rayo). Vasoespasmo severo y sobrecarga nerviosa transitoria. Produce parálisis temporal y frialdad/azulamiento de miembros. Se resuelve sola. M-NV momentáneo.",
        gcsJustification: `
Ocular(4): Espontánea.
Verbal(5): Orientado.
Motora(NV): Parálisis transitoria (Keraunoparálisis). No es daño cerebral ni medular permanente, pero en el momento agudo no es valorable.
        `.trim(),
    }
];
