document.addEventListener("DOMContentLoaded", function() {
    const charCount = document.getElementById("char-count");
    const consultaTextarea = document.getElementById("consulta");
    const popup = document.getElementById("popup");
    const popupButton = document.getElementById("popupButton");
    const form = document.querySelector("form");

    // muestra el popup cuando se manda el formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // evita el envío del formulario

        // validaciones de cada campo
        const nombre = document.getElementById("name").value.trim();
        const apellido = document.getElementById("last_name").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        
        // validación de nombre y apellido
        if (nombre === "" || apellido === "") {
            alert("Nombre y apellido son obligatorios.");
            return;
        }
        
        // validación de mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        // validacion de telefono
        const telefonoRegex = /^(\d{4}-\d{4}|\d{8})$/;
        if (telefono && !telefonoRegex.test(telefono)) {
            alert("El teléfono debe tener 8 dígitos, opcionalmente con un guion (por ejemplo, 1234-5678 o 12345678).");
            return;
        }

        // si todas las validaciones son correctas, muestra el popup
        popup.classList.add("show");
    });

    // Ocultar el popup y redirigir al hacer clic en el botón de cierre
    popupButton.addEventListener("click", function() {
        popup.classList.remove("show");
        // espera un poco para la transición, luego recarga la página
        setTimeout(function() {
            window.location.href = "../index.html"; // redirige
        }, 300); 
    });

    // Actualiza el conteo de caracteres
    consultaTextarea.addEventListener("input", function() {
        const maxChars = 1000;
        const remainingChars = maxChars - consultaTextarea.value.length;
        charCount.textContent = `Caracteres restantes: ${remainingChars}`;
    });
});
