document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navtoggle');
    const navMenu = document.getElementById('navmenu');
    const navToggleLines = document.querySelectorAll('.nav__toggle-line');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav__menu--active');
        
        navToggleLines[0].classList.toggle('nav__toggle-line--rotate-down');
        navToggleLines[1].classList.toggle('nav__toggle-line--middle-active');
        navToggleLines[2].classList.toggle('nav__toggle-line--bottom-active');
    }   );
});