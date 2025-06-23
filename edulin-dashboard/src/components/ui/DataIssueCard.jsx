// src/components/ui/DataIssueCard.jsx
import React from "react";

const DataIssueCard = ({ issue }) => {
  return (
    <div className="bg-white p-4 rounded shadow border-l-4 border-yellow-500 mb-3">
      <h3 className="font-semibold">{issue.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{issue.description}</p>
      <button className="mt-2 text-red-600 text-sm">Eliminar registro duplicado</button>
    </div>
  );
};

export default DataIssueCard;