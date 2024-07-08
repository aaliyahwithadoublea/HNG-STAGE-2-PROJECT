// document.addEventListener('DOMContentLoaded', function () {
//     const cartItems = document.querySelectorAll('.cart-item');
//     const subtotalElement = document.querySelector('.totals .subtotal');
//     const totalElement = document.querySelector('.totals .total');
//     const hamburger = document.getElementById('hamburger');
//     const nav = document.querySelector('.nav');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         nav.classList.toggle('active');
//     });

//     function updateTotals() {
//         let subtotal = 0;
//         cartItems.forEach(item => {
//             const quantity = parseInt(item.querySelector('.count').innerText);
//             const price = parseInt(item.querySelector('.price').innerText.replace('₦', ''));
//             const itemSubtotal = quantity * price;
//             item.querySelector('.item-subtotal').innerText = ₦${itemSubtotal.toLocaleString()};
//             subtotal += itemSubtotal;
//         });
//         subtotalElement.innerText = Subtotal: ₦${subtotal.toLocaleString()};
//         totalElement.innerText = Total: ₦${subtotal.toLocaleString()};
//     }

//     cartItems.forEach(item => {
//         const decrementButton = item.querySelector('.decrement');
//         const incrementButton = item.querySelector('.increment');
//         const countElement = item.querySelector('.count');

//         decrementButton.addEventListener('click', () => {
//             let count = parseInt(countElement.innerText);
//             if (count > 1) {
//                 count -= 1;
//                 countElement.innerText = count;
//                 updateTotals();
//             }
//         });

//         incrementButton.addEventListener('click', () => {
//             let count = parseInt(countElement.innerText);
//             count += 1;
//             countElement.innerText = count;
//             updateTotals();
//         });
//     });

//     updateTotals();  // Initial update
// });

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});