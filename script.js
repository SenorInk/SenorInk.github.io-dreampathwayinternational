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

// Assuming you've fetched the actual follower and like counts from Facebook's API
const followerCountTarget = 23000; // Replace with your actual follower count
const likeCountTarget = 22000; // Replace with your actual like count

const followerCountElement = document.querySelector('.follower-count');
const likeCountElement = document.querySelector('.like-count');

// Simple animation loop
function animateCount(countElement, targetCount, duration) {
  let currentCount = 0;
  const timeInterval = 30; // Update the count every 30ms
  const increment = Math.ceil(targetCount / (duration / timeInterval));

  const counter = setInterval(() => {
    currentCount += increment;

    // Modification: 
    if (currentCount >= targetCount) {
      clearInterval(counter);
      countElement.textContent = targetCount + "+"; // Add the '+' sign
    } else {
       countElement.textContent = currentCount;
    }
  }, timeInterval); 
}

// Start the animation once the elements are ready
window.addEventListener('load', () => {
  animateCount(followerCountElement, followerCountTarget, 2000); 
  animateCount(likeCountElement, likeCountTarget, 2000);    
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


