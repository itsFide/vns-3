const brandsTrigger = document.querySelector(".brands-filter__head");
const brandsList = document.querySelector(".brands-filter__select-form");
const brandsBtn = brandsTrigger.querySelector("svg");
brandsTrigger.addEventListener("click", () => {
  if (brandsList.style.maxHeight) {
    brandsBtn.style.transform = "rotate(0)";
    brandsList.style.maxHeight = null;
  } else {
    brandsList.style.maxHeight = brandsList.scrollHeight + "px";
    brandsBtn.style.transform = "rotate(180deg)";
  }
});
