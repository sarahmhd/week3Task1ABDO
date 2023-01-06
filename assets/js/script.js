// global variables
let searchIcon = document.querySelector(".navbar .icon");
let xIcon = document.querySelector("header .form .icon-x");
let searchForm = document.querySelector("header .form");
let navToggler = document.querySelector(".navbar .navbar-toggler");
let navList = document.querySelector("#navbarSupportedContent");
let navbarItems = document.querySelectorAll(".nav-item a");
let header = document.querySelector("header");
let up = document.querySelector(".up");

// show search input while clicking on icon
searchIcon.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});
// hidden or remove search div
xIcon.addEventListener("click", () => {
  console.log(xIcon.parentElement);
  xIcon.parentElement.classList.remove("active");
});

// show navbar while clicking on bar icon
navToggler.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// add active class to li on navbar
navbarItems.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClass();
    el.classList.add("active");
  });
});
function removeActiveClass() {
  navbarItems.forEach((el) => {
    el.classList.remove("active");
  });
}

window.onscroll = function () {
  if (window.scrollY >= 400) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  up.classList.add("active");
});
