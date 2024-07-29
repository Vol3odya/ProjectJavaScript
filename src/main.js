import { feedbackForm, modalWindow, eventHandler, modalWindowClose } from './js/worktogether';


feedbackForm.addEventListener('submit', eventHandler);
modalWindow.addEventListener('click', modalWindowClose);

import {
  fetchReviews,
  createReviewItem,
  initializeSlider,
  displayReviews,
} from './js/reviews.js';

document.addEventListener('DOMContentLoaded', displayReviews);
