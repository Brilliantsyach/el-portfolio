/* ===============================================
   MENU TOGGLE & NAVIGATION - FINAL
   =============================================== */

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll('.nav-link');
const page = document.querySelector('.page');

// Toggle menu
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (menu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// Close menu when clicking nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close menu on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('active')) {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Add active class to current nav link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});