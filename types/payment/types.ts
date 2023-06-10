export interface PaymentHistoryDTO {
  id: string;
  cardId: number;
  paymentDestination: string;
  amount: number;
  approvalId?: string;
  requested: boolean;
}

export interface PaymentHistoryInfo extends PaymentHistoryDTO {
  cardCompany: string;
  cardNo: string;
  regTime: string;
}

export interface SearchPaymentHistoryInfo {
  content: PaymentHistoryInfo[];
  pageNo: number;
  last: boolean;
  totalPages: number;
  totalElements: number;
}
