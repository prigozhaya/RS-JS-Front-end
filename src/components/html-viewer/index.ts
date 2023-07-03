import {EditorState} from "@codemirror/state";
import {EditorView} from "@codemirror/view";
import { Level } from "../types";
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
    let levels = data.levels;
    let elem: HTMLElement | null;
    if (elem = document.querySelector('#html-viewer')) {
      if (elem = document.querySelector('#html-viewer pre code')) {
        let text = view?.state.doc.toString();
        let transaction = view?.state.update({changes: {from: 0, to: text?.length, insert: levels[+this.lvl.lv - 1].htmlViewer}});
        if (transaction)
          view?.dispatch(transaction);
      }
    }
  }

  refresh() {
    let levels = data.levels;
    let elem: HTMLElement | null;
    if (elem = document.querySelector('#html-viewer')) {
      if (elem = document.querySelector('#html-viewer pre code')) {
        let text = this.view?.state.doc.toString();
        let transaction = this.view?.state.update({changes: {from: 0, to: text?.length, insert: levels[+this.lvl.lv - 1].htmlViewer}});
        if (transaction)
        this.view?.dispatch(transaction);
      }
    }
  }
}

export default HtmlViewer;