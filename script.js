const menuToggle = document.querySelector('.menu-toggle');
const drawerMenu = document.querySelector('.drawer-menu');
const headerText = document.querySelector('.headertext'); // Corrected the class name

menuToggle.addEventListener('click', () => {
    drawerMenu.classList.toggle('open');
    headerText.classList.toggle('hidden'); // Corrected the class name
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', drawerMenu.classList.contains('open'));
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-header');
    let scrollPosition = window.scrollY; 

    if (scrollPosition > 50) {  // Adjust threshold when to start hiding
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
});

