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

  const progressBarLineWidth = Math.trunc(
    (scrollTop / (scrollHeight - clientHeight)) * 100
  );

  progressBarLine.style.width = `${progressBarLineWidth}%`;
}

window.addEventListener("DOMContentLoaded", activateProgressBar);
window.addEventListener("scroll", activateProgressBar);
window.addEventListener("resize", activateProgressBar);

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

// Studies
const studiesBlock = document.getElementById("studies");
const studiesSeperators = [...document.querySelectorAll(".studies__separator")];

const studiesBlockObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        studiesSeperators.forEach((seperator) => {
          seperator.style.height = "100%";
        });
      }
    });
  },
  { threshold: 1 }
);

studiesBlockObserver.observe(studiesBlock);

const studiesCases = [...document.querySelectorAll(".studies__case")];
const studiesCasesContainer = document.querySelector(".studies__cases");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

studiesCases.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots span");

function updateSlider() {
  studiesCasesContainer.style.transform = `translateX(-${currentIndex * 87}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % studiesCases.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + studiesCases.length) % studiesCases.length;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });
});

let startX = 0;

studiesCasesContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

studiesCasesContainer.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff > 50) {
    currentIndex =
      (currentIndex - 1 + studiesCases.length) % studiesCases.length;
    updateSlider();
  } else if (diff < -50) {
    currentIndex = (currentIndex + 1) % studiesCases.length;
    updateSlider();
  }
});

// Working process
const workingProcessItems = [
  ...document.querySelectorAll(".working-process__item"),
];

workingProcessItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("_active");
    
    workingProcessItems.forEach((i) => i.classList.remove("_active"));

    if (!isActive) {
      item.classList.add("_active");
    }
  });
});
