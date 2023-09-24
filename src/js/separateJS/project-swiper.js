const swiper = new Swiper(".project__mini-images ", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".project__big-image", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
