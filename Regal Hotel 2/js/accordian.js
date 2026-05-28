///////////////////////////////////////////////////////////
// accordian
// Footer accordion
(function () {
  var cols = document.querySelectorAll(".footer-col");

  function manageAccordion() {
    if (window.innerWidth > 944) {
      cols.forEach(function (col) {
        col.setAttribute("open", "");
      });
    } else {
      cols.forEach(function (col) {
        col.removeAttribute("open");
      });
    }
  }

  manageAccordion();
  window.addEventListener("resize", manageAccordion);
})();
