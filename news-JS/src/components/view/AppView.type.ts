import { ArticleResponse, SourceResponse } from "../../model/model";

export interface IAppView {
  drawNews(data: ArticleResponse): void;
  drawSources(data: SourceResponse): void;
}