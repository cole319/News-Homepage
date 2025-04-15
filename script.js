const hamburger = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".nav__close");
const navListMobile = document.querySelector(".nav__list__mobile");
const navDropdown = document.querySelector(".nav__list__dropdown-mobile");
const body = document.body;

hamburger.addEventListener("click", (event) => {
  event.preventDefault();

  navClose.style.display = "block";
  hamburger.style.display = "none";
  navDropdown.style.borderStyle = "solid";
  navDropdown.style.borderWidth = "1px 0px 1px 1px";
  navDropdown.style.borderColor = "var(--grayish-blue)";
  navListMobile.style.display = "flex";

  event.stopPropagation();
});

navClose.addEventListener("click", (event) => {
  event.preventDefault();

  navClose.style.display = "none";
  navListMobile.style.display = "none";
  navDropdown.style.borderStyle = "none";
  hamburger.style.display = "block";

  event.stopPropagation();
});

body.addEventListener("click", (event) => {
  event.preventDefault();
  const isDropdownVisible = getComputedStyle(navListMobile).display !== "none";

  if (isDropdownVisible && !navListMobile.contains(event.target)) {
    navClose.style.display = "none";
    navListMobile.style.display = "none";
    navDropdown.style.borderStyle = "none";
    hamburger.style.display = "block";
  }

  event.stopPropagation();
});
