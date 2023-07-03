import { Level } from "../types";

class CssEditor {
  lvl: Level;
  constructor() {
    this.lvl = {lv: 1}
  }

    init(level: object) {
      const elem : HTMLElement | null= document.getElementById('css-editor');
      if (elem) {
          console.log(level)
          console.log(elem)
      }
      
    }
}

export default CssEditor;