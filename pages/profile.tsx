import React from "react";
import ProfileInfoList from "@/components/pages/profile/ProfileInfoList";
import BackTitleLayout from "@/components/layouts/BackTitleLayout";

export default function Profile() {
  return (
    <ProfileInfoList />
  );
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <BackTitleLayout title="계정 정보">{page} </BackTitleLayout>;
};
Profile.auth = true;
