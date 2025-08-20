const iconMenu = document.querySelector(".mobile-menu-icon button");
const menuMobile = document.querySelector(".mobile-menu");
const openMenuIcon = document.querySelector(".open-menu");
const closeMenuIcon = document.querySelector(".close-menu");

const menuActive = () => {
  menuMobile.classList.toggle("active");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("show");
};


document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    menuMobile.classList.remove("active");
    openMenuIcon.classList.remove("hide");
    closeMenuIcon.classList.remove("show");
  });
});