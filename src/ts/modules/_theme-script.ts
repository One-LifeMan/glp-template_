import { BODY } from "../constants/constants";

const THEME_TOGGLE: HTMLElement = document.querySelector(".theme-toggle")!;
let userToggleTheme: Boolean = false;
let darkMode: Boolean = false;

function toggleTheme() {
    if (darkMode) {
        BODY.classList.add("dark-theme");
        BODY.classList.remove("light-theme");
    } else {
        BODY.classList.add("light-theme");
        BODY.classList.remove("dark-theme");
    }
}

function saveTheme() {
    let darkModeStr: string = darkMode ? "true" : "false";
    localStorage.setItem("darkTheme", darkModeStr);
}

function loadTheme() {
    if (localStorage.getItem("darkTheme")) {
        let darkTheme = localStorage.getItem("darkTheme");
        darkTheme === "true" ? (darkMode = true) : (darkMode = false);
        toggleTheme();
    }
}

loadTheme();

THEME_TOGGLE.addEventListener("click", () => {
    darkMode = !darkMode;
    toggleTheme();
    saveTheme();
});
