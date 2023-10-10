// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Assuming you want to target the first two <li> elements with class "item"
    var liElements = document.querySelectorAll('.item');
  
    // Add separate event listeners for click, mouseover, and mouseout
    liElements[0].addEventListener('click', function() {
      this.style.color = 'green';
    });
  
    liElements[1].addEventListener('mouseover', function() {
      this.style.color = 'yellow';
    });
  
    liElements[1].addEventListener('mouseout', function() {
      this.style.color = ''; // Reset color on mouseout
    });
  
    // Add event listener for form submission
    var myForm = document.getElementById('my-form');
    myForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Get form values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
  
      // Perform necessary validations (for example, check if name and email are not empty)
      if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      // Log the form values
      console.log('Name:', name);
      console.log('Email:', email);
    });
  });
  