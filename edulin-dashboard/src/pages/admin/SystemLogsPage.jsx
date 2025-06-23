// src/pages/admin/SystemLogsPage.jsx
import React from "react";
import LogCard from "../../components/ui/LogCard";

const SystemLogsPage = () => {
  // Datos simulados
  const logs = [
    {
      id: 1,
      action: "Usuario creado",
      description: "Se creó el usuario Juan Pérez con rol de profesor.",
      user: "Carlos Mendoza",
      role: "Administrador",
      type: "create",
      timestamp: "2025-04-05 10:30 AM"
    },
    {
      id: 2,
      action: "Calificación actualizada",
      description: "Se modificó la calificación de María López en Matemáticas.",
      user: "María López",
      role: "Profesor",
      type: "update",
      timestamp: "2025-04-05 09:15 AM"
    },
    {
      id: 3,
      action: "Comunicado eliminado",
      description: "Se eliminó un comunicado oficial sobre feriados.",
      user: "Ana Rojas",
      role: "Director",
      type: "delete",
      timestamp: "2025-04-04 05:00 PM"
    },
    {
      id: 4,
      action: "Configuración actualizada",
      description: "Se modificaron las fechas del año escolar.",
      user: "Carlos Mendoza",
      role: "Administrador",
      type: "update",
      timestamp: "2025-04-04 03:45 PM"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Historial de Cambios del Sistema</h1>

      <div className="bg-white rounded shadow overflow-hidden">
        {logs.map(log => (
          <LogCard key={log.id} log={log} />
        ))}
      </div>
    </div>
  );
};

export default SystemLogsPage;