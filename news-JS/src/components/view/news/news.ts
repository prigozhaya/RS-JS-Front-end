
import { Article } from '../../../model/model';
import { INews } from './News.type';
import './news.css';

class News implements INews {
    draw(data: Readonly<Array<Article>>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

            const newsItemEl = newsClone.querySelector('.news__item');
            if (idx % 2 && newsItemEl) newsItemEl.classList.add('alt');

            const newsMetaPhotoEl = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (newsMetaPhotoEl)
                newsMetaPhotoEl.style.backgroundImage = `url(${item.urlToImage || 'https://i.ibb.co/k8ZhpLQ/spinner.png'})`;

            const newsMetaAuthorEl = newsClone.querySelector('.news__meta-author');
            if (newsMetaAuthorEl) newsMetaAuthorEl.textContent = item.author || item.source.name;

            const newsMetaDateEl = newsClone.querySelector('.news__meta-date');
            if (newsMetaDateEl)
                newsMetaDateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const descriptionTitleEl = newsClone.querySelector('.news__description-title');
            if (descriptionTitleEl) descriptionTitleEl.textContent = item.title;

            const newsDescriptionSourceEl = newsClone.querySelector('.news__description-source');
            if (newsDescriptionSourceEl) newsDescriptionSourceEl.textContent = item.source.name;

            const newsDescriptionContentEl = newsClone.querySelector('.news__description-content');
            if (newsDescriptionContentEl) newsDescriptionContentEl.textContent = item.description;

            const newsReadMoreEl = newsClone.querySelector('.news__read-more a');
            if (newsReadMoreEl) newsReadMoreEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsEl = document.querySelector('.news');
        if (newsEl) {
            newsEl.innerHTML = '';
            newsEl.appendChild(fragment);
        }
    }
}

export default News;
