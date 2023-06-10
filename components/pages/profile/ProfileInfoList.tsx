"use client";
import { Button, Spacer } from "@nextui-org/react";
import React, { useEffect } from "react";
import Image from "next/image";
import ProfileInfo from "@/components/ui/profile/ProfileInfo";
import style from "./ProfileInfoList.module.css";
import { useRecoilValue } from "recoil";
import { UserAuthInfo } from "@/types/user/types";
import { userInfoState } from "@/state/userInfo/UserInfoState";
import { useGetuserinfo } from "@/service/user/UserService";

export default function ProfileInfoList() {
  const userInfo = useRecoilValue<UserAuthInfo>(userInfoState);

  const { isLoading, data, isError } = useGetuserinfo(userInfo.userId);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    if (image) {
      console.log(image.name);
    }
  };

  return (
    <>
      {!isLoading && (
        <div className={style.profileWrap}>
          <Spacer y={2} />
          <div className={style.profileImage}>
            <Image
              id="profileImage"
              src={`${data?.data.bibotUser.profileUrl}`}
              width={150}
              height={150}
              alt="profile"
              priority
            />
          </div>
          <Spacer y={1} />
          <div className={style.ImageBtnWrap}>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <Button
              size={"xs"}
              onPress={() => document.getElementById("imageInput")?.click()}
            >
              수정
            </Button>
          </div>
          <Spacer y={5} />
          <div className={style.profileInfoWrap}>
            <ProfileInfo
              title="이름"
              content={`${data?.data.bibotUser.lastName} ${data?.data.bibotUser.firstName}`}
            />
            <ProfileInfo
              title="이메일"
              content={`${data?.data.bibotUser.email}`}
            />
            <ProfileInfo
              title="부서"
              content={`${data?.data.department.name}`}
            />
            <ProfileInfo title="소속" content={`${data?.data.team.name}`} />
          </div>
        </div>
      )}
    </>
  );
}
