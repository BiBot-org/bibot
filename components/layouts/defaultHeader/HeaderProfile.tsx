import React, { useEffect, useMemo, useState } from "react";
import style from "@/components/layouts/defaultHeader/HeaderProfile.module.css";
import Image from "next/image";
import { HeaderUserType } from "@/types/header/headerTypes";
import { useSession } from "next-auth/react";
import { GetUserInfo } from "@/service/user/UserService";
import { BibotUserDTO, BibotUserInfo } from "@/types/user/types";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/state/userInfo/UserInfoState";

export default function HeaderProfile() {
  const [user, setUser] = useState<HeaderUserType>({} as HeaderUserType);
  const [userInfo, setUserInfo] = useRecoilState<BibotUserInfo>(userInfoState);
  const [greeting, setGreeting] = useState<string>("" as string);
  const [emoji, setEmoji] = useState<string>("" as string);
  const { data: session } = useSession();

  const greetings = useMemo(
    () => [
      "반가워요",
      "오늘도 화이팅!",
      "오늘도 힘내요!",
      "오늘도 즐거운 하루 되세요!",
    ],
    []
  );

  const emojis = useMemo(() => ["👋", "👍", "👏", "👌"], []);

  useEffect(() => {
    if (session) {
      GetUserInfo(session.tokenInfo.id).then((res) => setUserInfo(res.data));
    }
  }, [session]);

  useEffect(() => {
    const random = Math.floor(Math.random() * greetings.length);
    setGreeting(greetings[random]);
    setEmoji(emojis[random]);

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(user);
  }, [emojis, greetings]);

  return (
    <>
      {session && userInfo && (
        <div className={style.headerProfileWrap}>
          <div className={style.headerProfileImgWrap}>
            <Image
              src={"/assets/images/icons/robotIcon.svg"}
              alt="profile"
              width={20}
              height={20}
            />
          </div>
          <div className={style.headerProfileNotiWrap}>
            <p>
              {greeting} {emoji}
            </p>
            <p>
              {userInfo.department.name} {userInfo.team.name}
              {`${userInfo.bibotUser.lastName} ${userInfo.bibotUser.firstName}`}
              님
            </p>
          </div>
        </div>
      )}
    </>
  );
}
