import data from '../../data/index.json' assert { type: 'json' };
import {EditorState} from "@codemirror/state";
import {EditorView} from "@codemirror/view";
import TaskBlock from '../task-block';
import { Level } from '../types';
import HtmlViewer from '../html-viewer';

class MenuBlock {
  lvl: Level;
  constructor() {
    this.lvl = {lv: 1}
  }

  init(startLevel: Level, taskBlock: TaskBlock, htmlViewer: HtmlViewer, state: EditorState | null, view: EditorView | null) {
    this.lvl = startLevel;
    let levelProgress: HTMLElement | null;
    let elem: HTMLElement | null;
    if (elem = document.getElementById('menu-block')) {
      let levels = data.levels;
      const taskEl = document.createElement("div");
      taskEl.classList.add("task");
      levels.forEach((level:{order:string, task:string, html:string, htmlViewer:string, tableWidth:string, help:string})=>{
        const lvlTask = document.createElement("div");
        lvlTask.textContent = `${level.order} level`;

        lvlTask.addEventListener("click", (e) => {
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