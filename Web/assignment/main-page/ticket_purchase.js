// JavaScript for ticket purchase page

const seats = document.querySelectorAll('.seat');

let selectedSeats = [];
let totalPrice = 0;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('booked') && !seat.classList.contains('selected')) {
            seat.classList.add('selected');
            updateSelectedSeats();
            calculateTotal();
        } else if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            updateSelectedSeats();
            calculateTotal();
        }
    });
});

function updateSelectedSeats() {
    selectedSeats = [];
    document.querySelectorAll('.seat.selected').forEach(selectedSeat => {
        selectedSeats.push(selectedSeat.innerText);
    });
    document.getElementById('selected-seats').innerText = selectedSeats.join(', ');
}

function calculateTotal() {
    totalPrice = 0;
    document.querySelectorAll('.seat.selected').forEach(selectedSeat => {
        totalPrice += parseInt(selectedSeat.getAttribute('data-price'));
    });
    document.getElementById('total-price').innerText = '$' + totalPrice;
}

document.getElementById('ticket-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Change class to 'booked' for selected seats
    document.querySelectorAll('.seat.selected').forEach(selectedSeat => {
        selectedSeat.classList.remove('selected');
        selectedSeat.classList.add('booked');
    });
    
    // Alert or process the purchase information
    alert(`Selected Seats: ${selectedSeats.join(', ')}\nTotal Price: $${totalPrice}\nPayment Method: ${document.getElementById('payment-method').value}`);
    // You can add code here to handle the actual purchase process
});
