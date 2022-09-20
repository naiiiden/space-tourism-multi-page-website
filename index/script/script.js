document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");

    if (document.getElementById("menu-icon").getAttribute("src") === "starter-code/assets/shared/icon-hamburger.svg") {
        document.getElementById("menu-icon").setAttribute("src", "starter-code/assets/shared/icon-close.svg");
        document.getElementById("hamburger").ariaLabel = "Close menu";
        document.getElementById("hamburger").ariaExpanded = "true";
    } else {
        document.getElementById("menu-icon").setAttribute("src", "starter-code/assets/shared/icon-hamburger.svg");
        document.getElementById("hamburger").ariaLabel = "Open menu";
        document.getElementById("hamburger").ariaExpanded = "false";
    };
});