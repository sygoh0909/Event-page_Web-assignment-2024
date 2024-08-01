document.addEventListener('DOMContentLoaded', function() {
    const showFormButton = document.getElementById('show-form');
    const volunteerForm = document.querySelector('.volunteer-form');
    const volunteerInfo = document.querySelector('.volunteer-info');

    showFormButton.addEventListener('click', function() {
        volunteerInfo.classList.add('hidden');
        volunteerForm.classList.remove('hidden');
    });

    const form = document.getElementById('volunteer-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const age = form.querySelector('#age').value.trim();
        const availability = Array.from(form.querySelectorAll('input[name="availability"]:checked')).map(checkbox => checkbox.value);
        const role = form.querySelector('#role').value.trim();
        const skills = form.querySelector('#skills').value.trim();
        const message = form.querySelector('#message').value.trim();

        // Reset error messages
        form.querySelector('#email-error').textContent = '';
        form.querySelector('#phone-error').textContent = '';
        form.querySelector('#availability-error').textContent = '';

        // Validate form data
        if (!name || !email || !age || !role) {
            alert('Please fill in your name, email, age, and preferred role.');
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const emailError = form.querySelector('#email-error');
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return;
        }

        // Validate phone number format (example: 10-digit US phone number)
        const phonePattern = /^\d{10}$/;
        const phoneError = form.querySelector('#phone-error');
        if (!phonePattern.test(phone)) {
            phoneError.textContent = 'Please enter a valid 10-digit phone number.';
            return;
        }

        // Validate availability
        const availabilityError = form.querySelector('#availability-error');
        if (availability.length === 0) {
            availabilityError.textContent = 'Please select at least one availability option.';
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submission simulated successfully.');
            alert('Thank you for signing up as a volunteer!');
            form.reset(); // Clear the form after submission
            volunteerForm.classList.add('hidden'); // Hide the form
            volunteerInfo.classList.remove('hidden'); // Show the info section
        }, 1000); // Simulate a 1-second network delay
    });
});
