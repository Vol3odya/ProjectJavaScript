import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function faq() {
  const accordion = document.querySelector('.faq-accordion-container')

  const accordions = Array.from(document.querySelectorAll('.faq-accordion-container'));
  new Accordion(accordions, {
    duration: 600,
    showMultiple: true,
    onOpen: function (currentElement) {

    },
    //openOnInit: [0]
  });
}