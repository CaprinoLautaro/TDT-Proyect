document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();


const nombre = document.getElementById("registerName").value;
const email = document.getElementById("registerEmail").value;
const pass = document.getElementById("registerPassword").value;
const parrafo = document.getElementById("warnings");


    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(nombre.length < 6){
        warnings += `El nombre no es valido <br>`
        entrar = true;
        
    };

    if(!regexEmail.test(email)){
        warnings += `El email no es valido <br>`
        entrar = true;
    };

    if(pass.length < 8){
        warnings += `La contraseña no es valida (Mas de 8 caracteres)<br>`
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings
    } else {
        const userData ={
            nombre: nombre,
            email: email,
            pass: pass
        };
        localStorage.setItem(nombre, JSON.stringify(userData));
        window.location.href = "./inicioSesion.html";
    }

});


