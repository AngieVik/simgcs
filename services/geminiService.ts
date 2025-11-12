export async function generateNewCase() {
  try {
    const response = await fetch("/.netlify/functions/generateNewCase");

    if (!response.ok) {
      // Intenta obtener más detalles del error si es posible
      let errorDetails = `Error al generar el caso: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData.details) {
          errorDetails = `Detalles: ${errorData.details}`;
        } else if (errorData.error) {
          errorDetails = errorData.error;
        }
      } catch (e) {
        // No se pudo parsear el JSON, usar el error de estado
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
