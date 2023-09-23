const trigger = document.querySelector(".category-menu__head");
const menu = document.querySelector(".category-menu__list");
const paddingClass = "pd20";
trigger.addEventListener("click", () => {
    menu.style.height =
        menu.style.height === "" ? `${menu.scrollHeight}px` : "";
    if (menu.classList.contains(paddingClass)) {
        setTimeout(() => {
            menu.classList.remove(paddingClass);
        }, 300);
    } else {
        menu.classList.add(paddingClass);
    }
});
