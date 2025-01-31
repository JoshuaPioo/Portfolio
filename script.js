var typing = new Typed(".typing", {
    strings: ["Frontend", "Editor", "Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            navMenu.classList.remove('active');
        }
    });
});