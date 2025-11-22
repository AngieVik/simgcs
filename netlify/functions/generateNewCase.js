// netlify/functions/generateNewCase.js
const { GoogleGenAI, Type } = require("@google/genai");

// -------------------------
// ⚙️ PROMPT Y ESQUEMA
// -------------------------
const SYSTEM_PROMPT = `
Eres un narrador experto en novela negra y medicina de emergencias prehospitalaria. Tu misión es crear escenarios inmersivos de "Observación Detectivesca" para un Técnico en Emergencias Sanitarias (TES). Tu estilo mezcla la deducción de Sherlock Holmes con la cruda realidad de la calle (tipo "The Wire" o "Bringing Out the Dead").

**TUS DOS BIBLIAS:**
1. **ESTILO:** Novela negra, segunda persona ("Ves...", "Sientes..."), atmósfera densa y realista.
2. **MEDICINA:** El archivo 'INFO APP SIMGCS' (que tienes interiorizado). Úsalo para la lógica clínica estricta.

**MOTOR DE GENERACIÓN DE ESCENARIOS (EL "RNG" INTERNO):**
Antes de escribir, realiza un sorteo interno para combinar estas 4 variables. ¡Busca la fricción y el contraste! NO elijas siempre lo obvio.

1. **EL PROTAGONISTA (Paciente):**
   - Tira un dado: ¿Neonato irritable? ¿Adolescente de "familia bien"? ¿Anciano culturista con demencia? ¿Ejecutivo agresivo en after? ¿Habitante de calle conocido?
   - *Regla:* Rompe estereotipos. El adicto puede llevar traje; la abuela puede tener una ETS o intoxicación por "Spice".

2. **EL ESCENARIO (Atmósfera - SHOW, DON'T TELL):**
   - Tira un dado: ¿After clandestino (sudor, tecno, pupilas)? ¿Biblioteca silenciosa? ¿Piso patera hacinado? ¿Gimnasio de barrio (olor a linimento)? ¿Iglesia?
   - *Detalle:* El entorno es el primer paciente. Describe olores (orina, lejía, marihuana, humedad), sonidos (tele a todo volumen, silencio sepulcral, gritos) y objetos (cucharillas quemadas, recetas arrugadas, juguetes rotos, Tusi, benzodiazepinas).

3. **EL DETONANTE (La Patología - VARIABILIDAD RADICAL):**
   - **Tóxicos S.XXI:** Tusi (Pink Cocaine), Chemsex (GHB/GBL, Mefedrona), Fentanilo, Spice, Krokodil, o la "mezcla de la abuela" (digoxina + benzo).
   - **Neurológico:** Ictus (Afasias Wernicke/Broca/Global - *consulta doc*), Post-ictal, Hemorragia Subaracnoidea.
   - **Psicógeno/Funcional:** Crisis de ansiedad, Trastorno Conversivo (Mano que cae desviada, resistencia palpebral - *consulta doc*).
   - **Trauma/Médico:** Sepsis, Hipoglucemia, TCE con intervalo lúcido.

4. **LA BARRERA (El obstáculo extra):**
   - **Idiomática/Social:** Ucraniano, Chino, familia hostil o "demasiado" colaboradora.
   - **Física/Sensorial:** Paciente de 180kg en baño enano, Sordoceguera, Autismo.

**REGLAS DE ORO CLÍNICAS (MANDATORIAS DEL DOCUMENTO):**
* **Supervivencia XABC:** Si hay amenaza vital inmediata (hemorragia masiva, apnea, vía aérea cerrada), NÁRRALO PRIMERO. Resuélvelo antes de pedir el GCS.
* **Ojos (O):** Diferencia CLARAMENTE entre O1 (flácido, coma) y O-NV (edema, vendaje) o O-Funcional (aprieta los ojos al intentar abrirlos - *signo clave*).
* **Verbal (V):** - Si es Afasia de Wernicke: Habla fluido pero sin sentido ("ensalada").
    - Si es Afasia de Broca/Global: Mudo o sonidos, pero frustrado.
    - Si es Tubo/Idioma: V-NV.
* **Motor (M):**
    - NUNCA digas "decorticación". Di "flexiona rígidamente los brazos sobre el pecho".
    - NUNCA digas "descerebración". Di "extiende rígidamente brazos con muñecas rotadas fuera".
    - NUNCA uses Fricción Esternal ni Presión Supraorbitaria (PROHIBIDAS). Usa Trapecio o Presión Mandibular.
    - *Signo de Hoover:* Si sospechas parálisis funcional, describe la presión en el talón sano.
    - *Caída del brazo:* Describe si cae a plomo (funcional) o rota y planea (orgánico).

**FORMATO DE SALIDA:**
Escribe **2 o 3 párrafos intensos**.
1.  **La Entrada:** Atmósfera, olor, escena, primera impresión del paciente.
2.  **La Acción:** Tu acercamiento. Estabilización inicial (si hace falta). Aplicación de estímulos (voz, tacto, dolor central/periférico según corresponda).
3.  **La Reacción:** Describe EXACTAMENTE qué hace el paciente (abre ojos o aprieta, retira o localiza, habla "ensalada" o gime).
4.  **NO des el resultado GCS.** Termina la narración dejando al usuario con la imagen final para que él decida.

*Ejemplo de Tono:* "El aire en el sótano pesa, huele a humedad y a algo químico, dulce... quizás popper. Un joven yace sobre un sofá de escay rajado..."
`;

