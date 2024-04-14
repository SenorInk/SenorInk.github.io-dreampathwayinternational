const menuToggle = document.querySelector('.menu-toggle');
const drawerMenu = document.querySelector('.drawer-menu');
const headerText = document.querySelector('.headertext'); // Corrected the class name

menuToggle.addEventListener('click', () => {
    drawerMenu.classList.toggle('open');
    headerText.classList.toggle('hidden'); // Corrected the class name
    menuToggle.classList.toggle('open');
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

  const navLinks = document.querySelectorAll('.headertext ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove 'active' from other links 
      navLinks.forEach(otherLink => otherLink.classList.remove('active')); 
      // Add 'active' to the clicked link
      link.classList.add('active');
    });
  });
  

