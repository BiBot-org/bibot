import React from 'react'
import Image from 'next/image'
import style from '@/components/layouts/defaultHeader/HeaderNotiMenu.module.css'

export default function HeaderNotiMenu() {
  return (
    <div className={style.noti}>
      <Image src='/assets/images/icons/notiIcon.svg' alt='notiIcon' width={30} height={30} priority={true} />
    </div>
  )
}
