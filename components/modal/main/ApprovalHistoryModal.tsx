import React, { useState } from 'react'
import style from './ApprovalHistoryModal.module.css'
import Approval from '@/components/widgets/Approval'

export default function ApprovalHistoryModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
    <div className={isModalOpen ? `${style.modalWrap} ${style.modalOpen} ` : `${style.modalWrap}` }>
      <div className={style.modalHeaderWrap} onClick={() => setIsModalOpen(!isModalOpen)}>
        {/* <div className={style.modalHeaderToggle}></div> */}
        <div className={style.modalHeaderSubject}>
          <p className={style.Subject}>Approval History</p>
          {isModalOpen ? <p className={style.HistoryLink}>all history</p> : ''}
        </div>
      </div>
      <div className={style.modalContentsWrap}>
        <Approval />
      </div>
    </div>
    <div className={isModalOpen ? style.modalBackground : style.modalBackgroundClose} onClick={() => setIsModalOpen(!isModalOpen)}></div>
    </>
  )
}
