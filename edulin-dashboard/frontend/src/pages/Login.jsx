// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../services/api';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await apiClient.post('/auth/login', { email, password });

      if (res.status === 200) {
        const { token, user } = res.data;

        auth.login(user, token);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;