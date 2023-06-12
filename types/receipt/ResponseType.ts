import { BaseRes } from "../BaseRes";
import { BibotReceiptDTO, OCRResponse } from "./receiptType";

export interface GetOcrResultRes extends BaseRes {
  data: OCRResponse;
}

export interface GetReceiptInfoRes extends BaseRes {
  data: BibotReceiptDTO;
}
