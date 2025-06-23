// src/components/ui/CardClassSession.jsx
import React from "react";
import { Link } from "react-router-dom";

const CardClassSession = ({ session }) => {
  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-md transition-shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">{session.subject}</h2>
      <p className="text-gray-600">Curso: {session.course}</p>
      <p className="text-gray-600">Fecha: {session.date}</p>
      <Link
        to={`/teacher/attendance/${session.id}`}
        className="mt-3 inline-block text-blue-600 hover:text-blue-800"
      >
        Tomar Asistencia →
      </Link>
    </div>
  );
};

export default CardClassSession;