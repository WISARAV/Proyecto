// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente 🚀' });
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});