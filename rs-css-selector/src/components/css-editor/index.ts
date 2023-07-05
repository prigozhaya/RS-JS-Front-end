import { Level, LevelsData } from "../types";
import data from '../../data/index.json' assert { type: 'json' };
import { EditorView } from "codemirror";
import MenuBlock from "../menu-block";
import HtmlViewer from "../html-viewer";
import TaskBlock from "../task-block";

class CssEditor {
  lvl: Level;
  constructor() {
    this.lvl = {lv: 1, currCssSelector:'', enterPressed: false}
  }

    init(level: Level, viewCss: EditorView | null, taskBlock: TaskBlock, htmlViewer: HtmlViewer, viewHTML: EditorView | null, menuBlock: MenuBlock) {
      const clearCss = () => {
        let elem: HTMLElement | null= document.querySelector('#css-editor');
            if (elem) {
              elem = document.querySelector('#css-editor pre code')
              if (elem) {
                const text = viewCss?.state.doc.toString();
                const transaction = viewCss?.state.update({changes: {from: 0, to: text?.length, insert: "//Write your selector here"}});
                if (transaction)
                  viewCss?.dispatch(transaction);
              }
            }
      }
      const checkAnswear = () => {
        try{
          const containerId = '#table ';
          const rightAnswer = document.querySelectorAll(containerId + levelsData.levels[+this.lvl.lv - 1].help);
          const userAnswer = document.querySelectorAll(containerId + this.lvl.currCssSelector);

          if(JSON.stringify(userAnswer) === JSON.stringify(rightAnswer)){
            document.querySelector('#css-editor .ͼo .cm-scroller')?.classList.remove('wrong');
            this.lvl.lv++;
            this.lvl.currCssSelector = '';
            alert("Good Jop!");
            clearCss();
            taskBlock.init(level);
            htmlViewer.init(level, viewHTML);
            menuBlock.init(level, taskBlock, htmlViewer, viewHTML);
          } else {
            document.querySelector('#css-editor .ͼo .cm-scroller')?.classList.add('wrong');
            clearCss();
          }
        }
        catch(e){
          document.querySelector('#css-editor .ͼo .cm-scroller')?.classList.add('wrong');
        }
      };
      this.lvl = level;
      const levelsData: LevelsData = data as LevelsData;

      if (level.enterPressed){
        checkAnswear();
        level.enterPressed = false;
      }
      const enterButton : HTMLElement | null = document.querySelector('.enter-button');
      enterButton?.addEventListener('click', (e) => {
        checkAnswear();
      })
    }
}

export default CssEditor;