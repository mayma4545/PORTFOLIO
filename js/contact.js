/**
 * contact.js
 * Contact form validation and EmailJS integration
 * Jasper A. Fernandez Portfolio
 */

/**
 * Initialize the contact form with client-side validation and EmailJS submission.
 * Note: Replace EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY
 *       with your actual EmailJS credentials.
 */
export function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');
  const spinnerEl = document.getElementById('form-spinner');
  const btnTextEl = document.getElementById('form-btn-text');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous status
    if (statusEl) {
      statusEl.className = 'form-status';
      statusEl.textContent = '';
    }

    // Client-side validation
    const errors = validateForm(form);
    if (errors.length > 0) {
      showStatus(statusEl, 'error', errors.join(' '));
      return;
    }

    // Show loading state
    setLoading(true, submitBtn, spinnerEl, btnTextEl);

    // Collect form data
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_name: 'Jasper A. Fernandez',
    };

    try {
      // EmailJS integration
      // Uncomment and configure with your credentials:
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      */

      // Simulate success for demo (remove when EmailJS is configured)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      showStatus(statusEl, 'success', '✓ Message sent! I\'ll get back to you within 24 hours.');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      showStatus(statusEl, 'error', '✗ Something went wrong. Please try emailing me directly.');
    } finally {
      setLoading(false, submitBtn, spinnerEl, btnTextEl);
    }
  });
}

/**
 * Validate form fields.
 * @param {HTMLFormElement} form
 * @returns {string[]} Array of error messages
 */
function validateForm(form) {
  const errors = [];
  const name = form.querySelector('[name="name"]')?.value.trim();
  const email = form.querySelector('[name="email"]')?.value.trim();
  const subject = form.querySelector('[name="subject"]')?.value.trim();
  const message = form.querySelector('[name="message"]')?.value.trim();

  if (!name || name.length < 2) errors.push('Name must be at least 2 characters.');
  if (!email || !isValidEmail(email)) errors.push('Please enter a valid email address.');
  if (!subject || subject.length < 3) errors.push('Subject is too short.');
  if (!message || message.length < 10) errors.push('Message must be at least 10 characters.');

  return errors;
}

/**
 * Simple email format validator.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Show form status message.
 * @param {HTMLElement|null} el
 * @param {'success'|'error'} type
 * @param {string} message
 */
function showStatus(el, type, message) {
  if (!el) return;
  el.className = `form-status ${type}`;
  el.textContent = message;
  // Scroll into view
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Toggle submit button loading state.
 */
function setLoading(isLoading, btn, spinner, btnText) {
  if (!btn) return;
  btn.disabled = isLoading;
  if (spinner) spinner.style.display = isLoading ? 'block' : 'none';
  if (btnText) btnText.textContent = isLoading ? 'Sending…' : 'Send Message';
}
