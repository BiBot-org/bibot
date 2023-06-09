export interface SearchApprovalInfoReq {
  startDate: string;
  endDate: string;
  status?: string;
  categoryId?: number;
  page: number;
}
