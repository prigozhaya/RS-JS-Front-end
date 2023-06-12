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
    articles?: Array<Article>;
    totalResults?: number;
    sources?: Array<Source>;
    status: string;
};

export interface IAppController {
    getSources(callback: (data: CommonResponse) => void): void;
    getNews(e: Event, callback: (data: CommonResponse) => void): void;
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
    getResp({ endpoint, options }: EndpointObject, callback: (data: CommonResponse) => void): void;
}

export interface IAppView {
  drawNews(data: CommonResponse): void;
  drawSources(data: CommonResponse): void;
}

export interface ISources {
  draw(data: Array<Source>): void;
}
