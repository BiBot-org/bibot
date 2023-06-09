import Approval from "@/components/widgets/Approval";
import { Spacer, Button, Modal } from "@nextui-org/react";
import React, { SetStateAction, useRef, useState } from "react";
import style from "./ReceiptInput.module.css";
import Image from "next/image";
import { PaymentHistoryInfo } from "@/types/payment/types";
import Swal from "sweetalert2";
import BackButton from "@/components/button/BackButton";
import { useGetCategoryList } from "@/service/category/CategoryService";
import CategorySelectBox from "@/components/select/categorySelect";
import { UploadReceiptImage } from "@/service/receipt/ReceiptService";

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
  const [imageBlob, setImageBlob] = useState<File>();
  const [categoryId, setCategoryId] = useState<number>(0);

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
      setImageBlob(imageFile);
      reader.readAsDataURL(imageFile);
    }
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(Number(e.target.value));
  };

  const handleSubmit = () => {
    Swal.fire({
      text: "전송 하시겠습니까?",
      icon: "question",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        UploadReceiptImage({
          file: imageBlob!!,
          cardId: paymentHistory.cardId,
          categoryId: categoryId,
          paymentId: paymentHistory.id,
        });
        Swal.fire({
          title: "Success!",
          text: "전송 되었습니다.",
          icon: "success",
        }).then(() => {
          onClose(false);
        });
      }
    });
  };

  return (
    <>
      {open && (
        <div className={style.modalContainer}>
          <div
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
            onClick={() => onClose(false)}
          >
            <BackButton />
          </div>
          <Approval
            paymentDestination={paymentHistory.paymentDestination}
            regTime={paymentHistory.regTime}
          />

          <p className={style.uploadText}>영수증 사진을 업로드 해주세요.</p>
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

            <Spacer y={1} />
            <div className={style.categorySel}>
              <select name="category" onChange={onChangeSelect}>
                <CategorySelectBox />
              </select>
            </div>
            <Spacer y={1} />
            <div className={style.btnContainer}>
              <button className={style.registerBtn} onClick={handleSubmit}>
                등록하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
