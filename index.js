const typingElement = document.querySelector('.typing');

const textLoad = () => {
    setTimeout(() => {
        typingElement.textContent = "IT Student";
    }, 0);
    
    setTimeout(() => {
        typingElement.textContent = "Developer";
    }, 4000); // Change after 4 seconds

    setTimeout(() => {
        typingElement.textContent = "Designer";
    }, 8000); // Change after 8 seconds
};

// Start the text loading function
textLoad();

// Optionally, you can loop the text changes
setInterval(() => {
    textLoad();
}, 12000); // Repeat every 12 seconds (4s + 4s + 4s)

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