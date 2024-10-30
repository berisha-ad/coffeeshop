//Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const menuWrapper = document.querySelector(".menu-wrapper");
const navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuWrapper.classList.toggle("active");
    navLinks.forEach(link => {
        link.classList.toggle("nav-link-active");
    });
})

const basisDelay = 0.2;

navLinks.forEach((link, index) => {
    link.style.animationDelay = `${basisDelay + index * 0.15}s`;
});





