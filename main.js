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
    if (window.pageYOffset >= (stickyOffsetTop + 100)) {
        sticky.classList.add("go")
    } else {
        sticky.classList.remove("go");
    }
}

if (window.innerWidth <= 767) {
    // let spaceFromTop = document.getElementsByClassName('mobile-navbar')[0].clientHeight;
    document.getElementById('home').style.paddingTop = (document.getElementById('home').style.paddingTop + (94 + 'px'))
}