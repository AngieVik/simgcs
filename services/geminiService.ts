export async function generateNewCase() {
  try {
    const response = await fetch("/.netlify/functions/generateNewCase");

    if (!response.ok) {
      throw new Error(`Error al generar el caso: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en generateNewCase:", error);
    throw new Error("No se pudo generar un nuevo caso. Inténtalo de nuevo más tarde.");
  }
}