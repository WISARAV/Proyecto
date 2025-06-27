// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import useAuth from './hooks/useAuth'; 
// Componentes y context
import  ProtectedRoute  from './components/ProtectedRoute';
// Solo un dashboard básico por ahora
const Dashboard = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <h2>Bienvenido al Dashboard</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;