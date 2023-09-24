const burgerBtn = document.querySelector(".header__burger-btn");
const mobileHeader = document.querySelector(".header__mobile");
const mobileMenu = document.querySelector(".header__mobile__menu");
const mobileMenuItems = mobileMenu.querySelectorAll("li");

dropdownMobile(mobileMenuItems);

function dropdownMobile(items) {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      insideMenu = item.querySelector("ul");
      if (insideMenu) {
        insideMenu.classList.toggle("sub-menu--show");
      }
    });
  });
}

burgerBtn.addEventListener("click", () => {
  mobileHeader.classList.toggle("mobile-menu--active");
  body.classList.toggle("body--fixed");
  burgerBtn.classList.toggle("burger--open");
});
