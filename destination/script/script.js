document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");

    if (document.getElementById("menu-icon").getAttribute("src") === "starter-code/assets/shared/icon-hamburger.svg") {
        document.getElementById("menu-icon").setAttribute("src", "starter-code/assets/shared/icon-close.svg");
    } else {
        document.getElementById("menu-icon").setAttribute("src", "starter-code/assets/shared/icon-hamburger.svg");
    };
});

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides (n) {
//     let slides = document.getElementsByClassName("destinationSlide");
//     let buttons = document.getElementsByClassName("destButton");

//     if (n > slides.length) {
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     for (i = 0; i < buttons.length; i++) {
//         buttons[i].className = buttons[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "flex";
//     buttons[slideIndex-1].className += " active";
// }

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