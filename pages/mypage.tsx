import React from "react";
import BackTitleLayout from "@/components/layouts/BackTitleLayout";
import MypageContent from "@/components/pages/mypage/mypage-contents";

export default function Mypage() {
  return (
    <>
      <main>
        <MypageContent />
      </main>
    </>
  );
}

Mypage.getLayout = function getLayout(page: React.ReactNode) {
  return <BackTitleLayout title="MyPage">{page}</BackTitleLayout>;
};

Mypage.auth = true;
