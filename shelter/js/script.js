
import dataCards from './cards.json' assert {type: 'json'};

/*burger-menu------------------------------------------------------------------------------------------------------------------------------------*/
let menuBtn = document.querySelector(".burger-menu");
let menu = document.querySelector("nav");
let body = document.querySelector("body");
let menuPoints = document.querySelector("ul.nav");
let overlay = document.getElementById("blanket");
let closeBtn = document.querySelector(".close-icon img");
let liMenu = document.querySelectorAll("a.menu-link");

function Overlay() {
  menu.classList.toggle("active");
  menuPoints.classList.toggle("active");
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("active");
}

function handleOverlay() {
  Overlay();
};

function OnResize(event) {
  if (window.screen.width < 768) {
    for (let k of liMenu) {
      k.addEventListener("click", handleOverlay);
    }
  } else {
    for (let k of liMenu) {
      k.removeEventListener("click", handleOverlay, true);
    }
  }
}

overlay.addEventListener("click", function () {
  Overlay();
});
menuBtn.addEventListener("click", function () {
  Overlay();
});

if (window.screen.width < 768) {
  for (let k of liMenu) {
    k.addEventListener("click", function () {
          Overlay();
    });
  }
}

window.onresize = OnResize;


/*popup-----------------------------------------------------------------------------------------------------------------------*/
let popupOverlay = document.querySelector(".popup-overlay");
let popupContent = document.querySelector(".popup-content");
let closePopup = document.querySelector(".close-popup");
let popupPetName = document.querySelector(".popup-pet-name");
let popupPetType = document.querySelector(".popup-pet-type");
let popupPetDiscription = document.querySelector(".popup-pet-discription");
let popupPetAge = document.querySelector(".popup-pet-age");
let popupImg = document.querySelector(".popup-img");

let card = document.querySelectorAll(".card");


async function getCardInfo(i) {
  popupPetName.innerHTML = dataCards[0][i].petName;
  popupPetType.innerHTML = dataCards[0][i].petType;
  popupPetDiscription.innerHTML = dataCards[0][i].petDiscription;
  popupPetAge.innerHTML = dataCards[0][i].petAge;
  popupImg.innerHTML = `${dataCards[0][i].petImg}`;
}

function togglePopup() {
  popupOverlay.classList.toggle("active");
  popupContent.classList.toggle("active");
  if (popupOverlay.classList.contains("active")) {
    body.classList.add("active");
  } else {
    body.classList.remove("active");
  }
}

popupOverlay.addEventListener("click", function (e) {
  if (e.target.id === "popup-overlay" || e.target.id === "close-popup") {
    togglePopup();
  }
});

for (let k of card) {
  k.addEventListener("click", function (e) {
    let i = e.target.dataset.value;
    togglePopup();
    getCardInfo(popupCards, i);
  });
}


