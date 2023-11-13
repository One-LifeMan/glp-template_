import { SCROLL_UP } from "../constants/constants";
SCROLL_UP.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});
window.addEventListener("scroll", () => {
    if (window.scrollY > window.outerHeight) {
        SCROLL_UP.style.display = "flex";
    }
    else {
        SCROLL_UP.style.display = "none";
    }
});
