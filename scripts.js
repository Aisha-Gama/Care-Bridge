// scripts.js

// Simple Scroll Animation
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.feature-box');
    let screenHeight = window.innerHeight;

    elements.forEach(element => {
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - screenHeight <= 0) {
            element.classList.add('in-view');
        }
    });
});
