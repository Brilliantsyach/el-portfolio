/* ===============================================
   SCROLL REVEAL & COUNTER ANIMATIONS - ENHANCED
   =============================================== */

// Intersection Observer for reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, index * 100); // Stagger effect
      
      // Unobserve after revealing
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// Counter animation with easing
const counters = document.querySelectorAll('.stat-number');
let counterAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterAnimated) {
      counterAnimated = true;
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;
        
        const easeOutQuad = t => t * (2 - t);
        
        const countAnimation = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          const currentCount = Math.round(target * progress);
          
          counter.textContent = currentCount;
          
          if (frame === totalFrames) {
            clearInterval(countAnimation);
            counter.textContent = target;
          }
        }, frameDuration);
      });
    }
  });
}, {
  threshold: 0.5
});

const statsSection = document.querySelector('.stats');
if (statsSection) {
  counterObserver.observe(statsSection);
}

// Skill bar animation with stagger
const skillBars = document.querySelectorAll('.skill-progress-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const progress = progressBar.getAttribute('data-progress');
      
      setTimeout(() => {
        progressBar.style.width = progress + '%';
      }, index * 150); // Stagger each bar
      
      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Hero title typing effect (enhanced)
const heroLines = document.querySelectorAll('.hero-title .line');

function typeEffect() {
  heroLines.forEach((line, lineIndex) => {
    const text = line.textContent;
    line.textContent = '';
    line.style.opacity = '1';
    
    let charIndex = 0;
    
    setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
          line.textContent += text.charAt(charIndex);
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);
    }, lineIndex * 600);
  });
}

// Start typing effect after loader
window.addEventListener('load', () => {
  setTimeout(typeEffect, 1500);
});

// Animate elements on hover
const animatedCards = document.querySelectorAll('.why-card, .project, .feature-item');

animatedCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add glitch effect on logo hover
const logo = document.querySelector('.logo-text');

logo.addEventListener('mouseenter', () => {
  logo.style.animation = 'glitch 0.3s infinite';
});

logo.addEventListener('mouseleave', () => {
  logo.style.animation = '';
});

// Page load animation sequence
document.addEventListener('DOMContentLoaded', () => {
  // Fade in page elements sequentially
  const fadeElements = document.querySelectorAll('.fade-in-up');
  
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 200);
  });
});