export interface ExpenseProcessingStatusByCategory {
  limitation: number;
  expenseUsed: number;
}

export interface ApprovalDTO {
  id: string;
  managerId: string;
  requesterId: string;
  status: string;
  comment: string;
  isAutomated: boolean;
}

export interface SearchApproval extends ApprovalDTO {
  regTime: string;
  categoryId: number;
}

export interface SearchApprovalInfo {
  content: SearchApproval[];
  pageNo: number;
  isLast: boolean;
  totalPages: number;
  totalElements: number;
}
