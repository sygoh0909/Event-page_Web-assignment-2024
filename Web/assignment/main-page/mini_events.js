document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            // Toggle the active class on the accordion button
            this.classList.toggle('active');
            
            // Get the associated content
            const content = this.nextElementSibling;
            
            // Toggle the display property of the content
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
