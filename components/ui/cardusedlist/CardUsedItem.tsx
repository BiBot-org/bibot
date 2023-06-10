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

  const backgroundStyle = {
    backgroundColor: paymentHistory.requested ? "lightgray" : "transparent",
  };

  //   const categoryColor: Record<string, string> = {
  //     식비: "var(--bibot-primary)",
  //     유류비: "var(--bibot-secondary)",
  //     비품비: "#FFD28E",
  //     미승인: "#FFF6",
  //   };

  //   const categoryBackground = {
  //     backgroundColor: categoryColor[categoryName] || "var(--bibot-primary)",
  //   };

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
        style={backgroundStyle}
      >
        <div className={style.usedItemInfo}>
          {}
          <div className={style.category}>
            <p>{paymentHistory.requested === true ? "승인" : "미승인"}</p>
          </div>
          <div className={style.useInfo}>
            <p>{paymentHistory.paymentDestination}</p>
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
