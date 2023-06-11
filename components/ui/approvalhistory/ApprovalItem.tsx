import React, { useState } from "react";
import style from "./ApprovalItem.module.css";
import Image from "next/image";
import { approvalIcon, approvalStatusBC } from "@/datas/approval/approvalItem";
import { SearchApproval } from "@/types/expense/types";
import { useGetCategoryById } from "@/service/category/CategoryService";
import ViewInfoDetailModal from "@/components/pages/viewreceiptsecond/ViewStatusDetailModal";
import { getFormattedDateTimeFromLocalDateTime } from "@/utils/dateUtils";

export default function ApprovalItem(props: { item: SearchApproval }) {
  const item = props.item;
  const { isLoading, data } = useGetCategoryById(item.categoryId);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const itemStyle = {
    backgroundColor: approvalStatusBC[item.status] || "var(--bibot-primary)",
  };
  return (
    <>
      {!isLoading && (
        <>
          <ViewInfoDetailModal
            approval={item}
            open={modalOpen}
            setOpen={setModalOpen}
          />
          <div
            className={style.approvalListWrap}
            onClick={() => setModalOpen(true)}
          >
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
                <p>{getFormattedDateTimeFromLocalDateTime(item.regTime)}</p>
                <p>{item.id}</p>
              </div>
              <div className={style.itemStatus} style={itemStyle}>
                <p>{data?.data.categoryName}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
