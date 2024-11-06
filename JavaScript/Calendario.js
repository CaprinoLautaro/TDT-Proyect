document.addEventListener("DOMContentLoaded", () => { //El evento espera a que el contenido del dominio se haya cargado
    const openButtons = document.querySelectorAll(".btn-abrir");
    const closeButtons = document.querySelectorAll(".btn-cerrar");

    // Función para abrir el modal
    openButtons.forEach((btn) => { //foreach reccorre cada boton de openButtons
        btn.addEventListener("click", () => {
            const modal = btn.nextElementSibling; //Selecciona el siguiente elemento hermano del botón, que debería ser el modal que se quiere abrir
            modal.classList.add('active'); // Agrega la clase active para mostrar el modal
        });
    });

    // Función para cerrar el modal
    closeButtons.forEach((btn) => { //recorre todos los botones de cierre
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            modal.classList.remove('active'); // Quita la clase active para ocultar el modal
        });
    });

    // Cerrar al hacer clic fuera del modal
    document.querySelectorAll(".modal").forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) { // verifica si el clic fue dentro del modal
                modal.classList.remove('active'); // Cierra el modal
            }
        });
    });
});