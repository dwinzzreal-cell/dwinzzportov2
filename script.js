/* LOADER */

const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loaderBar");
const loaderPercent = document.getElementById("loaderPercent");

let progress = 0;

const loading = setInterval(() => {

  progress += Math.floor(Math.random() * 8) + 1;

  if (progress >= 100) {
    progress = 100;
    clearInterval(loading);

    setTimeout(() => {
      loader.classList.add("hide");
    }, 400);
  }

  loaderBar.style.width = `${progress}%`;
  loaderPercent.textContent = `${progress}%`;

}, 60);


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });

});


/* SCROLL REVEAL */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});


/* MOUSE GLOW */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
  "radial-gradient(circle, rgba(140,95,255,.10), transparent 70%)";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", event => {

  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;

});


/* CURRENT YEAR */

const footerYear = document.querySelector("footer span");

if (footerYear) {
  footerYear.textContent =
    `© ${new Date().getFullYear()} DWINZZ`;
}
