import React, { SetStateAction } from "react";
import { ReceiptType } from "@/types/receipt/receiptType";
import ApprovalDetail from "@/components/widgets/AprrovalDetail";
import ModalContainer from "@/components/modal/modalContainer";
import BackButton from "@/components/button/BackButton";
import { SearchApproval } from "@/types/expense/types";
import ReceiptInfoDetail from "./ReceiptInfoDetail";
import PaymentInfoDetail from "./PaymentInfoDetail";

interface Props {
  approval: SearchApproval;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ViewInfoDetailModal({
  approval,
  open,
  setOpen,
}: Props) {
  return (
    <>
      {open && (
        <ModalContainer>
          <div
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
            onClick={() => setOpen(false)}
          >
            <BackButton />
          </div>
          <article>
            <div style={{ padding: "1rem 1rem", overflow: "auto" }}>
              <ApprovalDetail approval={approval} />
            </div>
            <PaymentInfoDetail approval={approval} />
            <ReceiptInfoDetail
              approvalId={approval.id}
              status={approval.status}
            />
          </article>
        </ModalContainer>
      )}
    </>
  );
}
