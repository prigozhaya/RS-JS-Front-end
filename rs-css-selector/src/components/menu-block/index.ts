import data from '../../data/index.json' assert { type: 'json' };
import {EditorState} from "@codemirror/state";
import {EditorView} from "@codemirror/view";
import TaskBlock from '../task-block';
import { Level, LevelsData } from '../types';
import HtmlViewer from '../html-viewer';

class MenuBlock {
  lvl: Level;
  constructor() {
    this.lvl = {lv: 1}
  }

  init(startLevel: Level, taskBlock: TaskBlock, htmlViewer: HtmlViewer, state: EditorState | null, view: EditorView | null) {
    this.lvl = startLevel;
    // let levelProgress: HTMLElement | null;
    const elem: HTMLElement | null= document.getElementById('menu-block');
    if (elem) {
      const levelsData: LevelsData = data as LevelsData;
      const taskEl = document.createElement("div");
      taskEl.classList.add("task");
      levelsData.levels.forEach((level:{order:string, task:string, html:string, htmlViewer:string, tableWidth:string, help:string})=>{
        const lvlTask = document.createElement("div");
        lvlTask.textContent = `${level.order} level`;

        lvlTask.addEventListener("click", () => {
          taskEl.textContent = level.task;
          this.lvl.lv = +level.order;
          taskBlock.refresh();
          htmlViewer.refresh();
        });
        elem?.appendChild(lvlTask);
      })
      elem.appendChild(taskEl);
    }
  }
}

export default MenuBlock;