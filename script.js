const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('.nav-ul');
const header = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    hamburger.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
    hamburger.classList.toggle('sticky', window.scrollY > 0);
});
