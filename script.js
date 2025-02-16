document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkVisibility() {
        sections.forEach((section) => {
            const position = section.getBoundingClientRect().top;
            if (position < window.innerHeight * 0.75 && !section.style.backgroundImage) {
                let imageUrl = section.getAttribute("data-bg");
                if (imageUrl) {
                    section.style.backgroundImage = `url('${imageUrl}')`;
                }
                section.style.opacity = "1";
                const message = section.querySelector(".message");
                if (message) {
                    message.style.opacity = "1";
                    message.style.transform = "translateY(0)";
                }
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once on load
});
