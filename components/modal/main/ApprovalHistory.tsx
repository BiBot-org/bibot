import React, { useState } from 'react'
import style from '@/components/modal/main/ApprovalHistory.module.css'
import Image from 'next/image'

export default function ApprovalHistory() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div style={{ bottom: `${isModalOpen ? 0 : -300}px` }} className={style.modalWrap}>
      <div className={style.modalHeaderWrap} onClick={() => setIsModalOpen(!isModalOpen)}>
        <div className={style.modalHeaderToggle}></div>
        <div className={style.modalHeaderSubject}>
          <p className={style.Subject}>Approval History</p>
          {isModalOpen ? <p className={style.HistoryLink}>all history</p> : ''}
        </div>
      </div>
      <div className={style.modalContentsWrap}>
        <div className={style.modalContent}>
          <div className={style.ContentImage}>
            <Image src={'/assets/images/icons/Food.svg'} alt={'Food'} width={25} height={25} />
          </div>
          <div className={style.ContentInfo}>
            <p>조선갈비탕</p>
            <p>2023/04/28 - 13:00</p>
          </div>
          <div className={style.ContentPrice}>
            <p>13000원</p>
          </div>
        </div>
      </div>
    </div>
  )
}
