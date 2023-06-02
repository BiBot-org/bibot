import React, { useState } from "react";
import style from "./CardUsedItem.module.css";
import { useRouter } from "next/router";

export default function CardUsedItem(props: {
  approvalId?: string;
  title: string;
  price: number;
  date: string;
  isRequested: boolean;
}) {
  const router = useRouter();

  const handleClick = () => {
    if (!props.isRequested) {
      router.push("/receiptregister");
    } else {
      router.push(`/viewreceipt/${1}`);
    }
  };

  const [categoryName, setCategoryName] = useState<string>("미승인");
  const backgroundStyle = {
    backgroundColor: props.isRequested ? "lightgray" : "transparent",
  };

  //   const categoryColor: Record<string, string> = {
  //     식비: "var(--bibot-primary)",
  //     유류비: "var(--bibot-secondary)",
  //     비품비: "#FFD28E",
  //     미승인: "#FFF6",
  //   };

  //   const categoryBackground = {
  //     backgroundColor: categoryColor[categoryName] || "var(--bibot-primary)",
  //   };

  return (
    <div
      className={style.card_used_list}
      onClick={handleClick}
      style={backgroundStyle}
    >
      <div className={style.usedItemInfo}>
        {}
        <div className={style.category}>
          <p>{categoryName}</p>
        </div>
        <div className={style.useInfo}>
          <p>{props.title}</p>
          <p>{props.date}</p>
        </div>
      </div>
      <div className={style.price}>
        <p>{props.price.toLocaleString()}원</p>
      </div>
    </div>
  );
}
