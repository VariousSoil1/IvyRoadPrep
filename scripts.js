document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.remove());
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  let valid = true;

  // Validate name
  if (!name) {
    valid = false;
    showError('name', 'Please enter your name.');
  }

  // Validate email format
  if (!email) {
    valid = false;
    showError('email', 'Please enter your email address.');
  } else if (!validateEmail(email)) {
    valid = false;
    showError('email', 'Please enter a valid email address.');
  }

  // Validate message
  if (!message) {
    valid = false;
    showError('message', 'Please enter your message.');
  }

  // If all fields are valid, submit the form
  if (valid) {
    alert('Your message has been sent successfully!');
    document.getElementById('contact-form').reset();
  }
});

// Function to display error messages next to the respective field
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.createElement('div');
  error.classList.add('error-message');
  error.style.color = 'red';
  error.style.fontSize = '0.9em';
  error.style.marginTop = '5px';
  error.textContent = message;
  
  // Insert the error message after the input field
  field.parentNode.appendChild(error);
}

// Function to validate email format
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
