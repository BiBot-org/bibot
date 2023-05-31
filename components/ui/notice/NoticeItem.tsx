import React from 'react'
import style from '@/components/ui/notice/NoticeItem.module.css'
import { useRouter } from 'next/router'
import { Spacer } from '@nextui-org/react'
import { noticeType } from '@/datas/notice/noticeStatus'
import { noticeStatus } from '@/datas/notice/noticeBackGround'

export default function NoticeItem(props: { id: number, type: string, title: string, content: string, date: string }) {
  const router = useRouter()

  const statusBackground = {
    backgroundColor: noticeStatus[props.type]
  }

  return (
    <>
      <div className={style.notice_board_wrap}>
        <Spacer y={1} />
        <div className={style.notice_first} style={statusBackground}>
          <p>{noticeType[props.type]}</p>
        </div>
        <div className={style.notice_board} onClick={() => router.push(`/noticedetail/${props.id}`)}>
          <p>{props.title}</p>
          <p className={style.notice_board_second}>{props.content}</p>
          <p>{props.date.slice(0, 10)}</p>
        </div>
        <Spacer y={1} />
      </div>
    </>
  )
}
