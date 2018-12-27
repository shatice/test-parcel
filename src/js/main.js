var menu = document.getElementById('menu');
var bgmenu = document.getElementById('menu__burger');

bgmenu.addEventListener('click', function() {
  menu.classList.toggle('is-open');
});