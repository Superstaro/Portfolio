//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

//Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    //Reset Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    //Reset Menu State
    showMenu = false;
  }
}
//Text effect.

var text = document.getElementById("text");
var newDom = "";
var animationDelay = 6;

for (let i = 0; i < text.innerText.length; i++) {
  newDom +=
    '<span class="char">' +
    (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
    "</span>";
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
  text.children[i].style["animation-delay"] = animationDelay * i + "ms";
}
