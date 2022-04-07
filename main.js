"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
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
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
});

//Navbar toggle button fro small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
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

//Make some slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter =
        e.target.dataset.filter || e.target.parentNode.dataset.filter;

    if (filter == null) {
        return;
    }

    //Remove selection from the previous item and select the new one
    const active = document.querySelector(".category__btn.selected");
    active.classList.remove("selected");
    console.log(e.target.nodeName);
    const target =
        e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    target.classList.add("selected");

    projectContainer.classList.add("anim-out");

    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });
        projectContainer.classList.remove("anim-out");
    }, 300);

    /* 밑 for문과 forEach문이 같은 기능을 함
    let project;
    for(let i=0; i<projects.length; i++){
        project = projects[i];
    }
*/
});

let front_count = 0;
let back_count = 0;
let mobile_count = 0;

//const categoryCount = document.querySelectorAll(".category__count");

function CountProjectType() {
    for (let i = 0; i < projectContainer.children.length; i++) {
        //console.log(projectContainer.children[i].dataset.type);
        if (projectContainer.children[i].dataset.type === "front-end") {
            front_count++;
        } else if (projectContainer.children[i].dataset.type === "back-end") {
            back_count++;
        } else if (projectContainer.children[i].dataset.type === "mobile") {
            mobile_count++;
        } else {
            console.log("잘못된 정보 입력");
        }
    }
}

function PaintCategory() {
    workBtnContainer.children[0].children[0].innerText =
        front_count + back_count + mobile_count;

    workBtnContainer.children[1].children[0].innerText = front_count;

    workBtnContainer.children[2].children[0].innerText = back_count;

    workBtnContainer.children[3].children[0].innerText = mobile_count;
}

CountProjectType();
PaintCategory();

//console.log(projectContainer.children);

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}
