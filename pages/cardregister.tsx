import Image from 'next/image';
import React from 'react'
import style from 'styles/module.css/cardregister.module.css';

export default function CardRegister() {
  return (

    <form className={style.card_list_pic}>
      <h1 className={style.card_list_wrap}>카드사용내역</h1>
      <Image src='/assets/images/bibot-pic/card_select.svg' alt='empty-card' className='empty-card' width={327} height={200}/>
      <div className={style.card_words}>카드를 등록해 주세요.</div>
      <div className={style.bibot_error_alarm}>
        <Image src='/assets/images/bibot-pic/bibot.svg' alt='bibot' className='bibot-pic' width={20} height={20}/>
        <div className={style.error_alarm}>사용내역이 없습니다.</div>
      </div>
    </form>
  )
}
