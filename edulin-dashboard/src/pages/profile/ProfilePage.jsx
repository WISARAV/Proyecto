// src/pages/profile/ProfilePage.jsx
import React from "react";
import ProfileCard from "../../components/ui/ProfileCard";
import EditProfileForm from "../../components/ui/EditProfileForm";
import ChangePasswordForm from "../../components/ui/ChangePasswordForm";

const ProfilePage = () => {
  // Datos simulados del usuario
  const user = {
    id: 1,
    name: "Carlos Mendoza",
    email: "carlos@example.com",
    role: "Profesor",
    phone: "+51 987 654 321",
  };

  const handleSave = (updatedData) => {
    console.log("Datos actualizados:", updatedData);
    alert("Perfil actualizado correctamente");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mi Perfil</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta de perfil */}
        <div className="md:col-span-1">
          <ProfileCard user={user} />
        </div>

        {/* Formulario de edición */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Editar Información</h2>
            <EditProfileForm user={user} onSave={handleSave} />
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Cambiar Contraseña</h2>
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;