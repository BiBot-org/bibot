export interface UploadReceiptImageReq {
  file: File;
  cardId: number;
  categoryId: number;
  paymentId: string;
  regTime: string;
}

export interface UploadReceiptReq {
  file: File;
  regTime: string;
}
