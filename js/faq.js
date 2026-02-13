/* ===============================================
   FAQ ACCORDION
   =============================================== */
(function() {
  'use strict';

  function init() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
        });
        
        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();