const express = require('express');
const cors = require('cors');
const app = express();

// CORS: permite solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5173', // Cambia esto al origen de tu frontend
  credentials: true
}));

// Permitir JSON en el body
app.use(express.json());

// Rutas
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth/login', authRoutes);

// Ruta no encontrada (opcional pero recomendado)
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejo de errores (opcional)
app.use((err, req, res, next) => {
  console.error('Error interno:', err);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar servidor
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
