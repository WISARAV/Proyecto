// backend/server.js
const express = require('express');
const cors = require('cors'); // Importar cors
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(cors()); // Habilitar CORS globalmente

app.use(express.json());

// Middleware para rutas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});