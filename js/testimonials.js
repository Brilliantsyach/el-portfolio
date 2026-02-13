/* ===============================================
   TESTIMONIAL SLIDER
   =============================================== */

const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.testimonial-btn.prev');
const nextBtn = document.querySelector('.testimonial-btn.next');

let currentIndex = 0;
const totalCards = testimonialCards.length;

function updateSlider() {
  testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  testimonialCards.forEach((card, index) => {
    card.classList.remove('active');
    if (index === currentIndex) {
      card.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
let autoSlide = setInterval(nextSlide, 5000);

// Pause auto-slide on hover
const testimonialContainer = document.querySelector('.testimonials-container');

testimonialContainer.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

testimonialContainer.addEventListener('mouseleave', () => {
  autoSlide = setInterval(nextSlide, 5000);
});

// Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

testimonialContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

testimonialContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    nextSlide();
  }
  if (touchEndX > touchStartX + 50) {
    prevSlide();
  }
}