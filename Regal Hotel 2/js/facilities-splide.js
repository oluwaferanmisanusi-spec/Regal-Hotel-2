document.addEventListener('DOMContentLoaded', function () {
  new Splide('.rooms-slider', {
    type: 'loop',
    perPage: 2,
    gap: '3.2rem',
    arrows: true,
    pagination: true,
    breakpoints: {
      765: {
        perPage: 1,
        gap: '1.6rem',
      },
    },
  }).mount();
});
