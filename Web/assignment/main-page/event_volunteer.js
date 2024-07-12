document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteer-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // You can add form validation logic here if needed

        // Example: Send form data to server or display a thank you message
        const formData = new FormData(form);
        console.log('Form data:', formData);

        // Example: Display a thank you message to the user
        alert('Thank you for signing up as a volunteer!');
        form.reset(); // Clear the form after submission
    });
});
