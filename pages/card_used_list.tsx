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
      <div className={style.card_used_list}>
        <img src='assets/images/icons/spoon.svg' alt='spoon' className='spoon_img' />
        <div className={style.cafe_list}>
          <p>조선갈비탕</p>
          <p>2023/04/28 13:00PM</p>
        </div>
        <div className={style.sum_price}>
          <p>13,000원</p>
        </div>
      </div>
      <div className={style.card_used_list}>
        <img src='assets/images/icons/gasoline.svg' alt='gasoline' className='gasoline_img' />
        <div className={style.cafe_list}>
          <p>GS 칼텍스</p>
          <p>2023/04/27 07:28PM</p>
        </div>
        <div className={style.sum_price}>
          <p>50,100원</p>
        </div>
      </div>
      <div className={style.card_used_list}>
        <img src='assets/images/icons/supplies.svg' alt='supplies' className='supplies_img' />
        <div className={style.cafe_list}>
          <p>핫트랙스</p>
          <p>2023/04/25 13:36PM</p>
        </div>
        <div className={style.sum_price}>
          <p>21,050원</p>
        </div>
      </div>
    </form>

  )
}
