//este es de la pagina de cursos-cursos presenciales.. o sea la pagina general con la grilla de cursos
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los botones de inscribirse
    const inscribirseButtons = document.querySelectorAll('.inscribirse');

    // Recorrer todos los botones y agregarles un evento de clic
    inscribirseButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Dentro de cada botón, encontramos los datos del curso
            const cursoElemento = button.closest('.clase');  // Buscar el contenedor más cercano de la clase
            const cursoNombre = cursoElemento.querySelector('.curso-nombre').innerText;  // Título del curso
            const modalidad = cursoElemento.querySelector('.modalidad').innerText.replace('Modalidad : ', '');  // Modalidad del curso

            // Redirigir al formulario de inscripción con el nombre del curso y la modalidad en la URL
            window.location.href = `./formuEmpresas.html?curso=${encodeURIComponent(cursoNombre)}&modalidad=${encodeURIComponent(modalidad)}`;
        });
    });
});
