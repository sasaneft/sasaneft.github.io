if (typeof document !== 'undefined') {
  // Hamburger Menu
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('active');
    });
  }
}
