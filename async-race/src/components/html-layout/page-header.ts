import { SelectedView } from "../types";
import GarageLayout from "./garage-layout";
import WinnersLayout from "./winners-layout";

class PageHeader {
  selectedView :SelectedView;
  garageLayout: GarageLayout;
  winnersLayout: WinnersLayout;

  constructor( garageLayout: GarageLayout, winnersLayout: WinnersLayout) {
    this.selectedView = SelectedView.Garage;
    this.garageLayout = garageLayout;
    this.winnersLayout = winnersLayout;
   }

  renderHeader(): Node {
    const header = document.createElement("header");
    const headline = document.createElement("h1");
    headline.textContent = "Async-Race";

    header.appendChild(headline);

    return header;
  }

  renderViewSwitcher(): Node {
    const viewSwitcher = document.createElement("section");
    viewSwitcher.classList.add("view-switcher");

    const garageVieButton = document.createElement("button");
    garageVieButton.textContent = "TO GARAGE";
    garageVieButton.addEventListener("click", () => { 
    const view = document.getElementById('view');
    if(view){
      view.innerHTML = '';
      view.appendChild(this.garageLayout.generateCarConstructor())
      view.appendChild(this.garageLayout.generateCarRace())
    }
    });

    const winnersVieButton = document.createElement("button");
    winnersVieButton.textContent = "TO WINNERS";
    winnersVieButton.addEventListener("click", () => {
      const view = document.getElementById('view');
      if(view){
        view.innerHTML = '';
        view.appendChild(this.winnersLayout.winners())
      }
     });

    const flareSpan = document.createElement("span");
    flareSpan.classList.add("flare");

    garageVieButton.appendChild(flareSpan);
    winnersVieButton.appendChild(flareSpan);
    viewSwitcher.appendChild(garageVieButton);
    viewSwitcher.appendChild(winnersVieButton);

    return viewSwitcher;
  }
}

export default PageHeader;