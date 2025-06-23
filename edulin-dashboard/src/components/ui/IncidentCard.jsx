// src/components/ui/IncidentCard.jsx
import React from "react";

const IncidentCard = ({ incident }) => {
  return (
    <div className="p-4 border-b hover:bg-gray-50">
      <h3 className="font-semibold">{incident.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{incident.description}</p>
      <div className="flex justify-between mt-2">
        <span className={`inline-block px-2 py-1 rounded text-white text-xs ${
          incident.type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
        }`}>
          {incident.type === 'warning' ? 'Advertencia' : 'Infracción'}
        </span>
        <small className="text-gray-500">{incident.date}</small>
      </div>
    </div>
  );
};

export default IncidentCard;
