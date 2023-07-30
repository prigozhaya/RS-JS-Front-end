import HttpModule from '../http-module';
import StateModule from '../state-module';
import { Order, Sort, Winner, Winners } from '../types';
import GarageLayout from './garage-layout';
import ViewRefresher from './helpers/view-refresher';
import WinnersHtmlGenerator from './helpers/winners-html-generator';

class WinnersLayout {
    state: StateModule;
    httpModule: HttpModule;
    viewRefresher: ViewRefresher;
    winnersHtmlGenerator: WinnersHtmlGenerator;
    garageLayout: GarageLayout;

    constructor(state: StateModule, garageLayout: GarageLayout) {
        this.state = state;
        this.httpModule = new HttpModule();
        this.winnersHtmlGenerator = new WinnersHtmlGenerator();
        this.garageLayout = garageLayout;
        this.viewRefresher = new ViewRefresher(this.state, this.garageLayout, this);
    }

    generateWinnerHeader(): Node {
        const winnersHeadr = document.createElement('div');
        try {
            this.httpModule
                .getWinners(this.state.getCurrentPage(), 10)
                .then((data: Array<Winners> | Error | undefined) => {
                    if (typeof data === 'object' && !(data instanceof Error)) {
                        winnersHeadr.innerHTML = `<h3>WINNERS(<span id="car-count">${data[0].totalCount}</span>)</h3>`;
                    }
                })
                .catch((x) => {
                    throw x;
                });
        } catch (e) {
            console.log(e);
        }
        return winnersHeadr;
    }

    generateTableHeader(): Node {
        const winnersSort = document.createElement('section');
        winnersSort.classList.add('winners-sort');
        winnersSort.innerHTML = this.winnersHtmlGenerator.generateTableHeaderHtml();
        return winnersSort;
    }

    generateWinnersTable(): Node {
        const winnersTable = document.createElement('section');
        winnersTable.classList.add('winners-table');
        const winersArr = this.state.getWinners();
        const carsArr = this.state.getCars();

        const startArr = (this.state.getCurrentPage() - 1) * 10;
        const endtArr =
            this.state.getCurrentPage() * 10 - 1 < winersArr.length
                ? this.state.getCurrentPage() * 10 - 1
                : winersArr.length - 1;
        if (startArr < winersArr.length) {
            for (let i = startArr; i <= endtArr; i++) {
                for (let j = 0; j < carsArr.length; j++) {
                    if (carsArr[j].id == winersArr[i].id) {
                        winnersTable.innerHTML += this.winnersHtmlGenerator.generateTableHtml(
                            i,
                            carsArr[j].color,
                            carsArr[j].name,
                            winersArr[i].wins,
                            winersArr[i].time
                        );
                    }
                }
            }
        }
        return winnersTable;
    }

    SortWinners(): void {
        try {
            this.httpModule
                .getGarageWinners(this.state.getSortType(), this.state.getOreder())
                .then((data: Winner[] | Error | undefined) => {
                    if (data !== undefined && !(data instanceof Error)) {
                        this.state.setWinners(data);
                        this.viewRefresher.refreshView(this.state.currentview);
                    }
                })
                .catch((x) => {
                    console.log(x);
                });
        } catch (e) {
            console.log(e);
        }
    }

    addSortFunctionality(): void {
        const winsSort = document.getElementById('wins-sort');
        winsSort?.addEventListener('click', () => {
            const order = this.state.getOreder() === Order.Asc ? Order.Desc : Order.Asc;
            this.state.setSortType(Sort.Wins);
            this.state.setOreder(order);
            this.SortWinners();
        });

        const timeSort = document.getElementById('time-sort');
        timeSort?.addEventListener('click', () => {
            const order = this.state.getOreder() === Order.Asc ? Order.Desc : Order.Asc;
            this.state.setSortType(Sort.Time);
            this.state.setOreder(order);
            this.SortWinners();
        });
    }
}

export default WinnersLayout;
