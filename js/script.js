document.addEventListener('DOMContentLoaded', () => {
  new TypeIt (".animated", {
      speed: 100,
     
      loop: true
  }).type ('Estratégias de Marketing Digital', {delay: 500}).delete (32).type ('SEO- Search Engine Optimization', {delay:500}).delete (31).type ('Alojamento Cloud', {delay: 500}).delete (16).type ('Cibersegurança', {delay:500})
   
  .go ()
})


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
});


 