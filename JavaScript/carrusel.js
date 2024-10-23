<<<<<<< HEAD
let imagenes = ['img/cursos/curso python1.jpg', 'img/cursos/curso-java.webp', 'img/cursos/curso-html.webp', 'img/cursos/curso-css.webp', 'img/cursos/curso-php.webp']


let linksImg = ['pages/pagina-python.html', 'pages/pagina-java.html', 'pages/pagina-html.html', 'pages/pagina-css.html', 'pages/pagina-php.html'];
=======
let imagenes = ['img/cursos/curso python1.jpg','img/cursos/curso-java.webp','img/cursos/curso-html.webp','img/cursos/curso-css.webp','img/cursos/curso-php.webp']
    

let linksImg = ['pages/pagina-python.html','pages/pagina-java.html','pages/pagina-html.html','pages/pagina-css.html','pages/pagina-php.html'];
>>>>>>> bc5f6db756d650bb4b5b9a7a9898c7f5810da91b

let contador = 0;
const intervaloTiempo = 3000


<<<<<<< HEAD
function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.boton-atras'),
            adelante = contenedor.querySelector('.boton-adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1];
                contador--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                contador = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1];
                contador++;
            } else {
                img.src = imagenes[0];
                contador = 0;
            }
        }

        img.src = imagenes[contador];
        img.onclick = function () {
            window.location.href = linksImg[contador];
        };
    });
}

function carruselEnMovimiento() {
=======
function carrousel(contenedor){
            contenedor.addEventListener('click', e => {
                let atras = contenedor.querySelector('.boton-atras'),
                    adelante = contenedor.querySelector('.boton-adelante'),
                    img = contenedor.querySelector('img'),
                    tgt = e.target;
    if(tgt == atras){
        if(contador > 0){
            img.src = imagenes[contador - 1];
            contador--;
                }else{
                        img.src = imagenes[imagenes.length - 1];
                        contador = imagenes.length -1;
                        }
                        }else if(tgt == adelante){
                            if(contador < imagenes.length -1){
                                img.src = imagenes[contador + 1];
                                contador++;
                            }else{
                                img.src = imagenes[0];
                                contador = 0;
                                }
                    }
                
    img.src = imagenes[contador];
        img.onclick = function(){
            window.location.href = linksImg[contador];
                };
            });
}       

function carruselEnMovimiento(){
>>>>>>> bc5f6db756d650bb4b5b9a7a9898c7f5810da91b
    let img = document.querySelector('.contenedor img');

    setInterval(() => {
        contador = (contador + 1) % imagenes.length;
        img.src = imagenes[contador];


<<<<<<< HEAD
        img.onclick = function () {
=======
        img.onclick = function(){
>>>>>>> bc5f6db756d650bb4b5b9a7a9898c7f5810da91b
            window.location.href = enlaces[contador];

        };


    }, intervaloTiempo);
}

document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
    let contenedor = document.querySelector('.contenedor');

    carrousel(contenedor);

    carruselEnMovimiento();
})
=======
            let contenedor = document.querySelector('.contenedor');

            carrousel(contenedor);

            carruselEnMovimiento();
    })
>>>>>>> bc5f6db756d650bb4b5b9a7a9898c7f5810da91b
