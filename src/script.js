
// DOM elements
const navbar = document.querySelector('.navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
const testimonialSlider = document.getElementById('testimonials-slider');
const testimonialDots = document.getElementById('testimonial-dots');
const prevTestimonialBtn = document.getElementById('prev-testimonial');
const nextTestimonialBtn = document.getElementById('next-testimonial');
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.getElementById('newsletter-message');
const currentYearEl = document.getElementById('current-year');

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Navbar toggle functionality
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  
  // Toggle hamburger/close icon
  const spans = navbarToggle.querySelectorAll('span');
  if (navbarMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && navbarMenu.classList.contains('active')) {
    navbarMenu.classList.remove('active');
    const spans = navbarToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Scroll effect for navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

// Create dots
testimonials.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showTestimonial(index));
  testimonialDots.appendChild(dot);
});

// Initial setup - hide all except first
testimonials.forEach((testimonial, index) => {
  if (index !== 0) testimonial.style.display = 'none';
});

// Show testimonial by index
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
    testimonialDots.children[i].classList.toggle('active', i === index);
  });
  currentTestimonial = index;
}

// Next and previous buttons
prevTestimonialBtn.addEventListener('click', () => {
  let index = currentTestimonial - 1;
  if (index < 0) index = testimonials.length - 1;
  showTestimonial(index);
});

nextTestimonialBtn.addEventListener('click', () => {
  let index = currentTestimonial + 1;
  if (index >= testimonials.length) index = 0;
  showTestimonial(index);
});

// Auto advance testimonials
setInterval(() => {
  let index = currentTestimonial + 1;
  if (index >= testimonials.length) index = 0;
  showTestimonial(index);
}, 8000);

// Newsletter form submission
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input[type="email"]').value;
  
  // Simulate form submission
  newsletterForm.querySelector('button').disabled = true;
  newsletterForm.querySelector('button').textContent = 'Subscribing...';
  
  // Simulate API call
  setTimeout(() => {
    newsletterMessage.textContent = `Thanks for subscribing with ${email}! We'll keep you updated.`;
    newsletterMessage.style.color = 'white';
    newsletterForm.reset();
    newsletterForm.querySelector('button').disabled = false;
    newsletterForm.querySelector('button').textContent = 'Subscribe';
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      newsletterMessage.textContent = '';
    }, 5000);
  }, 1500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        const spans = navbarToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  });
});

// Simple animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .event-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight * 0.9) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initial styles for animations
document.querySelectorAll('.feature-card, .event-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
animateOnScroll();
