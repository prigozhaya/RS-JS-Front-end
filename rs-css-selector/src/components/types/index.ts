export type Level = {
  lv:number;
};

export type TaskData = {
  order: string,
  task: string, 
  html: string,
  htmlViewer: string,
  tableWidth: string,
  help: string
}

export type LevelsData = {
  levels: Array<TaskData>
}