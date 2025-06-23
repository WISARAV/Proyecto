<?php
header("Content-Type: application/json");

// Configuración de la conexión a MySQL Server
$host = "localhost";      // O la IP si está en otro servidor
$dbname = "edulin";       // Nombre de tu base de datos
$username = "sa";         // Usuario proporcionado
$password = "Cibertec2404"; // Contraseña proporcionada

try {
    // Conexión PDO a MySQL Server
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Obtener estudiantes
    $stmt = $pdo->query("SELECT nombre, promedio, riesgo_emocional FROM estudiantes");
    $estudiantes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Obtener alertas
    $stmt = $pdo->query("SELECT mensaje, fecha FROM alertas ORDER BY fecha DESC LIMIT 5");
    $alertas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolver respuesta JSON
    echo json_encode([
        "estudiantes" => $estudiantes,
        "alertas" => $alertas
    ]);

} catch (PDOException $e) {
    // Manejo de errores
    echo json_encode(["error" => "Error de conexión: " . $e->getMessage()]);
}
?>