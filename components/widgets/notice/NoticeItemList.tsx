import NoticeItem from '@/components/ui/notice/NoticeItem'
import { GetNoticeMain } from '@/service/notice/NoticeService'
import { NoticeDTO } from '@/types/notice/types'
import React, { useEffect } from 'react'

export default function NoticeItemList(props: { noticeList: NoticeDTO[], setNoticeList: React.Dispatch<React.SetStateAction<NoticeDTO[]>> }) {

    useEffect(() => {
        GetNoticeMain().then((res) => {
            props.setNoticeList(res.data)
        })
    }, [])

    console.log(props.noticeList)
    return (
        <div>
            <p>{props.noticeList.length}건</p>
            <div>
                {props.noticeList && props.noticeList.map((notice) =>
                    <NoticeItem
                        key={notice.id}
                        notice={notice}
                    />
                )}
            </div>
        </div>
    )
}
