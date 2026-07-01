// Insertar la plantilla en el documento HTML
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-plantilla');
    if (contenedor) {
        contenedor.innerHTML = generarPlantilla(); // Inyecta la plantilla
    }
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Muestra u oculta el menú
}

// Cerrar el menú automáticamente cuando se seleccione una sección
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('active'); // Oculta el menú
    });
});


document.querySelector('#equipo-link').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el salto directo a la sección
    const destino = document.getElementById("equipo"); // Ubica la sección
    const posicion = destino.getBoundingClientRect().top + window.scrollY - 260; // Calcula posición ajustada
    window.scrollTo({ top: posicion, behavior: "smooth" }); // Desplazamiento suave
});

document.querySelector('a[href="#servicios"]').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const destino = document.getElementById("servicios"); // Encuentra la sección
    const posicion = destino.getBoundingClientRect().top + window.scrollY - 260; // Ajusta la posición sumando 100px arriba
    window.scrollTo({ top: posicion, behavior: "smooth" }); // Desplazamiento suave
});






