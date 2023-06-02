import { BaseRes } from "../BaseRes";
import { PaymentHistoryDTO, SearchPaymentHistoryInfo } from "./types";

export interface GetPaymentHistoryRes extends BaseRes {
  data: PaymentHistoryDTO;
}

export interface SearchPaymentHistoryRes extends BaseRes {
  data: SearchPaymentHistoryInfo;
}
