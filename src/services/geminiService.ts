export async function generateNewCase() {
  try {
    const response = await fetch("/.netlify/functions/generateNewCase");

    if (!response.ok) {
      // Intenta obtener más detalles del error si es posible, manejando cuerpos no-JSON.
      let errorDetails = `Error al generar el caso: ${response.status} ${response.statusText}`;
      try {
        const errorBody = await response.text();
        if (errorBody) {
            try {
                // Intenta parsear como JSON, pero ten un respaldo.
                const errorData = JSON.parse(errorBody);
                if (errorData.details) {
                    errorDetails = `Detalles: ${errorData.details}`;
                } else if (errorData.error) {
                    errorDetails = errorData.error;
                } else {
                    errorDetails = errorBody; // El cuerpo era JSON pero sin el formato esperado.
                }
            } catch (jsonError) {
                // El cuerpo del error no era JSON, usar el texto plano.
                errorDetails = errorBody;
            }
        }
      } catch (e) {
        // No se pudo leer el cuerpo del error, usar el error de estado.
      }
      throw new Error(errorDetails);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en generateNewCase:", error);
    const message = error instanceof Error ? error.message : "No se pudo generar un nuevo caso.";
    throw new Error(message);
  }
}