// HAMBURGER MENU TRANSITION

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelectorAll('nav a');

menuIcon.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');

    // toggle between hamburger and X icon
    const isMenuOpen = nav.classList.contains('open');
    menuIcon.innerHTML = isMenuOpen ? '&times;' : '&#9776;';
});

// hide the menu when a link is clicked (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('open');
        menuIcon.innerHTML = '&#9776;'; // Reset to hamburger icon
    });
});