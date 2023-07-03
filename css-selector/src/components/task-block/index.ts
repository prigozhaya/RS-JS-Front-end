import data from '../../data/index.json' assert { type: 'json' };
import { Level } from '../types';

class TaskBlock {
  lvl: Level;
  constructor() {
    this.lvl = {lv: 1}
  }

  init(level: Level) {
    this.lvl = level;
    let levels = data.levels;
    let elem: HTMLElement | null;
    if (elem = document.getElementById('task-text')) {
      elem.textContent = levels[+this.lvl.lv - 1].task;
    }

    let helpNote: HTMLElement | null;
    if (helpNote = document.getElementById('help-note')) {
      helpNote.textContent = levels[+this.lvl.lv - 1].help;
    }

    let table : HTMLElement | null;
    if(table= document.querySelector('#table')){
      table.innerHTML = levels[+this.lvl.lv - 1].html;
    const tableSurface = document.querySelector('.table-wrapper');
    tableSurface?.setAttribute('style', `width: ${levels[+this.lvl.lv - 1].tableWidth}`);
    const tableEdge = document.querySelector('.table-edge');
    tableEdge?.setAttribute('style', `width: ${levels[+this.lvl.lv - 1].tableWidth}`);
    } 
  }

  refresh() {
    let elem: HTMLElement | null;
    let levels = data.levels;
    if (elem = document.getElementById('task-text')) {
      elem.textContent = levels[+this.lvl.lv - 1].task;
    }
    let helpNote: HTMLElement | null;
    if (helpNote = document.getElementById('help-note')) {
      helpNote.textContent = levels[+this.lvl.lv - 1].help;
    }
    let table : HTMLElement | null;
    if(table= document.querySelector('#table')){
      table.innerHTML = levels[+this.lvl.lv - 1].html;
    const tableSurface = document.querySelector('.table-wrapper');
    tableSurface?.setAttribute('style', `width: ${levels[+this.lvl.lv - 1].tableWidth}`);
    const tableEdge = document.querySelector('.table-edge');
    tableEdge?.setAttribute('style', `width: ${levels[+this.lvl.lv - 1].tableWidth}`);
    } 
  }
}

const openHelp = document.getElementById('open-help');
  openHelp?.addEventListener("click", (e) => {
    document.querySelector('.help')?.classList.add("show");
    openHelp.classList.add("hidden");
})

const closeHelp = document.getElementById('close-help');
  closeHelp?.addEventListener("click", (e) => {
    document.querySelector('.help')?.classList.remove("show");
    openHelp?.classList.remove("hidden");
})
export default TaskBlock;