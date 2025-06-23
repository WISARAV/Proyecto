const BACKEND_URL = 'http://localhost:8000/src/services/api.php';

async function fetchData() {
  try {
    const response = await fetch(BACKEND_URL);
    const data = await response.json();

    if (data.error) {
      console.error("Error desde el backend:", data.error);
      return;
    }

    updateCards(data.estudiantes);
    updateChart(data.estudiantes);
    updateAlerts(data.alertas);

  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

// Las funciones updateCards, updateChart, updateAlerts permanecen iguales
fetchData();