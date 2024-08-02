const modalOverlay = document.querySelector('.modal-overlay');
const burgerOpen = document.querySelector('.open-burger');
const btnClose = document.querySelector('.close-btn');
const mobileOrderBtn = document.querySelector('.order-mobile');
const navList = document.querySelector('.nav-list');
const modalClsBody = document.querySelector('body');
const modalMenu = document.querySelector('.menu-list');



//burgerOpen.addEventListener('click', openModalWindow);

export function openModalWindow() {
    modalOverlay.classList.add('is-open-header');
    burgerOpen.style.opacity = 'none';
    modalClsBody.style.overflow = '';
    //document.body.style.overflow = 'hidden';
}


export function openMenu() {
    if (document.querySelector('.is-open-header') ) {
        modalMenu.classList.remove('is-open-header');
    }
    else {
        modalMenu.classList.add('is-open-header');
    }
    
    //burgerOpen.style.opacity = 'none';
    //modalClsBody.style.overflow = '';
    //document.body.style.overflow = 'hidden';
}
//btnClose.addEventListener('click', closeModalWindow);

export function closeModalWindow() {
    modalOverlay.classList.remove('is-open-header');
    burgerOpen.style.opacity = '';
    modalClsBody.style.opacity = '';
}

//navList.addEventListener('click', NavvMenu);

export function NavvMenu(evt) {
    evt.preventDefault();
    if (evt.target !== evt.currentTarget) {
        return;
    }
    else {
        modalOverlay.classList.remove('is-open-header');
        burgerOpen.style.opacity = '';
        modalClsBody.style.overflow = '';
    }
}

mobileOrderBtn.addEventListener('click', linkToFooter);

export function linkToFooter(evt) {
    evt.preventDefault();
    modalOverlay.classList.remove('is-open-header');
    burgerOpen.style.opacity = '';
    modalClsBody.style.overflow = '';

setTimeout(() => {
    document.querySelector('#worktogether').scrollIntoView({behavior: 'smooth'});
}, 100);
}

//navList.addEventListener('click', NavMenu);

export function NavMenu(evt) {
    if (evt.target.tagName === 'A') {
        modalOverlay.classList.remove('is-open-header');
        burgerOpen.style.opacity ='';
        modalClsBody.style.overflow = '';

        const targetId = evt.target.getAttribute('href');

        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});
        }, 100);
    }
}

//document.addEventListener('DOMContentLoaded', function () {
    //const menuItm = document.querySelectorAll('.custom-list .menu-list-item a');
    //const check = document.getElementById('menu-toggle');


    menuItm.forEach(item => {
        item.addEventListener('click', () => {
            check.checked = false;
        });
    });
});




