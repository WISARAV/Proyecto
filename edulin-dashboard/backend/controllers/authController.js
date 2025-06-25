// backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario por email
    const result = await pool.request()
      .input('email', sql.VarChar, email)
      .query('SELECT TOP 1 * FROM users WHERE email = @email');

    if (result.recordset.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = result.recordset[0];

    // Validar contraseña (en producción usa bcrypt)
    if (password !== user.password) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar token JWT
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
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};