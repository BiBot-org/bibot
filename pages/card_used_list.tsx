import React from 'react'
import style from 'styles/module.css/card_used_list.module.css'

export default function card_used_list() {
  return (
    <form className={style.card_list_pic}>
      <h1 className={style.card_used_wrap}>카드사용내역</h1>
      <img src='/assets/images/bibot-pic/color_card.svg' alt='empty-card' className='empty-card' />
      <div className={style.card_name}>법카 가족카드</div>
      <div className={style.card_used_sum}>
        <p>사용내역 합</p>
        <p>789,000원</p>
      </div>
    </form>

  )
}
