import React from 'react'
import style from 'components/layouts/login.module.css'

export default function Login
  () {
  return (
    <>
      <h1 className={style.hello_bibot}>환영합니다</h1>
      <form className={style.idpwrap}>
        <div className={style.idbox}>
          <input type="text" placeholder='아이디'></input>
          <input type="password" placeholder='비밀번호'></input>
        </div>
        <div className={style.buttonwrap}>
          <button>로그인</button>
          <button>비밀번호 찾기</button>
        </div>
      </form>
    </>
  )
}
