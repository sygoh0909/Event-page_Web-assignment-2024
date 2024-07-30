// JavaScript for ticket purchase page

const seats = document.querySelectorAll('.seat');

let selectedSeats = [];
let totalPrice = 0;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('booked')) {
            // Do nothing if the seat is booked
            return;
        }
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            updateSelectedSeats();
            calculateTotal();
        } else {
            seat.classList.add('selected');
            updateSelectedSeats();
            calculateTotal();
        }
    });
});

function updateSelectedSeats() {
    selectedSeats = [];
    document.querySelectorAll('.seat.selected').forEach(selectedSeat => {
        selectedSeats.push(selectedSeat.innerText.trim());
    });
    document.getElementById('selected-seats').innerText = selectedSeats.join(', ');
}

function calculateTotal() {
    totalPrice = 0;
    document.querySelectorAll('.seat.selected').forEach(selectedSeat => {
        const price = parseInt(selectedSeat.getAttribute('data-price'), 10);
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });
    document.getElementById('total-price').innerText = '$' + totalPrice;
}

document.getElementById('ticket-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat.');
        return;
    }

    // Change class to 'booked' for selected seats
    document.querySelectorAll('.seat.selected').forEach(selectedSeat => {
        selectedSeat.classList.remove('selected');
        selectedSeat.classList.add('booked');
    });
    
    // Alert or process the purchase information
    alert(`Selected Seats: ${selectedSeats.join(', ')}\nTotal Price: $${totalPrice}\nPayment Method: ${document.getElementById('payment-method').value}`);
    // You can add code here to handle the actual purchase process

    // Clear selection after booking
    selectedSeats = [];
    totalPrice = 0;
    updateSelectedSeats();
    calculateTotal();
});
