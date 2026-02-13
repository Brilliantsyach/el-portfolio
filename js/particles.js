/* ===============================================
   ANIMATED PARTICLES BACKGROUND - FIXED
   =============================================== */

const canvas = document.getElementById('particles');
if (!canvas) {
  console.warn('Particles canvas not found');
} else {
  const ctx = canvas.getContext('2d');

  let particlesArray = [];
  let mouse = {
    x: null,
    y: null,
    radius: 150
  };

  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
          this.x += 2;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 2;
        }
        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
          this.y += 2;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 2;
        }
      }

      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 15000;
    
    for (let i = 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 3) + 1;
      let x = Math.random() * (canvas.width - size * 2) + size;
      let y = Math.random() * (canvas.height - size * 2) + size;
      let directionX = (Math.random() * 0.4) - 0.2;
      let directionY = (Math.random() * 0.4) - 0.2;
      
      const colors = ['#f472b6', '#a5b4fc', '#67e8f9'];
      let color = colors[Math.floor(Math.random() * colors.length)] + '80';
      
      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }

  function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let distance = ((particlesArray[a].x - particlesArray[b].x) * 
                       (particlesArray[a].x - particlesArray[b].x)) +
                       ((particlesArray[a].y - particlesArray[b].y) * 
                       (particlesArray[a].y - particlesArray[b].y));
        
        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          let opacity = 1 - (distance / 20000);
          ctx.strokeStyle = `rgba(165, 180, 252, ${opacity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    
    connect();
  }

  init();
  animate();

  window.addEventListener('resize', function() {
    setCanvasSize();
    init();
  });
}