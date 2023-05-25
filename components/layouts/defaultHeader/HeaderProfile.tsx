import React, { useEffect, useState } from 'react'
import style from '@/components/layouts/defaultHeader/HeaderProfile.module.css'
import Image from 'next/image'
import { HeaderUserType } from '@/types/header/headerTypes'

export default function HeaderProfile() {

  const [user, setUser] = useState<HeaderUserType>({} as HeaderUserType)
  const [greeting, setGreeting] = useState<string>('' as string)
  const [emoji, setEmoji] = useState<string>('' as string)


  const greetings = [
    '반가워요',
    '오늘도 화이팅!',
    '오늘도 힘내요!',
    '오늘도 즐거운 하루 되세요!',
  ]

  const emojis = [
    '👋',
    '👍',
    '👏',
    '👌',
  ]

  useEffect(() => {
    
    const random = Math.floor(Math.random() * greetings.length)
    setGreeting(greetings[random])
    setEmoji(emojis[random])
   
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    setUser(user)

  }, [])


  return (
    <div className={style.headerProfileWrap}>
      <div className={style.headerProfileImgWrap}>
      <Image src={'/assets/images/icons/robotIcon.svg'} alt="profile" width={20} height={20} />
      </div>
      <div className={style.headerProfileNotiWrap}>
        <p>{greeting} {emoji}</p>
        <p>{user.departmentName} {user.teamName} {user.name}님</p>
      </div>
    </div>
  )
}
