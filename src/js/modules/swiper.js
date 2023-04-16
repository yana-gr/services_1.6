
import './variables'

// Слайдер
if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.brands__container', {
    slidesPerView: 5,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.brands--swiper-pagination',
    },
  });
}

if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.devices__container', {
    slidesPerView: 3,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.devices--swiper-pagination',
    },
  });
} 

if (document.body.clientWidth < 767) {
  const swiper = new Swiper('.prices__container', {
    slidesPerView: 2,
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.prices--swiper-pagination',
    },
  });
} 
