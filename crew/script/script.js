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

let crewSlideIndex = 1;
crewShowSlides(crewSlideIndex);

function crewPlusSlides(n) {
    crewShowSlides(crewSlideIndex += n);
}

function crewCurrentSlide(n) {
    crewShowSlides(crewSlideIndex = n);
}

function crewShowSlides (n) {
    let crewSlides = document.getElementsByClassName("crewSlide");
    let crewButtons = document.getElementsByClassName("crewButton");

    if (n > crewSlides.length) {
        crewSlideIndex = 1;
    }

    if (n < 1) {
        crewSlideIndex = crewSlides.length;
    }

    for (let i = 0; i < crewSlides.length; i++) {
        crewSlides[i].style.display = "none";
    }

    for (i = 0; i < crewButtons.length; i++) {
        crewButtons[i].className = crewButtons[i].className.replace(" active", "");
    }
    crewSlides[crewSlideIndex-1].style.display = "flex";
    crewButtons[crewSlideIndex-1].className += " active";
}