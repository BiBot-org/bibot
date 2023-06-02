export interface PaymentHistoryDTO {
  id: string;
  cardId: number;
  paymentDestination: string;
  amount: number;
  approvalId?: string;
  isRequested: boolean;
}

export interface SearchPaymentHistoryInfo {
  content: PaymentHistoryDTO[];
  pageNo: number;
  isLast: boolean;
  totalPages: number;
  totalElements: number;
}
