function abrirReserva() {
    document.getElementById('modalReserva').style.display = 'flex';
  }
  
  function cerrarReserva() {
    document.getElementById('modalReserva').style.display = 'none';
  }
  
  function mostrarCampos() {
    const tipo = document.getElementById("tipoRenta").value;
    const porDia = document.getElementById("camposPorDia");
    const porKm = document.getElementById("camposPorKm");
  
    if (tipo === "dia") {
      porDia.style.display = "block";
      porKm.style.display = "none";
    } else {
      porDia.style.display = "none";
      porKm.style.display = "block";
    }
  }

  document.getElementById('form-reserva').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se abra el archivo PHP
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch('guardar_reserva.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert(data); // puedes personalizar esto
      // Opcional: cerrar modal
      document.getElementById('miModal').style.display = 'none';
      form.reset(); // limpia el formulario
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Ocurrió un error al guardar la reservación.');
    });
  });
  