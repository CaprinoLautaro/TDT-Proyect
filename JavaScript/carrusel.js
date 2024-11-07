let imagenes = ['img/cursos/curso python1.jpg', 'img/cursos/curso-java.webp', 'img/cursos/curso-html.webp', 'img/cursos/curso-css.webp', 'img/cursos/curso-php.webp',
    'img/presenciales/curso-adobe.webp','img/presenciales/curso-office.webp','img/presenciales/curso-python.webp']


let linksImg = ['pages/pagina-python.html', 'pages/pagina-java.html', 'pages/pagina-html.html', 'pages/pagina-css.html', 'pages/pagina-php.html','pages/curso-presencial-adobe.html',
    'pages/curso-presencial-office.html','pages/curso-presencial-python.html'];

let contador = 0;
const intervaloTiempo = 3000
let intervaloId;

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
    const img = document.querySelector('.contenedor img');

    intervaloId = setInterval(() => {
        contador = (contador + 1) % imagenes.length;
        img.src = imagenes[contador];
        img.onclick = function () {
            window.location.href = linksImg[contador];

        };
    }, intervaloTiempo);
}

function detenerCarrousel(){
        clearInterval(intervaloId);
}


document.addEventListener("DOMContentLoaded", () => {
            const contenedor = document.querySelector('.contenedor');
            const img = contenedor.querySelector('img');

            carrousel(contenedor);
            carruselEnMovimiento();

            img.addEventListener('mouseover', detenerCarrousel);
            img.addEventListener('mouseleave', carruselEnMovimiento);
    })
