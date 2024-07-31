import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export const swiper = new Swiper('.projects-js', {
  //slidesPerView: 1,
  //spaceBetween: 30,
  breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.preventDefault();
    if (event.shiftKey) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  }
});
