document.addEventListener('DOMContentLoaded', function() {
    const showFormButton = document.getElementById('show-form');
    const volunteerForm = document.querySelector('.volunteer-form');
    const volunteerInfo = document.querySelector('.volunteer-info');
    const form = document.getElementById('volunteer-form');

    // Show form and hide info when "Sign Up" button is clicked
    showFormButton.addEventListener('click', function() {
        volunteerInfo.classList.add('hidden');
        volunteerForm.classList.remove('hidden');
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form data
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();

        if (!name || !email) {
            alert('Please fill in your name and email.');
            return;
        }

        // Example: Send form data to server
        const formData = new FormData(form);

        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Form submission response:', data);
            alert('Thank you for signing up as a volunteer!');
            form.reset(); // Clear the form after submission
            volunteerForm.classList.add('hidden'); // Hide the form
            volunteerInfo.classList.remove('hidden'); // Show the info section
        })
        .catch(error => {
            console.error('Error submitting the form:', error);
            alert('There was an error submitting the form. Please try again later.');
        });
    });
});
