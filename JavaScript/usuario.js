document.addEventListener("DOMContentLoaded", function (){
    const nameTitleElement = document.getElementById("nameOfUser");
    const nameElement = document.getElementById("nameOfUserText");
    const mailElement = document.getElementById("mailOfUser");
    const logoutButton = document.getElementById("logoutButton");
    const eliminateButton = document.getElementById("eliminateButton");

    const modal = document.querySelector(".modal-js");
    const confirmDeleteButton = document.querySelector(".confirmDelete-js");
    const cancelDeleteButton = document.querySelector(".cancelDelete-js");
    const loggedUser = sessionStorage.getItem("loggedUser");


    if(loggedUser){
        const userData = JSON.parse(localStorage.getItem(loggedUser));
        if(userData && userData.nombre && userData.email){
            console.log(userData.nombre);
            nameTitleElement.textContent = userData.nombre;
            nameElement.textContent = userData.nombre;
            mailElement.textContent = userData.email;
        } else {
                window.location.href = './inicioSesion.html';
        }
    } else {
        window.location.href = './inicioSesion.html';
    } 


    eliminateButton.addEventListener("click", function(){
        modal.style.display = "block";
    });


    cancelDeleteButton.addEventListener("click", function(){
        modal.style.display = "none";
    });

    logoutButton.addEventListener("click", function(){
        sessionStorage.removeItem("loggedUser");
        window.location.href = './inicioSesion.html';
    });

    confirmDeleteButton.addEventListener("click", function(){
        localStorage.removeItem(loggedUser);
        sessionStorage.removeItem("loggedUser");
        window.location.href = './registro.html';
    });
});