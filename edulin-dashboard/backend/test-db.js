// backend/test-db.js
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'Cibertec2404',
  server: 'WISAR_GAMER_1', // Nombre de tu servidor SQL
  database: 'edulin', // Asegúrate de que esta BD exista
  options: {
    encrypt: true, // Usa esto si usas Azure o conexión segura
    trustServerCertificate: true // Solo para desarrollo local
  }
};

async function testConnection() {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT 1 AS alive`;
    console.log('✅ Conexión exitosa a SQL Server');
    console.log('Resultado de prueba:', result.recordset);
  } catch (err) {
    console.error('❌ Error al conectar a SQL Server:');
    console.error(err.message || err);
  }
}

testConnection();