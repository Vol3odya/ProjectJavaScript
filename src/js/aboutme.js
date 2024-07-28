//import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
//import 'swiper/css/pagination';

new Swiper('.swiper', {
  slidesPerView: 6,
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

  }
});

const swiper = document.querySelector('.swiper');
console.log(swiper);
//swiper.data-swiper-slide-index[0].backgroundColor = black;

//const accordion = document.querySelector('accordion-container')
//console.log(accordion);


//const accord = new Accordion('.container-second', {//
//  duration: 400,
//  showMultiple: true,
//  onOpen: function(currentElement) {
//  console.log(currentElement);
//  }
//});
//
//const accordions = Array.from(document.querySelectorAll('.accordion-container'));
//new Accordion(accordions, {duration: 400,
//  showMultiple: true,
//  onOpen: function(currentElement) {
//    console.log(currentElement);
//  }});