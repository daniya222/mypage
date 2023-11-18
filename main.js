import Typed from 'typed.js';
import confetti from 'canvas-confetti';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

const typed = new Typed('.rotate-text', {
  strings: ['fullstuck developer', 'software engineer','part-time traveler'],
  typeSpeed: 50,
});

const appreciateBtn = document.getElementById("appreciate");

appreciateBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, // Autoplay continues even if user interacts with slides
  },

  
});

const images = document.querySelectorAll('.card-image');

images.forEach(function(image) {
  image.addEventListener('mouseover', () => {
    const overlay = image.querySelector('.overlay');
    overlay.classList.add("show");
  })

  image.addEventListener('mouseout', () => {
    const overlay = image.querySelector('.overlay');
    overlay.classList.remove("show");
  })
});