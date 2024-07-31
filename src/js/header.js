const modalOverlay = document.getElementById('.modal-overlay');
const burgerOpen = document.getElementById('.open-burger');
const btnClose = document.getElementById('.close-btn');
const mobileOrderBtn = document.getElementById('.order-mobile');
const navList = document.getElementById('.nav-list');
const modalClsBody = document.getElementById('body');


burgerOpen.addEventListener('click', openModalWindow);

function openModalWindow() {
    modalOverlay.classList.add('is-open');
    burgerOpen.style.opacity = '';
    modalClsBody.style.overflow = '';
}

btnClose.addEventListener('click', closeModalWindow);

function closeModalWindow() {
    modalOverlay.classList.remove('is-open');
    burgerOpen.style.opacity = '';
    modalClsBody.style.opacity = '';
}

navList.addEventListener('click', NavvMenu);

function NavvMenu(evt) {
    evt.preventDefault();
    if (evt.target !== evt.currentTarget) {
        return;
    }
    else {
        modalOverlay.classList.remove('is-open');
        burgerOpen.style.opacity = '';
        modalClsBody.style.overflow = '';
    }
}

mobileOrderBtn.addEventListener('click', linkToFooter);

function linkToFooter(evt) {
    evt.preventDefault();
    modalOverlay.classList.remove('is-open');
    burgerOpen.style.opacity = '';
    modalClsBody.style.overflow = '';

setTimeout(() => {
    document.querySelector('#worktogether').scrollIntoView({behavior: 'smooth'});
}, 100);
}

navList.addEventListener('click', NavMenu);

function NavMenu(evt) {
    if (evt.target.tagName === 'A') {
        modalOverlay.classList.remove('is-open');
        burgerOpen.style.opacity ='';
        modalClsBody.style.overflow = '';

        const targetId = evt.target.getAttribute('href');

        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuItm = document.querySelectorAll('.custom-list .menu-list-item a');
    const check = document.getElementById('menu-toggle');

    menuItm.forEach(item => {
        item.addEventListener('click', () => {
            check.checked = false;
        });
    });
});