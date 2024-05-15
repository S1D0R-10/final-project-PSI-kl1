const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentSlide * 100; // Przesunięcie slajdu o 100% szerokości
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 5000); // Zmienia slajd co 3 sekundy

// Inicjalizacja pierwszego slajdu
updateSlidePosition();
