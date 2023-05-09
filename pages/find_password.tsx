import React from 'react'
import style from 'styles/module.css/find_password.module.css'

export default function find_password() {
  return (
    <form className={style.find_password_wrap}>
      <img src='/assets/images/icons/Back_button.svg' alt='back_btn' className='back_btn' />
      <h1 className={style.find_password_header}>비밀번호 찾기</h1>
      <div className={style.find_words}>
        <p>가입한 이메일 주소로 임시 비밀번호를 알려드립니다.</p>
        <p>로그인 후 비밀번호를 꼭 변경해주세요.</p>
      </div>
      <div className={style.login_box}>
        <input type='text' placeholder='이메일을 입력해주세요'></input>
        <input type='password' placeholder='임시 비밀번호 입력'></input>
      </div>
      <div className={style.select_btn_wrap}>
        <button className={style.select_btn}>임시 비밀번호 발급</button>
      </div>
    </form>
  )
}
