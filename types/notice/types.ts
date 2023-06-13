export interface NoticeDTO {
  id: number;
  title: string;
  content: string;
  type: string;
  createdBy: string;
  modifiedBy: string;
  regTime: string;
  updateTime: string;
}

export interface NoticeInfo {
  id: number;
  title: string;
  content: string;
  type: string;
  regTime: string;
}

export interface SearchNoticeResult {
  content: NoticeDTO[];
  pageNo: number;
  last: boolean;
  totalPage: number;
  totalElement: number;
}