const RESPONSE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "Un título breve, intrigante y estilo 'Noir' sanitario." },
    category: {
      type: Type.STRING,
      description: "Categoría principal (ej: Tóxico, Neurológico, Trauma, Metabólico)."
    },
    narrative: { type: Type.STRING, description: "La historia del caso en 2-3 párrafos intensos, segunda persona, sin revelar la solución numérica." },
    gcs: {
      type: Type.OBJECT,
      properties: {
        // AQUI ESTA EL CAMBIO CLAVE EN LAS DESCRIPCIONES:
        ocular: { 
            type: Type.INTEGER, 
            description: "Puntuación REAL médica (1-4). IMPORTANTE: Si es 'Ninguna respuesta' pon 1. Solo usa 0 si es físicamente imposible evaluar (NV)." 
        },
        verbal: { 
            type: Type.INTEGER, 
            description: "Puntuación REAL médica (1-5). IMPORTANTE: Si es 'Ninguna respuesta' pon 1. Solo usa 0 si es físicamente imposible evaluar (NV, tubo, afasia)." 
        },
        motor: { 
            type: Type.INTEGER, 
            description: "Puntuación REAL médica (1-6). IMPORTANTE: Si es 'Ninguna respuesta' pon 1. Solo usa 0 si es físicamente imposible evaluar (NV, paralisis, bloqueo)." 
        },
      },
      required: ["ocular", "verbal", "motor"],
    },
    conclusion: {
      type: Type.STRING,
      description: "La resolución clínica del misterio: qué tenía el paciente, qué hiciste (XABC) y el desenlace inmediato.",
    },
    gcsJustification: {
      type: Type.STRING,
      description: "Explicación técnica. Formato estricto con saltos de línea: 'Ocular (X): Razón.\\nVerbal (Y): Razón.\\nMotora (Z): Razón.'. Si la puntuación es 0, escribe 'NV' en el texto.",
    },
  },
  required: ["title", "category", "narrative", "gcs", "conclusion", "gcsJustification"],
};

// -------------------------
// 🚀 FUNCIÓN SERVERLESS
// -------------------------
exports.handler = async function (event, context) {
  // Válvula de seguridad: Comprobar si la API_KEY está configurada
  if (!process.env.API_KEY) {
    console.error("Error: API_KEY no configurada.");
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "API_KEY no configurada en el entorno de Netlify.",
      }),
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const result = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: "Genera una nueva escena para el simulador de Observación Detectivesca.",
      config: {
        systemInstruction: SYSTEM_PROMPT,
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
        temperature: 0.8,
      },
    });

    let text = result.text.trim();
    // Limpiar posibles bloques de código markdown
    text = text.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    
    const data = JSON.parse(text);

    // Transformar los datos al formato que espera el frontend (Case)
    const responseData = {
      title: data.title,
      category: data.category,
      narrative: data.narrative,
      correctGCS: data.gcs,
      conclusion: data.conclusion,
      gcsJustification: data.gcsJustification,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    // Log del error más detallado para depuración en Netlify
    console.error("Error detallado en la función generateNewCase:", JSON.stringify(error, null, 2));
    
    // Extraer un mensaje más útil si es un error de la API de Google
    const errorMessage = error.message || "Error desconocido.";
    const errorDetails = error.stack || (error.response ? JSON.stringify(error.response.data) : "No hay detalles adicionales.");

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: `Error interno al contactar con el servicio de IA: ${errorMessage}`,
        details: errorDetails,
      }),
    };
  }
};