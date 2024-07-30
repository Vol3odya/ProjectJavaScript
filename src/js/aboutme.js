import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';


new Swiper('.swiper', {
  
  loop: true, 
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  mousewheel: true,
  clickable: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
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
});

const swiper = document.querySelector('.swiper');
console.log(swiper);


const accordion = document.querySelector('.accordion-container')
console.log(accordion);

const accordions = Array.from(document.querySelectorAll('.accordion-container'));
new Accordion(accordions, {duration: 600,
  showMultiple: true,
  onOpen: function(currentElement) {
    console.log(currentElement);
  },
  openOnInit: [0]
});