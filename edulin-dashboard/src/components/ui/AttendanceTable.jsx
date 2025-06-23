// src/components/ui/AttendanceTable.jsx
import React from "react";

const AttendanceTable = ({ records }) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="px-4 py-2">Fecha</th>
          <th className="px-4 py-2">Curso</th>
          <th className="px-4 py-2">Estado</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 py-2">{record.date}</td>
            <td className="px-4 py-2">{record.course}</td>
            <td className="px-4 py-2">
              <span
                className={`inline-block px-2 py-1 rounded text-white text-xs ${
                  record.present ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {record.present ? "Presente" : "Ausente"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;