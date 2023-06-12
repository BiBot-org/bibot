import ExitButton from "@/components/button/ExitButton";
import style from "./ViewStatusDetail.module.css";
import Image from "next/image";
import { Spacer } from "@nextui-org/react";
import { SetStateAction, useState } from "react";
import { OCRResponse } from "@/types/receipt/receiptType";

interface Props {
  isResendModalOpen: boolean;
  setIsResendModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ResendOcrModal({
  isResendModalOpen,
  setIsResendModalOpen,
}: Props) {
  const [ocrResponse, setOcrResponse] = useState<OCRResponse>(
    {} as OCRResponse
  );

  return (
    <>
      {isResendModalOpen && (
        <div className={style.resendModalContainer}>
          <div
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}
            onClick={() => setIsResendModalOpen(false)}
          >
            <ExitButton />
          </div>
          <Spacer y={4} />
          <p className={style.uploadText}>영수증 사진을 업로드 해주세요.</p>
          <div className={style.emptyReceiptWrap}>
            <label className={style.emptyReceiptBg} htmlFor="input-image">
              <Image
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
              style={{ display: "none" }}
            />

            <Spacer y={1} />
          </div>
        </div>
      )}
    </>
  );
}
