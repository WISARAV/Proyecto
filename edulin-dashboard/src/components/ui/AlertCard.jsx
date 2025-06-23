// src/components/ui/AlertCard.jsx
import React from "react";
import AlertBadge from "./AlertBadge";

const AlertCard = ({ alert }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 border-l-4 border-blue-500">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold">{alert.title}</h2>
        <AlertBadge type={alert.type} />
      </div>
      <p className="mt-2 text-gray-700">{alert.description}</p>
      <small className="text-gray-500 mt-2 block">{alert.date}</small>
    </div>
  );
};

export default AlertCard;