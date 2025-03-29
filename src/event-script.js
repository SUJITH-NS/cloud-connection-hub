
// Countdown Timer
function updateCountdown() {
  // Set the event date (June 15, 2023 9:00 AM)
  const eventDate = new Date('2023-06-15T09:00:00').getTime();
  
  // Get current date and time
  const now = new Date().getTime();
  
  // Calculate the distance between now and the event date
  const distance = eventDate - now;
  
  // If the event has already passed, display a message
  if (distance < 0) {
    document.getElementById('countdown-days').innerText = '00';
    document.getElementById('countdown-hours').innerText = '00';
    document.getElementById('countdown-minutes').innerText = '00';
    document.getElementById('countdown-seconds').innerText = '00';
    return;
  }
  
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result
  document.getElementById('countdown-days').innerText = days.toString().padStart(2, '0');
  document.getElementById('countdown-hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('countdown-minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('countdown-seconds').innerText = seconds.toString().padStart(2, '0');
}

// Call updateCountdown immediately on page load
updateCountdown();

// Then update every second
setInterval(updateCountdown, 1000);

// Registration Form Handling
const registerForm = document.getElementById('register-form');
const formMessage = document.getElementById('form-message');

if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (!name || !email || !phone) {
      formMessage.className = 'form-message error';
      formMessage.innerText = 'Please fill out all required fields.';
      return;
    }
    
    // Display loading state
    const submitButton = registerForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerText = 'Processing...';
    
    // Simulate form submission (would be an actual API call in a real app)
    setTimeout(function() {
      // Reset form
      registerForm.reset();
      
      // Display success message
      formMessage.className = 'form-message success';
      formMessage.innerText = 'Registration successful! We\'ve sent a confirmation email to ' + email;
      
      // Reset button
      submitButton.disabled = false;
      submitButton.innerText = 'Register Now';
      
      // Scroll to the message
      formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Clear success message after 5 seconds
      setTimeout(function() {
        formMessage.innerText = '';
        formMessage.className = 'form-message';
      }, 8000);
    }, 1500);
  });
}

// FAQ accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Toggle active class on the question
    question.classList.toggle('active');
    
    // Toggle visibility of the answer
    const answer = question.nextElementSibling;
    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      question.style.color = 'var(--primary-blue)';
    } else {
      answer.style.maxHeight = '0';
      question.style.color = 'var(--gray-800)';
    }
  });
});

// Initialize FAQ items with closed state
document.addEventListener('DOMContentLoaded', () => {
  const faqAnswers = document.querySelectorAll('.faq-answer');
  
  faqAnswers.forEach(answer => {
    // Set initial state
    answer.style.overflow = 'hidden';
    answer.style.maxHeight = '0';
    answer.style.transition = 'max-height 0.3s ease';
  });
});
