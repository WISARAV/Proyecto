// src/components/ui/EditProfileForm.jsx
import React, { useState } from "react";

const EditProfileForm = ({ user, onSave }) => {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      avatar
    };
    onSave(updatedData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Nombre, correo, teléfono */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          defaultValue={user.name}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input
          type="email"
          defaultValue={user.email}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input
          type="tel"
          defaultValue={user.phone || ""}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Foto de Perfil</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Guardar Cambios
      </button>
    </form>
  );
};

export default EditProfileForm;