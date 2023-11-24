const LOADER: HTMLDivElement = document.querySelector(".loader")!;
const MENU: HTMLElement = document.querySelector(".menu")!;
const BURGER: HTMLDivElement = document.querySelector(".menu__burger")!;
const MENU_ITEMS: NodeListOf<Element> =
    document.querySelectorAll(".menu__item")!;
const SCROLL_UP: HTMLDivElement = document.querySelector(".scroll-up")!;
const BODY: HTMLBodyElement = document.querySelector("body")!;

export { LOADER, MENU, BURGER, MENU_ITEMS, SCROLL_UP, BODY };
