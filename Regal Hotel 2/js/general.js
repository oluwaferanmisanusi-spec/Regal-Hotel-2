///////////////////////////////////////////////////////////
// Set Current Year

const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

///////////////////////////////////////////////////////////
// Sticky Navigation
window.addEventListener("scroll", function () {
  const scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercent > 15) {
    // triggers after 15% scrolled
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
