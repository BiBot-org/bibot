import { Input, Spacer, Text } from "@nextui-org/react";
import { SearchApproval } from "@/types/expense/types";
import { useGetPaymentHistoryByApprovalId } from "@/service/payment/PaymentService";
import ApprovalInfoDetail from "./ApprovalInfoDetail";

interface Props {
  approval: SearchApproval;
}

export default function PaymentInfoDetail({ approval }: Props) {
  const { isLoading, data, isError } = useGetPaymentHistoryByApprovalId(
    approval.id
  );

  return (
    <>
      {!(isLoading || isError) && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 2rem",
          }}
        >
          <Text h3>상세 정보</Text>
          <Spacer y={2.5} />
          <Input
            readOnly
            labelPlaceholder="상호명"
            value={data.data.paymentDestination}
          />
          {approval.managerId !== "" && (
            <ApprovalInfoDetail userId={approval.managerId} />
          )}
          {approval.comment !== "" && (
            <>
              <Spacer y={2.5} />
              <Input
                readOnly
                aria-multiline
                labelPlaceholder="사유"
                value={approval.comment}
              />
            </>
          )}

          <Spacer y={2.5} />
          <Input
            readOnly
            labelPlaceholder="경비 총합"
            value={data.data.amount}
          />
        </div>
      )}
    </>
  );
}
