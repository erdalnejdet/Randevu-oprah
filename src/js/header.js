const sidebar = document.querySelector('.open-menu');
const header = document.querySelector('header');
const mobileButton = document.querySelector('.open-menu-mobile');

sidebar.addEventListener('click', () => {
    header.classList.toggle('sidebar-on');
    header.classList.toggle('d-block');
});


mobileButton.addEventListener('click', () => {
    header.classList.toggle('sidebar-on');
    header.classList.toggle('d-block');
});
