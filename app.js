var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos > 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-160px";
  }
  prevScrollpos = currentScrollPos;
}
const hamburger = document.querySelector('.hamburger');
const hamburgerBox = document.querySelector('.hamburger-box');
const navbarMenu = document.querySelector('.navbar-menu');
const mobileNav = document.querySelector('.mobile-nav')

  // <--------- Scrolling on click of navbar-list--------->
  document.getElementById("Home-scroll").addEventListener("click", scrollToHome);
  document.getElementById("Info-scroll").addEventListener("click", scrollToInfo);
  document.getElementById("Shows-scroll").addEventListener("click", scrollToShows);
  document.getElementById("Contact-scroll").addEventListener("click", scrollToContact);

  function scrollToHome () {
    var element = document.getElementById("hero-section");
    element.scrollIntoView({behavior: "smooth"});
    toggleNavbarMenuAndOpacity();
    restoreHamburger();
    toggleNav();
  }

  function scrollToInfo () {
    var element = document.getElementById("the-home-of-alt-comedy-in-dublin");
    element.scrollIntoView({behavior: "smooth"});
    toggleNavbarMenuAndOpacity();
    restoreHamburger();
    toggleNav();
  }

  function scrollToShows () {
    var element = document.getElementById("this-weeks-shows");
    element.scrollIntoView({behavior: "smooth"});
    toggleNavbarMenuAndOpacity();
    restoreHamburger();
    toggleNav();
  }

  function scrollToContact () {
    var element = document.getElementById("contact-section");
    element.scrollIntoView({behavior: "smooth"});
    toggleNavbarMenuAndOpacity();
    restoreHamburger();
    toggleNav();
  }

const main = document.querySelector('#main');
hamburger.addEventListener('click', function() {
  toggleNavbarMenuAndOpacity();
})

let getSidebarVisibility = document.querySelector(".side-nav");

function restoreHamburger() {
  getSidebarVisibility.style.visibility = "hidden";
}

let toggleNavStatus = false;

function toggleNavbarMenuAndOpacity() {
  if(window.innerWidth >= 1024) // don't want navbar-menu to be active nor do i want opacity at this width and beyond.
  return;

  main.classList.toggle('opacity-class');
  navbarMenu.classList.toggle('navbar-menu-active');
}

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");

    hamburger.classList.toggle('is-active');

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible";

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "80%";
      console.log("clicked");
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        console.log("unclicked");
        toggleNavStatus = false;
    }
}


// ------------------------------------------------- DARK MODE -----------------------------

/* Body and Core Elements */
// var body = document.querySelector("body");

// Dark Mode Action
// let darkMode = localStorage.getItem("darkMode");
// const darkModeToggle = document.querySelector('.dark-mode-button');
// for an optional footer dark mode button as well
// const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// This is where you add the dakr mode class.  When the dark mode is enabled as true in localstorage,
// it will add all the dark-mode classes to the elements we created in the variables above
// const enableDarkMode = () => {

// Core dark mode styles
// body.classList.add("dark-mode");
// localStorage.setItem("darkMode", "enabled")
// }

// This is where we remove dark mode.  Just copy and paste all the lines where you added a class
// and paste them into this function, then change "addClass" to "removeClass"
// const disableDarkMode = () => {

// body.classList.remove("dark-mode");
// localStorage.setItem("darkMode", null)
// }

// if (darkMode == "enabled") {
// enableDarkMode();
// }

// // add event listener to the dark mode button toggle
// darkModeToggle.addEventListener('click', () => {
// // on click, check localstorage for the dark mode value
// darkMode = localStorage.getItem("darkMode");
// if (darkMode !== "enabled") {
//   // if dark mode is not enabled, run this function to set it to enabled
//   enableDarkMode();
// } else {
//   // if dark mode is enabled, run this function to set it to disabled
//   disableDarkMode();
// }
// })
