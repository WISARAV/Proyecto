// src/pages/reports/ReportPreviewPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import ReportCard from "../../components/ui/ReportCard";
import PDFGenerator from "../../components/ui/PDFGenerator";

const ReportPreviewPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") || "grades";

  // Datos simulados
  const studentName = "Juan Pérez";
  const course = "Matemáticas";
  const grades = [
    { subject: "Álgebra", grade: 16 },
    { subject: "Geometría", grade: 14 },
    { subject: "Estadística", grade: 18 },
  ];

  const attendance = [
    { date: "2025-04-01", status: "Presente" },
    { date: "2025-04-02", status: "Ausente" },
    { date: "2025-04-03", status: "Presente" },
  ];

  const behavior = {
    percentage: 92,
    incidents: [
      { date: "2025-04-02", description: "Llegada tarde" },
      { date: "2025-04-05", description: "No trajo tarea" },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Previsualización del Reporte</h1>

      <div id="report-content">
        <ReportCard title={`Reporte de ${type === "grades" ? "Calificaciones" : type === "attendance" ? "Asistencia" : "Comportamiento"} - ${studentName}`}>
          {type === "grades" && (
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Tema</th>
                  <th className="px-4 py-2">Nota</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{g.subject}</td>
                    <td className="px-4 py-2">{g.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {type === "attendance" && (
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Fecha</th>
                  <th className="px-4 py-2">Estado</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((a, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{a.date}</td>
                    <td className="px-4 py-2">{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {type === "behavior" && (
            <div>
              <p><strong>Porcentaje de Comportamiento:</strong> {behavior.percentage}%</p>
              <h3 className="font-semibold mt-4">Incidencias:</h3>
              <ul className="list-disc ml-5 mt-2">
                {behavior.incidents.map((i, idx) => (
                  <li key={idx}>{i.description} ({i.date})</li>
                ))}
              </ul>
            </div>
          )}
        </ReportCard>
      </div>

      <PDFGenerator elementId="report-content" filename={`reporte-${type}`} />
    </div>
  );
};

export default ReportPreviewPage;
