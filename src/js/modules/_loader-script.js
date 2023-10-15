console.log("loader-script");

window.addEventListener("load", ()=> {
    const LOADER = document.querySelector(".loader");
    LOADER.querySelectorAll(".loader__rect").forEach(element => {
        element.style.animationPlayState = "paused";
    });
    LOADER.style.visibility = "hidden";
});