import { Level, LevelsData } from '../types';
import data from '../../data/index.json' assert { type: 'json' };
import { EditorView } from 'codemirror';
import MenuBlock from '../menu-block';
import HtmlViewer from '../html-viewer';
import TaskBlock from '../task-block';

class CssEditor {
    level: Level;
    constructor() {
        this.level = {levelOreder: 1, currentCssSelector: '', enterPressed: false };
    }

    init(
        level: Level,
        viewCss: EditorView | null,
        taskBlock: TaskBlock,
        htmlViewer: HtmlViewer,
        viewHTML: EditorView | null,
        menuBlock: MenuBlock
    ) {
        const clearCss = () => {
            let elem: HTMLElement | null = document.querySelector('#css-editor pre code');
            if (elem) {
                const text = viewCss?.state.doc.toString();
                const transaction = viewCss?.state.update({
                    changes: { from: 0, to: text?.length, insert: '//Write your selector here' },
                });
                if (transaction) viewCss?.dispatch(transaction);
            }
        };
        const isEqual = (userAnswer: NodeListOf<Element>, rightAnswer:NodeListOf<Element>):boolean =>{
          return JSON.stringify(userAnswer) === JSON.stringify(rightAnswer)
        }
        const checkAnswer = () => {
            try {
                const containerId = '#table ';
                const rightAnswer = document.querySelectorAll(containerId + levelsData.levels[+this.level.levelOreder - 1].help);
                const userAnswer = document.querySelectorAll(containerId + this.level.currentCssSelector);

                if (isEqual(userAnswer, rightAnswer)) {
                    document.querySelector('#css-editor .ͼo .cm-scroller')?.classList.remove('wrong');
                    this.level.levelOreder++;
                    this.level.currentCssSelector = '';
                    alert('Good Jop!');
                    clearCss();
                    taskBlock.init(level);
                    htmlViewer.init(level, viewHTML);
                    menuBlock.init(level, taskBlock, htmlViewer, viewHTML);
                } else {
                    document.querySelector('#css-editor .ͼo .cm-scroller')?.classList.add('wrong');
                    clearCss();
                }
            } catch (e) {
                document.querySelector('#css-editor .ͼo .cm-scroller')?.classList.add('wrong');
            }
        };
        this.level = level;
        const levelsData: LevelsData = data as LevelsData;

        if (level.enterPressed) {
            checkAnswer();
            level.enterPressed = false;
        }
        const enterButton: HTMLElement | null = document.querySelector('.enter-button');
        enterButton?.addEventListener('click', (e) => {
            checkAnswer();
        });
    }
}

export default CssEditor;
