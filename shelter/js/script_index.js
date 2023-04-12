/*generate cards-----------------------------------*/

let cardsArr = [];
let prevCards = [];
let direction = "";
let leftArrow = document.querySelector(".left");
let mobileLeftArrow = document.querySelector(".mobile-arrow .left");
let rightArrow = document.querySelector(".right");
let mobileRightArrow = document.querySelector(".mobile-arrow .right");

function generateCardsArr() {
  while (cardsArr.length < 4) {
    let cardId = Math.floor(Math.random() * (Math.floor(7) + 1));
    if (!cardsArr.includes(cardId + 1)) {
      cardsArr.push(cardId + 1);
    }
  }
}
generateCardsArr();

async function generateCard(popupCards, i, card) {
  const res = await fetch(popupCards);
  const data = await res.json();
  document.getElementById(`${i}`).innerHTML = `${data[0][card].petImg} 
  <div class="description" data-value="${card}">
    <p class="card-name" data-value="${card}">${data[0][card].petName}</p>
    <button class="button side-button" data-value="Learn" data-value="${card}">
      Learn more
    </button>
  </div>`;
}

function generateActualCards (){
  for (let i = 1; i < 4; i++) {
  generateCard(popupCards, i, cardsArr[i]);
}
}
generateActualCards ()

function followLeft(){
  if (direction === "left" || direction === "") {
    prevCards = cardsArr.slice();
    cardsArr = [];
    while (cardsArr.length < 4) {
      let cardId = Math.floor(Math.random() * (Math.floor(7) + 1));

      if (!prevCards.includes(cardId + 1) && !cardsArr.includes(cardId + 1)) {
        cardsArr.push(cardId + 1);
      }
    }
  } else {
    let bubble = cardsArr.slice();
    cardsArr = prevCards.slice();
    prevCards = bubble.slice();
  }

  direction = "left";
  generateActualCards ()
}

function followRight(){
  if (direction === "right" || direction === "") {
    prevCards = cardsArr.slice();
    cardsArr = [];
    while (cardsArr.length < 4) {
      let cardId = Math.floor(Math.random() * (Math.floor(7) + 1));

      if (!prevCards.includes(cardId + 1) && !cardsArr.includes(cardId + 1)) {
        cardsArr.push(cardId + 1);
      }
    }
  } else {
    let bubble = cardsArr.slice();
    cardsArr = prevCards.slice();
    prevCards = bubble.slice();
  }

  direction = "right";
  generateActualCards ()
}

leftArrow.addEventListener("click", function (e) {
  followLeft()
});

mobileLeftArrow.addEventListener("click", function (e) {
  followLeft()
});

rightArrow.addEventListener("click", function (e) {
  followRight()
});

mobileRightArrow.addEventListener("click", function (e) {
  followRight()
});

