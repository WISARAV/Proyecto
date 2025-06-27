// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthProvider } from './context/AuthContext';

// Aplicar fuente global
const rootElement = document.getElementById('root');
rootElement.style.fontFamily = "'Inter', sans-serif";

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);