function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;
        console.log(totalSlides)
        let slideIndex = 0;
        
        const showSlides = (index) => {
            if (index > totalSlides) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = index;
            }
            const offset = -slideIndex * 100;
            slider.querySelector('.slides').style.transform = `translateX(${offset}%)`;
        };

        const moveSlides = (n) => {
            showSlides(slideIndex + n);
        };

        slider.querySelector('.prev').addEventListener('click', () => {
            moveSlides(-1);
        });

        slider.querySelector('.next').addEventListener('click', () => {
            moveSlides(1);
        });

        
        showSlides(slideIndex);
    });
});


window.addEventListener('resize', () => {
    document.querySelector('.slides').style.transform = 'translateX(0px)'; 
    currentIndex = 0; 
});






