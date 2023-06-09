import React from "react";
import style from "@/styles/pages/Home.module.css";
import CategoryNav from "@/components/widgets/main/CategoryNav";
import Layout from "@/components/layouts/layout";
import AnnounceMent from "@/components/widgets/main/AnnounceMent";
import { mainCategoryType } from "@/types/main/mainTypes";
import { HeaderUserType } from "@/types/header/headerTypes";

export default function Main() {
  return (
    <main className={style.mainContainer}>
      <CategoryNav />
      <AnnounceMent />
    </main>
  );
}

Main.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

Main.auth = true;
