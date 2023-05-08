import React, { useState } from 'react'
import style from '@/components/modal/main/ApprovalHistoryModal.module.css'
import Approval from '@/components/widgets/Approval'

export default function ApprovalHistoryModal() {
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
        <Approval />
      </div>
    </div>
  )
}
