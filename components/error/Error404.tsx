"use client";
import style from "@/styles/pages/index.module.css";
import Image from "next/image";

export default function Error404() {
  return (
    <div className={style.logo}>
      <Image
        src="/assets/images/icons/logo_notfound.svg"
        alt="logo"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
