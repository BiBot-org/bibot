import React from 'react'
import HeaderBackBtn from './backbtnHeader/HeaderBackBtn'
import style from 'components/layouts/BackTitleLayout.module.css'

export default function BackTitleLayout(props: { children: React.ReactNode, title: string }) {
  return (
    <>
      <div className={style.Back_btn_title}>
        <HeaderBackBtn />
        <h2 className={style.Back_btn_words}>{props.title}</h2>
      </div>
      {props.children}
    </>
  )
}
