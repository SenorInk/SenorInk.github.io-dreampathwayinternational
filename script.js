const menuToggle = document.querySelector('.menu-toggle');
    const drawerMenu = document.querySelector('.drawer-menu');
    const header = document.querySelector('headertext'); // Get a reference to the header

    menuToggle.addEventListener('click', () => {
    drawerMenu.classList.toggle('open');
    header.classList.toggle('hidden'); // Toggle the 'hidden' class
    menuToggle.setAttribute('aria-expanded', drawerMenu.classList.contains('open'));
  });

  // At the bottom of your existing JavaScript, or in a new <script> tag
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-header');
    let scrollPosition = window.scrollY; 

    if (scrollPosition > 50) {  // Adjust threshold when to start hiding
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
  });