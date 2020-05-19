//MAIN JAVASCRIPT FILE

//Hamburger Menu Scripts

//Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set inital state of menu

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

// Random Menu Background Image
const menuImg = document.querySelector(".portrait");

function randomBg() {
  const randomNum = Math.floor(Math.random() * 3) + 0;
  const bgImg = [
    "url(img/bgimgs/menubg1.jpg)",
    "url(img/bgimgs/menubg2.jpg)",
    "url(img/bgimgs/menubg3.jpg)"
  ];

  menuImg.style.background = bgImg[randomNum];
  menuImg.style.backgroundSize = "100% 100%";
}

//Typewriter effect

const TypeWriter = function(txtElement, words, wait = 2500) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type method
TypeWriter.prototype.type = function() {
  //Current Index of Word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];
  //Check if deleting state
  if (this.isDeleting) {
    //Remove Character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //Add Character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  //Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  //Initial Type Speed
  let typeSpeed = 200;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //Check if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    //Make pause at end
    typeSpeed = this.wait;
    //Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    //Move to next word
    this.wordIndex++;
    //Pause before typing next word
    typeSpeed = 300;
  }

  setTimeout(() => this.type(), typeSpeed);
};
// Init on DOM load

document.addEventListener("DOMContentLoaded", init);

//INit App

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //Init Typewriter
  new TypeWriter(txtElement, words, wait);
}
