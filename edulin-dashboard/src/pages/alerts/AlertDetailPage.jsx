// src/pages/alerts/AlertDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const AlertDetailPage = () => {
  const { id } = useParams();

  // Datos simulados
  const alertData = {
    id: id,
    title: "Calificación baja en Matemáticas",
    description: "Juan Pérez tiene una nota de 11 en el último examen.",
    fullDescription: "El estudiante Juan Pérez obtuvo una calificación de 11 en el examen final de Matemáticas, lo cual está por debajo del promedio esperado. Se recomienda apoyo académico adicional.",
    type: "danger",
    date: "2025-04-06",
    relatedTo: "Profesor: María López | Curso: Matemáticas",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Detalles de la Alerta</h1>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold">{alertData.title}</h2>
        <p className="mt-2 text-gray-700">{alertData.fullDescription}</p>
        <div className="mt-4 flex justify-between items-center">
          <small className="text-gray-500">Fecha: {alertData.date}</small>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
            {alertData.type === "danger" ? "Alta Prioridad" : "Media Prioridad"}
          </span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Relacionado con: {alertData.relatedTo}
        </div>
      </div>
    </div>
  );
};

export default AlertDetailPage;
