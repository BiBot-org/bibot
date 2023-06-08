"use client";
import Approval from "@/components/widgets/Approval";
import { ReceiptType } from "@/types/receipt/receiptType";
import { Spacer, Table, Button, Text } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import style from "./ReceiptInput.module.css";
import Image from "next/image";

export default function ReceiptInput() {
  const [imgUrl, setImgUrl] = useState<string>();
  const imgRef = useRef<HTMLImageElement>(null);

  const readImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e: ProgressEvent<FileReader>) => {
        if (!e || !e.target) return;
        if (typeof e.target.result === "string" && imgRef.current) {
          imgRef.current.src = e.target.result as string;
          setImgUrl(e.target.result as string);
        }
      });
      reader.readAsDataURL(imageFile);
    }
  };

  const columns = [
    { key: "item", label: "항목" },
    { key: "price", label: "가격" },
  ];

  const rows: ReceiptType[] = [
    { key: "1", item: "만두국", price: 8000 },
    { key: "2", item: "쇠고기해장국", price: 8000 },
    { key: "3", item: "뚝배기불고기", price: 8000 },
    { key: "4", item: "조선갈비탕", price: 13000 },
  ];
  return (
    <>
      <Approval />
      <Spacer y={3} />
      <div className={style.emptyReceiptWrap}>
        <label className={style.emptyReceiptBg} htmlFor="input-image">
          <Image
            ref={imgRef}
            src="/assets/images/icons/receiptresiter.svg"
            alt="borderCameraIcon"
            width={319}
            height={319}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </label>
        <input
          type="file"
          id="input-image"
          accept="image/*"
          onChange={(e) => readImage(e)}
          style={{ display: "none" }}
          disabled={imgRef.current ? true : false}
        />
        {imgRef.current === null ? (
          <p className={style.uploadText}>영수증 사진을 업로드 해주세요.</p>
        ) : null}
      </div>
      {imgRef.current ? (
        <>
          <div className={style.ReceiptOCRWrap}>
            <div className={style.ReceiptOCRHeader}>
              <Text h4 css={{ color: "var(--bibot-primary" }}>
                Payment Details
              </Text>
            </div>
            <Table aria-label="영수증 정보" style={{ padding: "0 2rem" }}>
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column
                    align="center"
                    key={column.key}
                    css={{ backgroundColor: "var(--bibot-primary" }}
                  >
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
            <Spacer y={1} />
            <div className={style.modifyBtn}>
              <Button size={"xs"}>수정</Button>
            </div>
            <Spacer y={1} />
            <div className={style.categorySel}>
              <select name="category">
                <option>카테고리를 선택해주세요.</option>
                <option value="식비">식비</option>
                <option value="교통비">교통비</option>
                <option value="문화비">문화비</option>
                <option value="유류비">유류비</option>
              </select>
            </div>
          </div>
          <div className={style.registerBtn}>
            <Button size={"lg"}>등록하기</Button>
          </div>
        </>
      ) : null}
    </>
  );
}
