import React from 'react'
import style from '@/components/layouts/Header.module.css'
import HeaderProfile from './defaultHeader/HeaderProfile'
import HeaderNotiMenu from './defaultHeader/HeaderNotiMenu'

export default function Header() {
  return (
    <header className={style.defaultHeader}>
      <HeaderProfile />
      <HeaderNotiMenu />
    </header>
  )
}
