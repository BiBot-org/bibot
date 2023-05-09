import React from 'react'
import style from 'styles/module.css/login.module.css'

export default function login() {
  return (
    <form className={style.login_wrap}>
      <h1 className={style.login_header}>LOGIN</h1>
      <img src='/assets/images/bibot-pic/Group_logo.svg' alt='Group_logo' className='Group_logo' />
      <div className={style.login_box}>
        <input type='text' placeholder='E-mail'></input>
        <input type='password' placeholder='Password'></input>
      </div>
      <div className={style.select_btn_wrap}>
        <button className={style.select_btn}>로그인</button>
      </div>
      <div className={style.find_password_btn_wrap}>
        <button className={style.find_password_btn}>비밀번호 찾기</button>
      </div>
      <div className={style.sign_up_wrap}>
        <p>회원이 아니신가요?</p>
        <button className={style.Sign_btn}>Sign Up</button>
      </div>
    </form>
  )
}

