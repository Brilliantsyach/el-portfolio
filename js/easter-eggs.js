/* ===============================================
   EASTER EGGS - FIXED
   =============================================== */

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
  if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
    konamiIndex++;
    
    if (konamiIndex === konamiCode.length) {
      activateKonamiMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateKonamiMode() {
  document.body.style.animation = 'rainbow 3s linear infinite';
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  const message = document.createElement('div');
  message.textContent = '🎮 KONAMI CODE ACTIVATED! 🌈';
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #f472b6, #a5b4fc);
    padding: 30px 50px;
    border-radius: 20px;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5rem;
    color: #000;
    z-index: 99999;
  `;
  
  document.body.appendChild(message);
  
  setTimeout(function() {
    message.remove();
    document.body.style.animation = '';
  }, 3000);
}

let easterClickCount = 0;
const easterLogo = document.querySelector('.logo-text');

if (easterLogo) {
  easterLogo.addEventListener('click', function() {
    easterClickCount++;
    
    if (easterClickCount === 10) {
      easterLogo.textContent = '⚡ YOU FOUND ME! ⚡';
      easterLogo.style.animation = 'glitch 0.5s infinite';
      
      setTimeout(function() {
        easterLogo.textContent = 'EL-PORTFOLIO';
        easterLogo.style.animation = '';
        easterClickCount = 0;
      }, 3000);
    }
  });
}

console.log('%c🚀 Hey there, curious developer!', 'font-size: 20px; color: #f472b6; font-weight: bold;');
console.log('%cLooking for easter eggs? Try the Konami Code! ↑↑↓↓←→←→BA', 'font-size: 14px; color: #a5b4fc;');
console.log('%cOr click the logo 10 times... 👀', 'font-size: 14px; color: #67e8f9;');