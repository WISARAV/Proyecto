// src/pages/director/AcademicReportPage.jsx
import React from "react";

const AcademicReportPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reporte Académico Completo</h1>
      <div className="bg-white p-6 rounded shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Promedio</th>
              <th className="px-4 py-2 text-left">Mejor Alumno</th>
              <th className="px-4 py-2 text-left">Peor Alumno</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">Matemáticas</td>
              <td className="px-4 py-3">14.5</td>
              <td className="px-4 py-3">María López</td>
              <td className="px-4 py-3">Carlos Mendoza</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">Lenguaje</td>
              <td className="px-4 py-3">15.2</td>
              <td className="px-4 py-3">Juan Pérez</td>
              <td className="px-4 py-3">Ana Rojas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcademicReportPage;
