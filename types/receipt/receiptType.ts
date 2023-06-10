export interface ReceiptType {
  key: string;
  item: string;
  count?: number;
  price: number;
}

export interface OCRResponse {
  storeInfo: StoreInfoRes;
  paymentInfo: PaymentInforRes;
  items: PurchasedItem[];
  totalPrice: string;
}

export interface StoreInfoRes {
  storeName?: string;
  bizNum?: string;
  address?: string[];
}

export interface PaymentInforRes {
  date: string;
  time: string;
}

export interface PurchasedItem {
  name: string;
  count: string;
  price: string;
}
