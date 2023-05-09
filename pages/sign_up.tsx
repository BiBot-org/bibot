import React from 'react'
import style from 'styles/module.css/sign_up.module.css'

export default function sign_up() {
  return (
    <form className={style.sign_up_wrap}>
      <img src='/assets/images/icons/Back_button.svg' alt='back_btn' className='back_btn' />
      <h1 className={style.sign_up_header}>회원가입</h1>
      <div className={style.sign_up_box}>
        <img src='/assets/images/bibot-pic/Group_logo.svg' alt='Group_logo' className='Group_logo' />
        <div className={style.sign_up_box_wrap}>
          <input type='text' placeholder='이메일'></input>
          <input type='password' placeholder='비밀번호'></input>
          <input type='password' placeholder='비밀번호 확인'></input>
        </div>
      </div>
      <div className={style.sign_btn_wrap}>
        <button className={style.sign_btn}>가입하기</button>
      </div>
    </form>
  )
}