const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');
15
toggle.addEventListener('click', () => {
nav.classList.toggle('active');
});