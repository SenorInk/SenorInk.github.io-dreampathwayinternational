window.addEventListener('scroll', function() {
    var smallHeader = document.querySelector('.small-header');
    var header = document.querySelector('header');
    var logo = document.querySelector('.logo img');
  
    if (window.scrollY > 0) {
      smallHeader.classList.add('hidden');
      header.classList.add('sticky');
      logo.classList.add('sticky');
    } else {
      smallHeader.classList.remove('hidden');
      header.classList.remove('sticky');
      logo.classList.remove('sticky');
    }
  });
  