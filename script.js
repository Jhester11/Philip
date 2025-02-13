const alternatives = [
    { text: "", images: "images/cat-01.gif" },
    { text: "I promise you it will be unforgettable", images: "images/cat-02.gif" },
    { text: "Think again", images: "images/cat-03.gif" },
    { text: "Come on, dare to say yes", images: "images/cat-04.gif" },
    { text: "Don't let fear stop you", images: "images/cat-05.gif" }
];
const ohyes = { text: "I knew you would accept", images: "images/cat-yes.gif" };
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item) {
    cat.src = item.images
    text.innerHTML = item.text
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
})

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent == "Si") {
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if (button.textContent == 'No') {
            count++
            if (count < alternatives.length) {
                updateDisplay(alternatives[count])
            } else {
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
}
)

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // Heart symbol

    // Randomize starting position along the width
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed
    heart.style.fontSize = Math.random() * 10 + 15 + "px"; // Random size

    document.body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);
