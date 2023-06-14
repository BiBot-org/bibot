"use client";
import { Button, Spacer } from "@nextui-org/react";
import React, { SetStateAction, useRef } from "react";
import Image from "next/image";
import ProfileInfo from "@/components/ui/profile/ProfileInfo";
import style from "./ProfileInfoList.module.css";
import {
  UploadUserProfileImage,
  useGetMyInfo,
} from "@/service/user/UserService";
import ProfileModalBackButton from "./ProfileModalBackbutton";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "@tanstack/react-query";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ProfileInfoModal({
  isModalOpen,
  setIsModalOpen,
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const queryClient = useQueryClient();

  const { isLoading, data, isError } = useGetMyInfo();
  const { mutate } = useMutation((req: File) =>
    UploadUserProfileImage({
      profileImage: req,
    })
  );
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e: ProgressEvent<FileReader>) => {
        if (!e || !e.target) return;
        if (typeof e.target.result === "string" && imgRef.current) {
          imgRef.current.src = e.target.result as string;
        }
      });
      Swal.fire({
        text: "프로필 사진을 변경하시겠습니까?",
        icon: "question",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          mutate(imageFile, {
            onSuccess: () => {
              Swal.fire({
                text: "프로필이 변경 되었습니다.",
                icon: "success",
              }).then((res) => {
                if (res.isConfirmed) {
                  queryClient.invalidateQueries(["getMyInfo"]);
                }
              });
            },
            onError: () => {
              Swal.fire({
                text: "에러가 발생했습니다!",
                icon: "error",
              });
            },
          });
        }
      });
    }
  };

  return (
    <>
      {!(isLoading && isError) && (
        <>
          {isModalOpen && (
            <div className={style.modalContainer}>
              <header className={style.Back_btn_title}>
                <div
                  className={style.left}
                  onClick={() => setIsModalOpen(false)}
                >
                  <ProfileModalBackButton />
                </div>
                <div className={style.center}>
                  <p className={style.Back_btn_words}>Profile</p>
                </div>
                <div className={style.right}></div>
              </header>
              <div className={style.profileWrap}>
                <Spacer y={2} />
                <div className={style.profileImage}>
                  <Image
                    ref={imgRef}
                    id="profileImage"
                    src={
                      data?.data.bibotUser.profileUrl ||
                      "/assets/images/icons/emptyprofile.svg"
                    }
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
                    onPress={() =>
                      document.getElementById("imageInput")?.click()
                    }
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
                    content={data?.data.bibotUser.email!}
                  />
                  <ProfileInfo
                    title="부서"
                    content={data?.data.department.name!}
                  />
                  <ProfileInfo title="소속" content={data?.data.team.name!} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
