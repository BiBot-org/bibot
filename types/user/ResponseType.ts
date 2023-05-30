import { BaseRes } from "../BaseRes";
import { BibotUserDTO, BibotUserInfo } from "./types";

export interface GetUserRes extends BaseRes {
  data: BibotUserDTO;
}

export interface GetUserInfoRes extends BaseRes {
  data: BibotUserInfo;
}
