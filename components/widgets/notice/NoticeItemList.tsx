import NoticeItem from '@/components/ui/notice/NoticeItem'
import { GetNoticeMain } from '@/service/notice/NoticeService'
import { NoticeDTO } from '@/types/notice/types'
import React, { useEffect, useState } from 'react'

export default function NoticeItemList() {
    const [noticeList, setNoticeList] = useState<NoticeDTO[]>([])

    useEffect(() => {
        GetNoticeMain().then((res) => {
            setNoticeList(res.data)
        })
    }, [])
    console.log(noticeList)
    return (
        <div>
            <p>{noticeList.length}건</p>
            <div>
                {noticeList && noticeList.map((notice) =>
                    <NoticeItem
                        key={notice.id}
                        id={notice.id}
                        type={notice.type}
                        title={notice.title}
                        content={notice.content}
                        date={notice.updateTime}
                    />
                )}
            </div>
        </div>
    )
}
