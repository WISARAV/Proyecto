// src/components/ui/ProfileCard.jsx
import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded shadow p-6 text-center">
      <img
        src={user.avatar || "https://via.placeholder.com/100"} 
        alt="Avatar"
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500 mt-2">Rol: {user.role}</p>
    </div>
  );
};

export default ProfileCard;
