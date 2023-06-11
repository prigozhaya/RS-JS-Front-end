import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5fd1650a4ca54245b23cd889e85905f5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
