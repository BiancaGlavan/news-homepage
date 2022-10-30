const hamburgerBtn = document.querySelector('.hamburger-button');

const mobileMenu = document.querySelector('.mobile-menu');


hamburgerBtn.addEventListener('click', () => {
   mobileMenu.classList.toggle('open');
});