// src/components/ui/CardSubmission.jsx
import React from "react";
import { Link } from "react-router-dom";

const CardSubmission = ({ submission }) => {
  return (
    <div className="bg-white p-4 rounded shadow border border-gray-200 mb-3">
      <h3 className="font-semibold text-gray-800">{submission.student}</h3>
      <p className="text-sm text-gray-600">Fecha de entrega: {submission.submissionDate}</p>
      <Link to="#" className="text-blue-600 hover:underline">
        Ver archivo subido
      </Link>

      <div className="mt-2">
        <label className="block text-sm text-gray-700">Calificación</label>
        <input
          type="number"
          min="0"
          max="20"
          defaultValue={submission.grade || ""}
          className="w-20 px-2 py-1 border rounded text-sm"
        />
      </div>

      <div className="mt-2">
        <label className="block text-sm text-gray-700">Comentario</label>
        <textarea
          rows="2"
          className="w-full px-2 py-1 border rounded text-sm"
          placeholder="Escribe tu comentario aquí..."
          defaultValue={submission.comment || ""}
        ></textarea>
      </div>

      <button className="mt-2 bg-green-500 text-white text-sm px-3 py-1 rounded hover:bg-green-600">
        Guardar Calificación
      </button>
    </div>
  );
};

export default CardSubmission;
