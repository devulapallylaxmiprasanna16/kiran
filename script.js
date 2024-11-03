// Countdown and Loading Animation
let countdown = 5;
const countdownElement = document.getElementById("count-num");
const countdownContainer = document.getElementById("countdown");
const loadingContainer = document.getElementById("loading");
const mainContent = document.getElementById("mainContent");
const loveMessage = document.getElementById("loveMessage");

// Countdown Timer
const countdownInterval = setInterval(() => {
    countdownElement.textContent = countdown;
    countdown--;

    if (countdown < 0) {
        clearInterval(countdownInterval);
        countdownContainer.style.display = "none";
        loadingContainer.style.display = "flex";

        // Show loading screen for 2 seconds
        setTimeout(() => {
            loadingContainer.style.display = "none";
            mainContent.style.display = "block";
        }, 2000);
    }
}, 1000);

// Floating Heart Generator
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        mainContent.appendChild(heart);
    }
}

createHearts();

// Open Love Message
document.getElementById("openMessage").addEventListener("click", function() {
    loveMessage.style.display = "block";
});
