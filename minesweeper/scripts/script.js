let timer = localStorage.getItem("timer") ? +localStorage.getItem("timer") : 0;
let volume = localStorage.getItem("volume")
  ? localStorage.getItem("volume")
  : 0.5;
let timestr = "";
let timerInterval;
let casheFild = localStorage.getItem("casheFild")
  ? JSON.parse(localStorage.getItem("casheFild"))
  : [[]];
let size = localStorage.getItem("size") ? localStorage.getItem("size") : 10;
let mines = localStorage.getItem("mines") ? localStorage.getItem("mines") : 10;
let theme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";
let count = localStorage.getItem("count") ? +localStorage.getItem("count") : 0;
let flags = localStorage.getItem("flags") ? +localStorage.getItem("flags") : 0;
let history = localStorage.getItem("history")
  ? localStorage.getItem("history")
  : [];
let minesMatrx = [[]];
let restart = false;
let start = localStorage.getItem("start")
  ? localStorage.getItem("start")
  : "false";

//generate map------------------------------------------------------------------------
function generateMines(size, minesNumber) {
  let mineArr = [];
  let mineMatrix = [];
  let k = 0;
  for (let mine = 0; mine < minesNumber; mine++) {
    mineArr.push(true);
  }

  for (let i = 0; i < size * size - minesNumber; i++) {
    mineArr.push(false);
  }

  mineArr = mineArr.sort(() => Math.random() - 0.5);

  for (let i = 0; i < size; i++) {
    mineMatrix[i] = [];
    for (let j = 0; j < size; j++) {
      mineMatrix[i][j] = mineArr[k];
      k++;
    }
  }
  return mineMatrix;
}

function generateMineMap(matrix) {
  let sweeperArr = [[]];
  if (Array.isArray(matrix)) {
    sweeperArr = matrix.slice(0);
    for (i = 0; i < matrix.length; i++) {
      sweeperArr[i] = matrix[i].slice(0);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let k = 0;
      if (matrix[i - 1]) {
        k = matrix[i - 1][j] === true ? k + 1 : k;
        k = matrix[i - 1][j - 1] && matrix[i - 1][j - 1] === true ? k + 1 : k;
        k = matrix[i - 1][j + 1] && matrix[i - 1][j + 1] === true ? k + 1 : k;
      }
      if (matrix[i + 1]) {
        k = matrix[i + 1][j] === true ? k + 1 : k;
        k = matrix[i + 1][j - 1] && matrix[i + 1][j - 1] === true ? k + 1 : k;
        k = matrix[i + 1][j + 1] && matrix[i + 1][j + 1] === true ? k + 1 : k;
      }
      k = matrix[i][j - 1] && matrix[i][j - 1] === true ? k + 1 : k;
      k = matrix[i][j + 1] && matrix[i][j + 1] === true ? k + 1 : k;

      sweeperArr[i][j] = matrix[i][j] === true ? "🔴" : k === 0 ? "" : k;
    }
  }
  return sweeperArr;
}

