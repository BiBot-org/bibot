import LoginUrlSetLayout from "@/components/layouts/LoginUrlSetLayout";
import React from "react";
import UrlInput from "@/components/pages/urlsetting/UrlInput";

export default function Urlsetting() {
  return (
    <>
      <main>
        <UrlInput />
      </main>
    </>
  );
}

Urlsetting.getLayout = function getLayout(page: React.ReactNode) {
  return <LoginUrlSetLayout title="SETTING">{page}</LoginUrlSetLayout>;
};
