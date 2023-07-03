import CssEditor from '../css-editor';
import HtmlViewer from '../html-viewer';
import MenuBlock from '../menu-block';
import TaskBlock from '../task-block';
import {EditorView} from "@codemirror/view";
import {basicSetup} from "codemirror";
import {EditorState, Compartment} from "@codemirror/state";
import {html} from "@codemirror/lang-html";
import {css} from "@codemirror/lang-css";

class App {
    cssEditor: CssEditor;
    htmlViewer: HtmlViewer;
    menuBlock: MenuBlock;
    taskBlock: TaskBlock;
    startStateHTML: EditorState | null;
    startStateCSS: EditorState | null;
    viewHTML: EditorView | null;
    viewCSS: EditorView | null;
    level: {lv:number};

    constructor() {
      this.cssEditor = new CssEditor;
      this.htmlViewer = new HtmlViewer;
      this.menuBlock = new MenuBlock;
      this.taskBlock = new TaskBlock;
      this.level = {lv: 1};
      this.startStateHTML = null;
      this.startStateCSS = null;
      this.viewHTML = null;
      this.viewCSS = null;
    }

    start() { 
      this.initEditors();
      this.cssEditor.init(this.level);
      this.htmlViewer.init(this.level, this.startStateHTML, this.viewHTML);
      this.menuBlock.init(this.level, this.taskBlock, this.htmlViewer, this.startStateHTML, this.viewHTML);
      this.taskBlock.init(this.level);
    }

    initEditors() {
      //HTML
      const tabSize = new Compartment;
      const fixedHeightEditor = EditorView.theme({
        "&": {height: "300px"},
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
      let elemHTML: HTMLElement | null;
      if (elemHTML = document.querySelector('#html-viewer pre code')) {       
        this.viewHTML = new EditorView({
          state: this.startStateHTML,
          extensions: [
            html()
          ],
          parent: elemHTML
        })
      }

      //CSS
      let flag = true;
      this.startStateCSS = EditorState.create({
        doc: `//asd
//asd
        asd
        asd
        asd
        `,
        extensions: [
          basicSetup,
          tabSize.of(EditorState.tabSize.of(2)),
          EditorView.updateListener.of(function(e) {
            let sync_val = e.state.doc.toString();
            if (flag && sync_val === 'asd') {
              alert('works');
              flag = false;
            }
          }),
          fixedHeightEditor,
          minHeightEditor,
          css()
        ]
      })
      let elemCSS: HTMLElement | null;
      if (elemCSS = document.querySelector('#css-editor pre code')) {       
        this.viewCSS = new EditorView({
          state: this.startStateCSS,
          extensions: [
            css()
          ],
          parent: elemCSS
        })
      }
    }
}

export default App;