<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "clickauto";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO reservaciones (recoleccion_lugar, recoleccion_fecha, recoleccion_hora, devolucion_lugar, devolucion_fecha, devolucion_hora, edad, adultos, ninos, tipo_vehiculo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssiii",
  $_POST['recoleccion_lugar'],
  $_POST['recoleccion_fecha'],
  $_POST['recoleccion_hora'],
  $_POST['devolucion_lugar'],
  $_POST['devolucion_fecha'],
  $_POST['devolucion_hora'],
  $_POST['edad'],
  $_POST['adultos'],
  $_POST['ninos'],
  $_POST['tipo_vehiculo']
);

if ($stmt->execute()) {
  echo "Reservación registrada exitosamente.";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
