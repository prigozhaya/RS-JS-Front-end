import PageRender from '../html-layout/page-render';
import HttpModule from '../http-module';

class App {
    httpModule: HttpModule;
    pageRender: PageRender;

    constructor() {
        this.httpModule = new HttpModule();
        this.pageRender = new PageRender();
    }

    start() {
        this.pageRender.initPage();
    }
}

export default App;
