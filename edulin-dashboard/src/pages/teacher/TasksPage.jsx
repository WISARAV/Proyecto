// src/pages/teacher/TasksPage.jsx
import React, { useEffect, useState } from "react";
import CardTask from "../../components/ui/CardTask";
import { Link } from "react-router-dom";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga desde API
    setTimeout(() => {
      const mockTasks = [
        { id: 1, title: "Tarea 1 - Matemáticas", description: "Resolver ejercicios del libro página 45.", dueDate: "2025-04-15" },
        { id: 2, title: "Tarea 2 - Ciencias", description: "Investigar sobre los ecosistemas marinos.", dueDate: "2025-04-20" },
        { id: 3, title: "Tarea 3 - Lenguaje", description: "Escribir un ensayo corto sobre la lectura asignada.", dueDate: "2025-04-25" },
      ];
      setTasks(mockTasks);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Cargando tareas...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mis Tareas</h1>
        <Link
          to="/teacher/tasks/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Nueva Tarea
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
