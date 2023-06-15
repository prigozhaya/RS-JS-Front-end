import { Article } from "../../../model/model";

export interface INews {
  draw(data: Readonly<Array<Article>>): void;
}