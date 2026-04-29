const navBar = document.querySelector('.nav-bar');
const navMenu  = document.querySelector('.manu-bar');
navBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
    navMenu.classList.toggle('active');

})