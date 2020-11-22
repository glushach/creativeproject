window.addEventListener('DOMContentLoaded', () => {
  const menuItem = document.querySelectorAll('.nav'),
  hamburger = document.querySelectorAll('.burger-menu');

  hamburger.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('burger-menu_active');
      menuItem.forEach(item => {
        item.classList.toggle('nav_active');
      });
    });
  });
});