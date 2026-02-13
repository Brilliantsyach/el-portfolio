/* ===============================================
   CONTACT FORM WITH EMAILJS
   =============================================== */

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  
  formStatus.textContent = 'Sending...';
  formStatus.className = 'form-status';
  formStatus.style.display = 'block';
  
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    } else {
      throw new Error('Failed');
    }
  } catch (error) {
    formStatus.textContent = '✗ Something went wrong. Please try email directly.';
    formStatus.className = 'form-status error';
  }
  
  setTimeout(() => {
    formStatus.style.display = 'none';
  }, 5000);
});
    
    // Optional: Send to EmailJS
    // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    //   from_name: name,
    //   from_email: email,
    //   message: message
    // });
    
  // }, 1500);
  
  // Error handling example
  // formStatus.textContent = '✗ Failed to send message. Please try again.';
  // formStatus.className = 'form-status error';
// });

/* 
  SETUP EMAILJS (Optional):
  1. Go to https://www.emailjs.com/
  2. Create account & get Service ID
  3. Create email template
  4. Add this script to HTML: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  5. Initialize: emailjs.init("YOUR_PUBLIC_KEY");
*/