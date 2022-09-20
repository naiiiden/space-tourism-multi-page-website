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

let launchSlideIndex = 1;
launchShowSlides(launchSlideIndex);

function launchPlusSlides(n) {
    launchShowSlides(launchSlideIndex += n);
}

function launchCurrentSlide(n) {
    launchShowSlides(launchSlideIndex = n);
}

function launchShowSlides (n) {
    let launchSlides = document.getElementsByClassName("launchSlide");
    let launchButtons = document.getElementsByClassName("launchButton");

    if (n > launchSlides.length) {
        launchSlideIndex = 1;
    }

    if (n < 1) {
        launchSlideIndex = launchSlides.length;
    }

    for (let i = 0; i < launchSlides.length; i++) {
        launchSlides[i].style.display = "none";
    }

    for (i = 0; i < launchButtons.length; i++) {
        launchButtons[i].className = launchButtons[i].className.replace(" active", "");
    }
    launchSlides[launchSlideIndex-1].style.display = "flex";
    launchButtons[launchSlideIndex-1].className += " active";
}