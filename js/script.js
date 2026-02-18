// Toggle class active
let navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
