import { BaseRes } from "../BaseRes";
import { NoticeDTO } from "./types";

export interface GetNoticeMainRes extends BaseRes {
  data: NoticeDTO[];
}
