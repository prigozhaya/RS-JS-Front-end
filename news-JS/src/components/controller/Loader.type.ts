import { CommonResponse, EndpointObject } from "../../model/model";

export interface ILoader {
  getResp({ endpoint, options }: EndpointObject, callback: (data: Partial<CommonResponse>) => void): void;
}