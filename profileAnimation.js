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

  