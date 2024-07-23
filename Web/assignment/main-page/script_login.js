document.addEventListener('DOMContentLoaded', () => {
    const loginToggle = document.getElementById('loginToggle');
    const signUpToggle = document.getElementById('signUpToggle');
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');
    const formContainer = document.getElementById('formContainer');

    loginToggle.addEventListener('click', () => {
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });

    signUpToggle.addEventListener('click', () => {
        loginForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });

    // Handle form submissions
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate login
        const userId = document.getElementById('loginUserId').value;
        const password = document.getElementById('loginPassword').value;

        // Normally you would check the credentials with a server
        if (userId && password) {
            // Redirect to main page or dashboard
            window.location.href = 'main.html'; // Replace with your actual main page URL
        } else {
            alert('Please enter both user ID and password');
        }
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate sign-up
        const userId = document.getElementById('signUpUserId').value;
        const password = document.getElementById('signUpPassword').value;

        // Normally you would send this data to a server
        if (userId && password) {
            alert('Sign up successful! You can now log in.');
            loginToggle.click(); // Switch to login form after successful sign up
        } else {
            alert('Please enter both user ID and password');
        }
    });
});
