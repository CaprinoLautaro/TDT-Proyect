document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('.comprar-curso');
    const cursoNombre = document.querySelector('.curso-nombre').innerText;
    const precioCurso = document.querySelector('.precio').innerText.replace('$', '');
    const modalidad = document.querySelector('.modalidad').innerText;
    const loggedUser = sessionStorage.getItem("loggedUser");
    const userData = JSON.parse(localStorage.getItem(loggedUser));
    const carrito = document.querySelector(".carrito");

    if (userData && userData.contadorCarrito > 0) {
        const numeroCarrito = document.createElement("p");
        numeroCarrito.classList.add("numero-carrito");
        numeroCarrito.innerText = userData.contadorCarrito;
        carrito.appendChild(numeroCarrito);
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
            alert("Curso online añadido al carrito!");
            location.reload();
        }
    });
});