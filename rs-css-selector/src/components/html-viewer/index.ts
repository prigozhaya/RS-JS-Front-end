import {EditorState} from "@codemirror/state";
import {EditorView} from "@codemirror/view";
import { Level, LevelsData } from "../types";
import data from '../../data/index.json' assert { type: 'json' };

class HtmlViewer {
  lvl: Level;
  view: EditorView | null;
  constructor() {
    this.lvl = {lv: 1};
    this.view = null;
  }

  init(level: Level, state: EditorState | null, view: EditorView | null) {
    this.lvl = level;
    this.view = view;
    const levelsData: LevelsData = data as LevelsData;
    let elem: HTMLElement | null= document.querySelector('#html-viewer');
    if (elem) {
      elem = document.querySelector('#html-viewer pre code')
      if (elem) {
        const text = view?.state.doc.toString();
        const transaction = view?.state.update({changes: {from: 0, to: text?.length, insert: levelsData.levels[+this.lvl.lv - 1].htmlViewer}});
        if (transaction)
          view?.dispatch(transaction);
      }
    }
  }

  refresh() {
    const levelsData: LevelsData = data as LevelsData;
    let elem: HTMLElement | null = document.querySelector('#html-viewer');
    if (elem) {
      elem = document.querySelector('#html-viewer pre code')
      if (elem) {
        const text = this.view?.state.doc.toString();
        const transaction = this.view?.state.update({changes: {from: 0, to: text?.length, insert: levelsData.levels[+this.lvl.lv - 1].htmlViewer}});
        if (transaction)
        this.view?.dispatch(transaction);
      }
    }
  }
}

export default HtmlViewer;