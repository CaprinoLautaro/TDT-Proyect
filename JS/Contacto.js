document.addEventListener("DOMContentLoaded", function() { 
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("last_name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("telefono");
    const consultaInput = document.getElementById("consulta");

    form.addEventListener("submit", function(event) { 
        event.preventDefault();

        if (validateForm()) {
            showPopup("Consulta enviada", "Aceptar");
        }
    });

    consultaInput.addEventListener("input", function() { 
        updateCharacterCount();
    });

    function validateForm() {
        let isValid = true;

        if (!nameInput.value.trim()) {
            alert("El campo 'Nombre' no puede estar vacío.");
            isValid = false;
        }

        if (!lastNameInput.value.trim()) {
            alert("El campo 'Apellido' no puede estar vacío.");
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            alert("El campo 'E-Mail' no tiene un formato válido.");
            isValid = false;
        }

        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            alert("El campo 'Teléfono' debe contener 8 dígitos y opcionalmente un guión en la posición correcta.");
            isValid = false;
        }

        if (consultaInput.value.length > 1000) {
            alert("El campo 'Consulta' no puede exceder los 1000 caracteres.");
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^\d{4}-?\d{4}$/;
        return phoneRegex.test(phone);
    }

    function updateCharacterCount() {
        const maxLength = 1000;
        const currentLength = consultaInput.value.length;
        const remainingCharacters = maxLength - currentLength;

        let counterElement = document.getElementById("characterCounter");
        if (!counterElement) {
            counterElement = document.createElement("p");
            counterElement.id = "characterCounter";
            consultaInput.parentNode.appendChild(counterElement);
        }
        counterElement.textContent = `Caracteres restantes: ${remainingCharacters}`;
    }

    function showPopup(message, buttonText) {
        const popup = document.createElement("div");
        popup.classList.add("popup");

        popup.innerHTML = `
            <p>${message}</p>
            <button id="popupButton">${buttonText}</button>
        `;

        document.body.appendChild(popup);

        const popupButton = document.getElementById("popupButton");
        popupButton.addEventListener("click", function() {
            document.body.removeChild(popup);
            window.location.href = "../index.html";
        });
    }
});
