/**
 * Main Application Entry Point
 * GitHub Pages Repository: JackSmack1971.github.io
 */

'use strict';

// ============================================
// APPLICATION INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

/**
 * Initialize application
 */
function initializeApp() {
  // Cache DOM elements
  const nav = document.querySelector('nav');
  const contactForm = document.getElementById('contactForm');
  
  // Initialize components
  setupNavigation(nav);
  setupSmoothScrolling();
  
  if (contactForm) {
    setupFormHandling(contactForm);
  }
  
  console.log('JackSmack1971.github.io initialized');
}

// ============================================
// MOBILE NAVIGATION
// ============================================
function setupNavigation(navElement) {
  if (!navElement) return;
  
  const navToggle = navElement.querySelector('.nav-toggle');
  const navMenu = navElement.querySelector('.nav-menu');
  
  if (!navToggle || !navMenu) return;
  
  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      
      // Reset hamburger icon
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

// ============================================
// SMOOTH SCROLLING
// ============================================
function setupSmoothScrolling() {
  // Handle anchor links for smooth scrolling
  document.addEventListener('click', (event) => {
    const target = event.target;
    
    // Check if clicked element is an anchor link to same page
    if (target.matches('a[href^="#"]')) {
      event.preventDefault();
      
      const targetId = target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        
        // Update focus for accessibility
        targetElement.focus({ preventScroll: true });
      }
    }
  });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================
function setupFormHandling(form) {
  const feedbackElement = document.getElementById('formFeedback');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Basic client-side validation
    if (!validateFormData(data)) {
      showFormFeedback('Please fill in all required fields correctly.', 'error');
      return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
      // Submit form (replace with your actual form handling)
      // Using Formspree as example - replace YOUR_FORM_ID with actual ID
      await submitForm(form, data);
      
      showFormFeedback('Message sent successfully! I\'ll get back to you soon.', 'success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      showFormFeedback('Failed to send message. Please try again or email me directly.', 'error');
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
}

/**
 * Validate form data
 * @param {Object} data - Form data object
 * @returns {boolean}
 */
function validateFormData(data) {
  const { name, email, subject, message } = data;
  
  // Check required fields
  if (!name || !email || !subject || !message) {
    return false;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  
  return true;
}

/**
 * Submit form data
 * @param {HTMLFormElement} form - Form element
 * @param {Object} data - Form data
 * @returns {Promise<Object>}
 */
async function submitForm(form, data) {
  // Get the form action URL (Formspree or similar)
  const formAction = form.getAttribute('action');
  
  // If no action URL, log data and return (for demo purposes)
  if (!formAction || formAction.includes('YOUR_FORM_ID')) {
    console.log('Form data (demo mode):', data);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }
  
  try {
    const response = await fetch(formAction, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });
    
    // CRITICAL: Check response.ok (fetch doesn't reject on HTTP errors)
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

/**
 * Show form feedback message
 * @param {string} message - Message to display
 * @param {string} type - Message type ('success' or 'error')
 */
function showFormFeedback(message, type) {
  const feedbackElement = document.getElementById('formFeedback');
  
  if (!feedbackElement) return;
  
  // Clear previous classes
  feedbackElement.className = 'form-feedback';
  
  // Add type class and set message (XSS-safe)
  feedbackElement.classList.add(type);
  feedbackElement.textContent = message;
  
  // Auto-hide success messages after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      feedbackElement.className = 'form-feedback';
      feedbackElement.textContent = '';
    }, 5000);
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function}
 */
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Throttle function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function}
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
