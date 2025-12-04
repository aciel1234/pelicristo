let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector('.card-container');
  const totalSlides = document.querySelectorAll('.card').length;

  slideIndex += step;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  // Mover el contenedor de las tarjetas
  const slideWidth = document.querySelector('.card').offsetWidth;
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}