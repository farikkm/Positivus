import "./assets/styles/style.css";

// Link

[...document.querySelectorAll("a")].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Progress Bar
const progressBarLine = document.getElementById("progress-bar-line");
const scrollHeight = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;

function activateProgressBar() {
  const scrollTop = document.documentElement.scrollTop;

  const progressBarLineWidth = Math.trunc((scrollTop / (scrollHeight - clientHeight)) * 100);

  progressBarLine.style.width = `${progressBarLineWidth}%`
}

window.addEventListener("DOMContentLoaded", activateProgressBar)
window.addEventListener("scroll", activateProgressBar)


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

// Services
const servicesBlock = document.getElementById("services");
const servicesCards = [...document.querySelectorAll(".services__card")];

const servicesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Hello");
        servicesCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("_fade-out");
            card.classList.remove("_hide-by-opacity");
          }, index * 300);
        });
      }
    });
  },
  { threshold: 0.2 }
);

if (servicesBlock && servicesCards.length > 0) {
  servicesObserver.observe(servicesBlock);
}

// Free proposal

const freeProposalBlock = document.querySelector(".free-proposal");
const decors = [
  ...document.querySelectorAll(".free-proposal__img_decor img"),
].reverse();

const freeProposalBlockObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        decors.forEach((decor, index) => {
          setTimeout(() => {
            decor.classList.add("_fade-out");
            decor.classList.remove("_hide-by-opacity");
          }, index * 400);
        });
      }
    });
  },
  {
    threshold: 1.0, // 100% видимость блока
  }
);

if (freeProposalBlock && decors.length > 0) {
  freeProposalBlockObserver.observe(freeProposalBlock);
}
