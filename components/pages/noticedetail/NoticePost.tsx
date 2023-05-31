import { GetNotice } from '@/service/notice/NoticeService'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NoticeContents from '@/components/widgets/noticedetail/NoticeContents'
import NoticeDetailBtn from '@/components/widgets/noticedetail/NoticeDetailBtn'
import { NoticeDTO } from '@/types/notice/types'

export default function NoticePost() {
    const router = useRouter()
    const id = parseInt(router.query.id as string)
    const [notice, setNotice] = useState<NoticeDTO>()

    useEffect(() => {
        GetNotice(id).then((res) => {
            console.log(res.data)
            setNotice(res.data)
        })
        .catch((err) => {
            if (err.response.status === 404) {
                router.push('/404')
            }
        })
    }, [id])

    return (
        <>
            {notice &&
                <>
                    <NoticeContents
                        title={notice.title}
                        content={notice.content}
                        type={notice.type}
                        updateTime={notice.updateTime}
                    />
                    <NoticeDetailBtn id={id}/>
                </>
            }
        </>
    )
}