//render-----------------------------------------------------------------------------------
function renderInterface() {
  const interfaceInfo = document.createElement("div");
  interfaceInfo.classList.add("interface");
  if (theme === "dark") {
    interfaceInfo.classList.add("dark");
  }

  const audioShovel = document.createElement("audio");
  audioShovel.setAttribute("id", `shovelSound`);
  const shovelSource = document.createElement("source");
  shovelSource.src = "./assets/audio/shovel.mp3";
  shovelSource.type = "audio/mp3";
  audioShovel.appendChild(shovelSource);
  interfaceInfo.appendChild(audioShovel);

  const audioFlag = document.createElement("audio");
  audioFlag.setAttribute("id", `flagSound`);
  const flaglSource = document.createElement("source");
  flaglSource.src = "./assets/audio/flag.mp3";
  flaglSource.type = "audio/mp3";
  audioFlag.appendChild(flaglSource);
  interfaceInfo.appendChild(audioFlag);

  const audioBomb = document.createElement("audio");
  audioBomb.setAttribute("id", `bombSound`);
  const bombSource = document.createElement("source");
  bombSource.src = "./assets/audio/boom.mp3";
  bombSource.type = "audio/mp3";
  audioBomb.appendChild(bombSource);
  interfaceInfo.appendChild(audioBomb);

  const audioWin = document.createElement("audio");
  audioWin.setAttribute("id", `winSound`);
  const winSource = document.createElement("source");
  winSource.src = "./assets/audio/fanfare.mp3";
  winSource.type = "audio/mp3";
  audioWin.appendChild(winSource);
  interfaceInfo.appendChild(audioWin);

  const flagMin = document.createElement("div");
  flagMin.classList.add("flags");
  const img = document.createElement("img");
  img.src = "./assets/flag.png";
  img.alt = "flag";
  img.classList.add("flag-icon");
  const flagsMines = document.createElement("p");
  flagsMines.classList.add("flag-mines");
  flagsMines.innerHTML = `${flags}/${mines}`;
  flagMin.appendChild(img);
  flagMin.appendChild(flagsMines);
  interfaceInfo.appendChild(flagMin);

  const countInfo = document.createElement("p");
  countInfo.classList.add("count-info");
  countInfo.innerHTML = `Count: ${count}`;
  interfaceInfo.appendChild(countInfo);

  const timer = document.createElement("div");
  timer.classList.add("time");
  const time = document.createElement("span");
  time.innerHTML = `Time: `;
  const dotmin = document.createElement("span");
  dotmin.innerHTML = `:`;
  const dotsec = document.createElement("span");
  dotsec.innerHTML = `:`;
  const minute = document.createElement("span");
  minute.setAttribute("id", "minute");
  const second = document.createElement("span");
  second.setAttribute("id", "second");
  const ms = document.createElement("span");
  ms.setAttribute("id", "ms");
  timer.appendChild(time);
  timer.appendChild(minute);
  timer.appendChild(dotmin);
  timer.appendChild(second);
  timer.appendChild(dotsec);
  timer.appendChild(ms);
  interfaceInfo.appendChild(timer);

  const settings = document.createElement("div");
  settings.classList.add("settings");

  const refreshButton = document.createElement("div");
  refreshButton.classList.add("refresh");
  refreshButton.setAttribute("id", "refresh");
  refreshButton.addEventListener("click", refresh);
  settings.appendChild(refreshButton);

  const soundButton = document.createElement("div");
  soundButton.classList.add("volume");
  if (volume == 0) {
    soundButton.classList.add("mute");
  }
  soundButton.setAttribute("id", "volume");
  soundButton.addEventListener("click", muteVolume);
  settings.appendChild(soundButton);

  const themeButton = document.createElement("div");
  themeButton.classList.add("theme");
  if (theme === "dark") {
    themeButton.classList.add("dark");
  }
  themeButton.setAttribute("id", "theme");
  themeButton.addEventListener("click", switchTheme);
  settings.appendChild(themeButton);

  interfaceInfo.appendChild(settings);

  const sizeSwitcher = document.createElement("div");
  sizeSwitcher.classList.add("size-switcher");
  sizeSwitcher.setAttribute("id", "size");
  const sizeP = document.createElement("p");
  sizeP.innerHTML = `Size: `;
  const sizeLight = document.createElement("input");
  sizeLight.name = "size";
  sizeLight.type = "radio";
  sizeLight.value = "10";
  sizeLight.id = "10";
  sizeLight.classList.add("size-point");
  const labelLight = document.createElement("label");
  labelLight.for = "10";
  labelLight.innerHTML = `10 `;
  if (size == 10) {
    sizeLight.checked = "checked";
  }
  const sizeNormal = document.createElement("input");
  sizeNormal.name = "size";
  sizeNormal.type = "radio";
  sizeNormal.value = "15";
  sizeNormal.id = "15";
  sizeNormal.classList.add("size-point");
  const labelNormal = document.createElement("label");
  labelNormal.for = "15";
  labelNormal.innerHTML = `15 `;
  if (size == 15) {
    sizeNormal.checked = "checked";
  }
  const sizeHard = document.createElement("input");
  sizeHard.name = "size";
  sizeHard.type = "radio";
  sizeHard.value = "25";
  sizeHard.id = "25";
  sizeHard.classList.add("size-point");
  const labelHard = document.createElement("label");
  labelHard.for = "25";
  labelHard.innerHTML = `25 `;
  if (size == 25) {
    sizeHard.checked = "checked";
  }
  sizeSwitcher.appendChild(sizeP);
  sizeSwitcher.appendChild(sizeLight);
  sizeSwitcher.appendChild(labelLight);
  sizeSwitcher.appendChild(sizeNormal);
  sizeSwitcher.appendChild(labelNormal);
  sizeSwitcher.appendChild(sizeHard);
  sizeSwitcher.appendChild(labelHard);
  interfaceInfo.appendChild(sizeSwitcher);

  const mineCount = document.createElement("div");
  mineCount.classList.add("mine-count");
  const minesP = document.createElement("p");
  minesP.innerHTML = `Mines: `;
  const mineInput = document.createElement("input");
  mineInput.type = "number";
  mineInput.min = "1";
  mineInput.max = "99";
  mineInput.value = `${mines}`;
  mineInput.step = "1";
  mineInput.classList.add("mine-input");
  const mineButton = document.createElement("button");
  mineButton.id = "mine-button";
  mineButton.innerHTML = `ok`;
  mineButton.addEventListener("click", changeMinesCount);

  mineCount.appendChild(minesP);
  mineCount.appendChild(mineInput);
  mineCount.appendChild(mineButton);
  interfaceInfo.appendChild(mineCount);

  return interfaceInfo;
}

