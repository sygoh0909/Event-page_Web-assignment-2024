document.addEventListener('DOMContentLoaded', () => {
    // Function to handle 'Add to Cart' button clicks
    const handleAddToCart = (event) => {
        const button = event.target;
        const itemDetails = button.parentElement;
        const itemName = itemDetails.querySelector('h3').textContent;
        const itemPrice = itemDetails.querySelector('p').textContent;
        
        // Create a cart item
        const cartItem = {
            name: itemName,
            price: itemPrice
        };

        // Check if cart exists in localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Notify user
        alert(`${itemName} has been added to your cart!`);
    };

    // Add event listeners to all 'Add to Cart' buttons
    document.querySelectorAll('.item-details button').forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
});
