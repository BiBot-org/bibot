import React, { useState } from "react";
import style from "./CardUsedItem.module.css";
import { useRouter } from "next/router";
import ReceiptRegisterModal from "@/components/pages/receiptregister/ReceiptInputModal";
import { PaymentHistoryInfo } from "@/types/payment/types";
import { getFormattedDateTimeFromLocalDateTime } from "@/utils/dateUtils";

interface Props {
  paymentHistory: PaymentHistoryInfo;
}

export default function CardUsedItem({ paymentHistory }: Props) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (paymentHistory.requested) {
      router.push(`/viewreceipt/${1}`);
    } else {
      setModalOpen(true);
    }
  };

  const requestStyle = {
    textDecoration: paymentHistory.requested ? "line-through" : "none",
  };

  return (
    <>
      <ReceiptRegisterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        paymentHistory={paymentHistory}
      />
      <div
        className={style.card_used_list}
        onClick={handleClick}
      >
        <div className={style.usedItemInfo}>
          {}
          <div className={style.category}
          style={{backgroundColor: paymentHistory.requested ? 'var(--bibot-primary)' : 'var(--bibot-secondary)' }}>
            <p>{paymentHistory.requested === true ? "승인" : "미승인"}</p>
          </div>
          <div className={style.useInfo}>
            <p 
            style={requestStyle}>
              {paymentHistory.paymentDestination}
              </p>
            <p>
              {getFormattedDateTimeFromLocalDateTime(paymentHistory.regTime)}
            </p>
          </div>
        </div>
        <div className={style.price}>
          <p>{paymentHistory.amount.toLocaleString()}원</p>
        </div>
      </div>
    </>
  );
}
