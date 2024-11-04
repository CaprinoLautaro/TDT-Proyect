document.addEventListener("DOMContentLoaded", () => {
    const agregarPersonaBtn = document.querySelector(".AgregarPersona");
    const totalInscripcion = document.querySelector(".totalInscripcion");
    const ingresoDatos = document.querySelector(".ingreso-datos");
    const modal = document.querySelector(".modal");
    const modalBody = document.querySelector(".modal-body");
    const modalTotal = document.querySelector(".modal-total");
    const closeModal = document.querySelector(".close");
    const confirmarInscripcion = document.querySelector(".confirmarInscripcion")



    let totalPersonas = 1;
    let costoPorPersona = 20;
    let costoTotal = costoPorPersona;

    function actualizarCosto() {
        totalInscripcion.textContent = costoTotal;
    }

    function eliminarPersona(event) {
        if (totalPersonas > 1) {
            const personaForm = event.target.closest('.personasForm');
            personaForm.remove();
            totalPersonas--;
            costoTotal -= costoPorPersona;
            actualizarCosto();
        } else {
            alert("No puedes eliminar si tienes solo una persona")
        }
    }

    function agregarPersona() {
        if (totalPersonas < 20) {
            totalPersonas++;
            costoTotal += costoPorPersona;
            const nuevaPersonaForm = document.createElement("article");
            nuevaPersonaForm.classList.add("personasForm");
            nuevaPersonaForm.innerHTML =
                `
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
                    <input type="number" name="dni" id="dni" placeholder="Ingrese su dni">

                </div>

                    <div>
                        <label for="telefono"> Tel: </label>
                        <input type="number" name="telefono" placeholder="Ingrese su Telefono">
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
            alert("No puedes agregar mas de 20 personas.");
        }
    }

    agregarPersonaBtn.addEventListener("click", agregarPersona);

    document.querySelectorAll(".eliminarPersonaBtn").forEach(btn => { btn.addEventListener("click", eliminarPersona); });


    actualizarCosto();



    function inscribirPersonas(){
        modalBody.innerHTML = "";
        const personas = ingresoDatos.querySelectorAll('.personasForm');

        personas.forEach(persona => {
            const nombre = persona.querySelector('input[name="name"]').value;
            const apellido = persona.querySelector('input[name="surname"]').value;
            const dni = persona.querySelector('input[name="dni"]').value;
            const telefono = persona.querySelector('input[name="telefono"]').value;

            if(nombre && apellido && dni){
                modalBody.innerHTML += `<p>Nombre : ${nombre}, Apellido: ${apellido}, DNI : ${dni}, Tel: ${telefono} </p>`
            }
        });

        modalTotal.textContent = `Costo total de Inscripcion : $${costoTotal}`;
        modal.style.display = "block";
    }

    const inscribirBtn = document.querySelector(".inscripcion-boton");
    inscribirBtn.addEventListener("click", inscribirPersonas);

    closeModal.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function(event){
        if(event.target === modal){
            modal.style.display = "none";
        }


    }

    confirmarInscripcion.onclick = function() {
        alert("inscripcion confirmada.");
        modal.style.display = "none";
    }
});