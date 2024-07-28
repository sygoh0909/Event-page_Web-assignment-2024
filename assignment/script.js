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
