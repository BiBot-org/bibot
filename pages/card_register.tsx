import React from 'react'
import style from 'styles/module.css/card_register.module.css';

export default function CardRegister() {
  return (

    <form className={style.card_list_pic}>
      <h1 className={style.card_list_wrap}>카드사용내역</h1>
      <img src='/assets/images/bibot-pic/card_select.svg' alt='empty-card' className='empty-card' />
      <div className={style.card_words}>카드를 등록해 주세요.</div>
      <div className={style.bibot_error_alarm}>
        <img src='/assets/images/bibot-pic/bibot.svg' alt='bibot' className='bibot-pic' />
        <div className={style.error_alarm}>사용내역이 없습니다.</div>
      </div>
    </form>
  )
}
