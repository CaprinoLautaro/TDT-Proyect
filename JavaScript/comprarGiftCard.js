document.addEventListener("DOMContentLoaded", function() {
    const confirmGiftCardButton = document.querySelector(".confirmarGiftCard");

    confirmGiftCardButton.addEventListener("click", function(e) {
        e.preventDefault();

        // Verificar si el usuario ha iniciado sesión
        const loggedUser = sessionStorage.getItem("loggedUser");
        if (!loggedUser) {
            alert("Debes iniciar sesión para poder comprar.");
            return;
        }

        // Obtener los valores del nombre del destinatario y el monto de la gift card
        const recipientName = document.getElementById("recipiente").value;
        const giftCardMount = document.querySelector(".monto-texto").value;

        // Verificar si ambos campos están completos
        if (!recipientName || !giftCardMount) {
            alert("Por favor, completa todos los campos");
            return;
        }

        // Obtener los datos del usuario desde localStorage
        const userData = JSON.parse(localStorage.getItem(loggedUser));

        if (userData) {
            // Inicializar el array de gift cards compradas si no existe
            userData.cursosComprados = userData.cursosComprados || [];
            userData.cursosComprados.push({
                titulo: `Gift Card - ${recipientName}`,
                modalidad: "Gift Card",
                valor: parseFloat(giftCardMount),
                cantidad: 1 // Siempre es una única unidad
            });

            // Incrementar el contador del carrito
            userData.contadorCarrito = (userData.contadorCarrito || 0) + 1;

            // Guardar los datos actualizados en localStorage
            localStorage.setItem(loggedUser, JSON.stringify(userData));

            // Actualizar el número del carrito en la página
            const carritoElement = document.querySelector(".numero-carrito");
            if (carritoElement) {
                carritoElement.innerText = userData.contadorCarrito;
            }

            alert("Gift card añadida al carrito!");
            location.reload();
        }
    });
});