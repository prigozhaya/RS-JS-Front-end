import StateModule from '../state-module';
import GarageLayout from './garage-layout';
import PageHeader from './page-header';
import ViewRefresher from './helpers/view-refresher';
import WinnersLayout from './winners-layout';

class PageRender {
    state: StateModule;
    pageHeader: PageHeader;
    garageLayout: GarageLayout;
    winnersLayout: WinnersLayout;
    viewRefresher: ViewRefresher;

    constructor() {
        this.state = new StateModule();
        this.garageLayout = new GarageLayout(this.state);
        this.winnersLayout = new WinnersLayout(this.state, this.garageLayout);
        this.viewRefresher = new ViewRefresher(this.state, this.garageLayout, this.winnersLayout);
        this.pageHeader = new PageHeader(this.state, this.garageLayout, this.winnersLayout);
    }

    initPage() {
        const app = document.getElementById('app');
        const view = document.createElement('div');
        view.setAttribute('id', 'view');

        app?.appendChild(this.pageHeader.renderHeader());
        app?.appendChild(this.pageHeader.renderViewSwitcher());
        app?.appendChild(view);
        view.appendChild(this.garageLayout.generateCarConstructor());
        view.appendChild(this.garageLayout.generateCarRace());
        view.appendChild(this.garageLayout.createPagination());
        this.garageLayout.addCarConstructorFunctionality();
    }
}

export default PageRender;
