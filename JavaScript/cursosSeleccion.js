document.addEventListener("DOMContentLoaded", ()=>{

    const opcionOnline = document.querySelector(".opcionOnline");
    const opcionPresencial = document.querySelector(".opcionPresencial");
    const cursosOnline = document.querySelector(".cursos-Online");
    const cursosPresenciales = document.querySelector(".cursos-Presenciales");

    function mostrarCursoss(opcion){
        if(opcion === "online"){
            cursosOnline.classList.remove("oculto");
            cursosPresenciales.classList.add("oculto");
            opcionOnline.classList.add("seleccionada");
            opcionPresencial.classList.remove("seleccionada");
        } else {
            cursosOnline.classList.add("oculto");
            cursosPresenciales.classList.remove("oculto");
            opcionPresencial.classList.add("seleccionada");
            opcionOnline.classList.remove("seleccionada");
        }
    }

    opcionOnline.addEventListener("click", ()=> {
        mostrarCursoss("online");
    });

    opcionPresencial.addEventListener("click", ()=> {
        mostrarCursoss("presencial");
    })
});