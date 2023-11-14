const btnMobile = document.getElementById('btn-responsivo'),
      navMenu = document.querySelectorAll('.nav-menu');

function toggleMenu() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
navMenu.forEach(n => n.addEventListener('click', toggleMenu));



const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})