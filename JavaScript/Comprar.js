//--ESTA ES PARA COMPRAS DIRECTAMENTE DE LA PAGINA DE CURSOS--

document.addEventListener("DOMContentLoaded", function() {
    const botonesCompra = document.querySelectorAll('.comprar');
    const loggedUser = sessionStorage.getItem("loggedUser");

    // Asegurar de que el usuario esté registrado y que los datos existan en localStorage
    const userData = JSON.parse(localStorage.getItem(loggedUser));

    // Selecciona el contenedor del carrito (sin número inicial)
    const carrito = document.querySelector(".carrito");

    // Actualiza el contador del carrito si ya hay productos comprados
    if (userData && userData.contadorCarrito > 0) {
        const numeroCarrito = document.createElement("p");
        numeroCarrito.classList.add("numero-carrito");
        numeroCarrito.innerText = userData.contadorCarrito;
        carrito.appendChild(numeroCarrito);
    }

    botonesCompra.forEach(boton => {
        boton.addEventListener("click", function() {
            const cursoElemento = this.closest(".clase");
            const titulo = cursoElemento.querySelector(".Titulo").innerText; // Verifica el selector
            const valor = cursoElemento.querySelector(".precio").innerText.replace('$', '');
            const modalidad = cursoElemento.querySelector(".Modalidad").innerText.replace('Modalidad : ', '');

            const loggedUser = sessionStorage.getItem("loggedUser");
            if (!loggedUser) {
                alert("Debes iniciar sesión para poder comprar.");
                return;
            }

            if (userData) {
                // Agregar el curso a cursosComprados
                userData.cursosComprados.push({
                    titulo: titulo,
                    valor: valor,
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
});
