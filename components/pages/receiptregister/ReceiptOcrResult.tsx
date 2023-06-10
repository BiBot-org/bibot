import { OCRResponse, ReceiptType } from "@/types/receipt/receiptType";
import { Spacer, Table } from "@nextui-org/react";
import style from "./ReceiptInput.module.css";
import { PaymentHistoryInfo } from "@/types/payment/types";

const columns = [
  { key: "name", label: "항목" },
  { key: "count", label: "갯수" },
  { key: "price", label: "가격" },
];

const rows: ReceiptType[] = [
  { key: "1", item: "만두국", count: 1, price: 8000 },
  { key: "2", item: "쇠고기해장국", count: 2, price: 8000 },
];

interface Prop {
  ocrResponse?: OCRResponse;
  paymentHistory: PaymentHistoryInfo;
}

export default function ReceiptOcrResult({
  ocrResponse,
  paymentHistory,
}: Prop) {
  return (
    <>
      {ocrResponse && (
        <>
          <Table aria-label="영수증 정보" style={{ padding: "0 2rem" }}>
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column align="center" key={column.key}>
                  {column.label}
                </Table.Column>
              )}
            </Table.Header>
            <Table.Body items={ocrResponse.items}>
              {(item) => (
                <Table.Row key={item.name}>
                  <Table.Cell css={{ textAlign: "center" }}>
                    {item.name}
                  </Table.Cell>
                  <Table.Cell css={{ textAlign: "center" }}>
                    {item.count}
                  </Table.Cell>
                  <Table.Cell css={{ textAlign: "center" }}>
                    {item.price}
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
          <Spacer y={1} />
          <div className={style.amountDiv}>
            <h4>
              총 합 :{" "}
              {ocrResponse.items.reduce(
                (prev, now) => prev + Number(now.price) * Number(now.count),
                0
              )}
              원
            </h4>
          </div>
          <Spacer y={1} />
          {ocrResponse.items.length !== 0 &&
            paymentHistory.amount ===
              ocrResponse.items.reduce(
                (prev, now) => prev + Number(now.price) * Number(now.count),
                0
              ) && (
              <div className={style.btnContainer}>
                <button className={style.registerBtn}>등록하기</button>
              </div>
            )}
        </>
      )}
    </>
  );
}
