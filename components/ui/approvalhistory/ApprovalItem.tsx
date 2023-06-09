import React from "react";
import style from "./ApprovalItem.module.css";
import Image from "next/image";
import { approvalIcon, approvalStatusBC } from "@/datas/approval/approvalItem";
import { SearchApproval } from "@/types/expense/types";
import { useGetCategoryById } from "@/service/category/CategoryService";

export default function ApprovalItem(props: { item: SearchApproval }) {
  const item = props.item;
  const { isLoading, data } = useGetCategoryById(item.categoryId);

  const itemStyle = {
    backgroundColor: approvalStatusBC[item.status] || "var(--bibot-primary)",
  };
  return (
    <>
      {!isLoading && (
        <div className={style.approvalListWrap}>
          <div className={style.itemIcon} style={itemStyle}>
            <Image
              src={approvalIcon[item.status]}
              alt="return"
              width={30}
              height={30}
            />
          </div>
          <div className={style.itemInfoWrap}>
            <div className={style.itemInfo}>
              <p>{item.id}</p>
              <p>{item.regTime}</p>
            </div>
            <div className={style.itemStatus} style={itemStyle}>
              <p>{data?.data.categoryName}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
