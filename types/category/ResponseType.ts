import { BaseRes } from "../BaseRes";
import { CategoryDTO } from "./types";

export interface getCategoryListRes extends BaseRes {
  data: CategoryDTO[];
}
