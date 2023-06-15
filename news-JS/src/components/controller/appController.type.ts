import { ArticleResponse, SourceResponse } from "../../model/model";

export interface IAppController {
  getNews(e: Event, callback: (data: ArticleResponse) => void): void;
  getSources(callback: (data: SourceResponse) => void): void;
}