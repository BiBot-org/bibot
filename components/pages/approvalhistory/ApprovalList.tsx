import React, { useEffect, useRef, useState } from "react";
import style from "./ApprovalList.module.css";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import ApprovalItem from "@/components/ui/approvalhistory/ApprovalItem";
import { approvalList } from "@/datas/dummy/approvalListData";
import { SearchApprovalInfoReq } from "@/types/expense/RequestType";
import { calculateThreeMonthAgo } from "@/utils/dateUtils";
import { useSearchApprovalInfo } from "@/service/expense/ExpenseService";
import ApprovalListItem from "./ApprovalListItem";
import CategorySelectBox from "@/components/select/categorySelect";

export default function ApprovalList() {
  const [approvalItems, setApprovalItems] = useState([]);
  const [searchParam, setSearchParam] = useState<SearchApprovalInfoReq>({
    startDate: calculateThreeMonthAgo(new Date().toISOString().slice(0, 10)),
    endDate: new Date().toISOString().slice(0, 10),
    page: 0,
  });
  const loding = useRef<boolean>(false);
  const [page, setPage] = useState({ current: 1, total: 0 });

  const { isLoading, data } = useSearchApprovalInfo(searchParam);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section>
      <div className={style.dateWrap}>
        <Input
          aria-label="startDate"
          type="date"
          value={searchParam.startDate}
          max={today}
        />
        <span>-</span>
        <Input
          aria-label="endDate"
          type="date"
          value={searchParam.endDate}
          max={today}
        />
      </div>
      <div className={style.approval_menu}>
        {!isLoading && <p>{data?.data.totalElements}건</p>}
        <div className={style.approval_menu_icon}>
          <Image
            src="assets/images/icons/list.svg"
            alt="list"
            width={15}
            height={15}
          />
          <select>
            <CategorySelectBox />
          </select>
        </div>
        <div className={style.approval_menu_icon}>
          <Image
            src="assets/images/icons/list.svg"
            alt="list"
            width={15}
            height={15}
          />
          <select>
            <option>최신순</option>
            <option>기간순</option>
          </select>
        </div>
      </div>
      {!isLoading &&
        data?.data.content.map((approval) => (
          <ApprovalItem key={approval.id} item={approval} />
        ))}
    </section>
  );
}
