import React from "react";
import { Spacer } from "@nextui-org/react";
import BackTitleLayout from "@/components/layouts/BackTitleLayout";
import Account from "@/components/pages/mypage/Account";
import Service from "@/components/pages/mypage/Service";
import Setting from "@/components/pages/mypage/Setting";

export default function Mypage() {

  return (
    <>
      <main>
        <Account />
        <Spacer y={1} />
        <Service />
        <Spacer y={2} />
        <Setting />
      </main>
    </>
  );
}

Mypage.getLayout = function getLayout(page: React.ReactNode) {
  return <BackTitleLayout title="MyPage">{page}</BackTitleLayout>;
};

Mypage.auth = true;
