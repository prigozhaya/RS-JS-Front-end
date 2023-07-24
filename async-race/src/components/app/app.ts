import PageRender from '../html-layout/page-render';
import HttpModule from '../http-module';
import { EngineStatus } from '../types';

class App {

  httpModule: HttpModule;
  pageRender: PageRender;

  constructor() {
    this.httpModule = new HttpModule;
    this.pageRender = new PageRender;
  }

  start() {
this.pageRender.initPage()
  }


}

export default App;

    // try {
    //   this.httpModule.updateWinner(10, 4, 5).then((data: object | Error | undefined) => {
    //     console.log(data)
    //   }).catch((x) => { throw x });
    // } catch (e) {
    //   console.log(e)
    // }