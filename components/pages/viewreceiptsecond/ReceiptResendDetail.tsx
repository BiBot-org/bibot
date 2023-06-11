import style from "./ViewStatusDetail.module.css";
import { useState } from "react";
import { useGetPaymentHistoryByApprovalId } from "@/service/payment/PaymentService";
import ReceiptRegisterModal from "../receiptregister/ReceiptInputModal";

interface Props {
  approvalId: string;
}

export default function ReceiptResendDetail({ approvalId }: Props) {
  const [isResendModalOpen, setIsResendModalOpen] = useState<boolean>(false);
  const { isLoading, data, isError } =
    useGetPaymentHistoryByApprovalId(approvalId);
  return (
    <>
      {!(isLoading || isError) && (
        <>
          <ReceiptRegisterModal
            open={isResendModalOpen}
            onClose={() => setIsResendModalOpen(false)}
            paymentHistory={data.data}
          />
          <button
            className={style.registerBtn}
            onClick={() => setIsResendModalOpen(true)}
          >
            재등록
          </button>
        </>
      )}
    </>
  );
}
