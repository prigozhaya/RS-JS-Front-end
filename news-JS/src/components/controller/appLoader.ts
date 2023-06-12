import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://news-proxy.spanb4.shop/', {
            apiKey: '875797f721f44a379bbb3171f19d74d8', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
