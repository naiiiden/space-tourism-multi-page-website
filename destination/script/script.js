document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");

    if (document.getElementById("menu-icon").getAttribute("src") === "starter-code/assets/shared/icon-hamburger.svg") {
        document.getElementById("menu-icon").setAttribute("src", "starter-code/assets/shared/icon-close.svg");
        document.getElementById("hamburger").ariaLabel = "Close menu";
        document.getElementById("hamburger").ariaExpanded = "true";
        document.querySelectorAll(".nav-ul .link").forEach(link => {
            link.tabIndex = "0";
        });
    } else {
        document.getElementById("menu-icon").setAttribute("src", "starter-code/assets/shared/icon-hamburger.svg");
        document.getElementById("hamburger").ariaLabel = "Open menu";
        document.getElementById("hamburger").ariaExpanded = "false";
        document.querySelectorAll(".nav-ul .link").forEach(link => {
            link.tabIndex = "-1";
        });
    };
});

let destSlideIndex = 1;
destShowSlides(destSlideIndex);

function destPlusSlides(n) {
    destShowSlides(destSlideIndex += n);
}

function destCurrentSlide(n) {
    destShowSlides(destSlideIndex = n);
}

function destShowSlides (n) {
    let destSlides = document.getElementsByClassName("destinationSlide");
    let destButtons = document.getElementsByClassName("destButton");

    if (n > destSlides.length) {
        destSlideIndex = 1;
    }

    if (n < 1) {
        destSlideIndex = destSlides.length;
    }

    for (let i = 0; i < destSlides.length; i++) {
        destSlides[i].style.display = "none";
    }

    for (i = 0; i < destButtons.length; i++) {
        destButtons[i].className = destButtons[i].className.replace(" active", "");
    }
    destSlides[destSlideIndex-1].style.display = "flex";
    destButtons[destSlideIndex-1].className += " active";
}