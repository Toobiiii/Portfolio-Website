// Hamburger-Menü

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

// Vorher-Nachher Slider für Projekt 1 initialisieren
const sliderInput = document.getElementById('projekt1Slider');
const sliderContainer = document.querySelector('.slider-container');

if (sliderInput && sliderContainer) {
    sliderInput.addEventListener('input', (e) => {
        // Schreibt den aktuellen Prozentwert live in die CSS-Variable
        sliderContainer.style.setProperty('--slider-pos', `${e.target.value}%`);
    });
}