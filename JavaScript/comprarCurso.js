//--ESTA ES LA DE COMPRA POR CADA CURSO DESDE SUS PAGINAS--
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.comprar-curso');
    const cursoNombre = document.querySelector('.curso-nombre').innerText;
    const precioCurso = document.querySelector('.precio').innerText.replace('$', '');
    const modalidad = document.querySelector('.modalidad').innerText;
    const loggedUser = sessionStorage.getItem("loggedUser");
    const userData = JSON.parse(localStorage.getItem(loggedUser));
    const carrito = document.querySelector(".carrito");

    // Actualizar el carrito si ya hay productos
    if (userData && userData.contadorCarrito > 0) {
        const numeroCarrito = document.createElement("p");
        numeroCarrito.classList.add("numero-carrito");
        numeroCarrito.innerText = userData.contadorCarrito;
        carrito.appendChild(numeroCarrito);
    }
    
    if (!loggedUser) {
        alert("Debes iniciar sesión para poder comprar.");
        return;
    }

    addToCartButton.addEventListener('click', function () {
        if (userData) {
            // Agregar el curso a cursosComprados
            userData.cursosComprados.push({
                titulo: cursoNombre,
                valor: precioCurso,
                modalidad: modalidad
            });

            // Aumentar el contador del carrito
            userData.contadorCarrito++;

            // Guarda los datos actualizados en localStorage
            localStorage.setItem(loggedUser, JSON.stringify(userData));
            
            // Si el carrito no tiene contador, crear el elemento de contador
            let numeroCarrito = carrito.querySelector(".numero-carrito");
            if (!numeroCarrito) {
                numeroCarrito = document.createElement("p");
                numeroCarrito.classList.add("numero-carrito");
                carrito.appendChild(numeroCarrito);
            }

            // Actualiza el número de artículos en el carrito
            numeroCarrito.innerText = userData.contadorCarrito;
        }
    });
});

// Función para actualizar el contador del carrito en el header
function actualizarContadorCarritoHeader() {
    const loggedUser = sessionStorage.getItem("loggedUser");
    const userData = JSON.parse(localStorage.getItem(loggedUser));

    // Selecciona el elemento del contador en el header
    const carritoHeader = document.querySelector(".carrito .numero-carrito");

    // Si el usuario tiene cursos en el carrito, actualiza el número
    if (carritoHeader) {
        carritoHeader.innerText = userData.contadorCarrito;
    } else {
        // Si no existe el contador, creamos el elemento y lo añadimos
        const carrito = document.querySelector(".carrito");
        const numeroCarrito = document.createElement("p");
        numeroCarrito.classList.add("numero-carrito");
        numeroCarrito.innerText = userData.contadorCarrito;
        carrito.appendChild(numeroCarrito);
    }
}

// Función para manejar la eliminación de un curso del carrito
function eliminarCurso(titulo, modalidad, loggedUser, userData) {
    // Encontrar el curso en el arreglo original de cursosComprados
    let index = userData.cursosComprados.findIndex(curso => curso.titulo === titulo && curso.modalidad === modalidad);
    if (index !== -1) {
        userData.cursosComprados.splice(index, 1); // Eliminar una instancia del curso
        userData.contadorCarrito--; // Disminuir el contador del carrito
        
        // Actualizar localStorage con los nuevos datos
        localStorage.setItem(loggedUser, JSON.stringify(userData));

        // Actualizar el contador en el header
        actualizarContadorCarritoHeader();
        
        // Recargar la página del carrito para reflejar los cambios
        location.reload(); // Recargar la página para ver los cambios en el carrito
    }
}
