import Loader from './loader';

const API_KEY = '875797f721f44a379bbb3171f19d74d8'
class AppLoader extends Loader {
    constructor() {
        super('https://news-proxy.spanb4.shop/', {
            apiKey: API_KEY , // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
