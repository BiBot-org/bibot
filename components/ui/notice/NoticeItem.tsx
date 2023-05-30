import React from 'react'
import style from '@/components/ui/notice/NoticeItem.module.css'
import { useRouter } from 'next/router'

export default function NoticeItem() {
  const router = useRouter()
  return (
    <>
      <div className={style.notice_board_wrap}>
        <div className={style.notice_first}>
          <p>공지</p>
        </div>
        <div className={style.notice_board} onClick={() => router.push('/noticedetails')}>
          <p>시스템 점검 안내</p>
          <p className={style.notice_board_second}>익일 10:00~13:30 시스템 점검을 할지도 모릅니다.</p>
          <p>2023-04-25</p>
        </div>
      </div>
    </>
  )
}
