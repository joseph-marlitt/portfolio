//Select DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

//Set initial state of the menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set menu state
    showMenu = false;
  }
}

//Image viewer for Photography
const photoBtn = document.querySelectorAll(".photo img");
const modal = document.getElementById("image-viewer");

let showModal = false

photoBtn.forEach(function (img, i) {
  img.addEventListener("click", toggleModal)
});

function toggleModal() {
  if (!showModal) {
    document.getElementById("full-image").setAttribute("src", this.src)
    showModal = true;
    modal.style.display = "block";

  }
  else {
    showModal = false;
    document.getElementById("image-viewer").style.display = "none";
  }
}

//Closes Modal

modal.addEventListener("click", toggleClose)

function toggleClose() {
  modal.style.display = "none";
  showModal = false;
}
