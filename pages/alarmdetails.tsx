import React from "react";
import BackTitleLayout from "@/components/layouts/BackTitleLayout";
import AlarmList from "@/components/pages/alarmdetails/AlarmList";

export default function Alarmdetails() {
  return (
    <main>
      <AlarmList />
    </main>
  );
}

Alarmdetails.getLayout = function getLayout(page: React.ReactNode) {
  return <BackTitleLayout title="알림내역">{page}</BackTitleLayout>;
};

Alarmdetails.auth = true;
