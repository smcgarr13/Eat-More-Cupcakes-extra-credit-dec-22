var heroSection = document.querySelector("#hero-section")
var menuSection = document.querySelector("#menu-section")


// var startMenu;

// function startMenu() {
//     heroSection.classList.add("hidden");
//     menuSection.classList.remove("hidden");
//     return
// }

function ShowAndHide() {
    var x = document.getElementById("hero-section");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
};



// menu page
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
// });