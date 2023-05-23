import React from 'react'
import Alarm_details_item from '@/components/ui/alarm_details/Alarm_details_item'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import style from '@/styles/module.css/alarm_details.module.css'

export default function Alarm_details() {
  return (
    <header className={style.alarm_details_wrap}>
      <div><Alarm_details_item /></div>
      <div className={style.alarm_board_second}><Alarm_details_item /></div>
      <div><Alarm_details_item /></div>
      <div><Alarm_details_item /></div>
      <div className={style.alarm_board_second}><Alarm_details_item /></div>
      <div className={style.alarm_board_second}><Alarm_details_item /></div>
      <div><Alarm_details_item /></div>
      <div><Alarm_details_item /></div>
    </header>
  )
}


Alarm_details.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <BackTitleLayout title='알림내역'>
      {page}
    </BackTitleLayout>
  )
}
