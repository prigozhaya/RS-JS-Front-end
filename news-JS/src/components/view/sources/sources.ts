
import { Source } from '../../../model/model';
import { ISources } from './Sources.type';
import './sources.css';

class Sources implements ISources {
    draw(data: Readonly<Array<Source>>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp?.content.cloneNode(true) as HTMLElement;

            const sourceItemName = sourceClone.querySelector('.source__item-name');
            if (sourceItemName) sourceItemName.textContent = item.name;

            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesEl = document.querySelector('.sources');

        if (sourcesEl) {
            sourcesEl.append(fragment);
        }
    }
}

export default Sources;
