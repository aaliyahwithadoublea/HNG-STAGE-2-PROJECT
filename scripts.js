document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
const gut = console.log("it's working")
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});
