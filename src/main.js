import './assets/styles/style.css'

[...document.querySelectorAll("a")].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
})