// src/pages/teacher/TaskDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSubmission from "../../components/ui/CardSubmission";

const TaskDetailPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga desde API
    setTimeout(() => {
      const mockTask = {
        id,
        title: id === "1" ? "Tarea Matemáticas" : "Tarea Ciencias",
        description: "Resolver ejercicios del libro página 45.",
        dueDate: "2025-04-15",
      };

      const mockSubmissions = [
        {
          student: "Juan Pérez",
          submissionDate: "2025-04-10",
          grade: 18,
          comment: "Buen trabajo, pero revisa el punto 3.",
        },
        {
          student: "María López",
          submissionDate: "2025-04-11",
          grade: 16,
          comment: "Muy bien presentado.",
        },
        {
          student: "Carlos Mendoza",
          submissionDate: "2025-04-12",
          grade: "",
          comment: "",
        },
      ];

      setTask(mockTask);
      setSubmissions(mockSubmissions);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Cargando detalles de la tarea...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
        <p className="text-gray-600 mt-1">{task.description}</p>
        <p className="text-gray-500 text-sm mt-1">Fecha de entrega: {task.dueDate}</p>
      </div>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">Entregas de Alumnos</h2>

      <div className="space-y-4">
        {submissions.map((submission, index) => (
          <CardSubmission key={index} submission={submission} />
        ))}
      </div>
    </div>
  );
};

export default TaskDetailPage;