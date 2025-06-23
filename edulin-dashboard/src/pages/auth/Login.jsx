// src/pages/auth/Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Iniciando sesión...");
  };

  return (
    <div className="flex h-screen bg-blue-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-blue-500 text-white">
        <h2 className="text-2xl font-bold mb-4">¿Aún no tienes una cuenta?</h2>
        <p>Regístrate para poder iniciar sesión.</p>
        <a href="/register" className="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200">
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default Login;