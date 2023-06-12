import React, { SetStateAction } from "react";
import ApprovalDetail from "@/components/widgets/AprrovalDetail";
import ModalContainer from "@/components/modal/modalContainer";
import { SearchApproval } from "@/types/expense/types";
import ReceiptInfoDetail from "./ReceiptInfoDetail";
import PaymentInfoDetail from "./PaymentInfoDetail";
import Image from "next/image";

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
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '70px' }}>
            <div></div>
            <h4 style={{ textAlign: 'center', color: 'var(--bibot-primary)', margin: '0' }}>결재 상세 화면</h4>
            <Image
              src="/assets/images/icons/cancelMint.svg"
              alt="cancelIcon"
              width={20}
              height={20}
              onClick={() => setOpen(false)}
            />
          </header>
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
