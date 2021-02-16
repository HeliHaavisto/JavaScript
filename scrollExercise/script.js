let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("button");

let mobileButton = document.getElementById("mobileButton");

let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
    headerFunction();
};

function headerFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {

        header.classList.add("bg");
        buttonBackToTop.style.display = "block";

    } else {
        header.classList.remove("bg");
        buttonBackToTop.style.display = "none";
    }
};







function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

buttonBackToTop.addEventListener("click", topFunction);

const mobMenu = () => {

    nav.classList.toggle("responsive");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", mobMenu);
    }
};

mobileButton.addEventListener("click", mobMenu)