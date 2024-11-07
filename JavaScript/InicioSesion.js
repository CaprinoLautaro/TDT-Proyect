const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");
const formTittle = document.getElementById("formTittle");
const warnings = document.getElementById("loginWarnings")

function comprobarInicioSeion(){
    const loggedUser = sessionStorage.getItem("loggedUser");

    if(loggedUser){
        formTittle.innerHTML = `Bienvenido ${loggedUser}`;
        loginForm.style.display = "none";
        logoutButton.style.display = "block"
    }
}

comprobarInicioSeion();

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("loginName").value;
    const password = document.getElementById("loginPassword").value;

    const userDataGuardada = localStorage.getItem(nombre);
    if(userDataGuardada){
        const userData = JSON.parse(userDataGuardada);
        
        if(userData.pass === password){
            sessionStorage.setItem("loggedUser", nombre);
            window.location.href = "../index.html";
        } else {
            warnings.innerHTML = "Contraseña incorrecta.";
        }
    } else {
<<<<<<< HEAD
        warnings.innerHTML = "El usuario no está registrado";
=======
        warnings.innerHTML = "El usuario no esta regitrado";
>>>>>>> 20bf8da648a9a88f77efdd0adbf3fa106d413020
    }
});

logoutButton.addEventListener("click", function() {
    sessionStorage.removeItem("loggedUser");
    location.reload();  // Recargar la página para mostrar el formulario de nuevo
});
