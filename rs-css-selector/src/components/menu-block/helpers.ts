import { Level, LevelsData } from '../types';

function generateTask(levelTask: Level, level: string): HTMLElement {
    const lvlTask = document.createElement('div');
    lvlTask.classList.add('task-oreder');
    if (level === levelTask.levelOreder.toString()) {
        lvlTask.classList.add('current');
    }
    lvlTask.textContent = `${level} level`;
    return lvlTask;
}

export default generateTask;
