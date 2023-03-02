const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

//
navToggle.addEventListener("click", function () {
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    console.log(linksHeight)
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})
//
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const navHeight2 = navbar.getBoundingClientRect().height;
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = 300;
    console.log(navHeight)
    if (scrollHeight > navHeight2) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    };

    if (scrollHeight > 600) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    };
});
//SMORTH  scrool
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        };

        if (navHeight > 82) {
            position = position + containerHeight;
        };
        window.scrollTo({
            left: 0, top: position,
        });
        linksContainer.style.height = 0;
    });
});
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
