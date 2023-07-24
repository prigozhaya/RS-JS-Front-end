import HttpModule from "../http-module";
import StateModule from "../state-module";
import { Car, Winners } from "../types";

class WinnersLayout {
  state: StateModule;
  httpModule: HttpModule;

  constructor(state: StateModule) {
    this.state = state;
    this.httpModule = new HttpModule;
  }

  winners(): Node {
    const winnersView = document.createElement("section");
    winnersView.classList.add("winners");
    try {
      this.httpModule.getWinners(1, 10).then((data: Array<Winners> | Error | undefined) => {
        if (typeof data === "object" && !(data instanceof Error)) {
          winnersView.innerHTML = `  
  <div>
  <h3>WINNERS(<span id="car-count">${data[0].totalCount}</span>)</h3>
</div>`

          winnersView.innerHTML += `        
<section class="winners-sort">
<button class="clear-button table-button">№</button>
<button class="clear-button table-button">Car</button>
<button class="clear-button table-button">Name</button>
<button class="clear-button table-button">Wins</button>
<button class="clear-button table-button">Best time(sec)</button>
</section>`

          const winnersTable = document.createElement("section");
          winnersTable.classList.add("winners-table");
          winnersView.appendChild(winnersTable);
          const carsArr = this.state.getCars();

          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < carsArr.length; j++) {
              if (carsArr[j].id === data[i].id)
              winnersTable.innerHTML += `
              <div class="rating-line">
              <p class="rating-cell">${i+1}</p>
              <div class="rating-cell">
              <svg class="car" onclick="this.style.left='90%'" width="40" height="15" viewBox="0 0 120 40" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M43.2103 0.00041946C36.108 -0.0171378 28.1081 0.515126 18.7977 1.85086C17.6988 1.99409 7.1113 7.62096 4.25688 11.5046C1.40246 15.3884 0.426032 22.7812 0.426032 22.7812C-0.344601 25.8087 0.123532 30.8127 0.338505 31.2992C0.628609 32.3527 2.26757 33.2368 5.08256 33.876C5.41085 29.0115 9.7376 25.221 14.9694 25.2149C20.4471 25.2149 24.8874 29.3525 24.8874 34.4556C24.8839 34.8631 24.8515 35.27 24.7902 35.6735C24.9365 35.6754 25.1026 35.6791 25.2415 35.6805L84.5678 36.1402C84.4555 35.5847 84.398 35.0208 84.396 34.4556C84.396 29.3525 88.8368 25.2149 94.3141 25.2149C99.7918 25.2149 104.232 29.3525 104.232 34.4556C104.232 35.072 104.166 35.6869 104.035 36.2908L119.454 36.4102C119.781 31.1403 121.155 25.6056 117.712 20.9968C116.359 19.1856 109.795 15.9057 93.1576 13.4518C84.5616 9.42982 76.1722 4.86955 67.0359 2.2563C59.9916 0.954517 52.3423 0.0228281 43.2103 0.00041946ZM38.9463 2.76892C40.4335 2.77909 41.7977 2.83592 42.917 2.95605L44.7238 14.1262C34.4512 12.9496 23.9834 11.8938 18.4499 7.7732C18.5366 6.50261 20.4236 4.66326 22.5426 3.96004C23.7426 3.56177 32.502 2.72503 38.9465 2.76892H38.9463ZM47.5316 2.84931C53.7333 2.9103 62.9125 3.47075 69.2278 6.06968C72.2533 7.37493 77.9493 10.4299 81.7585 13.1272L80.1841 15.561C69.843 15.1267 56.0614 14.59 50.4051 13.9947L47.5316 2.84931ZM14.9694 28.9112C13.3911 28.9112 11.8775 29.4953 10.7615 30.5351C9.6455 31.5749 9.01854 32.9851 9.01854 34.4556C9.01854 35.9261 9.6455 37.3363 10.7615 38.3761C11.8775 39.4159 13.3911 40 14.9694 40C16.5476 40 18.0612 39.4159 19.1772 38.3761C20.2932 37.3363 20.9202 35.9261 20.9202 34.4556C20.9202 32.9851 20.2932 31.5749 19.1772 30.5351C18.0612 29.4953 16.5476 28.9112 14.9694 28.9112ZM94.3138 28.9112C92.7356 28.9112 91.2219 29.4953 90.1059 30.5351C88.9899 31.5749 88.363 32.9851 88.363 34.4556C88.363 35.9261 88.9899 37.3363 90.1059 38.3761C91.2219 39.4159 92.7356 40 94.3138 40C95.8921 40 97.4057 39.4159 98.5217 38.3761C99.6377 37.3363 100.265 35.9261 100.265 34.4556C100.265 32.9851 99.6377 31.5749 98.5217 30.5351C97.4057 29.4953 95.8921 28.9112 94.3138 28.9112Z"
                      fill="${carsArr[j].color}" />
              </svg>
          </div>
              <p class="rating-cell">${carsArr[j].name}</p>
              <p class="rating-cell">${data[i].wins}</p>
              <p class="rating-cell">${data[i].time}</p>
          </div>`
            }

          }

        }
        if (typeof data === "object" && !(data instanceof Error)) {
          winnersView.innerHTML += `  
              <section class="pagination">
                  <button>←<span class="flare"></span></button>
                  <h3>(<span id="car-count">1</span>)</h3>
                  <button>→<span class="flare"></span></button>
              </section>`
        }

      }).catch((x) => { throw x });

    } catch (e) {
      console.log(e)
    }


    return winnersView;
  }
}

export default WinnersLayout;