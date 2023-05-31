export interface SearchPaymentHistoryReq {
  cardId?: number;
  startDate: string;
  endDate: string;
  page: number;
}
