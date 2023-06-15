import { ArticleResponse, SourceResponse } from '../../model/model';
import { IAppView } from './AppView.type';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements IAppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticleResponse) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: SourceResponse) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
