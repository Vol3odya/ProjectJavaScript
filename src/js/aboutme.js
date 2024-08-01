import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';


  
export const aboutSwiper = () => {
  const swiper = new Swiper('.reviews-swiper', {
      navigation: {
      nextEl: '.review-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
    },
    on: {
      slideChange: function (swiper) {
          let activeIndex = swiper.realIndex
          let cards = document.querySelectorAll('.skill-slide');
          cards.forEach((item, index) => {
            if (index === activeIndex) {
              item.classList.add('skill-slide-active');
            } else {
              item.classList.remove('skill-slide-active')
            }
          });
        }
    },
  });
};

const initializeSlider = () => {
    new Swiper('.skills-conteiner', {
  
      loop: true,
      speed: 400,
      spaceBetween: 0,
      navigation: {
        nextEl: '.my-next',
      },
      mousewheel: true,
      clickable: true,
      //scrollbar: {
      //el: '.swiper-scrollbar',
      //touchRatio: 1,
      //touchAngle: 45,
      //grabCursor: true,
      //},
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 6,
        },
      },
      on: {
        
      },
    });
  }

  //const swiper = document.querySelector('.swiper');

export function aboutme() {
  const accordion = document.querySelector('.acc-container')
  //console.log(accordion);

  const accordions = Array.from(document.querySelectorAll('.acc-container'));
  new Accordion(accordions, {
    duration: 600,
    showMultiple: true,
    onOpen: function (currentElement) {
      //console.log(currentElement);
    },
    openOnInit: [0]
  });
}