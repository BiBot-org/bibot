import { ApprovalDTO, SearchApproval } from "@/types/expense/types";
import style from "./ApprovalListItem.module.css";

interface Props {
  approval: SearchApproval;
}

export default function ApprovalListItem({ approval }: Props) {
  return (
    <>
      <div className={style.approval_history_list}>
        <div className={style.historyItemInfo}>
          <div className={style.category}>
            <p>{approval.status}</p>
          </div>
          <div className={style.historyInfo}>
            <p>{approval.categoryId}</p>
            <p>{approval.comment}</p>
          </div>
        </div>
      </div>
    </>
  );
}
