// Autor: Daniel Carril Miranda
// GitHub: https://github.com/Daniel-Carril-Miranda/Actividad_ObjetoForm_Layout.git

document.addEventListener("DOMContentLoaded", function () {
    const hamburguerBtn = document.querySelector(".hamburguer-btn");
    const navLinks = document.querySelector(".nav-links");
  
    hamburguerBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
// CARRUSEL LÓGICA
document.addEventListener('DOMContentLoaded', function () {
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');

  // Botones
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Contador
  let counter = 0;
  const size = carouselImages[0].clientWidth;

  // Pasar al siguiente slide
  function nextSlide() {
    if (counter >= carouselImages.length - 1) {
      carouselSlide.style.transition = "none";
      counter = -1; // Resetea el contador al principio
    }
    counter++;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  // Pasar al slide anterior
  function prevSlide() {
    if (counter <= 0) {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length; // Coloca el contador al final
    }
    counter--;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  // Botón siguiente
  nextBtn.addEventListener('click', nextSlide);

  // Botón anterior
  prevBtn.addEventListener('click', prevSlide);

  // Pase automático
  setInterval(nextSlide, 5000); // Cambia cada 5 segundos (5000 milisegundos)
});
// BOTON OSCURO
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark");
}


  