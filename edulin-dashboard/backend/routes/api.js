// backend/routes/api.js
const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);

// Aquí puedes agregar más rutas
// Ej: router.use('/users', userRoutes);

module.exports = router;