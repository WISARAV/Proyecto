// src/pages/teacher/CourseDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const CourseDetailPage = () => {
  const { id } = useParams();

  // Datos simulados
  const course = {
    id,
    name: id === "1" ? "Matemáticas" : id === "2" ? "Ciencias" : "Lenguaje",
    grade: 3,
    studentsCount: id === "1" ? 25 : id === "2" ? 20 : 22,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Detalles del Curso: {course.name}
      </h1>
      <p>Grado: {course.grade}°</p>
      <p>Alumnos: {course.studentsCount}</p>

      <div className="mt-6 space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Tareas
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Calificaciones
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Asistencia
        </button>
      </div>
    </div>
  );
};

export default CourseDetailPage;
