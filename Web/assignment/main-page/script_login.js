document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');
    const loginToggle = document.getElementById('loginToggle');
    const signUpToggle = document.getElementById('signUpToggle');

    // Show login form by default
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';

    // Toggle between Login and Sign Up forms
    loginToggle.addEventListener('click', function() {
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });

    signUpToggle.addEventListener('click', function() {
        signUpForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Perform login logic here (e.g., validate credentials)
        const userId = loginForm.elements['userId'].value;
        const password = loginForm.elements['password'].value;

        // Example: Validate user credentials (you can replace this with your authentication logic)
        if (userId === 'testuser' && password === 'testpassword') { //need to get user id and password 
            // Successful login
            alert('Login successful!');
            // Redirect to main page (replace 'main-event.html' with your actual main page)
            window.location.href = 'main.html';
        } else {
            // Failed login
            alert('Invalid credentials. Please try again.');
            // Optionally, clear the form fields
            loginForm.reset();
        }
    });

    // Sign Up form submission
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Perform sign-up logic here (e.g., register new user)
        const newUser = {
            userId: signUpForm.elements['userId'].value,
            password: signUpForm.elements['password'].value
            // Add additional fields as needed
        };

        // Example: Register user (you can replace this with your registration logic)
        console.log('New user:', newUser);
        alert('Sign Up successful! Please proceed to login.');
        // Clear the sign-up form fields
        signUpForm.reset();
        // Switch to login form after sign-up
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });
});
