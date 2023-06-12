import { ArticleResponse, CommonResponse, SourceResponse } from '../../model/model';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document?.querySelector('.sources')?.addEventListener('click', (e) => this.controller.getNews(e, (data: ArticleResponse) => this.view.drawNews(data)));
        this.controller.getSources((data: SourceResponse) => this.view.drawSources(data));
    }
}

export default App;
