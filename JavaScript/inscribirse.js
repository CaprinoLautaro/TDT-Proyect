document.addEventListener('DOMContentLoaded', function () {
    const inscribirseButton = document.querySelector('.inscribirse'); // Asegúrate de que este botón exista
    const cursoNombre = document.querySelector('.curso-nombre').innerText;  // Ajustamos la clase para que coincida con el HTML
    const modalidad = document.querySelector('.modalidad').innerText.replace('Modalidad : ', ''); // Esta clase es correcta
    const loggedUser = sessionStorage.getItem("loggedUser");
    console.log(cursoNombre);

    // Escuchar el clic del botón "Inscribirse"
    inscribirseButton.addEventListener('click', function () {
        // Redirigir al formulario de inscripción con el nombre del curso y la modalidad
        window.location.href = `./formuEmpresas.html?curso=${encodeURIComponent(cursoNombre)}&modalidad=${encodeURIComponent(modalidad)}`;
    });
});