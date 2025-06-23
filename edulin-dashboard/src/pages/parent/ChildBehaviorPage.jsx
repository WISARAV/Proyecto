// src/pages/parent/ChildBehaviorPage.jsx
import React from "react";
import BehaviorChart from "../../components/ui/BehaviorChart";
import IncidentCard from "../../components/ui/IncidentCard";

const ChildBehaviorPage = () => {
  const childName = "Juan Pérez";
  const behaviorPercentage = 87;

  const incidents = [
    { id: 1, title: "Llegada tarde", description: "Entró 10 minutos tarde a clase.", type: "warning", date: "2025-04-02" },
    { id: 2, title: "No trajo tarea", description: "No presentó la tarea de Matemáticas.", type: "warning", date: "2025-04-05" },
    { id: 3, title: "Interrumpió clase", description: "Habló durante la explicación del profesor.", type: "violation", date: "2025-04-06" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Comportamiento de {childName}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-1 bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Porcentaje de Comportamiento</h2>
          <BehaviorChart percentage={behaviorPercentage} />
          <p className="mt-2">
            <strong>{behaviorPercentage}%</strong> correcto
          </p>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Historial de Incidencias</h2>
          {incidents.length > 0 ? (
            incidents.map(incident => (
              <IncidentCard key={incident.id} incident={incident} />
            ))
          ) : (
            <p>No hay incidencias registradas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChildBehaviorPage;