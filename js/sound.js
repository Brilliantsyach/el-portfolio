/* ===============================================
   BACKGROUND MUSIC SYSTEM
   =============================================== */

const soundToggle = document.getElementById('soundToggle');
let audio = null;
let isPlaying = false;

// Lo-fi background music (royalty-free)
const musicUrl = 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3';

// Initialize audio
function initAudio() {
  if (!audio) {
    audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = 0.3; // 30% volume
  }
}

// Toggle music
soundToggle.addEventListener('click', function() {
  initAudio();
  
  if (isPlaying) {
    // Pause music
    audio.pause();
    soundToggle.classList.add('muted');
    isPlaying = false;
  } else {
    // Play music
    audio.play().catch(function(error) {
      console.log('Audio autoplay blocked:', error);
      alert('Click again to enable background music');
    });
    soundToggle.classList.remove('muted');
    isPlaying = true;
  }
});

// Fade out on page unload
window.addEventListener('beforeunload', function() {
  if (audio && isPlaying) {
    let volume = audio.volume;
    const fadeOut = setInterval(function() {
      if (volume > 0.1) {
        volume -= 0.1;
        audio.volume = volume;
      } else {
        clearInterval(fadeOut);
        audio.pause();
      }
    }, 100);
  }
});

// Save state
window.addEventListener('beforeunload', function() {
  localStorage.setItem('musicPlaying', isPlaying);
});

// Restore state
window.addEventListener('load', function() {
  const wasPlaying = localStorage.getItem('musicPlaying') === 'true';
  if (wasPlaying) {
    // Don't auto-play, let user click
    soundToggle.classList.add('muted');
  }
});