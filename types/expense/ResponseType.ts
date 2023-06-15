import { BaseRes } from "../BaseRes";
import {
  ApprovalDTO,
  ExpenseProcessingStatusByCategory,
  SearchApprovalInfo,
} from "./types";

export interface GetExpenseProcessingStatusByCategoryRes extends BaseRes {
  data: ExpenseProcessingStatusByCategory;
}

export interface GetApprovalInfoRes extends BaseRes {
  data: ApprovalDTO;
}

export interface SearchApprovalInfoRes extends BaseRes {
  data: SearchApprovalInfo;
}
