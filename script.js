  $('.slider-nav').slick({
    infinite:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // asNavFor: '.slider-for',
    dots: false,
    autoplay:true,
    arrows:false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  });
 

















// document.addEventListener('DOMContentLoaded', () => {
//     if (document.querySelector('.whiskey-cards')) {
//         // Slider dragging
//         const slider = document.querySelector('.whiskey-cards');
//         let isDown = false;
//         let startX;
//         let scrollLeft;

//         slider.addEventListener('mousedown', (e) => {
//             isDown = true;
//             slider.classList.add('active');
//             startX = e.pageX - slider.offsetLeft;
//             scrollLeft = slider.scrollLeft;
//             cancelMomentumTracking();
//         });

//         slider.addEventListener('mouseleave', () => {
//             isDown = false;
//             slider.classList.remove('active');
//         });

//         slider.addEventListener('mouseup', () => {
//             isDown = false;
//             slider.classList.remove('active');
//             beginMomentumTracking();
//         });

//         slider.addEventListener('mousemove', (e) => {
//             if (!isDown) return;
//             e.preventDefault();
//             const x = e.pageX - slider.offsetLeft;
//             const walk = (x - startX); //scroll-fast
//             var prevScrollLeft = slider.scrollLeft;
//             slider.scrollLeft = scrollLeft - walk;
//             velX = slider.scrollLeft - prevScrollLeft;
//         });

//         // Momentum 
//         var velX = 0;
//         var momentumID;

//         slider.addEventListener('wheel', (e) => {
//             cancelMomentumTracking();
//         });

//         function beginMomentumTracking() {
//             cancelMomentumTracking();
//             momentumID = requestAnimationFrame(momentumLoop);
//         }

//         function cancelMomentumTracking() {
//             cancelAnimationFrame(momentumID);
//         }

//         function momentumLoop() {
//             slider.scrollLeft += velX * 2;
//             velX *= 0.95;
//             if (Math.abs(velX) > 0.5) {
//                 momentumID = requestAnimationFrame(momentumLoop);
//             }
//         }
//     }
// });