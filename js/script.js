/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.clientHeight;
    let id = sec.getAttribute("id");

    if (top >= offset) {
    }
  });
};

/*==================== scroll reveal ====================*/

/*==================== typed js ====================*/
