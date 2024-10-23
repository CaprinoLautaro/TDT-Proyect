let imagenes = ['img/cursos/curso-java.webp','img/cursos/curso-html.webp','img/cursos/curso-css.webp','img/cursos/curso-php.webp'],
    contador = 0;

    function carrousel(contenedor){
            contenedor.addEventListener('click', e=> {
                let atras = contenedor.querySelector('.atras'),
                    adelante = contenedor.querySelector('.adelante'),
                    img = contenedor.querySelector('img'),
                    tgt = e.target;


                    if(tgt == atras){
                        if(cont > 0){
                            img.src = imagenes[contador - 1];
                            contador--;
                        }else{
                            img.src = imagenes[imagenes.length - 1];
                            cont = imagenes.length -1;
                        }

                    }else if(tgt == adelante){

                        if(cont < imagenes.length -1){
                            img.src = imagenes[contador + 1];
                            contador++;
                        }else{
                            img.src = imagenes[0];
                            cont = 0;
                        }
                    }
                
                    


            });


    }


    document.addEventListener("DOMContentLoaded", () => {
            let contenedor = document.querySelector('.contenedor');

            carrousel(contenedor);


    })