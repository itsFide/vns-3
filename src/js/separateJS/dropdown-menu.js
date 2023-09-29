const headerMenuList = document.querySelector(".header__menu__list");

const dropDownMenu = document.querySelector(".dropdown");
const headerMenuItems = headerMenuList.querySelectorAll("li");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");


const dropdownMenus = document.querySelectorAll('.dropdown')
let currentMenus = []

function showNextLevelDropdown(list) {
    const meniItems = list.querySelectorAll(':scope > li')
    meniItems.forEach((menuItem) => {
        const dropdownMenuTrigger = menuItem.querySelector('a')
        dropdownMenuTrigger.addEventListener('mousemove', (e) => {
            if (currentMenus[1]) {
                setHiddenItem(currentMenus[1])
            }
            currentMenus[1] = menuItem
            currentMenus[2] = menuItem
            setActiveItem(currentMenus[1])
        })
    })
}

function setHiddenItem(item) {
    const dropdownMenuTrigger = item.querySelector('a')
    const dropdownMenu = item.querySelector('ul')
    if (dropdownMenu && dropdownMenu.classList.contains('menu--show')) {
        dropdownMenu.classList.remove('menu--show')
    }
    dropdownMenuTrigger.classList.remove('item--active')
}

function setActiveItem(item) {
    const dropdownMenuTrigger = item.querySelector('a')
    const dropdownMenu = item.querySelector('ul')
    if (dropdownMenu && !dropdownMenu.classList.contains('menu--show')) {
        dropdownMenu.classList.add('menu--show')
    }
    dropdownMenuTrigger.classList.add('item--active')
}

dropdownMenus.forEach((dropDownMenu) => {
    const dropdown = dropDownMenu.querySelector('.dropdown__menu')
    const meniItems = dropdown.querySelectorAll(':scope > li')
    meniItems.forEach((menuItem) => {
        const dropdownMenuTrigger = menuItem.querySelector('a')
        const dropdownMenu = menuItem.querySelector('ul')
        if (dropdownMenu) {
            showNextLevelDropdown(dropdownMenu)
        }
        dropdownMenuTrigger.addEventListener('mousemove', (e) => {
            if (currentMenus[0]) {
                setHiddenItem(currentMenus[0])
            }
            if (currentMenus[2]){
                setHiddenItem(currentMenus[2])
            }
            currentMenus[0] = menuItem
            setActiveItem(currentMenus[0])
        })
    })
})

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

function clearAllMenus(){
    dropdownMenus.forEach((dropDownMenu) => {
        const dropdown = dropDownMenu.querySelector('.dropdown__menu')
        const meniItems = dropdown.querySelectorAll('li')
        meniItems.forEach((menuItem) => {
            setHiddenItem(menuItem)
        })
    })
}
headerMenuList.addEventListener("mouseleave", () => {
    disable_overlay();
    clearAllMenus();
    currentMenus = []
    body.classList.remove("body--fixed");
});
dropDownMenu.addEventListener("mouseleave", () => {
    disable_overlay();
    clearAllMenus();
    currentMenus = []
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