function renderField() {
  let k = 1;
  const map = document.createElement("div");
  map.classList.add("map");
  if (size == 15) {
    map.classList.add("normal");
  }
  if (size == 25) {
    map.classList.add("hard");
  }
  if (theme === "dark") {
    map.classList.add("dark");
  }

  let minesMatrx = generateMineMap(generateMines(+size, +mines));

  minesMatrx.forEach((row) => {
    row.forEach((mine) => {
      const block = document.createElement("div");
      const span = document.createElement("span");
      block.classList.add("block");
      block.classList.add("hide");
      span.classList.add("hide-span");
      block.setAttribute("data-number", `${k}`);
      span.setAttribute("data-number", `${k}`);
      block.addEventListener("click", checkFirstBlock);
      block.addEventListener("contextmenu", flagBlock);
      block.appendChild(span);
      map.appendChild(block);
      k++;
    });
  });

  return map;
}

function renderMap() {
  let k = 1;
  minesMatrx = generateMineMap(generateMines(+size, +mines));
  const map = document.createElement("div");
  map.classList.add("map");
  if (size == 15) {
    map.classList.add("normal");
  }
  if (size == 25) {
    map.classList.add("hard");
  }
  if (theme === "dark") {
    map.classList.add("dark");
  }

  minesMatrx.forEach((row) => {
    row.forEach((mine) => {
      const block = document.createElement("div");
      const span = document.createElement("span");
      if (mine === "🔴") {
        block.setAttribute("data-key", "boom");
        span.setAttribute("data-key", "boom");
      } else {
        block.setAttribute("data-key", mine);
        span.setAttribute("data-key", mine);
      }

      block.setAttribute("data-number", `${k}`);
      span.setAttribute("data-number", `${k}`);

      block.classList.add("block");
      block.classList.add("hide");
      span.textContent = mine;
      span.classList.add("hide-span");

      switch (mine) {
        case 8:
          block.classList.add("f");
          break;
        case 7:
          block.classList.add("suicidal");
          break;
        case 6:
          block.classList.add("horrible");
          break;
        case 5:
          block.classList.add("dangerous");
          break;
        case 4:
          block.classList.add("risky");
          break;
        case 3:
          block.classList.add("scary");
          break;
        case 2:
          block.classList.add("strained");
          break;
        case 1:
          block.classList.add("normal");
          break;
      }

      block.addEventListener("click", checkBlock);
      block.addEventListener("contextmenu", flagBlock);
      block.appendChild(span);
      map.appendChild(block);
      k++;
    });
  });
  startTimer();
  return map;
}

