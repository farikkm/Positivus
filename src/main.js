import "./assets/styles/style.css";

[...document.querySelectorAll("a")].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu__icon");

menuIcon.addEventListener("click", () => {
  if (!menu.classList.contains("_active")) {
    document.body.classList.add("_lock");
    menu.classList.add("_active");
  } else {
    document.body.classList.remove("_lock");
    menu.classList.remove("_active");
  }
  menuIcon.classList.toggle("_active");
});

const sponsors = document.querySelector(".sponsors");

const fullWrapper = sponsors.parentElement;
const scrollWidth = sponsors.offsetWidth;
fullWrapper.style.width = scrollWidth * 2 + "px";
const duration = scrollWidth / 50; 
sponsors.style.animationDuration = `${duration}s`;
