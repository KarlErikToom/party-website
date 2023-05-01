const nav = document.querySelector("nav");
const sticky = nav.offsetTop;

window.onscroll = function () {
  if (window.scrollY > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const menuIcon = document.querySelector(".nav__link--menu");
const navLinks = document.querySelector(".nav__links");

menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  const isClickInside =
    menuIcon.contains(event.target) || navLinks.contains(event.target);
  if (!isClickInside) {
    navLinks.classList.remove("active");
  }
});
const menuLink = document.querySelector(".nav__link--menu");

menuLink.addEventListener("click", function (event) {
  event.preventDefault();
});

const googleMaps = document.querySelector(".google__maps--map");
const googleButton = document.querySelector(".contact__nav--google");
const contactForm = document.querySelector(".contact__form--form");
const contactButton = document.querySelector(".contact__nav--contact");

googleButton.addEventListener("click", function () {
  if (!googleButton.classList.contains("disabled")) {
    googleButton.classList.add("disabled");
    googleMaps.classList.toggle("active");
    if (contactForm.classList.contains("active")) {
      contactForm.classList.remove("active");
    }
    if (contactButton.classList.contains("disabled")) {
      contactButton.classList.remove("disabled");
    }
  }
});

contactButton.addEventListener("click", function () {
  if (!contactForm.classList.contains("active")) {
    contactForm.classList.add("active");
    contactButton.classList.add("disabled");
    if (googleMaps.classList.contains("active")) {
      googleMaps.classList.remove("active");
      googleButton.classList.remove("disabled");
    }
  }
});
