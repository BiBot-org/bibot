import { BaseRes } from "../BaseRes";
import { NoticeDTO, SearchNoticeResult } from "./types";

export interface GetNoticeRes extends BaseRes {
  data: NoticeDTO;
}
export interface GetNoticeMainRes extends BaseRes {
  data: NoticeDTO[];
}

export interface SearchNoticeRes extends BaseRes {
  data: SearchNoticeResult;
}
