import BackTitleLayout from "@/components/layouts/BackTitleLayout";
import CardInput from "@/components/pages/cardregister/CardInput";
import React from "react";

export default function Cardregister() {
  return (
    <main>
      <CardInput />
    </main>
  );
}

Cardregister.getLayout = function getLayout(page: React.ReactNode) {
  return <BackTitleLayout title="카드등록">{page}</BackTitleLayout>;
};

Cardregister.auth = true;
