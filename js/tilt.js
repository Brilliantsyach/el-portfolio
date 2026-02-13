/* ===============================================
   3D TILT EFFECT
   =============================================== */

const tiltElements = document.querySelectorAll('.tilt');

tiltElements.forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    
    element.style.setProperty('--tilt-x', `${rotateX}deg`);
    element.style.setProperty('--tilt-y', `${rotateY}deg`);
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  });
});