document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

const revealEls = document.querySelectorAll(".card, .value, .track-list li, .greeting, .info-table");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
