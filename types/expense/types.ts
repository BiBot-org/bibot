export interface ExpenseProcessingStatusByCategory {
  limitation: number;
  expenseUsed: number;
}

export interface SearchApprovalInfo {
  content: ApprovalDTO[];
  pageNo: number;
  isLast: boolean;
  totalPages: number;
  totalElements: number;
}

export interface ApprovalDTO {
  id: string;
  managerId: string;
  requesterId: string;
  status: string;
  comment: string;
}
