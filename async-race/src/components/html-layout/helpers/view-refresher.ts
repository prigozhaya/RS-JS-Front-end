import StateModule from '../../state-module';
import { SelectedView, Views } from '../../types';
import GarageLayout from '../garage-layout';
import WinnersLayout from '../winners-layout';

class ViewRefresher {
    state: StateModule;
    selectedView: SelectedView;
    garageLayout: GarageLayout;
    winnersLayout: WinnersLayout;

    constructor(state: StateModule, garageLayout: GarageLayout, winnersLayout: WinnersLayout) {
        this.state = state;
        this.selectedView = SelectedView.Garage;
        this.garageLayout = garageLayout;
        this.winnersLayout = winnersLayout;
    }

    refreshView(currentview: Views): void {
        const view = document.getElementById('view');
        if (currentview === Views.Winners) {
            if (view) {
                view.innerHTML = '';
                view.appendChild(this.winnersLayout.generateWinnerHeader());
                view.appendChild(this.winnersLayout.generateTableHeader());
                view.appendChild(this.winnersLayout.generateWinnersTable());
                view.appendChild(this.garageLayout.createPagination());
                this.winnersLayout.addSortFunctionality();
            }
        }
        if (currentview === Views.Garage) {
            if (view) {
                view.innerHTML = '';
                view.appendChild(this.garageLayout.generateCarConstructor());
                view.appendChild(this.garageLayout.generateCarRace());
                view.appendChild(this.garageLayout.createPagination());
                this.garageLayout.addCarConstructorFunctionality();
            }
        }
    }
}

export default ViewRefresher;