function renderCashMap() {
  let k = 1;
  const map = document.createElement("div");
  map.classList.add("map");
  if (size == 15) {
    map.classList.add("normal");
  }
  if (size == 25) {
    map.classList.add("hard");
  }
  if (theme === "dark") {
    map.classList.add("dark");
  }

  casheFild.forEach((row) => {
    const block = document.createElement("div");
    const span = document.createElement("span");
    block.classList.add("block");

    if (row[0] !== null) {
      block.classList.add(row[0]);
    }

    if (row[1] !== null) {
      block.classList.add(row[1]);
    }

    if (row[2] !== null) {
      block.classList.add(row[2]);
    }

    if (row[3] !== null) {
      span.classList.add(row[3]);
    }

    if (row[4] !== null) {
      block.setAttribute("data-key", row[4]);
      span.setAttribute("data-key", row[4]);

      if (row[4] === "boom") {
        span.textContent = "🔴";
      } else {
        span.textContent = row[4];
      }
    }

    block.setAttribute("data-number", `${k}`);
    span.setAttribute("data-number", `${k}`);

    block.addEventListener("click", checkBlock);
    block.addEventListener("contextmenu", flagBlock);
    block.appendChild(span);
    map.appendChild(block);
    k++;
  });
  startTimer();
  return map;
}

function renderHistory() {
  history = history.toString().split(",").slice(0, 10);
  console.log(typeof history);
  const historyBlock = document.createElement("div");
  historyBlock.classList.add("history");

  const histiryHeader = document.createElement("h3");
  histiryHeader.classList.add("histiryHeader");
  histiryHeader.textContent = "HISTORY";
  historyBlock.appendChild(histiryHeader);

  if (history.length > 0) {
    history.forEach((str) => {
      const historyStr = document.createElement("p");

      if (str[0] === "W") {
        historyStr.classList.add("history-win");
      } else {
        historyStr.classList.add("history-lose");
      }

      historyStr.textContent = str;

      historyBlock.appendChild(historyStr);
    });
  }

  return historyBlock;
}

//block events-----------------------------------------------------------------------------------------------
function checkFirstBlock(event) {
  start = "true";
  let k = event.target.getAttribute("data-number");
  document.querySelector(".map").remove();
  app.appendChild(renderMap());
  document.querySelector(".history").remove();
  app.appendChild(renderHistory());
  let targetBlock = document.querySelector(`[data-number="${k}"]`);
  console.log(targetBlock.getAttribute("data-key") === "boom");
  if (targetBlock.getAttribute("data-key") === "boom") {
    checkFirstBlock(event);
  } else {
    targetBlock.classList.remove("hide");
    targetBlock.childNodes[0].classList.remove("hide-span");

    if (targetBlock.getAttribute("data-key") === "") {
      cleanNeighbours(targetBlock);
    }

    playSound("shovelSound");
    count++;
    document.querySelector(".count-info").innerHTML = `Count: ${count}`;

    let msVal = Math.floor((timer - Math.floor(timer)) * 100);
    let secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minuteVal = Math.floor(timer / 60);
    let msec = msVal < 10 ? "0" + msVal.toString() : msVal;
    let sec = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    let min = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    timestr = `${min}:${sec}:${msec}`;

    let blocks = document.querySelectorAll(".block");
    let n = 0;
    for (i = 0; i < blocks.length; i++) {
      if (
        blocks[i].getAttribute("data-key") !== "boom" &&
        blocks[i].classList.contains("hide")
      ) {
        n++;
        break;
      }
    }
    if (n === 0) {
      history.unshift(`WIN! score: ${count} time: ${timestr}`);

      playSound("winSound");
      setTimeout(function () {
        alert(`You WIN!
        score: ${count}
        time: ${timestr} `);
        refresh();
      }, 1000);
    }

    document.querySelector(".count-info").innerHTML = `Count: ${count}`;
  }
}

