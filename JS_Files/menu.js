const navLinks = document.getElementById('navLinks');
const showMenu = document.getElementById('menuBar');
const hideMenu = document.getElementById('closeIcon');
const closeMenuDisappear = document.querySelector('.disappear');
const closeMenu = document.getElementById('navItems');

showMenu.onclick = function showMenu() {
  navLinks.style.width = '170vw';
  closeMenuDisappear.style.display = 'block';
};

hideMenu.onclick = function hideMenu() {
  navLinks.style.width = '0';
  closeMenuDisappear.style.display = 'none';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.width = '0';
  closeMenuDisappear.style.display = 'none';
};