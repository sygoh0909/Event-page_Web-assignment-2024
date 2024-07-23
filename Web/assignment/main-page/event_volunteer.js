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
        const availability = Array.from(form.querySelector('#availability').selectedOptions).map(option => option.value);
        const role = form.querySelector('#role').value.trim();
        const skills = form.querySelector('#skills').value.trim();
        const message = form.querySelector('#message').value.trim();

        // Validate form data
        if (!name || !email || !age || !role) {
            alert('Please fill in your name, email, age, and preferred role.');
            return;
        }

        // Example: Send form data to server
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('age', age);
        formData.append('availability', availability.join(','));
        formData.append('role', role);
        formData.append('skills', skills);
        formData.append('message', message);

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
