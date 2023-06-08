import Approval from "@/components/widgets/Approval";
import { ReceiptType } from "@/types/receipt/receiptType";
import { Spacer, Button, Modal } from "@nextui-org/react";
import React, { SetStateAction, useRef, useState } from "react";
import style from "./ReceiptInput.module.css";
import Image from "next/image";
import { PaymentHistoryInfo } from "@/types/payment/types";
import RegistModal from "@/components/modal/cardUsedList/RegistModal";

interface Props {
  open: boolean;
  onClose: React.Dispatch<SetStateAction<boolean>>;
  paymentHistory: PaymentHistoryInfo;
}

export default function ReceiptRegisterModal({
  open,
  onClose,
  paymentHistory,
}: Props) {
  const [imgUrl, setImgUrl] = useState<string>();
  const imgRef = useRef<HTMLImageElement>(null);
  const [isModal, setIsModal] = useState<boolean>(false);

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

  const handleSubmit = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <RegistModal isModalOpen={isModal} setIsModalOpen={setIsModal} onClose={onClose} />
      <Modal
        closeButton open={open}
        onClose={() => onClose(false)}
        css={{ zIndex: 100 }}
      >
        <Modal.Header>
          <Approval
            paymentDestination={paymentHistory.paymentDestination}
            regTime={paymentHistory.regTime}
          />
        </Modal.Header>
        <Modal.Body>
          <Spacer y={1} />
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
            ) : <>
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
              <Spacer y={1} />
              <div className={style.registerBtn}>
                <Button onPress={handleSubmit} size={"lg"}>등록하기</Button>
              </div>
            </>}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
