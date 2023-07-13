import * as data from '../../data/index.json'
import {EditorState} from "@codemirror/state";
import {EditorView} from "@codemirror/view";
import TaskBlock from '../task-block';
import { Level, LevelsData } from '../types';
import HtmlViewer from '../html-viewer';
import generateTask from './helpers';

class MenuBlock {
  level: Level;
  view: EditorView | null;

  constructor() {
    this.level = {levelOreder: 1, currentCssSelector:'', enterPressed: false};
    this.view = null;
  }

  init(startLevel: Level, taskBlock: TaskBlock, htmlViewer: HtmlViewer, view: EditorView | null) {
    this.level = startLevel;
    const levelsData: LevelsData = data as LevelsData;
    const levelOreder: HTMLElement | null= document.getElementById('level-progress');
    if (levelOreder) {
      levelOreder.textContent = levelsData.levels[+this.level.levelOreder - 1].order;
    }

    const elem: HTMLElement | null= document.getElementById('menu-block');
    if (elem) {
    elem.innerHTML = '';
      const levelsData: LevelsData = data as LevelsData;
      const taskEl = document.createElement("div");
      taskEl.classList.add("task");
      taskEl.innerHTML = levelsData.levels[+this.level.levelOreder - 1].task;
      
      levelsData.levels.forEach((level:{order:string, task:string, html:string, htmlViewer:string, tableWidth:string, help:string})=>{
        const levelTask = generateTask(this.level, level.order);

        levelTask.addEventListener("click", () => {
          taskEl.innerHTML = level.task;
          this.level.levelOreder = +level.order;
          taskBlock.init(startLevel);
          htmlViewer.init(startLevel, view);

          const currentLevel = document.querySelectorAll(".task-oreder");
          if (currentLevel) {
            currentLevel.forEach((e) => {
              e.classList.remove("current");
            });
            levelTask.classList.add("current");
          }
          if (levelOreder) {
            levelOreder.textContent = levelsData.levels[+this.level.levelOreder - 1].order;
          }

        });
        elem?.appendChild(levelTask);
      })
      elem.appendChild(taskEl);
    }
  }
}

export default MenuBlock;