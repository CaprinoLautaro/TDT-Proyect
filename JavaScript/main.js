document.addEventListener("DOMContentLoaded", function(){
    const loggedUser = sessionStorage.getItem("loggedUser");
    const loginLink = document.querySelector(".botones-navBar1-Inicio");
    const registerLink = document.querySelector(".botones-navBar1-Registro");
    const userInfoLink = document.querySelector(".botones-navBar1-cuenta");

    if(loggedUser){
        loginLink.style.display = "none";
        registerLink.style.display = "none";
        userInfoLink.style.display = "block";
    } else {
        loginLink.style.display = "block";
        registerLink.style.display = "block";
        userInfoLink.style.display = "none";
    }
});