function checkBlock(event) {
  history = new Array(history);

  if (!this.classList.contains("flag") && this.classList.contains("hide")) {
    this.classList.remove("hide");
    if (this.childNodes[0].classList.contains("hide-span")) {
      count++;
    }

    if (this.getAttribute("data-key") === "") {
      cleanNeighbours(this);
    }

    this.childNodes[0].classList.remove("hide-span");

    let msVal = Math.floor((timer - Math.floor(timer)) * 100);
    let secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minuteVal = Math.floor(timer / 60);
    let msec = msVal < 10 ? "0" + msVal.toString() : msVal;
    let sec = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    let min = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    timestr = `${min}:${sec}:${msec}`;

    playSound("shovelSound");

    if (event.target.getAttribute("data-key") === "boom") {
      playSound("bombSound");

      history.unshift(`LOSE! score: ${count} time: ${timestr}`);
      setTimeout(function () {
        alert(`WASTED
        score: ${count} 
        time: ${timestr}`);
        refresh();
      }, 1000);
    }

    let blocks = document.querySelectorAll(".block");
    let k = 0;
    for (i = 0; i < blocks.length; i++) {
      if (
        blocks[i].getAttribute("data-key") !== "boom" &&
        blocks[i].classList.contains("hide")
      ) {
        k++;
        break;
      }
    }
    if (k === 0) {
      history.unshift(`WIN! score: ${count} time: ${timestr}`);

      playSound("winSound");
      setTimeout(function () {
        alert(`You WIN!
        score: ${count}
        time: ${timestr} `);
        refresh();
      }, 1000);
    }

    document.querySelector(".count-info").innerHTML = `Count: ${count}`;
  }
}

function flagBlock(event) {
  function disablecontext(event) {
    return false;
  }
  document.oncontextmenu = disablecontext;
  if (count > 0) {
    if (this.classList.contains("hide")) {
      this.classList.toggle("flag");

      if (this.classList.contains("flag")) {
        flags++;
      } else {
        flags--;
      }

      document.querySelector(".flag-mines").innerHTML = `${flags}/${mines}`;
    }
    playSound("flagSound");
  }
}

//getNeighbours-----------------------------------------------------------------------------------------
function getNeighbours(target) {
  let result = [];
  let curr = +target.getAttribute("data-number");
  let matrxSize = +size;

  const targetEastId = curr + 1;
  const targetWestId = curr - 1;
  const targetNorthId = curr - matrxSize;
  const targetSouthId = curr + matrxSize;
  const targetNorthWestId = curr - matrxSize - 1;
  const targetNorthEastId = curr - matrxSize + 1;
  const targetSouthWestId = curr + matrxSize - 1;
  const targetSouthEastId = curr + matrxSize + 1;

  if (targetNorthId > 0)
    result.push(document.querySelector(`[data-number="${targetNorthId}"]`));

  if (targetSouthId <= matrxSize ** 2)
    result.push(document.querySelector(`[data-number="${targetSouthId}"]`));

  if (
    targetNorthEastId % matrxSize !== 1 &&
    targetNorthEastId > 0 &&
    targetNorthEastId <= matrxSize ** 2
  )
    result.push(document.querySelector(`[data-number="${targetNorthEastId}"]`));

  if (
    targetSouthEastId % matrxSize !== 1 &&
    targetSouthEastId > 0 &&
    targetSouthEastId <= matrxSize ** 2
  )
    result.push(document.querySelector(`[data-number="${targetSouthEastId}"]`));

  if (
    targetEastId % matrxSize !== 1 &&
    targetEastId > 0 &&
    targetEastId <= matrxSize ** 2
  )
    result.push(document.querySelector(`[data-number="${targetEastId}"]`));

  if (
    targetNorthWestId % matrxSize !== 0 &&
    targetNorthWestId > 0 &&
    targetNorthWestId <= matrxSize ** 2
  )
    result.push(document.querySelector(`[data-number="${targetNorthWestId}"]`));

  if (
    targetSouthWestId % matrxSize !== 0 &&
    targetSouthWestId > 0 &&
    targetSouthWestId <= matrxSize ** 2
  )
    result.push(document.querySelector(`[data-number="${targetSouthWestId}"]`));

  if (
    targetWestId % matrxSize !== 0 &&
    targetWestId > 0 &&
    targetWestId <= matrxSize ** 2
  )
    result.push(document.querySelector(`[data-number="${targetWestId}"]`));

  return result;
}

function cleanNeighbours(target) {
  console.log(target);
  getNeighbours(target).forEach((item) => {
    if (
      (item.getAttribute("data-key") === "" ||
        typeof Number(item.getAttribute("data-key")) === "number") &&
      item.classList.contains("hide")
    ) {
      item.classList.remove("hide");
      item.childNodes[0].classList.remove("hide-span");
      if (item.getAttribute("data-key") === "") cleanNeighbours(item);
    }
  });
}

//refresh------------------------------------------------

