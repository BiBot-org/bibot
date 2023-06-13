import { useGetReceiptInfoByApprovalId } from "@/service/receipt/ReceiptService";
import { Collapse, Spacer, Table } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import ResendOcrModal from "./ResendOcrModal";
import ReceiptResendDetail from "./ReceiptResendDetail";
interface Prop {
  approvalId: string;
  status: string;
}

export default function ReceiptInfoDetail({ approvalId, status }: Prop) {
  const columns = [
    { key: "item", label: "품명" },
    { key: "price", label: "가격" },
    { key: "count", label: "갯수" },
    { key: "amount", label: "총 가격" },
  ];

  const [isResendModalOpen, setIsResendModalOpen] = useState<boolean>(false);
  const { isLoading, data, isError } =
    useGetReceiptInfoByApprovalId(approvalId);

  return (
    <>
      {!isLoading && !isError && (
        <>
          <ResendOcrModal
            isResendModalOpen={isResendModalOpen}
            setIsResendModalOpen={() => setIsResendModalOpen(false)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 2rem",
            }}
          >
            <Collapse.Group style={{ padding: "0" }}>
              {data.data.imageUrl && (
                <Collapse title="영수증 이미지">
                  <Image
                    aria-label="영수증"
                    src={data?.data.imageUrl!}
                    width={319}
                    height={100}
                    alt="영수증"
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </Collapse>
              )}
              {data.data.ocrResult && (
                <Collapse title="영수증 분석 정보">
                  <Table aria-label="영수증 정보" shadow={false} style={{padding:'0'}}>
                    <Table.Header columns={columns}>
                      {(column) => (
                        <Table.Column align="center" key={column.key}>
                          {column.label}
                        </Table.Column>
                      )}
                    </Table.Header>
                    <Table.Body>
                      {data.data.ocrResult.items.map((item, idx) => (
                        <Table.Row key={`${idx}`}>
                          <Table.Cell css={{ textAlign: "center" }}>
                            {item.name}
                          </Table.Cell> 
                          <Table.Cell css={{ textAlign: "center" }}>
                            {Number(item.price).toLocaleString()}
                          </Table.Cell>
                          <Table.Cell css={{ textAlign: "center" }}>
                            {item.count}
                          </Table.Cell>
                          <Table.Cell css={{ textAlign: "center" }}>
                            {(Number(item.price) * Number(item.count)).toLocaleString()}
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </Collapse>
              )}
            </Collapse.Group>
            <Spacer y={1} />
            {status === "REJECTED" && (
              <ReceiptResendDetail approvalId={approvalId} />
            )}
          </div>
        </>
      )}
    </>
  );
}
