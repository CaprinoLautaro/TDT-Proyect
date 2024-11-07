document.addEventListener("DOMContentLoaded", () => {
    const agregarPersonaBtn = document.querySelector(".AgregarPersona");
    const totalInscripcion = document.querySelector(".totalInscripcion");
    const ingresoDatos = document.querySelector(".ingreso-datos");
    const modal = document.querySelector(".modal");
    const modalBody = document.querySelector(".modal-body");
    const modalTotal = document.querySelector(".modal-total");
    const closeModal = document.querySelector(".close");
    const confirmarInscripcion = document.querySelector(".confirmarInscripcion");


    const urlParams = new URLSearchParams(window.location.search);
    const cursoNombre = urlParams.get('curso');
    const modalidad = urlParams.get('modalidad');

    console.log(cursoNombre);
    console.log(modalidad);

    const loggedUser = sessionStorage.getItem("loggedUser");
    const userData = JSON.parse(localStorage.getItem(loggedUser)) || { cursosPresenciales: [], contadorCarrito: 0 };
    const tituloCursoElement = document.querySelector(".titulo-curso"); 
    if (tituloCursoElement) {
        tituloCursoElement.textContent = `${cursoNombre}`;
    }
    let totalPersonas = 1;
    let costoPorPersona = 2500;
    let costoTotal = costoPorPersona;

    function actualizarCosto() {
        totalInscripcion.textContent = `${costoTotal}`;
    }

    function eliminarPersona(event) {
        if (totalPersonas > 1) {
            const personaForm = event.target.closest('.personasForm');
            personaForm.remove();
            totalPersonas--;
            costoTotal -= costoPorPersona;
            actualizarCosto();
        } else {
            alert("No puedes eliminar si tienes solo una persona.");
        }
    }

    function agregarPersona() {
        if (totalPersonas < 20) {
            totalPersonas++;
            costoTotal += costoPorPersona;
            const nuevaPersonaForm = document.createElement("article");
            nuevaPersonaForm.classList.add("personasForm");
            nuevaPersonaForm.innerHTML = `
            <form class="form" method="get" action="#">
                <div>
                    <label for="name">Nombre: </label>
                    <input type="text" name="name" id="name" placeholder="Ingrese su nombre" />
                </div>
                <div>
                    <label for="surname">Apellido: </label>
                    <input type="text" name="surname" id="surname" placeholder="Ingrese su apellido" />
                </div>
                <div>
                    <label for="dni">DNI: </label>
                    <input type="number" name="dni" id="dni" placeholder="Ingrese su DNI">
                </div>
                <div>
                    <label for="telefono">Teléfono: </label>
                    <input type="number" name="telefono" placeholder="Ingrese su Teléfono">
                </div>
                <button class="botones eliminarPersonaBtn" type="reset">
                    <img src="../img/iconos/eliminar.png" alt="eliminar datos">
                </button>
            </form>
            `;

            ingresoDatos.appendChild(nuevaPersonaForm);

            const eliminarPersonaBtn = nuevaPersonaForm.querySelector(".eliminarPersonaBtn");
            eliminarPersonaBtn.addEventListener("click", eliminarPersona);

            actualizarCosto();
        } else {
            alert("No puedes agregar más de 20 personas.");
        }
    }

    agregarPersonaBtn.addEventListener("click", agregarPersona);

    document.querySelectorAll(".eliminarPersonaBtn").forEach(btn => { 
        btn.addEventListener("click", eliminarPersona); 
    });

    actualizarCosto();

    function inscribirPersonas() {
        modalBody.innerHTML = "";
        const personas = ingresoDatos.querySelectorAll('.personasForm');
        const participantes = [];

        personas.forEach(persona => {
            const nombre = persona.querySelector('input[name="name"]').value;
            const apellido = persona.querySelector('input[name="surname"]').value;
            const dni = persona.querySelector('input[name="dni"]').value;
            const telefono = persona.querySelector('input[name="telefono"]').value;

            if (nombre && apellido && dni) {
                participantes.push({ nombre, apellido, dni, telefono });
                modalBody.innerHTML += `<p>Nombre: ${nombre}, Apellido: ${apellido}, DNI: ${dni}, Tel: ${telefono}</p>`;
            }
        });

        if (participantes.length > 0) {
            modalTotal.textContent = `Costo total de Inscripción: $${costoTotal}`;
            modal.style.display = "block";
        } else {
            alert("Debe ingresar al menos un participante.");
        }
    }

    const inscribirBtn = document.querySelector(".inscripcion-boton");
    inscribirBtn.addEventListener("click", inscribirPersonas);

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    confirmarInscripcion.onclick = function () {
        // Al confirmar la inscripción, almacenamos la información
        const participantes = ingresoDatos.querySelectorAll('.personasForm');
        const participantesArray = [];
        
        participantes.forEach(persona => {
            const nombre = persona.querySelector('input[name="name"]').value;
            const apellido = persona.querySelector('input[name="surname"]').value;
            const dni = persona.querySelector('input[name="dni"]').value;
            const telefono = persona.querySelector('input[name="telefono"]').value;

            if (nombre && apellido && dni) {
                participantesArray.push({ nombre, apellido, dni, telefono });
            }
        });

        if (participantesArray.length > 0) {
            // Añadir los participantes al curso en el array de cursosPresenciales
            userData.cursosPresenciales.push({
                titulo: cursoNombre,
                modalidad: modalidad,
                participantes: participantesArray,
                costoTotal: costoTotal,
                cantidadParticipantes: totalPersonas
            });




            // Incrementar el contador del carrito
            userData.contadorCarrito++;
            alert("Curso presencial añadido al carrito!");
            location.reload();


          // Actualizar los cursosComprados si es necesario
        userData.cursosComprados.push({
            titulo: cursoNombre,
            modalidad: modalidad,
            valor: costoTotal,  // El valor total del curso (por cantidad de personas)
            cantidad: totalPersonas
        });

        // Guardar los datos actualizados en el localStorage
        localStorage.setItem(loggedUser, JSON.stringify(userData));
        
        // Actualizar el contador en el carrito
        actualizarContadorCarrito(userData.contadorCarrito);

        // Recargar la página para reflejar los cambios
        
        modal.style.display = "none";
    } else {
        alert("Debe ingresar al menos un participante.");
    }
    };
});