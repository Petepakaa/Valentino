 // Add click event listener to play music
 document.addEventListener('click', function() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
    }
}, { once: true });

document.addEventListener("DOMContentLoaded", function () {
    
    // Create floating hearts
    const body = document.body;
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");

        // Randomize horizontal position
        heart.style.left = Math.random() * 100 + "vw";

        // Randomize animation duration
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        // Randomize initial delay for staggered appearance
        heart.style.animationDelay = Math.random() * 2 + "s";

        body.appendChild(heart);
    }

    // Existing code for section visibility
    console.log("Script loaded!"); // Check if this appears in the console
    const sections = document.querySelectorAll(".section");

    function checkVisibility() {
        sections.forEach((section) => {
            const message = section.querySelector(".message");
            const image = section.querySelector(".fade-image");
            const position = section.getBoundingClientRect().top;

            if (position < window.innerHeight * 0.75) {
                if (message) {
                    message.style.opacity = "1";
                    message.style.transform = "translateY(0)";
                }
                if (image) {
                    image.style.opacity = "1";
                    image.style.transform = "scale(1)";
                }
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Trigger function to check already visible sections
});