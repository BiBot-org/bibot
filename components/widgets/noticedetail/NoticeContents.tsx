import React from 'react'
import style from './NoticeContents.module.css'
import { noticeType } from '@/datas/notice/noticeStatus'
import { noticeStatus } from '@/datas/notice/noticeBackGround'

export default function NoticeContents(props: { title: string, content: string, type: string, updateTime: string }) {

    return (
        <>
            <div className={style.notice_details_header}>
                <p className={style.headerSubject}>{props.title}</p>
                <div className={style.detail_date} >
                    <p style={{ backgroundColor: noticeStatus[props.type] }} >{noticeType[props.type]}</p>
                    <p>{props.updateTime.slice(0, 10)}</p>
                </div>
            </div>
            
            <div className={style.notice_detail_words}>
                {props.content}
            </div>
        </>
    )
}
