const trigger = document.querySelector(".category-menu__head");
const menu = document.querySelector(".category-menu__list");
const menuItems = menu.querySelectorAll(".category-menu__list li");
const paddingClass = "pd20";
trigger.addEventListener("click", () => {
  menu.style.maxHeight = menu.style.maxHeight ? null : `${menu.scrollHeight}px`;
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    e.preventDefault();
    const menuList = menuItem.getElementsByTagName("ul")[0];
    if (menuList) {
      menuList.style.display =
        menuList.style.display == "block" ? "none" : "block";
    }
  });
});
