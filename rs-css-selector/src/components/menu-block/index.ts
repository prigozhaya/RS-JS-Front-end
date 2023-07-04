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
    const levelsData: LevelsData = data as LevelsData;
    const levelOreder: HTMLElement | null= document.getElementById('level-progress');
    if (levelOreder) {
      levelOreder.textContent = levelsData.levels[+this.lvl.lv - 1].order;
    }

    const elem: HTMLElement | null= document.getElementById('menu-block');
    if (elem) {
      const levelsData: LevelsData = data as LevelsData;
      const taskEl = document.createElement("div");
      taskEl.classList.add("task");
      levelsData.levels.forEach((level:{order:string, task:string, html:string, htmlViewer:string, tableWidth:string, help:string})=>{
        const lvlTask = document.createElement("div");
        lvlTask.classList.add("task-oreder");
        lvlTask.textContent = `${level.order} level`;

        lvlTask.addEventListener("click", () => {
          taskEl.innerHTML = level.task;
          this.lvl.lv = +level.order;
          taskBlock.refresh();
          htmlViewer.refresh();
          const currentLevel = document.querySelectorAll(".task-oreder");
          if (currentLevel) {
            currentLevel.forEach((e) => {
              e.classList.remove("current");
            });
            lvlTask.classList.add("current");
          }
          if (levelOreder) {
            levelOreder.textContent = levelsData.levels[+this.lvl.lv - 1].order;
          }

        });
        elem?.appendChild(lvlTask);
      })
      elem.appendChild(taskEl);
    }
  }
}

export default MenuBlock;