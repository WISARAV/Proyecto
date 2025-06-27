const jwt = require('jsonwebtoken');
const sql = require('mssql');
const { pool } = require('../config/db');

// backend/controllers/authController.js
exports.login = async (req, res) => {
  const { email, password } = req.body;
console.log('📧 Email recibido:', email);
console.log('🔐 Password recibido:', password);
  // ✅ Validación inicial
  if (!email || !password) {
    return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
  }

  try {
    // 🔍 Buscar usuario por email
    const result = await pool.request()
      .input('email', sql.VarChar, email)
      .query('SELECT TOP 1 * FROM users WHERE email = @email');

    if (result.recordset.length === 0) {
      console.warn('🚫 Usuario no encontrado:', email);
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = result.recordset[0];

    // 🔐 Validar contraseña
    if (password !== user.password) {
      console.warn('🔒 Contraseña incorrecta');
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // 🪄 Generar token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'tu_secreto_seguro',
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Inicio de sesión exitoso',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error('💥 Error en login:', error.message || error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
