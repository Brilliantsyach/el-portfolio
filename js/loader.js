/* ===============================================
   PAGE LOADER - FIXED
   =============================================== */

const loader = document.getElementById('loader');
const mainPage = document.querySelector('.page');
const loaderPercentage = document.querySelector('.loader-percentage');
const loaderStatus = document.querySelector('.loader-status');

if (!loader || !mainPage) {
  console.warn('Loader elements not found');
} else {
  let percent = 0;
  const loadingSteps = [
    { percent: 20, text: 'Loading Assets...' },
    { percent: 40, text: 'Initializing Animations...' },
    { percent: 60, text: 'Setting up Interface...' },
    { percent: 80, text: 'Preparing Experience...' },
    { percent: 100, text: 'Ready!' }
  ];

  let currentStep = 0;

  const loadingInterval = setInterval(function() {
    const increment = Math.random() * 5 + 2;
    percent = Math.min(percent + increment, 100);
    
    if (loaderPercentage) {
      loaderPercentage.textContent = Math.floor(percent) + '%';
    }
    
    if (currentStep < loadingSteps.length && percent >= loadingSteps[currentStep].percent) {
      if (loaderStatus) {
        loaderStatus.textContent = loadingSteps[currentStep].text;
      }
      currentStep++;
    }
    
    if (percent >= 100) {
      clearInterval(loadingInterval);
      
      setTimeout(function() {
        loader.classList.add('hide');
        mainPage.classList.add('show');
        document.body.style.overflow = 'auto';
      }, 500);
    }
  }, 50);

  document.body.style.overflow = 'hidden';

  window.addEventListener('load', function() {
    setTimeout(function() {
      if (!loader.classList.contains('hide')) {
        percent = 100;
        if (loaderPercentage) loaderPercentage.textContent = '100%';
        if (loaderStatus) loaderStatus.textContent = 'Ready!';
        
        setTimeout(function() {
          loader.classList.add('hide');
          mainPage.classList.add('show');
          document.body.style.overflow = 'auto';
        }, 500);
      }
    }, 3000);
  });
}