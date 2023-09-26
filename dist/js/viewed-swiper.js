const viewedSwiper = new Swiper(".viewed-slider", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    670: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    860: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
