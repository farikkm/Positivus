import './assets/styles/style.css'

[...document.querySelectorAll("a")].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
})

const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu__icon");

menuIcon.addEventListener("click", (e) => {
  if (!menu.classList.contains("_active")) {
    menu.classList.add("_active")
  } else {
    menu.classList.remove("_active")
  }
  menuIcon.classList.toggle("_active")
})