import { LOADER } from "../constants/constants";

window.addEventListener("load", () => {
    let rects: NodeListOf<SVGRectElement> =
        LOADER.querySelectorAll(".loader__rect")!;
    rects.forEach((element) => {
        element.style.animationPlayState = "paused";
    });
    LOADER.style.visibility = "hidden";
});
