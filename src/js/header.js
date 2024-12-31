const sidebar = document.querySelector('.open-menu');
const header = document.querySelector('.header');

sidebar.addEventListener('click', () => {
    header.classList.toggle('sidebar-on');
});
