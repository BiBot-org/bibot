import React from "react";
import style from "@/styles/pages/Home.module.css";
import CategoryNav from "@/components/widgets/main/CategoryNav";
import Layout from "@/components/layouts/layout";
import AnnounceMent from "@/components/widgets/main/AnnounceMent";

export default function Main() {
  return (
    <div className={style.mainContainer}>
      <CategoryNav />
      <AnnounceMent />
    </div>
  );
}

Main.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <Layout title="main">{page}</Layout>
    </>
  );
};

Main.auth = true;
