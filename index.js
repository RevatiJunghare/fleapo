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
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');

    function moveSlides(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        const slideWidth = slides.children[0].offsetWidth;
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => moveSlides(-1));
    nextButton.addEventListener('click', () => moveSlides(1));
});


window.addEventListener('resize', () => {
    document.querySelector('.slides').style.transform = 'translateX(0px)'; 
    currentIndex = 0; 
});


// document.addEventListener("DOMContentLoaded", () => {
//   const sliders = document.querySelectorAll('.slider');
  
//   sliders.forEach(slider => {
//       const slides = slider.querySelectorAll('.slide');
//       const totalSlides = slides.length;
//       console.log(totalSlides)
//       let slideIndex = 0;
      
//       const showSlides = (index) => {
//           if (index > totalSlides) {
//               slideIndex = 0;
//           } else if (index < 0) {
//               slideIndex = totalSlides - 1;
//           } else {
//               slideIndex = index;
//           }
//           const offset = -slideIndex * 100;
//           slider.querySelector('.slides').style.transform = `translateX(${offset}%)`;
//       };

//       const moveSlides = (n) => {
//           showSlides(slideIndex + n);
//       };

//       slider.querySelector('.prev').addEventListener('click', () => {
//           moveSlides(-1);
//       });

//       slider.querySelector('.next').addEventListener('click', () => {
//           moveSlides(1);
//       });

      
//       showSlides(slideIndex);
//   });
// });


// window.addEventListener('resize', () => {
//   document.querySelector('.slides').style.transform = 'translateX(0px)'; 
//   currentIndex = 0; 
// });






