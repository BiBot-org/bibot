import React from "react";
import style from "@/components/widgets/Approval.module.css";
import Image from "next/image";

interface Prop {
  paymentDestination: string;
  regTime: string;
}

export default function Approval({ paymentDestination, regTime }: Prop) {
  return (
    <div className={style.modalContent}>
      <div className={style.ContentImage}>
        <Image
          src={"/assets/images/icons/question.svg"}
          alt={"Food"}
          width={25}
          height={25}
        />
      </div>
      <div className={style.ContentInfo}>
        <p>{paymentDestination}</p>
        <p>{regTime.toLocaleString()}</p>
      </div>
    </div>
  );
}
