const burgerBtn = document.querySelector('.burger-btn');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('nav-overlay');

burgerBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-open');
    burgerBtn.setAttribute('aria-expanded', isOpen);
});

overlay.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burgerBtn.classList.remove('is-open');
    burgerBtn.setAttribute('aria-expanded', false);
});