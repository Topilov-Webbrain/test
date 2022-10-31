
// Owl Carousel configuration
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 30,
    nav: false,
    dots: true,
    dotsEach: 2.5,
    lazyLoad: true,
    lazyLoadEager: true,
    responsive: {
        0: {
            items: 1,
            margin: 5
        },
        768: {
            items: 2,
            margin: 15
        },
        1000: {
            items: 2.5
        }
    }
})

// Detect device is mobile or not
const isMobile = navigator.userAgentData.mobile;

if (isMobile) {
    document.getElementById('menu').classList.add('isMobile')
} else {
    document.getElementById('menu').classList.remove('isMobile')
}

// Fixed Mobile Menu Width
if (!isMobile) {
    document.getElementById('menu').style.width = "calc(100vw - 10px)";
} else {
    document.getElementById('menu').style.width = "100vw";
}

// Toggle Mobile Menu Visibility
function toggleMobileMenu() {
    document.getElementById('menu').classList.toggle('visible')
}

// Toggle Mobile Menu Visibility on Click Functions 
document.getElementById('burger-menu-icon').addEventListener('click', () => {
    toggleMobileMenu()
})
document.getElementById('close-menu-icon').addEventListener('click', () => {
    toggleMobileMenu()
})
var els = document.getElementsByClassName("close-menu");
Array.prototype.forEach.call(els, function (el) {
    el.addEventListener('click', () => toggleMobileMenu())
});

// Making sticky navigation bar
let sticky = document.getElementsByClassName("sticky")[0];
let stickyOffsetTop = sticky.offsetTop;

window.onscroll = function () { sticker() };

function sticker() {
    if (window.pageYOffset >= (stickyOffsetTop + 150)) {
        sticky.classList.add("go")
    } else {
        sticky.classList.remove("go");
    }
}