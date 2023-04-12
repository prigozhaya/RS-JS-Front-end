/*Pagination------------------------------------------------------------------------------*/
let petsCardsArr = [];
let page = 1;
let cards = "/js/cards.json";
let nextButton = document.getElementById("next-button");
let prevButton = document.getElementById("prev-button");
let firstButton = document.getElementById("first-button");
let lastButton = document.getElementById("last-button");
let paginationPage = document.getElementById("pagination-page");
let needToChange = true;

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
  let amount = 8;

  petsCardsArr = [];

  while (petsCardsArr.length <=46) {
    let arr = generateArr(amount);
    let len = petsCardsArr.length;

    for (let i = 0; i < arr.length; i++) {
        if (
          arr[0] !== petsCardsArr[len - 2] &&
          arr[1] !== petsCardsArr[len - 3] &&
          arr[2] !== petsCardsArr[len - 2] &&
          arr[3] !== petsCardsArr[len - 3]
        ) {
          petsCardsArr.push(arr[i]);
        }else{ 
        arr = generateArr(amount);
          i--
        }
      }
    }
  

  return petsCardsArr;
}

petsCardsArr = generatePetsCardsArr();
console.log(petsCardsArr);

async function generatePetsCard(cards, i, card) {
  const res = await fetch(cards);
  const data = await res.json();
  document.getElementById(`${i}`).innerHTML = `${data[0][card].petImg}
  <div class="description" data-value="${i}">
    <p class="card-name" data-value="${i}">${data[0][card].petName}</p>
    <button class="button side-button" data-value="Learn" data-value="${i}">
      Learn more
    </button>
  </div>`;
}

function generateActualCards(page) {
  let amount =
    window.screen.width > 768 ? 8 : window.screen.width < 481 ? 3 : 6;
  for (let i = 1; i <= amount; i++) {
    if (page === 1) {
      setTimeout(generatePetsCard, 200, cards, i, petsCardsArr[i - 1]);
    } else {
      setTimeout(
        generatePetsCard,
        200,
        cards,
        i,
        petsCardsArr[i - 1 + (page - 1) * amount]
      );
    }
  }
}

function handleCards(event) {
  page = 1;
  generateActualCards(page);
  if (page === 1) {
    prevButton.disabled = true;
    firstButton.disabled = true;
    nextButton.disabled = false;
    lastButton.disabled = false;
  }
  paginationPage.innerHTML = `${page}`;
}

generateActualCards(page);

window.onresize = handleCards;

nextButton.addEventListener("click", function () {
  let maxPage =
    window.screen.width > 768 ? 6 : window.screen.width < 481 ? 16 : 8;
  page++;
  generateActualCards(page);
  if (page > 1) {
    prevButton.disabled = false;
    firstButton.disabled = false;
  }
  if (page === maxPage) {
    nextButton.disabled = true;
    lastButton.disabled = true;
  }

  paginationPage.innerHTML = `${page}`;
});

prevButton.addEventListener("click", function () {
  page--;
  generateActualCards(page);
  if (page === 1) {
    prevButton.disabled = true;
    firstButton.disabled = true;
  }
  nextButton.disabled = false;
  lastButton.disabled = false;
  paginationPage.innerHTML = `${page}`;
});

firstButton.addEventListener("click", function () {
  page = 1;
  generateActualCards(page);
  if (page === 1) {
    prevButton.disabled = true;
    firstButton.disabled = true;
    nextButton.disabled = false;
    lastButton.disabled = false;
  }
  paginationPage.innerHTML = `${page}`;
});

lastButton.addEventListener("click", function () {
  let maxPage =
    window.screen.width > 768 ? 6 : window.screen.width < 481 ? 16 : 8;
  page = maxPage;
  generateActualCards(page);
  if (page > 1) {
    prevButton.disabled = false;
    firstButton.disabled = false;
  }
  if (page === maxPage) {
    nextButton.disabled = true;
    lastButton.disabled = true;
  }
  paginationPage.innerHTML = `${page}`;
});
