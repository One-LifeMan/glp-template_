import { BURGER, MENU, MENU_ITEMS } from "../constants/constants";

let $ = function (selector: string): HTMLElement {
    return document.querySelector(selector)!;
};

function mobileMenuSizeAndPosition() {
    if (window.innerWidth <= 767) {
        let headerHeight: number = $(".header").offsetHeight;
        let menuTopPosition: string = headerHeight + "px";
        let menuHeight: string = window.outerHeight - headerHeight + "px";
        document.documentElement.style.setProperty(
            "--header-top-position",
            menuTopPosition,
        );
        document.documentElement.style.setProperty(
            "--header-height",
            menuHeight,
        );
    }
}

function closeMenu() {
    MENU_ITEMS.forEach((item) => {
        item.addEventListener("click", () => {
            BURGER.classList.remove("active");
            MENU.scrollTop = 0;
        });
    });
}

function startMenu() {
    mobileMenuSizeAndPosition();

    closeMenu();

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
