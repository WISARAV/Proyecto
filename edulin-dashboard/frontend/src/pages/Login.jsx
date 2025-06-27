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

        // Guardamos en contexto
        auth.login(user, token);

        // Redirigimos al dashboard
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Error inesperado. Inténtalo nuevamente.');
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1509062522242-87f3f7c4a3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <div className="w-100" style={{ maxWidth: '420px' }}>
        <div className="card shadow-lg p-4 bg-white rounded mx-auto">
          <h3 className="text-center mb-4">Iniciar Sesión</h3>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-primary w-100 mt-3 py-2">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
