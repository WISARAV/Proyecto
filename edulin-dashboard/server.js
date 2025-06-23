// server.js
const express = require('express');
const path = require('path');
const app = express();

// Sirve los archivos estáticos desde 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Maneja todas las rutas con React Router
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
