const statisticsItems = document.querySelectorAll('.statistics__item__numbers')


function startAnimation(item) {
    const typedTextSpan = item.querySelector(".statistics__item__value");
    const cursorSpan = item.querySelector(".cursor");
    const typeText = [...typedTextSpan.innerText.split('')];
    const typingDelay = 150;
    const erasingDelay = 1000;
    const newTextDelay = 1000;
    const typeSpeed = 500;
    let charIndex = typeText.length;
    let textString = ''

    function type() {

        if (charIndex < typeText.length) {
            textString += typeText[charIndex]
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.innerText = textString
            charIndex++;
            setTimeout(type, typeSpeed / typeText.length);
        } else {
            textString = ''
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.innerText = typedTextSpan.innerText.slice(0, -1)
            charIndex--
            setTimeout(erase, erasingDelay / typeText.length);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(type, typingDelay + 1100);
        }
    }

    setTimeout(erase, newTextDelay)
}

statisticsItems.forEach((statisticsItem) => {
    startAnimation(statisticsItem)
})


