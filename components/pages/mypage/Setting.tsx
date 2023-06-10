import { Text } from "@nextui-org/react";
import React, { useState } from "react";
import SettingItems from "@/components/ui/mypage/SettingItems";
import LogoutModal from "@/components/modal/mypage/LogoutModal";
import Swal from "sweetalert2";
import { endSession } from "@/service/auth/AuthService";
import { signOut } from "next-auth/react";

export default function Setting() {
  const [isModal, setIsModal] = useState<boolean>(false);

  const onClickLogout = () => {
    Swal.fire({
      icon: "question",
      text: "로그아웃 하시겠습니까?",
      showCancelButton: true,
    }).then(async (res) => {
      if (res.isConfirmed) {
        await endSession().then(async () => {
          await signOut()
            .then(() => {
              Swal.fire({
                text: "로그아웃 되었습니다.",
                icon: "success",
                timer: 3000,
              });
            })
            .catch(() => {
              Swal.fire({
                text: "에러가 발생했습니다!",
                icon: "error",
                timer: 3000,
              });
            });
        });
      }
    });
  };

  return (
    <div>
      <Text size="$xl" css={{ color: "#40CCC3" }} weight={"bold"}>
        Setting
      </Text>
      <SettingItems
        title="환경설정"
        iconUrl="/assets/images/icons/setting.svg"
        iconAlt="setting"
        link="/settings"
      />
      <div onClick={onClickLogout}>
        <SettingItems
          title="로그아웃"
          iconUrl="/assets/images/icons/logout.svg"
          iconAlt="logout"
          ismodalopen={isModal}
          modal={setIsModal}
        />
      </div>
    </div>
  );
}
