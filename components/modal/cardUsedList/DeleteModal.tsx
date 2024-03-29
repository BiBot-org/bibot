import React from "react";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import style from "./DeleteModal.module.css";
import { useRouter } from "next/router";
import { DeleteCard } from "@/service/card/CardService";
import Swal from "sweetalert2";

export default function DeleteModal(props: {
  ismodalopen: boolean;
  handlemodal: React.Dispatch<React.SetStateAction<boolean>>;
  cardId: number;
}) {
  const router = useRouter();
  if (!props.ismodalopen) return null;

  const handleDeleteCard = () => {
    DeleteCard(props.cardId)
      .then(() => {
        props.handlemodal(!props.ismodalopen);
        router.push("/cardusedlist");
      })
      .catch(() => {
        Swal.fire({
          text: "에러가 발생했습니다.",
          icon: "error",
          confirmButtonColor: "var(--bibot-primary)",
        });
      });
  };

  return (
    <>
      <div className={style.modalBackground} onClick={()=>props.handlemodal(!props.ismodalopen)}>
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
              <p>카드를 삭제 하시겠습니까?</p>
            </div>
            <Spacer y={1} />
            <div className={style.contentsBtn}>
              <button
                className={style.checkBtn}
                onClick={handleDeleteCard}
              >
                늬예 늬예
              </button>
              <button
                className={style.cancelBtn}
                onClick={() => props.handlemodal(!props.ismodalopen)}
              >
                응 아니야
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
