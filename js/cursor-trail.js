/* ===============================================
   CURSOR TRAIL EFFECT - FIXED
   =============================================== */

const trailCanvas = document.getElementById('cursor-trail');
if (!trailCanvas) {
  console.warn('Cursor trail canvas not found');
} else {
  const trailCtx = trailCanvas.getContext('2d');

  trailCanvas.width = window.innerWidth;
  trailCanvas.height = window.innerHeight;

  window.addEventListener('resize', function() {
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
  });

  const cursorTrail = [];
  const trailLength = 20;

  class TrailParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
      this.life = 1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life -= 0.02;
      this.size *= 0.95;
    }

    draw() {
      trailCtx.fillStyle = `rgba(244, 114, 182, ${this.life})`;
      trailCtx.beginPath();
      trailCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      trailCtx.fill();
    }
  }

  let lastTrailX = 0;
  let lastTrailY = 0;

  document.addEventListener('mousemove', function(e) {
    const distance = Math.sqrt((e.clientX - lastTrailX) ** 2 + (e.clientY - lastTrailY) ** 2);
    
    if (distance > 5) {
      cursorTrail.push(new TrailParticle(e.clientX, e.clientY));
      
      if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
      }
      
      lastTrailX = e.clientX;
      lastTrailY = e.clientY;
    }
  });

  function animateTrail() {
    trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
    
    for (let i = cursorTrail.length - 1; i >= 0; i--) {
      cursorTrail[i].update();
      cursorTrail[i].draw();
      
      if (cursorTrail[i].life <= 0) {
        cursorTrail.splice(i, 1);
      }
    }
    
    requestAnimationFrame(animateTrail);
  }

  animateTrail();
}