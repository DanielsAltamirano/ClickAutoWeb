// Futuro comportamiento dinámico (slider, login, etc.)

console.log("ClickAuto página de ofertas cargada correctamente");

// Aquí puedes agregar funcionalidad extra en el futuro, como filtros de ofertas.

const carrusel = document.getElementById('carrusel');
const btnPrev = document.querySelector('.carrusel-btn.prev');
const btnNext = document.querySelector('.carrusel-btn.next');

let offset = 0;
const slideWidth = 320; // ancho de cada item incluyendo margen

btnNext.addEventListener('click', () => {
  if (offset < carrusel.scrollWidth - carrusel.clientWidth) {
    offset += slideWidth;
    carrusel.style.transform = `translateX(-${offset}px)`;
  }
});

btnPrev.addEventListener('click', () => {
  if (offset > 0) {
    offset -= slideWidth;
    carrusel.style.transform = `translateX(-${offset}px)`;
  }
});
