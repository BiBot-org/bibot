import React from 'react'
import Image from 'next/image'
import style from '@/components/layouts/defaultHeader/HeaderNotiMenu.module.css'
import { Badge } from '@nextui-org/react'
import { useRouter } from 'next/router'

export default function HeaderNotiMenu() {
  const router = useRouter()
  return (

    <div
      className={style.noti}
      onClick={() => {
        router.push('/alarmdetails')
      }}
    >
      <Badge
        color='error'
        content={5}
        shape={'rectangle'}
        disableOutline={true}
        enableShadow={true}
        size={'md'}
      >
        <Image
          src='/assets/images/icons/notiIcon.svg'
          alt='notiIcon'
          width={30}
          height={30}
          priority={true}
        />
      </Badge>
    </div>
  )
}
