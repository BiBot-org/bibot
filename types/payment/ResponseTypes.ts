import { BaseRes } from "../BaseRes";
import {
  PaymentHistoryDTO,
  PaymentHistoryInfo,
  SearchPaymentHistoryInfo,
} from "./types";

export interface GetPaymentHistoryRes extends BaseRes {
  data: PaymentHistoryDTO;
}

export interface GetPaymentHistoryInfoRes extends BaseRes {
  data: PaymentHistoryInfo;
}

export interface SearchPaymentHistoryRes extends BaseRes {
  data: SearchPaymentHistoryInfo;
}
