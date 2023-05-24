import React from 'react'
import HeaderBackBtn from './backbtnHeader/HeaderBackBtn'
import style from 'components/layouts/BackTitleLayout.module.css'
import { useRouter } from 'next/router'
import ReceiptRegisterHelp from '../ui/receiptregister/ReceiptRegisterHelp'

export default function BackTitleLayout(props: { children: React.ReactNode, title: string, }) {
  const router = useRouter()
  
  return (
    <>
      <header className={style.Back_btn_title}>
        <HeaderBackBtn />
        <p className={style.Back_btn_words}>{props.title}</p>
        {
          router.pathname === '/receipt_register' ? 
          <ReceiptRegisterHelp /> : null
        }
      </header>
      {props.children}
    </>
  )
}
