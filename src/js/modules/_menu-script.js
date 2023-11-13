import { BURGER, MENU } from "../constants/constants";
let $ = function (selector) {
    return document.querySelector(selector);
};
function mobileMenuSizeAndPosition() {
    if (window.innerWidth <= 767) {
        let headerHeight = $(".header").offsetHeight;
        let menuTopPosition = headerHeight + "px";
        let menuHeight = window.outerHeight - headerHeight + "px";
        document.documentElement.style.setProperty("--header-top-position", menuTopPosition);
        document.documentElement.style.setProperty("--header-height", menuHeight);
    }
}
function startMenu() {
    mobileMenuSizeAndPosition();
    BURGER.addEventListener("click", () => {
        BURGER.classList.toggle("active");
        if (BURGER.className !== "menu__burger active") {
            MENU.scrollTop = 0;
        }
    });
    window.addEventListener("resize", () => {
        BURGER.classList.remove("active");
        MENU.scrollTop = 0;
        mobileMenuSizeAndPosition();
    });
}
startMenu();
