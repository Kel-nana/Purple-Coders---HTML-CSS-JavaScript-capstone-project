const navLinks = document.getElementById('navLinks');
const showMenu = document.getElementById('menuBar');
const hideMenu = document.getElementById('closeIcon');
const closeMenu = document.getElementById('navItems');

showMenu.onclick = function showMenu() {
  navLinks.style.width = '170vw';
  hideMenu.style.display = 'block';
};

hideMenu.onclick = function hideMenu() {
  navLinks.style.width = '0';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.width = '0';
};