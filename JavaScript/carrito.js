document.addEventListener('DOMContentLoaded', function () {
    const carritoContainer = document.querySelector('.listaCompra .letraTamanio');
    const totalContainer = document.querySelector('.total');
    const loggedUser = sessionStorage.getItem("loggedUser");

    // Verificar si hay un usuario logueado
    if (!loggedUser) {
        mostrarMensajeCarritoVacio("Debes iniciar sesión para ver tu carrito.");
        return;
    }

    const userData = JSON.parse(localStorage.getItem(loggedUser));

    // Verificar si el carrito del usuario está vacío
    if (!userData || !userData.cursosComprados || userData.cursosComprados.length === 0) {
        mostrarMensajeCarritoVacio("EL CARRITO SE ENCUENTRA VACIO");
        return;
    }

    // Agrupar y mostrar los cursos en el carrito
    const cursosAgrupados = agruparCursos(userData.cursosComprados);
    mostrarCursosEnCarrito(cursosAgrupados, carritoContainer);
    actualizarTotal(cursosAgrupados, totalContainer);

    // Actualizar contador en el header
    actualizarContadorCarrito(userData.contadorCarrito);

    // Evento para manejar el clic en el botón de eliminar
    carritoContainer.addEventListener('click', function (event) {
        manejarClickEliminar(event, loggedUser, userData);
    });
});

// Función para mostrar un mensaje si el carrito está vacío
function mostrarMensajeCarritoVacio(mensaje) {
    const carritoContainer = document.querySelector('.listaCompra .letraTamanio');
    const totalContainer = document.querySelector('.total');
    carritoContainer.innerHTML = `<p>${mensaje}</p>`;
    totalContainer.innerText = "Total: $0";
}

// Función para agrupar los cursos y contar cuántas veces se compraron
function agruparCursos(cursosComprados) {
    const cursoMap = new Map();
    cursosComprados.forEach(curso => {
        const key = `${curso.titulo}-${curso.modalidad}`;
        if (!cursoMap.has(key)) {
            cursoMap.set(key, { ...curso, cantidad: 1 });
        } else {
            cursoMap.get(key).cantidad++;
        }
    });
    return Array.from(cursoMap.values());
}

// Función para mostrar los cursos en el carrito
function mostrarCursosEnCarrito(cursosAgrupados, carritoContainer) {
    carritoContainer.innerHTML = ""; // Limpiar contenedor
    cursosAgrupados.forEach(curso => {
        const cursoElement = document.createElement("div");
        cursoElement.classList.add("curso-item");

        cursoElement.innerHTML = `
            <h5>Curso: ${curso.titulo}</h5>
            <h7>${curso.modalidad}</h7>
            <div class="division-contenedor"> <!-- Contenedor con borde -->
                <div class="division">
                    <p>Precio: $${curso.valor}</p>
                    <p>Cantidad: ${curso.cantidad}</p>
                </div>
            </div>
            <h8>Total= $${(curso.valor * curso.cantidad).toFixed(2)}</h8>
            <span class="eliminar-curso" data-titulo="${curso.titulo}" data-modalidad="${curso.modalidad}">Eliminar</span>
        `;
        carritoContainer.appendChild(cursoElement);
    });
}

// Función para actualizar el contador en el header
function actualizarContadorCarrito(contador) {
    const carritoHeader = document.querySelector(".carrito .numero-carrito");
    if (carritoHeader) {
        carritoHeader.innerText = contador;
    } else {
        const carrito = document.querySelector(".carrito");
        const numeroCarrito = document.createElement("p");
        numeroCarrito.classList.add("numero-carrito");
        numeroCarrito.innerText = contador;
        carrito.appendChild(numeroCarrito);
    }
}

// Función para actualizar y mostrar el total en el carrito
function actualizarTotal(cursosAgrupados, totalContainer) {
    let total = 0;
    cursosAgrupados.forEach(curso => {
        total += curso.valor * curso.cantidad;
    });
    totalContainer.innerText = `Total: $${total.toFixed(2)}`;
}

// Función para manejar el clic en el botón de eliminar
function manejarClickEliminar(event, loggedUser, userData) {
    if (event.target.classList.contains('eliminar-curso')) {
        const titulo = event.target.getAttribute('data-titulo');
        const modalidad = event.target.getAttribute('data-modalidad');
        eliminarCurso(titulo, modalidad, loggedUser, userData);
    }
}

// Función para eliminar un curso (reduce cantidad en 1 o elimina si es el último)
function eliminarCurso(titulo, modalidad, loggedUser, userData) {
    // Encontrar el curso en el arreglo original de cursosComprados
    let index = userData.cursosComprados.findIndex(curso => curso.titulo === titulo && curso.modalidad === modalidad);
    if (index !== -1) {
        userData.cursosComprados.splice(index, 1); // Eliminar una instancia del curso
        userData.contadorCarrito--; // Disminuir el contador del carrito
        
        // Actualizar localStorage con los nuevos datos
        localStorage.setItem(loggedUser, JSON.stringify(userData));

        // Actualizar el contador en el header
        actualizarContadorCarrito(userData.contadorCarrito);
        
        // Recargar la página del carrito para reflejar los cambios
        location.reload(); // Recargar la página para ver los cambios en el carrito
    }
}