import React from "react";
import BackTitleLayout from "@/components/layouts/BackTitleLayout";
import SettingsList from "@/components/pages/settings/SettingsList";

export default function Settings() {
  return (
    <>
      <div>
        <SettingsList />
      </div>
    </>
  );
}

Settings.getLayout = function getLayout(page: React.ReactNode) {
  return <BackTitleLayout title="환경설정">{page}</BackTitleLayout>;
};

Settings.auth = true;
