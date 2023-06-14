import React, { useEffect, useMemo, useState } from "react";
import style from "@/components/layouts/defaultHeader/HeaderProfile.module.css";
import Image from "next/image";
import { useGetMyInfo } from "@/service/user/UserService";

export default function HeaderProfile() {
  const [greeting, setGreeting] = useState<string>("" as string);
  const [emoji, setEmoji] = useState<string>("" as string);

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

  const { isLoading, data, isError } = useGetMyInfo();

  useEffect(() => {
    const random = Math.floor(Math.random() * greetings.length);
    setGreeting(greetings[random]);
    setEmoji(emojis[random]);
  }, [emojis, greetings]);

  return (
    <>
      {!(isLoading || isError) && (
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
              {data?.data.department.name} {data?.data.team.name}
              {` ${data?.data.bibotUser.lastName} ${data?.data.bibotUser.firstName}`}
              님
            </p>
          </div>
        </div>
      )}
    </>
  );
}
