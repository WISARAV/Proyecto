// src/pages/teacher/TakeAttendancePage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TakeAttendancePage = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga desde API
    setTimeout(() => {
      const mockStudents = [
        { id: 1, name: "Juan Pérez", present: true },
        { id: 2, name: "María López", present: false },
        { id: 3, name: "Carlos Mendoza", present: true },
        { id: 4, name: "Ana Rojas", present: null }, // No marcado aún
      ];
      setStudents(mockStudents);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAttendanceChange = (studentId, status) => {
    setStudents(
      students.map((s) =>
        s.id === studentId ? { ...s, present: status } : s
      )
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Cargando lista de alumnos...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Tomar Asistencia</h1>

      <div className="bg-white p-6 rounded shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Alumno</th>
              <th className="px-4 py-2 text-left">Asistencia</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3 space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      checked={student.present === true}
                      onChange={() => handleAttendanceChange(student.id, true)}
                      className="form-radio text-green-500"
                    />
                    <span className="ml-2">Presente</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      checked={student.present === false}
                      onChange={() => handleAttendanceChange(student.id, false)}
                      className="form-radio text-red-500"
                    />
                    <span className="ml-2">Ausente</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      checked={student.present === null}
                      onChange={() => handleAttendanceChange(student.id, null)}
                      className="form-radio text-gray-400"
                    />
                    <span className="ml-2">Sin Registrar</span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Guardar Asistencia
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeAttendancePage;
