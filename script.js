const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

//
navToggle.addEventListener("click", function () {
    //linksContainer.classList.toggle("show-links") FORMA MANUAL ASSIM IRÀ PRECISAR AUMENTAR A ALTURA DA DIV TODA VEZ QUE TIVER UM NOVO ITEM
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    console.log(linksHeight)
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})

//GLIDER SLIDE
var $simpleCarousel = document.querySelector(".js-carousel--simple");
new Glider($simpleCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: "#dots",
    draggable: true,
    dots: ".js-carousel--simple-dots",
    arrows: {
        prev: ".js-carousel--simple-prev",
        next: ".js-carousel--simple-next",
    },
});
