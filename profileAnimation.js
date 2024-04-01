function autoScroll() {
    var carousel = document.querySelector('.profile-carousel');
    // Check if the scroll position has reached the end
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
      // Reset scroll position to the beginning
      carousel.scrollLeft = 0;
    } else {
      // Scroll to the right
      carousel.scrollLeft += 1; // Adjust the scrolling speed as needed
    }
  }

  // Call the autoScroll function every 10 milliseconds
  setInterval(autoScroll, 20);

  const carousel = document.getElementById('profile-carousel');
      let isDown = false;
      let startX;
      let scrollLeft;
    
      carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });
    
      carousel.addEventListener('mouseleave', () => {
        isDown = false;
      });
    
      carousel.addEventListener('mouseup', () => {
        isDown = false;
      });
    
      carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll speed here
        carousel.scrollLeft = scrollLeft - walk;
      });

      $('.clients-carousel').owlCarousel({
	           loop: true,
	           nav: false,
	           autoplay: true,
	           autoplayTimeout: 5000,
	           animateOut: 'fadeOut',
	           animateIn: 'fadeIn',
	           smartSpeed: 450,
	           margin: 30,
	           responsive: {
	               0: {
	                   items: 1
	               },
	               768: {
	                   items: 2
	               },
	               991: {
	                   items: 2
	               },
	               1200: {
	                   items: 2
	               },
	               1920: {
	                   items: 2
	               }
	           }
	       });

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

