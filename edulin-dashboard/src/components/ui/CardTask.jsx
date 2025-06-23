// src/components/ui/CardTask.jsx
import React from "react";
import { Link } from "react-router-dom";

const CardTask = ({ task }) => {
  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-md transition-shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
      <p className="text-gray-600 text-sm mt-1">{task.description}</p>
      <p className="text-gray-500 mt-2">Fecha de entrega: {task.dueDate}</p>
      <Link
        to={`/teacher/task/${task.id}`}
        className="mt-3 inline-block text-blue-600 hover:text-blue-800"
      >
        Ver más →
      </Link>
    </div>
  );
};

export default CardTask;