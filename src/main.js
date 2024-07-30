
//Aboutme
import { aboutme } from './js/aboutme.js';
aboutme();





//Covers
import { setupCoverAnimation } from './js/covers.js';
setupCoverAnimation();


//Reviews
import {
  fetchReviews,
  createReviewItem,
  initializeSlider,
  displayReviews,
} from './js/reviews.js';

document.addEventListener('DOMContentLoaded', displayReviews);


//Worktogether
import { feedbackForm, modalWindow, eventHandler, modalWindowClose } from './js/worktogether';
import { validateEmail } from './js/worktogether';

feedbackForm.addEventListener('submit', eventHandler);
modalWindow.addEventListener('click', modalWindowClose);
const form = document.querySelector('.js-form');
const emailInput = document.getElementById('user-email');
const textInput = document.getElementById('user-text');
const emailValidationMessage = document.getElementById('email-validation-message');
const emailInputWrapper = emailInput.parentElement;
const textInputWrapper = textInput.parentElement;




emailInput.addEventListener('focus', () => {
    emailInputWrapper.classList.add('focused');
});

emailInput.addEventListener('blur', () => {
    emailInputWrapper.classList.remove('focused');
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        emailValidationMessage.textContent = "Success!";
        emailValidationMessage.classList.remove('error');
        emailInputWrapper.classList.remove('error');
        emailInputWrapper.classList.add('success');
    } else {
        emailValidationMessage.textContent = "Invalid email, try again";
        emailValidationMessage.classList.add('error');
        emailInputWrapper.classList.remove('success');
        emailInputWrapper.classList.add('error');
    }
});

textInput.addEventListener('focus', () => {
    textInputWrapper.classList.add('focused');
});

textInput.addEventListener('blur', () => {
    textInputWrapper.classList.remove('focused');
});


form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
        emailValidationMessage.textContent = "Invalid email, try again";
        emailValidationMessage.classList.add('error');
        emailInputWrapper.classList.remove('success');
        emailInputWrapper.classList.add('error');
        return;
    }

    const formData = {
        email: emailInput.value,
        text: textInput.value
    };

    try {
    const response = await fetch('https://portfolio-js.b.goit.study/api-docs', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        // alert('Ваш запит був успішно надісланий.');
        emailValidationMessage.textContent = "Success!";
        emailValidationMessage.classList.remove('error');
        emailInputWrapper.classList.remove('error');
        emailInputWrapper.classList.add('success');
        form.reset();
        emailValidationMessage.textContent = '';
        emailInputWrapper.classList.remove('success');
    } else {
        const errorData = await response.json();
        emailValidationMessage.textContent = errorData.message || 'An error occurred. Please try again.';
        emailValidationMessage.classList.add('error');
        emailInputWrapper.classList.remove('success');
        emailInputWrapper.classList.add('error');
    }
    } catch (error) {
        emailValidationMessage.textContent = 'An error occurred. Please check your input and try again.';
        emailValidationMessage.classList.add('error');
        emailInputWrapper.classList.remove('success');
        emailInputWrapper.classList.add('error');
    }
});