//import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/css';

export const swiperProjects = () => {
  const swiper = new Swiper('.projects-js', {
  slidesPerView: 1,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  navigation: {
    nextEl: '.project-button-next',
    prevEl: '.project-button-prev',
  },
  on: {
      reachEnd: () => {
        document.querySelector('.project-button-next').classList.add('disabled');
      },
      reachBeginning: () => {
        document.querySelector('.project-button-prev').classList.add('disabled');
      },
      fromEdge: () => {
        document.querySelector('.project-button-prev').classList.remove('disabled');
        document.querySelector('.project-button-next').classList.remove('disabled');
      },
    },
});
}


//document.addEventListener('keydown', event => {
  //if (event.key === 'Tab') {
    //event.preventDefault();
    //if (event.shiftKey) {
      //swiper.slidePrev();
    //} else {
      //swiper.slideNext();
    //}
  //}
//});
