import { Source } from "../../../model/model";

export interface ISources {
  draw(data: Readonly<Array<Source>>): void;
}