document.getElementById('loginToggle').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
});

document.getElementById('signUpToggle').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('loginUserId').value;
    const password = document.getElementById('loginPassword').value;
    
    if (userId && password) {
        alert('Login successful');
    } else {
        alert('Please fill in all fields');
    }
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('signUpUserId').value;
    const password = document.getElementById('signUpPassword').value;
    
    if (userId && password) {
        alert('Sign up successful');
    } else {
        alert('Please fill in all fields');
    }
});
