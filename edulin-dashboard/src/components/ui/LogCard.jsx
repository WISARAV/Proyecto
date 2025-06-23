// src/components/ui/LogCard.jsx
import React from "react";

const LogCard = ({ log }) => {
  return (
    <div className="flex items-start justify-between p-4 border-b hover:bg-gray-50">
      <div>
        <h3 className="font-semibold">{log.action}</h3>
        <p className="text-sm text-gray-600 mt-1">{log.description}</p>
        <div className="mt-2 flex space-x-2 text-xs text-gray-500">
          <span>Usuario: {log.user}</span>
          <span>|</span>
          <span>Rol: {log.role}</span>
          <span>|</span>
          <span>{log.timestamp}</span>
        </div>
      </div>

      <span className={`inline-block px-2 py-1 rounded-full text-white text-xs ${
        log.type === 'create' ? 'bg-green-500' :
        log.type === 'update' ? 'bg-blue-500' :
        log.type === 'delete' ? 'bg-red-500' : 'bg-gray-500'
      }`}>
        {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
      </span>
    </div>
  );
};

export default LogCard;
