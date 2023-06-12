import React from "react";
import Image from "next/image";
import style from "@/components/ui/mypage/AccountProfile.module.css";

export default function AccountProfile(props: {
  imageUrl: string;
  name: string;
  company: string;
  email: string;
}) {
  return (
    <div className={style.accountWrap}>
      <div className={style.accountImage}>
        <Image
          src={props.imageUrl ? props.imageUrl : "/assets/images/icons/emptyprofile.svg"}
          alt={props.name}
          width={70}
          height={70}
          priority
        />
      </div>
      <div className={style.accountInfo}>
        <p>{props.name}</p>
        <p>{props.company}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
