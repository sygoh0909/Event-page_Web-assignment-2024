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

    // Handle header background color change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust the scroll position as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Manage login state and update menu accordingly
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('loginLink');
    const userMenu = document.getElementById('userMenu');
    const userIdDisplay = document.getElementById('userIdDisplay');
    const logoutLink = document.getElementById('logoutLink');
    const mobileLoginLink = document.getElementById('mobileLoginLink');
    const mobileUserMenu = document.getElementById('mobileUserMenu');
    const mobileUserIdDisplay = document.getElementById('mobileUserIdDisplay');
    const mobileLogoutLink = document.getElementById('mobileLogoutLink');

    function updateMenu() {
        if (loggedInUser) {
            loginLink.style.display = 'none';
            userMenu.style.display = 'flex';
            userIdDisplay.textContent = loggedInUser;
            
            mobileLoginLink.style.display = 'none';
            mobileUserMenu.style.display = 'block';
            mobileUserIdDisplay.textContent = loggedInUser;
        } else {
            loginLink.style.display = 'flex';
            userMenu.style.display = 'none';
            
            mobileLoginLink.style.display = 'flex';
            mobileUserMenu.style.display = 'none';
        }
    }

    if (loggedInUser) {
        updateMenu();
    }

    logoutLink.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
    });

    mobileLogoutLink.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
    });

    // Handle burger menu toggle
    const burger = document.querySelector('.burger');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    burger.addEventListener('click', function() {
        mobileNavLinks.classList.toggle('active');
    });
});
