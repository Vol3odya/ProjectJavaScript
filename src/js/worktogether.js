const feedbackForm = document.querySelector('.js-feedback-form');
const modalWindow = document.querySelector('.js-modal-backdrop');

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modalWindow.classList.contains('is-open')) {
    modalWindow.classList.remove('is-open');
  }
});

function eventHandler(e) {
  e.preventDefault();
  modalWindow.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function modalWindowClose(e) {
  const modalClose = e.target.closest('.js-modal-close');

  if (e.target === modalWindow || modalClose) {
    modalWindow.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }
}

export { feedbackForm, modalWindow, eventHandler, modalWindowClose };
