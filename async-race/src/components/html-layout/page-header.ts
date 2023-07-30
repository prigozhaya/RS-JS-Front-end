import { SelectedView, Views } from '../types';
import GarageLayout from './garage-layout';
import WinnersLayout from './winners-layout';
import StateModule from '../state-module';
import ViewRefresher from './helpers/view-refresher';

class PageHeader {
    state: StateModule;
    selectedView: SelectedView;
    garageLayout: GarageLayout;
    winnersLayout: WinnersLayout;
    viewRefresher: ViewRefresher;

    constructor(state: StateModule, garageLayout: GarageLayout, winnersLayout: WinnersLayout) {
        this.state = state;
        this.selectedView = SelectedView.Garage;
        this.garageLayout = garageLayout;
        this.winnersLayout = winnersLayout;
        this.viewRefresher = new ViewRefresher(this.state, this.garageLayout, this.winnersLayout);
    }

    renderHeader(): Node {
        const header = document.createElement('header');
        const headline = document.createElement('h1');
        headline.textContent = 'Async-Race';

        header.appendChild(headline);

        return header;
    }

    renderViewSwitcher(): Node {
        const viewSwitcher = document.createElement('section');
        viewSwitcher.classList.add('view-switcher');

        const garageVieButton = document.createElement('button');
        garageVieButton.innerHTML = `TO GARAGE<span class="flare"></span>`;
        garageVieButton.addEventListener('click', () => {
            this.state.currentview = Views.Garage;
            this.viewRefresher.refreshView(this.state.currentview);
        });

        const winnersVieButton = document.createElement('button');
        winnersVieButton.innerHTML = `TO WINNERS<span class="flare"></span>`;
        winnersVieButton.addEventListener('click', () => {
            this.state.currentview = Views.Winners;
            this.viewRefresher.refreshView(this.state.currentview);
        });

        viewSwitcher.appendChild(garageVieButton);
        viewSwitcher.appendChild(winnersVieButton);

        return viewSwitcher;
    }
}

export default PageHeader;
