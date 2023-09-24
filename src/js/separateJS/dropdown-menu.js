const headerMenuList = document.querySelector(".header__menu__list");

const dropDownMenu = document.querySelector(".dropdown");
const headerMenuItems = headerMenuList.querySelectorAll("li");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

headerMenuItems.forEach((headerMenuItem) => {
  headerMenuItem.addEventListener("mousemove", () => {
    if (headerMenuItem && headerMenuItem.querySelector("ul")) {
      enable_overlay();
      body.classList.add("body--fixed");
    } else {
      disable_overlay();
    }
  });
});

headerMenuList.addEventListener("mouseleave", () => {
  disable_overlay();
  body.classList.remove("body--fixed");
});
dropDownMenu.addEventListener("mouseleave", () => {
  disable_overlay();
  body.classList.remove("body--fixed");
});

function enable_overlay() {
  if (!overlay.classList.contains("overlay--enabled")) {
    overlay.classList.add("overlay--enabled");
  }
}

function disable_overlay() {
  if (overlay.classList.contains("overlay--enabled")) {
    overlay.classList.remove("overlay--enabled");
  }
}
