import React, { useState } from 'react';
import style from 'components/layouts/find_password.module.css';

export default function FindPassword() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1 className={style.find_pw}>비밀번호 찾기</h1>
      <form className={style.find_password_wrap}>
        <div className={style.fake_pw}>
          <input type="text" placeholder='이메일을 입력하세요'></input>
        </div>
        <div className={style.fake_pw_button_wrap}>
          <button onClick={handleButtonClick}>임시비밀번호 발급</button>
        </div>
      </form>
      {showModal && <MyComponent showModal={showModal} setShowModal={setShowModal}/>}
    </>
  );
}
const MyComponent = (props:{ showModal:boolean,setShowModal:React.Dispatch<React.SetStateAction<boolean>> } ) => {
  return (
    <>
      <div className={style.issued_black_bg}></div>
      <div className={style.issued_modal_wrap}>
        <div className={style.issued_modal_close}><a href="#" onClick={()=>props.setShowModal(!props.showModal)}>close</a></div>
        <div>
          <p>임시 비밀번호가 발급되었습니다.</p>
        </div>
      </div>
    </>
  );
};