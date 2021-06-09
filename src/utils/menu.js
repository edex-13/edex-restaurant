const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const menuScreen = document.querySelector('.menu-screen');
const links = document.querySelectorAll('.menu-screen a');

menu.addEventListener('click', () => {
   menuScreen.classList.add('active');
});
closeMenu.addEventListener('click', () => {
   menuScreen.classList.remove('active');
});

links.forEach((link) => {
   link.addEventListener('click', function (ev) {
      menuScreen.classList.remove('active');
      ev.preventDefault();
      console.log(this);
      const path = this.href.split('/');
      const selector = path[path.length - 1]
      scrollToMenu(document.querySelector(selector));
      return false;
   });
});

function scrollToMenu({offsetTop}) {
   window.scrollTo({
      behavior: 'smooth',
      top: offsetTop,
   });
}
