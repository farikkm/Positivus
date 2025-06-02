import "./assets/styles/style.css";

// Link

[...document.querySelectorAll("a")].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Menu Icon

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

//  Sponsors

const sponsors = document.querySelector(".sponsors");

const fullWrapper = sponsors.parentElement;
const scrollWidth = sponsors.offsetWidth;
fullWrapper.style.width = scrollWidth * 2 + "px";
const duration = scrollWidth / 50; 
sponsors.style.animationDuration = `${duration}s`;

// Free proposal

const target = document.querySelector('.free-proposal');
const decors = [...document.querySelectorAll('.free-proposal__img_decor img')].reverse();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        decors.forEach((decor, index) => {
          setTimeout(() => {
            decor.classList.add("_animate");
            decor.classList.remove("_hide");
          }, index * 500)
        })
      }
    });
  },
  {
    threshold: 1.0 // 100% видимость блока
  }
);

if (target && decors.length > 0) {
  observer.observe(target);
}
