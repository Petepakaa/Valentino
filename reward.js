document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".cute-button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});