function refresh() {
  StopTimer();
  count = 0;
  flags = 0;
  timer = 0;
  casheFild = [[]];
  restart = true;
  setTimeout(function () {
    location.reload();
  }, 100);
}

//audio-----------------------------------------------------------------------------
function playSound(sound) {
  var song = document.getElementById(sound);
  song.volume = volume;
  if (song.paused) {
    song.play();
  }
}

//mute--------------------------------------------------------------------------------------
function muteVolume() {
  if (volume == 0) {
    volume = 0.5;
  } else {
    volume = 0;
  }
  console.log(volume);
  document.getElementById("volume").classList.toggle("mute");
}

//final render
const app = document.getElementById("app");

app.appendChild(renderInterface());
if (casheFild.length > 1) {
  app.appendChild(renderCashMap());
} else {
  app.appendChild(renderField());
}
app.appendChild(renderHistory());
if (theme === "dark") {
  app.classList.add("dark");
}

//change theme---------------------------------------------------------------------------
function switchTheme() {
  theme = theme === "dark" ? "light" : "dark";
  document.getElementById("theme").classList.toggle("dark");
  document.getElementById("app").classList.toggle("dark");
  document.querySelector(".interface").classList.toggle("dark");
  document.querySelector(".map").classList.toggle("dark");
}

//Switch size--------------------------------------------------------------------------------------------------
document.querySelectorAll(".size-point").forEach((point) => {
  point.addEventListener("click", switchSize);
});

function switchSize(event) {
  size = event.target.getAttribute("id");
  refresh();
}

//Change mines count------------------------------------------------------------------------------------------------
function changeMinesCount(event) {
  mines =
    document.querySelector(".mine-input").value > 99
      ? 99
      : document.querySelector(".mine-input").value < 1
      ? 1
      : document.querySelector(".mine-input").value;
  refresh();
}

//Save local storage------------------------------------------------------------------------------
function setLocalStorage() {
  localStorage.setItem("history", history);
  localStorage.setItem("theme", theme);
  localStorage.setItem("volume", volume);
  localStorage.setItem("size", size);
  localStorage.setItem("mines", mines);
  if (restart === true) {
    localStorage.setItem("casheFild", "");
    localStorage.setItem("timer", 0);
    localStorage.setItem("count", 0);
    localStorage.setItem("flags", 0);
    localStorage.setItem("start", "false");
  } else {
    localStorage.setItem("casheFild", JSON.stringify(SaveField()));
    localStorage.setItem("timer", timer);
    localStorage.setItem("start", start);
    localStorage.setItem("count", count);
    localStorage.setItem("flags", flags);
  }
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  // history = localStorage.getItem("history");
  // theme = localStorage.getItem("theme");
  // volume = localStorage.getItem("volume");
  // // size = localStorage.getItem("size");
  // // mines = localStorage.getItem("mines");
}

window.addEventListener("load", getLocalStorage);

//timer-------------------------------------------------------------
const ms = document.getElementById("ms");
const second = document.getElementById("second");
const minute = document.getElementById("minute");

function startTimer() {
  StopTimer();
  timerInterval = setInterval(function () {
    timer += 1 / 60;
    msVal = Math.floor((timer - Math.floor(timer)) * 100);
    secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    minuteVal = Math.floor(timer / 60);
    ms.innerHTML = msec = msVal < 10 ? "0" + msVal.toString() : msVal;
    second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000 / 60);
}
// startTimer();

function StopTimer() {
  clearInterval(timerInterval);
}

window.onblur = function () {
  if (count > 0) {
    StopTimer();
  }
};
window.onfocus = function () {
  if (count > 0) {
    startTimer();
  }
};

//Save field------------------------------------------------------------
function SaveField() {
  let k = 0;
  let cashe = [[]];
  if (start === "true") {
    document.querySelectorAll(".block").forEach((block) => {
      cashe[k] = [];
      cashe[k].push(block.classList[1]);
      cashe[k].push(block.classList[2]);
      cashe[k].push(block.classList[3]);
      cashe[k].push(block.firstChild.classList[0]);
      if (block.firstChild.getAttribute("data-key")) {
        cashe[k].push(block.firstChild.getAttribute("data-key"));
      } else {
        cashe[k].push("");
      }

      k++;
    });
  }

  return cashe;
}
