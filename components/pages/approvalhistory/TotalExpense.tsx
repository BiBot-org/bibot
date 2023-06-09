import React from "react";
import style from "./TotalExpense.module.css";
import { useGetAllExpenseProcessingStatus } from "@/service/expense/ExpenseService";

export default function TotalExpense() {
  const { isLoading, data } = useGetAllExpenseProcessingStatus();

  return (
    <>
      {" "}
      {!isLoading && (
        <div className={style.approval_details_list}>
          <div className={style.approval_did}>
            <p>지금까지 신청한 경비</p>
            <p>{data?.data.expenseUsed}</p>
          </div>
          <div className={style.approval_will}>
            <p>앞으로 신청 가능한 경비</p>
            <p>{data?.data.limitation! - data?.data.expenseUsed!}</p>
          </div>
        </div>
      )}
    </>
  );
}
