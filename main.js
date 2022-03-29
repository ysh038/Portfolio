"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add(`navbar--dark`);
    } else {
        navbar.classList.remove(`navbar--dark`);
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

/*const menu_button = document.querySelector(".navbar__menu:nth-child(1)");
const home_button = menu_button.children[0];
const about_button = menu_button.children[1];
const skills_button = menu_button.children[2];
const mywork_button = menu_button.children[3];
const testimonia_button = menu_button.children[4];
const contact_button = menu_button.children[5];

home_button.addEventListener("click", GoToHome);
about_button.addEventListener("click", GoToAbout);

function GoToAbout() {
    window.scrollTo({ top: 625, left: 0, behavior: `smooth` });
}

function GoToHome() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
*/

// Handle Click on "contact me" button on home

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
    scrollIntoView("#contact");
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}
