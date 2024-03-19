const menuToggle = document.querySelector('.menu-toggle');
  const drawerMenu = document.querySelector('.drawer-menu');
  const header = document.querySelector('headertext'); // Get a reference to the header

  menuToggle.addEventListener('click', () => {
    drawerMenu.classList.toggle('open');
    header.classList.toggle('hidden'); // Toggle the 'hidden' class
    menuToggle.setAttribute('aria-expanded', drawerMenu.classList.contains('open'));
  });

  