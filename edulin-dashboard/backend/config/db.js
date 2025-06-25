// backend/config/db.js
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'Cibertec2404',
  server: 'WISAR_GAMER_1', // Ej: localhost o IP
  database: 'edulin',
  options: {
    encrypt: true, // Si usas Azure o SSL
    trustServerCertificate: false // Cambia a true si hay errores de certificado
  }
};

const pool = new sql.ConnectionPool(config);

pool.connect()
  .then(() => console.log('✅ Conectado a SQL Server'))
  .catch(err => console.error('❌ Error al conectar a SQL Server:', err));

module.exports = {
  sql,
  pool
};