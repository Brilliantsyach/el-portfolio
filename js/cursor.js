/* ===============================================
   PREMIUM GLOW CURSOR WITH TRAIL EFFECT
   =============================================== */

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

// Cursor trail
const trail = [];
const trailLength = 8;

// Update mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Add to trail
  trail.push({ x: mouseX, y: mouseY });
  if (trail.length > trailLength) {
    trail.shift();
  }
});

// Smooth cursor animation
function animate() {
  // Main cursor follows immediately
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  
  // Follower has delay
  followerX += (mouseX - followerX) * 0.08;
  followerY += (mouseY - followerY) * 0.08;
  
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  
  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';
  
  requestAnimationFrame(animate);
}

animate();

// Expand cursor on hover with different states
const hoverElements = document.querySelectorAll('a, button');
const projectCards = document.querySelectorAll('.project, .why-card');

hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
    cursorFollower.classList.add('expand');
    cursor.style.background = 'var(--accent-glow)';
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
    cursorFollower.classList.remove('expand');
    cursor.style.background = 'var(--accent-main)';
  });
});

// Special effect for project cards
projectCards.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('expand');
    cursorFollower.classList.add('expand');
    cursor.style.background = 'var(--accent-soft)';
    cursor.style.transform = 'scale(1.8)';
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('expand');
    cursorFollower.classList.remove('expand');
    cursor.style.background = 'var(--accent-main)';
    cursor.style.transform = 'scale(1)';
  });
});

// Click ripple effect
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ripple.className = 'cursor-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  document.body.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
});