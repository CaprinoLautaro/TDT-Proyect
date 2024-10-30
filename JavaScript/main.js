document.addEventListener("DOMContentLoaded", function(){
    const loggedUser = sessionStorage.getItem("loggedUser");
    const loginLink = document.getElementById("loginLink");
    const registerLink = document.getElementById("registerLink");
    const userInfoLink = document.getElementById("userInfoLink");

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
