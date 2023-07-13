import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { Level, LevelsData } from '../types';
import * as data from '../../data/index.json';

class HtmlViewer {
    level: Level;
    view: EditorView | null;
    constructor() {
        this.level = { levelOreder: 1, currentCssSelector: '', enterPressed: false };
        this.view = null;
    }

    init(level: Level, view: EditorView | null) {
        this.level = level;
        this.view = view;
        const levelsData: LevelsData = data as LevelsData;

        let elem: HTMLElement | null = document.querySelector('#html-viewer pre code');
        if (elem) {
            const text = view?.state.doc.toString();
            const htmlTask = view?.state.update({
                changes: { from: 0, to: text?.length, insert: levelsData.levels[+this.level.levelOreder - 1].htmlViewer },
            });
            if (htmlTask) view?.dispatch(htmlTask);
        }
    }
}

export default HtmlViewer;
