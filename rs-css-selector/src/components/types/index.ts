export type Level = {
  lv:number;
  currCssSelector: string;
  enterPressed: boolean;
};

export type TaskData = {
  order: string,
  taskHeader: string,
  task: string,
  html: string,
  htmlViewer: string,
  tableWidth: string,
  help: string
}

export type LevelsData = {
  levels: Array<TaskData>
}