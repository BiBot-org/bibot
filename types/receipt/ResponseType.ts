import { BaseRes } from "../BaseRes";
import { OCRResponse } from "./receiptType";

export interface GetOcrResultRes extends BaseRes {
  data: OCRResponse;
}
