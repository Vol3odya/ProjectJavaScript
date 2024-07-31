import Accordion from 'accordion-js';
import faqData from '../data/faq.json';

const refs = {
  faqList: document.querySelector('.js-accordion-container-faq'),
};

// /img/icons.svg#icon-up
function renderFAQ(data) {
  return data
    .map(
      ({ question, answer }) =>
        `<li class="ac ac-faq">
            <h2 class="ac-header">
                <button type="button" class="ac-trigger" aria-label="open the answer to the question">${question}
                <span class="svg-wrap-faq"> 
                <svg class="icon-faq" width="20" height="20">
                 <use href="../img/faq/icons.svg#icon-up"></use>
              </svg></span></button>
             </h2>
            <div class="ac-panel">
              <p class="ac-text">${answer}</p>
             </div>
       </li>`
    )
    .join('');
}



refs.faqList.insertAdjacentHTML('beforeend', renderFAQ(faqData));



document.querySelectorAll('.ac-trigger').forEach((button) => {
  button.addEventListener('click', (event) => {
    const accordion = event.target.closest('.ac');
    accordion.classList.toggle('active');

    const panel = accordion.querySelector('.ac-panel');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});