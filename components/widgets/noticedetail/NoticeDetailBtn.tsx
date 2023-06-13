import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import style from './NoticeDetailBtn.module.css'
import { Button, Spacer } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { GetNotice } from '@/service/notice/NoticeService'
import { NoticeDTO } from '@/types/notice/types'
import { noticeType } from '@/datas/notice/noticeStatus'
import { noticeStatus } from '@/datas/notice/noticeBackGround'

export default function NoticeDetailBtn(props: { id: number }) {
    const router = useRouter()
    const id = props.id

    const [prevNotice, setPrevNotice] = useState<NoticeDTO | null>();
    const [nextNotice, setNextNotice] = useState<NoticeDTO | null>();

    useEffect(() => {
        GetNotice(id + 1)
            .then((res) => {
                setNextNotice(res.data);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    setNextNotice(null);
                }
            });
    }, [id]);

    useEffect(() => {
        GetNotice(id - 1)
            .then((res) => {
                setPrevNotice(res.data);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    setPrevNotice(null);
                }
            });
    }, [id]);

    return (
        <>
            <div className={style.noticeDetailsWrap}>
                {nextNotice && (
                    <div className={style.notice_details_list_b} onClick={() => router.push(`/noticedetail/${nextNotice.id}`)}>
                        <Image src={'/assets/images/icons/back.svg'} alt='back' width={20} height={20} />
                        <p className={style.moveText}>다음</p>
                        <p
                            className={style.notice_icon}
                            style={{ backgroundColor: noticeStatus[nextNotice.type] }}
                        >{noticeType[nextNotice.type]}</p>
                        <p className={style.detail_words}>{nextNotice.title}</p>
                    </div>
                )}
                {
                    prevNotice && (
                        <div className={style.notice_details_list_n} onClick={() => router.push(`/noticedetail/${prevNotice.id}`)}>
                            <Image src={'/assets/images/icons/back.svg'} alt='back' width={20} height={20} />
                            <p className={style.moveText}>이전</p>
                            <p style={{ backgroundColor: noticeStatus[prevNotice.type], whiteSpace:'nowrap' }} className={style.notice_icon}>{noticeType[prevNotice.type]}</p>
                            <p className={style.detail_words}>{prevNotice.title}</p>
                        </div>
                    )}
                <Spacer y={1} />
                <div className={style.notice_btn}>
                    <Button
                        onPress={() => router.push('/notice')}
                        style={{ backgroundColor: 'var(--bibot-primary)', width: '100%', }}
                    >
                        목록
                    </Button>
                </div>
            </div>
        </>
    )
}
