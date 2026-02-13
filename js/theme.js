/* ===============================================
   ADVANCED THEME SYSTEM - Auto Detect + Manual Toggle
   =============================================== */

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Detect system preference
function getSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    // User has manually set preference
    body.setAttribute('data-theme', savedTheme);
  } else {
    // Use system preference
    const systemTheme = getSystemTheme();
    body.setAttribute('data-theme', systemTheme);
  }
}

// Toggle theme manually
themeToggle.addEventListener('click', function() {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Reinit particles with new theme colors
  if (typeof init === 'function') {
    init();
  }
});

// Listen for system theme changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Only auto-switch if user hasn't manually set preference
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      body.setAttribute('data-theme', newTheme);
      
      if (typeof init === 'function') {
        init();
      }
    }
  });
}

// Initialize on load
initTheme();