const swiper = new Swiper(".mySwiper", {
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    480: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    780: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    980: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
  },
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
