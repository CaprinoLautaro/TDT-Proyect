let imagenes = ['img/cursos/curso python1.jpg','img/cursos/curso-java.webp','img/cursos/curso-html.webp','img/cursos/curso-css.webp','img/cursos/curso-php.webp']
    let contador = 0;

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
                
            });


    }


document.addEventListener("DOMContentLoaded", () => {
            let contenedor = document.querySelector('.contenedor');

            carrousel(contenedor);


    })
