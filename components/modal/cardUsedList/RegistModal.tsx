import { Spacer, Button } from "@nextui-org/react";
import router from "next/router";
import React from "react";
import style from "./RegistModal.module.css";
import Image from "next/image";

export default function RegistModal(props: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  if (!props.isModalOpen) return null;
  return (
    <div className={style.modalBackground}>
      <div className={style.modalWrap}>
        <div className={style.modalHeader}>
          <Image
            src="/assets/images/icons/positivelogo.svg"
            alt="positivelogo"
            width={40}
            height={40}
          />
        </div>
        <Spacer y={0.5} />
        <div className={style.modalContents}>
          <div className={style.modalText}>
            <p>영수증을 등록하시겠습니까?</p>
          </div>
          <Spacer y={1} />
          <div className={style.contentsBtn}>
            <Button
              auto
              className={style.checkBtn}
              onPress={() => {
                props.setIsModalOpen(!props.isModalOpen);
                props.onClose(false);
                router.push("/cardusedlist");
              }}
            >
              YES
            </Button>
            <Button
              auto
              className={style.cancelBtn}
              onPress={() => props.setIsModalOpen(!props.isModalOpen)}
            >
              NO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
