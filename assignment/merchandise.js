document.addEventListener('DOMContentLoaded', () => {
    const handleAddToCart = (event) => {
        const button = event.target;
        const itemElement = button.closest('.merchandise-item');
        const name = itemElement.querySelector('h3').textContent;
        const price = parseFloat(itemElement.querySelector('p').textContent.replace('Price: $', ''));
        const image = itemElement.querySelector('img').src;

        addToCart(name, price, image);
        alert(`${name} has been added to your cart!`);
    };

    function addToCart(name, price, image) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        document.getElementById('cart-count').textContent = cartCount;
    }

    // Add event listeners to all 'Add to Cart' buttons
    document.querySelectorAll('.merchandise-item button').forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });

    // Initial cart count update
    updateCartCount();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all merchandise items
    const items = document.querySelectorAll('.merchandise-item');

    items.forEach(item => {
        const images = item.querySelectorAll('.image-slider img');
        let currentImageIndex = 0;

        // Show the first image
        if (images.length > 0) {
            images[currentImageIndex].classList.add('active');
        }

        // Change images every 3 seconds
        setInterval(() => {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }, 3000);
    });
});
