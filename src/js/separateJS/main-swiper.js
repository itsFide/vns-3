const serviceSlider = new Swiper(".service__slider", {
    direction: "horizontal",
    slidesPerView: 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        670: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        860: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.swiper-service-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-service-button-next",
        prevEl: ".swiper-service-button-prev",
    },
});

const advantagesSlider = new Swiper(".advantages__slider", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        670: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        860: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.swiper-pagination-advantages',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-advantages-button-next",
        prevEl: ".swiper-advantages-button-prev",
    },
});

const newsSlider = new Swiper(".news__slider", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        670: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        860: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.swiper-news-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-news-button-next",
        prevEl: ".swiper-news-button-prev",
    },
});

const sliders = {
    'advantages': advantagesSlider,
    'service': serviceSlider,
    'news': newsSlider,
}
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function toggleSliderState(swiper, swiperClass){
    if (isElementInViewport(document.querySelector(swiperClass))) {
        swiper.autoplay.start();
    } else {
        swiper.autoplay.stop();
    }
}
window.addEventListener('scroll', function () {
    toggleSliderState(sliders.service, '.service__slider')
    toggleSliderState(sliders.advantages, '.advantages__slider')
    toggleSliderState(sliders.news, '.news__slider')
});