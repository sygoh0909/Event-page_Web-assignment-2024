document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout');

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    function clearCart() {
        localStorage.removeItem('cart');
        updateCart();
        alert('Cart has been cleared!');
    }

    function checkout() {
        const paymentMethod = document.getElementById('payment-method').value;
        alert(`Proceeding to checkout with ${paymentMethod}.`);
        // Implement payment processing logic here
    }

    clearCartButton.addEventListener('click', clearCart);
    checkoutButton.addEventListener('click', checkout);

    // Initial cart update
    updateCart();
});
