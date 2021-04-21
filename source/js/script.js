const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.pop-up');

const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(function (el) {
    el.addEventListener('click', function (evt) {
        const modalType = evt.target.dataset.action;
        const modal = document.querySelector('.pop-up--' + modalType);
        modal.classList.remove('pop-up--close');
        modal.classList.add('pop-up--open');
        overlay.classList.add('db');
    })
});

const buttonsClose = document.querySelectorAll('.button--close');

buttonsClose.forEach(function (el) {
    el.addEventListener('click', function (evt) {
        const modalOpen = document.querySelector('.pop-up--open');
        modalOpen.classList.remove('pop-up--open');
        modalOpen.classList.add('pop-up--close');
        overlay.classList.remove('db');

    })
});
