const nav = document.querySelector("nav");
const sticky = nav.offsetTop;

window.onscroll = function () {
  if (window.scrollY > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const menuIcon = document.querySelector('.nav__link--menu');
const navLinks = document.querySelector('.nav__links');

menuIcon.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const isClickInside = menuIcon.contains(event.target) || navLinks.contains(event.target);
  if (!isClickInside) {
    navLinks.classList.remove('active');
  }
});
const menuLink = document.querySelector('.nav__link--menu');

menuLink.addEventListener('click', function(event) {
  event.preventDefault();
  
});