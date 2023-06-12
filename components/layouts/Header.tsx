import React, { useEffect, useState } from "react";
import style from "@/components/layouts/Header.module.css";
import HeaderProfile from "./defaultHeader/HeaderProfile";
import HeaderNotiMenu from "./defaultHeader/HeaderNotiMenu";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  return (
    <header
      className={
        scroll ? `${style.defaultHeader} ${style.close}` : style.defaultHeader
      }
    >
      <HeaderProfile />
      <HeaderNotiMenu />
    </header>
  );
}
