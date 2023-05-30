export interface SearchPaymentHistoryReq {
  cardId: number;
  startDate: Date;
  endDate: Date;
  page: number;
}
