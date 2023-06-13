import React from "react";
import HeaderBackBtn from "./backbtnHeader/HeaderBackBtn";
import style from "components/layouts/BackTitleLayout.module.css";
import { useRouter } from "next/router";
import ReceiptRegisterHelp from "../ui/receiptregister/ReceiptRegisterHelp";
import Footer from "./Footer";
import Head from "next/head";

export default function BackTitleLayout(props: {
  children: React.ReactNode;
  title: string;
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>BIBOT | {props.title}</title>
      </Head>
      <header className={style.Back_btn_title}>
        <div className={style.left}>
          <HeaderBackBtn />
        </div>
        <div className={style.center}>
          <p className={style.Back_btn_words}>{props.title}</p>
        </div>
        <div className={style.right}>
          {router.pathname === "/receipt_register" ? (
            <ReceiptRegisterHelp />
          ) : null}
        </div>
      </header>
      <div>{props.children}</div>
      <Footer />
    </>
  );
}
