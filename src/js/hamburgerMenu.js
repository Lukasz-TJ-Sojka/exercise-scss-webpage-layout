export const hamburgerMenu = () => {

    const menuBtn = document.querySelector('#hamburger-menu');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
        menu.classList.toggle('hide');
    });

}