import React from 'react'
import style from '@/components/ui/alarmdetails/AlarmDetailsItem.module.css'

export default function AlarmDetailsItem() {
  return (
    <>
      <div className={style.alarm_board}>
        <p>결재가 완료 되었습니다.</p>
        <p className={style.alarm_words}>2023-04-25</p>
      </div>
      
    </>
  )
}
