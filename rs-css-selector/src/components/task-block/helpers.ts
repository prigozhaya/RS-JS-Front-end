import { LevelsData } from "../types";

export function initHelp(): void {
  const help = document.getElementById('open-help');
    help?.addEventListener("click", () => {
      document.querySelector('.help')?.classList.add("show");
      help.classList.add("hidden");
  })
  
  const hint = document.getElementById('close-help');
  hint?.addEventListener("click", () => {
      document.querySelector('.help')?.classList.remove("show");
      help?.classList.remove("hidden");
  })
  }


  export function setTableWidth (order: number, levelsData: LevelsData): void {
    const tableSurface = document.querySelector('.table-wrapper');
    tableSurface?.setAttribute('style', `width: ${levelsData.levels[order].tableWidth}`);
    const tableEdge = document.querySelector('.table-edge');
    tableEdge?.setAttribute('style', `width: ${levelsData.levels[order].tableWidth}`);
  }