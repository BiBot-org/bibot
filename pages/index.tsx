/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import style from "@/styles/pages/index.module.css";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { workspaceState } from "@/state/company/WorkspaceState";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.logo}>
        <Image
          src="assets/images/icons/companyLogo.svg"
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
}
