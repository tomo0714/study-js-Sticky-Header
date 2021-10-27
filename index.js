// DOM
const nav = document.querySelector('nav');

// constant
const navPos = nav.offsetTop;

// Function
const stickyHeader = () => {
    if(window.scrollY > navPos) {
        nav.style.position = 'fixed';
    } else {
        nav.style.position = 'static';
    }
};

// Event
window.addEventListener('scroll', stickyHeader);
