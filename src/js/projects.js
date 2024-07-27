import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

var swiper = new Swiper('.projects-js', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
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
