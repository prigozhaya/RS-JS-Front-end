import { ArticleResponse, IAppController, SourceResponse } from '../../model/model';
import AppLoader from './appLoader'; 

class AppController extends AppLoader implements IAppController{
    getSources(callback:(data: SourceResponse) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback:(data: ArticleResponse) => void) {
        let target: HTMLElement | null | ParentNode | undefined = e.target as HTMLElement; //HTMLElement
        const newsContainer: HTMLElement | null = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if ((target as HTMLElement)?.classList.contains('source__item')) {
                const sourceId = (target as HTMLElement)?.getAttribute('data-source-id');
                if (newsContainer?.getAttribute('data-source') !== sourceId) {
                    if(sourceId){
                        newsContainer?.setAttribute('data-source', sourceId);
                    }
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target?.parentNode;
        }
    }
}

export default AppController;
