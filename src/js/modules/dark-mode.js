// const DARK_MODE = document.querySelector("#darkMode");

DARK_MODE.addEventListener("click", () => {
    let darkElements = [
        document.body,
        document.querySelector(".section-1"),
        document.querySelector(".section-2"),
    ];

    darkElements.forEach(element => {
        element.classList.toggle("dark-mode");
    });
});