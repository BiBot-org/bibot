import React, { useRef, useState } from "react";
import Approval from "@/components/widgets/Approval";
import Image from "next/image";
import style from "@/styles/pages/receiptregister.module.css";
import ReceiptItem from "@/components/ui/receiptregister/ReceiptItem";
import BackTitleLayout from "@/components/layouts/BackTitleLayout";
import { Button, Spacer } from "@nextui-org/react";

export default function ReceiptRegister() {
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

  return (
    <>
      <main className={style.mainContainer}>
        <Approval />
        <div className={style.emptyReceiptWrap}>
          <label className={style.emptyReceiptBg} htmlFor="input-image">
            <Image
              ref={imgRef}
              src="/assets/images/emptyborder.svg"
              alt="borderCameraIcon"
              width={319}
              height={319}
            />
          </label>
          {/* <Image
                        ref={imgRef}
                        src='/assets/images/icons/emptyReceipt.svg'
                        alt='emptyReceipt'
                        width={200}
                        height={200}
                        priority={true}
                        id = 'preview-image'
                    /> */}
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
            <Spacer y={3} />
            <div className={style.ReceiptOCRWrap}>
              <div className={style.ReceiptOCRHeader}>
                <h4>Payment Details</h4>
              </div>
              <div className={style.ReceiptOCRDetails}>
                <ReceiptItem />
                <ReceiptItem />
                <ReceiptItem />
                <ReceiptItem />
                <ReceiptItem />
              </div>
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
            <Spacer y={5} />
            <div className={style.registerBtn}>
              <Button disabled={imgRef.current ? false : true} size={"lg"}>
                등록하기
              </Button>
            </div>
          </>
        ) : null}
      </main>
    </>
  );
}

ReceiptRegister.getLayout = function getLayout(page: React.ReactElement) {
  return <BackTitleLayout title="영수증 등록">{page}</BackTitleLayout>;
};

ReceiptRegister.auth = true;
