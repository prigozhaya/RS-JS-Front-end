import CssEditor from '../css-editor';
import HtmlViewer from '../html-viewer';
import MenuBlock from '../menu-block';
import TaskBlock from '../task-block';
import {EditorView} from "@codemirror/view";
import {basicSetup} from "codemirror";
import {EditorState, Compartment} from "@codemirror/state";
import {html} from "@codemirror/lang-html";
import {css} from "@codemirror/lang-css";
import { Level } from '../types';
import setLocalStorage from '../helpers/saver';

class App {
    cssEditor: CssEditor;
    htmlViewer: HtmlViewer;
    menuBlock: MenuBlock;
    taskBlock: TaskBlock;
    startStateHTML: EditorState | null;
    startStateCSS: EditorState | null;
    viewHTML: EditorView | null;
    viewCSS: EditorView | null;
    level: Level;

    constructor() {
      this.cssEditor = new CssEditor;
      this.htmlViewer = new HtmlViewer;
      this.menuBlock = new MenuBlock;
      this.taskBlock = new TaskBlock;
      this.level = {levelOreder: localStorage.getItem("level") ? Number(localStorage.getItem("level")): 1, currentCssSelector:'', enterPressed: false};
      this.startStateHTML = null;
      this.startStateCSS = null;
      this.viewHTML = null;
      this.viewCSS = null;
    }

    start() { 
      this.initEditors();
      this.initSaver();
      this.taskBlock.init(this.level);
      this.htmlViewer.init(this.level, this.viewHTML);
      this.menuBlock.init(this.level, this.taskBlock, this.htmlViewer, this.viewHTML);
      this.cssEditor.init(this.level, this.viewCSS, this.taskBlock, this.htmlViewer, this.viewHTML, this.menuBlock);
    }

    initEditors() {
      //HTML
      const tabSize = new Compartment;
      const fixedHeightEditor = EditorView.theme({
        "&": {height: "420px"},
        ".cm-scroller": {overflow: "auto"}
      });
      const minHeightEditor = EditorView.theme({
        ".cm-content, .cm-gutter": {minHeight: "200px"}
      });
      this.startStateHTML = EditorState.create({
        doc: `<!-- HTML Editor -->`,
        extensions: [
          basicSetup,
          tabSize.of(EditorState.tabSize.of(2)),
          fixedHeightEditor,
          minHeightEditor,
          html()
        ],
      });
      const elemHTML: HTMLElement | null= document.querySelector('#html-viewer pre code');
      if (elemHTML) {       
        this.viewHTML = new EditorView({
          state: this.startStateHTML,
          extensions: [
            html()
          ],
          parent: elemHTML
        })
      }

      //CSS
      this.startStateCSS = EditorState.create({
        doc: `//input css selector here`,
        extensions: [
          basicSetup,
          tabSize.of(EditorState.tabSize.of(2)),
          EditorView.updateListener.of((e) => {
            this.level.currentCssSelector = e.state.doc.toString();
            this.level.enterPressed = !!e.state.doc.toString().match(/\n/g)?.length;
            if (this.level.enterPressed) {
              this.cssEditor.init(this.level, this.viewCSS, this.taskBlock, this.htmlViewer, this.viewHTML, this.menuBlock);
            }
          }),
          fixedHeightEditor,
          minHeightEditor,
          css()
        ]
      })
      const elemCSS: HTMLElement | null = document.querySelector('#css-editor pre code');
      if (elemCSS) {       
        this.viewCSS = new EditorView({
          state: this.startStateCSS,
          extensions: [
            css()
          ],
          parent: elemCSS
        })
      }
    }

    initSaver(){
    window.addEventListener("beforeunload",() => { setLocalStorage(this.level.levelOreder.toString())});

    window.addEventListener("load", () => {
      if(localStorage.getItem("level")){
        this.level.levelOreder = Number(localStorage.getItem("level"));
      }
    });
    }
}

export default App;
