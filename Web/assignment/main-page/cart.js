document.addEventListener('DOMContentLoaded', () => {
    function displayCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear existing items

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" />
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
    }

    function checkout() {
        alert('Proceeding to checkout...');
        // Implement checkout functionality here
    }

    displayCartItems();

    // Attach checkout function to the button
    document.querySelector('button').addEventListener('click', checkout);
});
