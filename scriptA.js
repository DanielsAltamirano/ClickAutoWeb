// Slider de autos
let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index || i === index + 1 || i === index + 2) ? 'block' : 'none';
    });

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
}

prev.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : 0;
    showSlides(slideIndex);
});

next.addEventListener('click', () => {
    slideIndex = (slideIndex < slides.length - 3) ? slideIndex + 1 : slideIndex;
    showSlides(slideIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideIndex = i;
        showSlides(slideIndex);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);

    // Responsive menu toggle
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

function cambiarCantidad(id, cambio) {
    const input = document.getElementById(id);
    let valor = parseInt(input.value);
    valor = isNaN(valor) ? 0 : valor;
    valor += cambio;
    if (valor < 0) valor = 0;
    input.value = valor;
}