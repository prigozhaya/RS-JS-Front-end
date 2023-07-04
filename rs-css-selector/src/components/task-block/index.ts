import data from '../../data/index.json' assert { type: 'json' };
import { Level, LevelsData } from '../types';
import initHelp from './helpers';

class TaskBlock {
  lvl: Level;
  constructor() {
    this.lvl = {lv: 1}
  }

  init(level: Level) {
    this.lvl = level;
    const levelsData: LevelsData = data as LevelsData;0
    const elem: HTMLElement | null= document.getElementById('task-text');
    if (elem) {
      elem.textContent = levelsData.levels[+this.lvl.lv - 1].taskHeader;
    }

    const helpNote: HTMLElement | null= document.getElementById('help-note');
    if (helpNote) {
      helpNote.textContent = levelsData.levels[+this.lvl.lv - 1].help;
    }

    const table : HTMLElement | null = document.querySelector('#table');
    if(table){
      table.innerHTML = levelsData.levels[+this.lvl.lv - 1].html;
    const tableSurface = document.querySelector('.table-wrapper');
    tableSurface?.setAttribute('style', `width: ${levelsData.levels[+this.lvl.lv - 1].tableWidth}`);
    const tableEdge = document.querySelector('.table-edge');
    tableEdge?.setAttribute('style', `width: ${levelsData.levels[+this.lvl.lv - 1].tableWidth}`);
    } 

    initHelp();
  }

  refresh() {
    const elem: HTMLElement | null = document.getElementById('task-text');
    const levelsData: LevelsData = data as LevelsData;
    if (elem) {
      elem.textContent = levelsData.levels[+this.lvl.lv - 1].taskHeader;
    }
    const helpNote: HTMLElement | null = document.getElementById('help-note');
    if (helpNote ) {
      helpNote.textContent = levelsData.levels[+this.lvl.lv - 1].help;
    }
    const table : HTMLElement | null= document.querySelector('#table');
    if(table){
      table.innerHTML = levelsData.levels[+this.lvl.lv - 1].html;
    const tableSurface = document.querySelector('.table-wrapper');
    tableSurface?.setAttribute('style', `width: ${levelsData.levels[+this.lvl.lv - 1].tableWidth}`);
    const tableEdge = document.querySelector('.table-edge');
    tableEdge?.setAttribute('style', `width: ${levelsData.levels[+this.lvl.lv - 1].tableWidth}`);
    } 
  }
}

export default TaskBlock;