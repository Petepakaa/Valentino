document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".title");

    // Apply fade-in effect when the page loads
    setTimeout(() => {
        title.style.opacity = "1";
    }, 500);
});
