function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  


  document.querySelectorAll('.slider').forEach(slider => {
    let currentIndex = 0;

    const slides = slider.querySelector('.slides');
    const slideCount = slides.children.length;
    const visibleSlides = 3;
    const maxIndex = slideCount - visibleSlides;

    function moveSlides(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > maxIndex) {
            currentIndex = 0;
        }

        const slideWidth = slides.children[0].offsetWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function autoSlide() {
      moveSlides(1); // Automatically move slides forward
  }

  setInterval(autoSlide, 2000);
});


window.addEventListener('resize', () => {
    document.querySelector('.slides').style.transform = 'translateX(0px)'; 
    currentIndex = 0; 
});











