import BackNotiLayout from "@/components/layouts/BackNotiLayout";
import React from "react";
import style from "@/styles/pages/profile.module.css";
import Image from "next/image";
import ProfileInfo from "@/components/ui/profile/ProfileInfo";
import { useRouter } from "next/router";
import { Spacer, Text } from "@nextui-org/react";

export default function Profile() {
  const router = useRouter();
  return (
    <div className={style.profileWrap}>
      <Spacer y={7} />
      <Text size={"$xl"} className={style.title}>
        계정 정보
      </Text>
      <Spacer y={2} />
      <div className={style.profileImage}>
        <Image
          src="/assets/images/dummy/user01.png"
          width={150}
          height={150}
          alt="profile"
        />
      </div>
      <Spacer y={2} />
      <div className={style.profileInfoWrap}>
        <ProfileInfo title="이름" content="홍길동" />
        <ProfileInfo title="사번" content="S987654" />
        <ProfileInfo title="부서" content="Spharos" />
        <ProfileInfo title="소속" content="NewWorld" />
      </div>

      <div
        className={style.changePwdWrap}
        onClick={() => router.push("/change_pwd")}
      >
        <div className={style.PwdTitle}>비밀번호 변경</div>
        <div className={style.PwdRightIcon}>
          <Image
            src="/assets/images/icons/rightArrow.svg"
            width={23}
            height={15}
            alt="right"
          />
        </div>
      </div>
    </div>
  );
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <BackNotiLayout>{page}</BackNotiLayout>;
};
Profile.auth = true;
