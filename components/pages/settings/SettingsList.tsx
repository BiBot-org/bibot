import { Grid, Spacer, Switch } from "@nextui-org/react";
import style from "./SettingsList.module.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react"

export default function SettingsList() {
  const router = useRouter();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <main className={style.settingsWrap}>
      <h3>설정</h3>
      <div className={style.settingsItem}>
        <div className={style.settingsItemTitle}>
          <span>알림설정</span>
        </div>
        <Grid>
          <Switch shadow color="success" checked={true} />
        </Grid>
      </div>
      <div className={style.settingsItem}>
        <div className={style.settingsItemTitle}>
          <span>다크모드</span>
        </div>
        <Grid>
          <Switch 
          shadow 
          color="success" 
          checked={isDark} 
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Grid>
      </div>
      <Spacer y={1} />
      <h3>변경</h3>
      <div
        className={style.settingsItem}
        onClick={() => router.push("/changepwd")}
      >
        <div className={style.settingsItemTitle}>
          <span>비밀번호 변경</span>
        </div>
        <Image
          src={"/assets/images/icons/rightarrowicon.svg"}
          alt="back"
          width={20}
          height={20}
        />
      </div>
    </main>
  );
}
