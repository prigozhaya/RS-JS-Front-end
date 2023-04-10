import dataCards from './cards.json' assert {type: 'json'};

/*Pagination------------------------------------------------------------------------------*/
let petsCardsArr = [];
let page = 1;
let nextButton = document.getElementById("next-button");
let prevButton = document.getElementById("prev-button");
let firstButton = document.getElementById("first-button");
let lastButton = document.getElementById("last-button");
let paginationPage = document.getElementById("pagination-page");


function generateArr(n) {
  let arr = [];
  while (arr.length < n) {
    let cardId = Math.floor(Math.random() * (Math.floor(7) + 1));
    if (!arr.includes(cardId + 1)) {
      arr.push(cardId + 1);
    }
  }
  return arr;
}

function generatePetsCardsArr() {
  let amount=window.screen.width > 768 ? 8 : window.screen.width < 481 ? 3:6;
  let pages=window.screen.width > 768 ? 6 : window.screen.width < 481 ? 16:8;
  petsCardsArr = [];

  while (petsCardsArr.length < pages) {
    petsCardsArr.push(generateArr(amount));
  } 

  return petsCardsArr;
}

petsCardsArr = generatePetsCardsArr();

async function generatePetsCard(i, card) {
  document.getElementById(`${i}`).innerHTML = `${dataCards[0][card].petImg}
  <div class="description" data-value="${i}">
    <p class="card-name" data-value="${i}">${dataCards[0][card].petName}</p>
    <button class="button side-button" data-value="Learn" data-value="${i}">
      Learn more
    </button>
  </div>`;
}

function generateActualCards(page) {
  let amount=window.screen.width > 768 ? 8 : window.screen.width < 481 ? 3:6
  for (let i = 1; i <= amount; i++) {
    setTimeout(generatePetsCard,200, i, petsCardsArr[page-1][i-1]);
  }
}

function handleCards(event){
  petsCardsArr = generatePetsCardsArr();
  generateActualCards(page);
}

generateActualCards(page);

window.onresize = handleCards;

nextButton.addEventListener('click',function(){
  page++
  generateActualCards(page);
  if(page>1){
    prevButton.disabled=false;
    firstButton.disabled=false;
  }
  if(page===petsCardsArr.length){
    nextButton.disabled=true;
    lastButton.disabled=true;
  }

  paginationPage.innerHTML = `${page}`
  
});

prevButton.addEventListener('click',function(){
  page--
  generateActualCards(page);
  if(page===1){
    prevButton.disabled=true;
    firstButton.disabled=true;
    nextButton.disabled=false;
    lastButton.disabled=false;
  }
  paginationPage.innerHTML = `${page}`
});

firstButton.addEventListener('click',function(){
  page=1
  generateActualCards(page);
  if(page===1){
    prevButton.disabled=true;
    firstButton.disabled=true;
    nextButton.disabled=false;
    lastButton.disabled=false;
  }
  paginationPage.innerHTML = `${page}`
});

lastButton.addEventListener('click',function(){
  page=petsCardsArr.length
  generateActualCards(page);
  if(page>1){
    prevButton.disabled=false;
    firstButton.disabled=false;
  }
  if(page===petsCardsArr.length){
    nextButton.disabled=true;
    lastButton.disabled=true;
  }
  paginationPage.innerHTML = `${page}`
});
