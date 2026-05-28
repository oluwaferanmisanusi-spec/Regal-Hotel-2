var splide = new Splide(".rooms-slider", {
  type: "slide",
  perPage: 3,
  gap: "3.2rem",
  arrows: false,
  pagination: false,
  drag: false,
  breakpoints: {
    1300: {
      type: "loop",
      perPage: 1,
      gap: "2rem",
      drag: true,
      padding: { left: "5rem", right: "5rem" },
    },
  },
});
splide.mount();
