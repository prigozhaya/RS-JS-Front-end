import * as data from '../../data/index.json'
import { Level, LevelsData } from '../types';
import { initHelp, setTableWidth } from './helpers';

class TaskBlock {
    taskLevel: Level;
    constructor() {
        this.taskLevel = { levelOreder: 1, currentCssSelector: '', enterPressed: false };
    }

    init(level: Level) {
        this.taskLevel = level;
        const levelsData: LevelsData = data as LevelsData;
        const elem: HTMLElement | null = document.getElementById('task-text');
        if (elem) {
            elem.textContent = levelsData.levels[+this.taskLevel.levelOreder - 1].taskHeader;
        }

        const helpNote: HTMLElement | null = document.getElementById('help-note');
        if (helpNote) {
            helpNote.textContent = levelsData.levels[+this.taskLevel.levelOreder - 1].help;
        }

        const table: HTMLElement | null = document.querySelector('.table');
        if (table) {
            table.innerHTML = levelsData.levels[+this.taskLevel.levelOreder - 1].html;
            setTableWidth(+this.taskLevel.levelOreder - 1,levelsData)
        }

        initHelp();
    }
}

export default TaskBlock;
