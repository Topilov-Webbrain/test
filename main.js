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
Array.prototype.forEach.call(els, function(el) {
        el.addEventListener('click', ()=>toggleMobileMenu())
});