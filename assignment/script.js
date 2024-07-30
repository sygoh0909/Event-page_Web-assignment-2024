// JavaScript to toggle the dropdown menu visibility and handle scrolling

document.addEventListener('DOMContentLoaded', function () {
    // Toggle dropdown content visibility
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', function () {
            const dropdownContent = this.nextElementSibling;
            
            // Toggle visibility
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                // Hide other dropdowns
                document.querySelectorAll('.dropdown-content').forEach(content => {
                    content.style.display = 'none';
                });
                dropdownContent.style.display = 'block';
            }
        });
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
        }
    });
});

// Handle header background color change on scroll
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scroll position as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('loginLink');
    const userMenu = document.getElementById('userMenu');
    const userIdDisplay = document.getElementById('userIdDisplay');
    const logoutLink = document.getElementById('logoutLink');

    if (loggedInUser) {
        loginLink.style.display = 'none';
        userMenu.style.display = 'flex';
        userIdDisplay.textContent = loggedInUser;
    } else {
        loginLink.style.display = 'flex';
        userMenu.style.display = 'none';
    }

    logoutLink.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    burger.addEventListener('click', function() {
        mobileNavLinks.classList.toggle('active');
    });

    // Change header background color on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
