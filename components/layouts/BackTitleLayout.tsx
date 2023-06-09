import React from 'react'
import HeaderBackBtn from './backbtnHeader/HeaderBackBtn'
import style from 'components/layouts/BackTitleLayout.module.css'
import { useRouter } from 'next/router'
import ReceiptRegisterHelp from '../ui/receiptregister/ReceiptRegisterHelp'
import Footer from './Footer'
import { Spacer } from '@nextui-org/react'

export default function BackTitleLayout(props: { children: React.ReactNode, title: string, }) {
  const router = useRouter()

  return (
    <>
      <header className={style.Back_btn_title}>
        <div className={style.left}>
          <HeaderBackBtn />
        </div>
        <div className={style.center}>
          <p className={style.Back_btn_words}>{props.title}</p>
        </div>
        <div className={style.right}>
          {
            router.pathname === '/receipt_register' ?
              <ReceiptRegisterHelp /> : null
          }
        </div>
      </header>
      <Spacer y={4} />
      <div>{props.children}</div>
      <Footer />
    </>
  )
}
