"use strict";

var trigger = document.querySelector('.burger-btn');
var menu = document.querySelector('.category-menu__list');
trigger.addEventListener('click', function () {
  menu.style.height = "".concat(menu.scrollHeight, "px");
});