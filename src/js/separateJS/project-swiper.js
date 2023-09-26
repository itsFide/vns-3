const swiper = new Swiper(".project__mini-images ", {
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    260: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
const swiper2 = new Swiper(".project__big-image", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
