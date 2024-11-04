document.addEventListener("DOMContentLoaded", function() {
    const cursos = [
        {
            titulo: "Curso De Introduccion A css",
            valor: 3500,
            descripcion: "Curso de Introducción a css: aprende los fundamentos de programación con css.Ideal para principiantes, cubrirá variables, estructuras de control, funciones y manejo de datos.",
            profesor: "Max Wright",
            imagen: "../img/cursos/curso-css.webp",
            enlace: "./pagina-css.html",
            modalidad: "online"
        },

        {
            titulo: "Curso De Introduccion A excel",
            valor: 5000,
            descripcion: "Curso de Introducción a Excel: aprende los fundamentos de programación con Python. Ideal para principiantes, cubrirá variables, estructuras de control, funciones y manejo de datos.",
            profesor: "Hideo Kojima",
            imagen: "../img/cursos/curso-excel.webp",
            enlace: "./pagina-excel.html",
            modalidad: "online"
        },

        {
            titulo: "Curso De Introduccion A HTML",
            valor: 3499.99,
            descripcion: "Curso de Introducción a HTML: aprende los fundamentos de programación con Python. Ideal para principiantes, cubrirá variables, estructuras de control, funciones y manejo de datos.",
            profesor: "Charles Xavier",
            imagen: "../img/cursos/curso-html.webp",
            enlace: "./pagina-html.html",
            modalidad: "online"
        },

        {
            titulo: "Curso De Introduccion A java",
            valor: 3499.99,
            descripcion: "Curso de Introducción a JAVA: aprende los fundamentos de programación con Python. Ideal para principiantes, cubrirá variables, estructuras de control, funciones y manejo de datos.",
            profesor: "Lee Sang-Hyeok",
            imagen: "../img/cursos/curso-java.webp",
            enlace: "./pagina-java.html",
            modalidad: "online"
        },


        {
            titulo: "Curso De Introduccion A PHP",
            valor: 3499.99,
            descripcion: "Curso de Introducción a PHP: aprende los fundamentos del desarrollo web con PHP. Ideal para principiantes, cubrirá variables, estructuras de control, funciones, y manejo de bases de datos.",
            profesor: "Hidetaka Miyazaki",
            imagen: "../img/cursos/curso-php.webp",
            enlace: "./pagina-php.html",
            modalidad: "online"
        },

        {
            titulo: "Curso De Introduccion A Python",
            valor: 3499.99,
            descripcion: "Curso de Introducción a Python: aprende los fundamentos de programación con Python. Ideal para principiantes, cubrirá variables, estructuras de control, funciones y manejo de datos.",
            profesor: "Kevin Molotov",
            imagen: "../img/cursos/curso python1.jpg",
            enlace: "./pagina-python.html",
            modalidad: "online"
        }



    ];

    const cursosPresenciales = [
        
        
        {
            titulo: "Curso De photoshop e ilustrator",
            valor: 20,
            descripcion: " Este curso te guiará en el dominio de herramientas de diseño gráfico esenciales, permitiéndote crear y editar gráficos profesionales. Desde la edición de imágenes en Photoshop hasta la creación de ilustraciones en Illustrator, este curso es ideal para aquellos que desean aprender y perfeccionar sus habilidades en diseño visual.",
            profesor: "Minerva McGonagall",
            imagen: "../img/presenciales/curso-adobe.webp",
            enlace: "./curso-presencial-adobe.html",
            modalidad: "presencial"
        },

        {
            titulo: "Curso De curso-office",
            valor: 20,
            descripcion: "Este curso te guiará en el dominio de herramientas de diseño gráfico esenciales, permitiéndote crear y editar gráficos profesionales. Desde la edición de imágenes en Photoshop hasta la creación de ilustraciones en Illustrator, este curso es ideal para aquellos que desean aprender y perfeccionar sus habilidades en diseño visual.",
            profesor: "Albus Dumbledore",
            imagen: "../img/presenciales/curso-office.webp",
            enlace: "./curso-presencial-office.html",
            modalidad: "presencial"
        },

        {
            titulo: "Curso De Python",
            valor: 20,
            descripcion: " Curso de Python - Presencial: aprende los fundamentos de programación con Python. Ideal para principiantes, cubrirá variables, estructuras de control, funciones y manejo de datos.",
            profesor: "Severus Snape",
            imagen: "../img/presenciales/Curso Python.webp",
            enlace: "./curso-presencial-python.html",
            modalidad: "presencial"
        }
        
    ]
    const contenedorCursosOnline = document.querySelector(".cursos-Online");
    const contenedorCursosPresenciales = document.querySelector(".cursos-Presenciales");

    cursos.forEach(curso => {
        const cursoHTML =
            `<div class="clase">
        <a href="${curso.enlace}" class="clase-contenido">
            <img src="${curso.imagen}" alt="Imagen-clase">
            <h3 class="Titulo">${curso.titulo}</h3>
            <p class="Modalidad"> Modalidad : ${curso.modalidad} </p>
            <p>${curso.profesor}</p>
            <p class="descripcion"> ${curso.descripcion}</p>
        </a>
        <button class="link comprar" >
            <p>Comprar </p> <p class="precio">$${curso.valor}</p><img src="../img/carrito de compras.png" alt="carrito-compras">
        </button>
    </div>`;


            contenedorCursosOnline.innerHTML += cursoHTML;

    });

    cursosPresenciales.forEach(curso => {
        const cursoHTML =
            `<div class="clase">
        <a href="${curso.enlace}" class="clase-contenido">
            <img src="${curso.imagen}" alt="Imagen-clase">
            <h3 class="Titulo">${curso.titulo}</h3>
            <p class="Modalidad"> Modalidad : ${curso.modalidad} </p>
            <p>${curso.profesor}</p>
            <p class="descripcion"> ${curso.descripcion}</p>
        </a>
        <button class="link inscribirse" >
            <p>Inscribirse</p> <img src="../img/carrito de compras.png" alt="carrito-compras">
        </button>
    </div>`;

    contenedorCursosPresenciales.innerHTML += cursoHTML;
    });
});