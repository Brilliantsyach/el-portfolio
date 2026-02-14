/* ===============================================
   SCROLL EFFECTS - FIXED
   =============================================== */

const progress = document.getElementById('progress');
const backToTop = document.getElementById('backToTop');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const scrollNavLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
  const htmlElement = document.documentElement;
  const scrollTop = htmlElement.scrollTop;
  const scrollHeight = htmlElement.scrollHeight;
  const clientHeight = htmlElement.clientHeight;
  
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  if (progress) progress.style.width = scrollPercentage + '%';
  
  if (backToTop) {
    if (scrollTop > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  
  if (header) {
    if (scrollTop > 100) {
      header.style.background = 'rgba(10, 8, 20, 0.9)';
      header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.background = 'rgba(10, 8, 20, 0.6)';
      header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
    }
  }
});

if (backToTop) {
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

let currentSection = '';

window.addEventListener('scroll', function() {
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY + 200;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  scrollNavLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

const heroContent = document.querySelector('.hero-content');
let scrollTicking = false;

window.addEventListener('scroll', function() {
  if (!scrollTicking) {
    window.requestAnimationFrame(function() {
      const scrolled = window.pageYOffset;
      
      if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = Math.max(1 - (scrolled / 500), 0);
      }
      
      scrollTicking = false;
    });
    
    scrollTicking = true;
  }
});

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '0.7';
    }
  });

}

