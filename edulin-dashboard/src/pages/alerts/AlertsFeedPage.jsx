// src/pages/alerts/AlertsFeedPage.jsx
import React from "react";
import AlertCard from "../../components/ui/AlertCard";

const AlertsFeedPage = () => {
  const alerts = [
    {
      id: 1,
      title: "Calificación baja en Matemáticas",
      description: "Juan Pérez tiene una nota de 11 en el último examen.",
      type: "danger",
      date: "2025-04-06",
    },
    {
      id: 2,
      title: "Ausencia frecuente",
      description: "María López ha faltado a 3 clases en la última semana.",
      type: "warning",
      date: "2025-04-05",
    },
    {
      id: 3,
      title: "Comportamiento bajo",
      description: "Carlos Mendoza tiene un porcentaje de comportamiento del 75%.",
      type: "danger",
      date: "2025-04-04",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Alertas Recientes</h1>

      <div>
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))
        ) : (
          <p>No hay alertas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default AlertsFeedPage;