// src/pages/reports/GenerateReportPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const GenerateReportPage = () => {
  const [type, setType] = useState("grades");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Generar Reporte</h1>

      <div className="bg-white p-6 rounded shadow space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Reporte</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="grades">Calificaciones</option>
            <option value="attendance">Asistencia</option>
            <option value="behavior">Comportamiento</option>
          </select>
        </div>

        <Link
          to={`/reports/preview?type=${type}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Previsualizar
        </Link>
      </div>
    </div>
  );
};

export default GenerateReportPage;
