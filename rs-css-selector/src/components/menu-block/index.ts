import data from '../../data/index.json' assert { type: 'json' };
import {EditorState} from "@codemirror/state";
import {EditorView} from "@codemirror/view";
import TaskBlock from '../task-block';
import { Level, LevelsData } from '../types';
import HtmlViewer from '../html-viewer';

class MenuBlock {
  lvl: Level;
  view: EditorView | null;

  constructor() {
    this.lvl = {lv: 1, currCssSelector:'', enterPressed: false};
    this.view = null;
  }

  init(startLevel: Level, taskBlock: TaskBlock, htmlViewer: HtmlViewer, view: EditorView | null) {
    this.lvl = startLevel;
    const levelsData: LevelsData = data as LevelsData;
    const levelOreder: HTMLElement | null= document.getElementById('level-progress');
    if (levelOreder) {
      levelOreder.textContent = levelsData.levels[+this.lvl.lv - 1].order;
    }

    const elem: HTMLElement | null= document.getElementById('menu-block');
    if (elem) {
    elem.innerHTML = '';
      const levelsData: LevelsData = data as LevelsData;
      const taskEl = document.createElement("div");
      taskEl.classList.add("task");
      taskEl.innerHTML = levelsData.levels[+this.lvl.lv - 1].task;
      
      levelsData.levels.forEach((level:{order:string, task:string, html:string, htmlViewer:string, tableWidth:string, help:string})=>{
        const lvlTask = document.createElement("div");
        lvlTask.classList.add("task-oreder");
        if(level.order === this.lvl.lv.toString()){
          lvlTask.classList.add("current");
        }
        lvlTask.textContent = `${level.order} level`;

        lvlTask.addEventListener("click", () => {
          taskEl.innerHTML = level.task;
          this.lvl.lv = +level.order;
          taskBlock.init(startLevel);
          htmlViewer.init(startLevel, view);
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