document.querySelector(".carrito-js").addEventListener("click", function() {
    let usuarioRegistrado = sessionStorage.getItem("loggedUser");
if(usuarioRegistrado){
    window.location.href = "./pages/carrito.html";

} else {
    window.location.href = "./pages/inicioSesion.html"
}
});

