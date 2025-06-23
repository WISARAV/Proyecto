// src/pages/teacher/AttendancePage.jsx
import React, { useEffect, useState } from "react";
import CardClassSession from "../../components/ui/CardClassSession";

const AttendancePage = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga desde API
    setTimeout(() => {
      const mockSessions = [
        { id: 1, subject: "Matemáticas", course: "3° A", date: "2025-04-05" },
        { id: 2, subject: "Ciencias", course: "2° B", date: "2025-04-05" },
        { id: 3, subject: "Lenguaje", course: "3° C", date: "2025-04-06" },
      ];
      setSessions(mockSessions);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Cargando sesiones...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Toma de Asistencia</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <CardClassSession key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;