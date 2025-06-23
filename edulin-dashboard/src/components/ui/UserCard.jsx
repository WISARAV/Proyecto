// src/components/ui/UserCard.jsx
import React from "react";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow hover:shadow-md transition-shadow border-b-4 border-blue-500 mb-3">
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.email} - {user.role}</p>
      </div>
      <div className="space-x-2">
        <button className="text-blue-600 hover:text-blue-800">Editar</button>
        <button onClick={() => onDelete(user.id)} className="text-red-600 hover:text-red-800">Eliminar</button>
      </div>
    </div>
  );
};

export default UserCard;