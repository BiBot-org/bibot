import React from "react";
import Image from "next/image";
import style from "./CardImage.module.css";

export default function CardImage(props: {
  name: string;
  cardNumber: string;
  valid: string;
}) {
  return (
    <>
      <div>
        <div className={style.cardContainer}>
          {/* <Image
            src="/assets/images/icons/registedcard.svg"
            alt="registered-card"
            width={327}
            height={200}
            priority
            style={{ width: "100%", height: "100%" }}
          /> */}
        </div>
        <div
          style={{
            color: "#fff",
            position: "absolute",
            top: "39%",
            left: "2rem",
          }}
        >
          <p>{props.name}</p>
          <p>{props.cardNumber}</p>
          <p>{props.valid}</p>
        </div>
      </div>
    </>
  );
}
