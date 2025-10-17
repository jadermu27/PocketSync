//BLOQUE: JAVASCRIPT PARA EL MENU HAMBURGUESA
//Funcionalidad para el menu hamburguesa

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navtoggle');
    const navMenu = document.getElementById('navmenu');
    const navToggleLines = document.querySelectorAll('.nav__toggle-line');

    //Evento click para el botón hamburguesa
    navToggle.addEventListener('click', function() {
        //Alternar la clase activa para mostrar/ocultar el menú
        navMenu.classList.toggle('nav__menu--active');
        
        //Animar las líneas del botón hamburguesa
        navToggleLines[0].classList.toggle('nav__toggle-line--top-active');
        navToggleLines[1].classList.toggle('nav__toggle-line--middle-active');
        navToggleLines[2].classList.toggle('nav__toggle-line--bottom-active');
    });
});