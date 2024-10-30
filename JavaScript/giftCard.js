//boton reset---la llamo desde el boton en el html
function resetearSeleccion(){
    document.querySelector('.texto-tarjeta-nombre').textContent = '----nombre----';
    document.querySelector('.monto').textContent = '$ ---';
    document.querySelector('.giftcard-content').style.backgroundColor = '';
    document.querySelector('.texto-tarjeta').style.color = ''; 
    document.querySelector('.texto-tarjeta').style.fontSize = 'initial';
};

// Cambiar el nombre del destinatario en la vista previa
function cambiarNombre(){
    const nameInput= document.getElementById('recipiente');

    nameInput.addEventListener('input', function() {
        document.querySelector('.texto-tarjeta-nombre').textContent = nameInput.value;
    });
};
   
// Cambiar el monto en la vista previa
function cambiarMonto(){
    const montoInput=document.querySelector('.monto-texto');
    montoInput.addEventListener('input', function() {
        document.querySelector('.monto').textContent = `$ ${montoInput.value}`;
    });
};

//cambiar el color del texto
const colorTxtGift=document.querySelectorAll('input[name="seleccion-color-txt"]');
const textoGift= document.querySelector('.texto-tarjeta');
const fechaYhora=document.querySelector('.fechaYhora');

function cambiarColorTxt(event){
    let colorTxt;//este va a cambiar segun lo que seleccione
    const seleccion=event.target.id;

    switch(seleccion){
        case 'celeste-txt':
            // el window.getComputedStyle devuelve un objeto de declaracion de css,
            // asi obtiene los estilos aplicados.. en este caso seleccionamos su background
            colorTxt=window.getComputedStyle(document.querySelector('.celeste')).backgroundColor;
            fechaYhora.style.backgroundColor = '#03112b';
            break;
        case 'amarillo-txt':
                colorTxt=window.getComputedStyle(document.querySelector('.amarillo')).backgroundColor;
                fechaYhora.style.backgroundColor = '#03112b';
                break;  
        case 'azul-txt':
            colorTxt=window.getComputedStyle(document.querySelector('.azul')).backgroundColor;
            fechaYhora.style.backgroundColor = '#2f92cf';
            break;
        case 'verde-txt':
                colorTxt=window.getComputedStyle(document.querySelector('.verde')).backgroundColor;
                fechaYhora.style.backgroundColor = '#03112b';
                break; 
        case 'aqua-txt':
            colorTxt=window.getComputedStyle(document.querySelector('.aqua')).backgroundColor;
            fechaYhora.style.backgroundColor = '#03112b';
            break;
        case 'blanco-txt':
                colorTxt=window.getComputedStyle(document.querySelector('.blanco')).backgroundColor;
                fechaYhora.style.backgroundColor = '#03112b';
                break;  
    }
    textoGift.style.color=colorTxt;
    fechaYhora.style.color=colorTxt;
    
}
//--cambiar tamaño del nombre de la tarjetaa
const tamanio=document.querySelectorAll('input[name="seleccion-tamanio"]');
const textoTamaño= document.querySelector('.texto-tarjeta-nombre');

function cambiarTamaño(event){
    let tamanio;
    const selecTamaño=event.target.id;

    switch(selecTamaño){
        case 'px16':
            tamanio='1rem';
            break;
        case 'px24':
            tamanio='1.5rem';
            break;
        case 'px32':
            tamanio='2rem';
            break;
        case 'px40':
            tamanio='2.5rem';
            break;
        case 'px48':
            tamanio='3rem';
            break;
    }
textoTamaño.style.fontSize = tamanio;
};

const ubicacion=document.querySelectorAll('input[name="seleccion-posicion"]');

function cambiarUbicacion(event) {
    //los reestablezco primero
    fechaYhora.style.top = ''; 
    fechaYhora.style.bottom = '';

    if (event.target.id === 'arriba') {
        fechaYhora.style.top = '0.2rem'; 
       
    } else if (event.target.id === 'abajo') {
        fechaYhora.style.top = '27.8rem'; 
    }
}

//--ACA LLAMO A LAS FUNCTION --
cambiarNombre();
cambiarMonto();

/*esta necesita ejecutarse c/vez que el usuario selecciona un radio, por eso usa el forEach
agrega un "escuchador de eventos"tipo change, 
el escuchador detecta la seleccion del usuario y llama al metodo creado*/
colorTxtGift.forEach(radio => {
    radio.addEventListener('change', cambiarColorTxt);
    //cambia por la seleccion del switch, funcion creada para cambiar el color del texto
});

tamanio.forEach((radio) => {
    radio.addEventListener('change', cambiarTamaño);
});

ubicacion.forEach((radio) => {
    radio.addEventListener('change', cambiarUbicacion);
});
    
    
       

    