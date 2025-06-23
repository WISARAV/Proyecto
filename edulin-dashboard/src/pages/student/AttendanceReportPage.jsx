// src/pages/student/AttendanceReportPage.jsx
import React from "react";
import AttendanceChart from "../../components/ui/AttendanceChart";
import AttendanceTable from "../../components/ui/AttendanceTable";

const AttendanceReportPage = () => {
  // Datos simulados
  const attendanceData = {
    present: 28,
    absent: 2,
  };

  const attendanceRecords = [
    { date: "2025-04-01", course: "Matemáticas", present: true },
    { date: "2025-04-02", course: "Lenguaje", present: true },
    { date: "2025-04-03", course: "Ciencias", present: false },
    { date: "2025-04-05", course: "Historia", present: true },
    { date: "2025-04-06", course: "Arte", present: true },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mi Asistencia</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-1 bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Porcentaje de Asistencia</h2>
          <AttendanceChart present={attendanceData.present} absent={attendanceData.absent} />
          <p className="mt-2">
            <strong>{Math.round(
              (attendanceData.present /
                (attendanceData.present + attendanceData.absent)) *
                100
            )}%</strong>{" "}
            de asistencia
          </p>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Detalle de Asistencia</h2>
          <AttendanceTable records={attendanceRecords} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceReportPage;