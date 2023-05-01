import React from 'react'
import { userData } from '@/datas/dummy/userData'
import style from '@/components/layouts/defaultHeader/HeaderProfile.module.css'
import Image from 'next/image'

export default function HeaderProfile() {
  return (
    <div className={style.headerProfileWrap}>
      <div className={style.headerProfileImg}>
        <Image src={userData.userImgUrl} alt={userData.name} width={400} height={400} priority={false} />
      </div>
      <div className={style.headerProfileName}>
        안녕하세요. {userData.name}님
      </div>
    </div>
  )
}
