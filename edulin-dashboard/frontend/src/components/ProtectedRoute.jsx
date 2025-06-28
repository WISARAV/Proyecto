// frontend/src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h3>Acceso Denegado</h3>
          <p>No tienes permiso para ver esta página.</p>
          <button className="btn btn-primary" onClick={() => window.history.back()}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;