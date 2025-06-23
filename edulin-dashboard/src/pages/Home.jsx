// src/pages/Home.jsx
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800">Bienvenido a EDULIN</h1>
      <p className="mt-4 text-lg text-center text-gray-600">Por favor inicia sesión para continuar.</p>

      <div className="mt-6 space-x-4">
        <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Iniciar Sesión
        </a>
        <a href="/register" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default HomePage;