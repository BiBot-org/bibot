import CardUsedItem from "@/components/ui/cardusedlist/CardUsedItem";
import React from "react";
import Image from "next/image";
import { Spacer, Table } from "@nextui-org/react";
import { ReceiptType } from "@/types/receipt/receiptType";

export default function ViewInfoDetail() {
  const columns = [
    { key: "item", label: "항목" },
    { key: "price", label: "가격" },
  ];

  const rows: ReceiptType[] = [
    { key: "1", item: "만두국", price: 8000 },
    { key: "2", item: "쇠고기해장국", price: 8000 },
  ];

  return (
    <article>
      <div>
        {/* <CardUsedItem
                    approvalId={'1234'}
                    title={'조선갈비탕'}
                    price={13000}
                    date={'2023-05-01'}
                    isRequested={false} /> */}
      </div>
      <div style={{ display: "flex" }}>
        <Image
          aria-label="영수증"
          src="/assets/images/dummy/receipt.jpg"
          width={319}
          height={319}
          alt="영수증"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
      <Spacer y={2} />
      <div>
        <Table aria-label="영수증 정보" style={{ padding: "0 2rem" }}>
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column align="center" key={column.key}>
                {column.label}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item) => (
              <Table.Row key={item.key}>
                {(columnKey) => (
                  <Table.Cell css={{ textAlign: "center" }}>
                    {item[columnKey as keyof ReceiptType]}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </article>
  );
}
