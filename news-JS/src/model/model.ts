export type Article = {
  author: string,
  content: string,
  description: string,
  publishedAt: Date,
  source: {
    id: string,
    name: string,
  },
  title: string,
  url: string,
  urlToImage: string
}
  
export type ArticleResponse = {
  articles: Array<Article>,
  status: string,
  totalResults: number
}

export interface IAppController{
  getSources(callback: () => void): void;
  getNews(e:Event, callback: (data: ArticleResponse) => void): void;
}

export type EndpointObject = {
  endpoint: string,
  options?: object
}

export enum HTTPMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
}

export interface ILoader{
  getResp({endpoint, options}: EndpointObject , callback: (data: ArticleResponse) => void): void;
}

