export type Article = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
};

export type Source = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};

export type CommonResponse = {
    articles: Array<Article>;
    totalResults: number;
    sources: Array<Source>;
    status: string;
};

export type ArticleResponse = Pick<CommonResponse, "articles"| "status" | "totalResults">;

export type SourceResponse = Pick<CommonResponse, "sources"| "status">;

export interface IAppController {
    getNews(e: Event, callback: (data: ArticleResponse) => void): void;
    getSources(callback: (data: SourceResponse) => void): void;
}

export type EndpointObject = {
    endpoint: string;
    options?: object;
};

export enum HTTPMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
}

export interface ILoader {
    getResp({ endpoint, options }: EndpointObject, callback: (data: Partial<CommonResponse>) => void): void;
}

export interface IAppView {
  drawNews(data: ArticleResponse): void;
  drawSources(data: SourceResponse): void;
}

export interface ISources {
  draw(data: Readonly<Array<Source>>): void;
}

export interface INews {
    draw(data: Readonly<Array<Article>>): void;
  }
