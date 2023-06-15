import Approval from "@/components/widgets/Approval";
import { Spacer } from "@nextui-org/react";
import React, { SetStateAction, useRef, useState } from "react";
import style from "./ReceiptInput.module.css";
import Image from "next/image";
import { PaymentHistoryInfo } from "@/types/payment/types";
import Swal from "sweetalert2";
import CategorySelectBox from "@/components/select/categorySelect";
import { UploadReceiptImage } from "@/service/receipt/ReceiptService";
import { getFormattedDateFromLocalDateTime } from "@/utils/dateUtils";
import ModalContainer from "@/components/modal/modalContainer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UploadReceiptImageReq } from "@/types/receipt/RequestType";

interface Props {
  open: boolean;
  onClose: React.Dispatch<SetStateAction<boolean>>;
  paymentHistory: PaymentHistoryInfo;
  resend: boolean;
}

export default function ReceiptRegisterModal({
  open,
  onClose,
  paymentHistory,
  resend,
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageBlob, setImageBlob] = useState<File>();
  const [categoryId, setCategoryId] = useState<number>(0);
  const queryClient = useQueryClient();

  const { mutate } = useMutation((req: UploadReceiptImageReq) =>
    UploadReceiptImage(req)
  );

  const readImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e: ProgressEvent<FileReader>) => {
        if (!e || !e.target) return;
        if (typeof e.target.result === "string" && imgRef.current) {
          imgRef.current.src = e.target.result as string;
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
      confirmButtonColor: "var(--bibot-primary)",
      cancelButtonColor: "var(--bibot-secondary)",
    }).then((res) => {
      if (res.isConfirmed) {
        mutate(
          {
            file: imageBlob!!,
            cardId: paymentHistory.cardId,
            categoryId: categoryId,
            paymentId: paymentHistory.id,
            regTime: paymentHistory.regTime,
          },
          {
            onSuccess: () => {
              Swal.fire({
                title: "Success!",
                text: "전송 되었습니다.",
                icon: "success",
                timer: 5000,
                showConfirmButton: false,
                showDenyButton: false,
                showCancelButton: false,
              }).then(() => {
                if (resend) {
                  queryClient.invalidateQueries(["searchApprovalInfo"]);
                } else {
                  queryClient.invalidateQueries(["searchPaymentHistory"]);
                }
                onClose(false);
              });
            },
            onError: () => {
              Swal.fire({
                title: "fail!",
                text: "에러가 발생했습니다.",
                icon: "error",
                timer: 5000,
              });
            },
          }
        );
      }
    });
  };

  return (
    <>
      {open && (
        <ModalContainer>
          <header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "70px",
            }}
          >
            <div></div>
            <h4
              style={{
                textAlign: "center",
                color: "var(--bibot-primary)",
                margin: "0",
              }}
            >
              영수증 등록
            </h4>
            <Image
              src="/assets/images/icons/cancelMint.svg"
              alt="cancelIcon"
              width={20}
              height={20}
              onClick={() => onClose(false)}
            />
          </header>
          <Approval
            paymentDestination={paymentHistory.paymentDestination}
            regTime={getFormattedDateFromLocalDateTime(paymentHistory.regTime)}
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
            <Spacer y={1} />
          </div>
        </ModalContainer>
      )}
    </>
  );
}
