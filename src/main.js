import { feedbackForm, modalWindow, eventHandler, modalWindowClose } from './js/worktogether';


feedbackForm.addEventListener('submit', eventHandler);
modalWindow.addEventListener('click', modalWindowClose);