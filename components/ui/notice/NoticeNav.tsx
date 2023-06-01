import { GetNoticeMain, SearchNotice } from '@/service/notice/NoticeService'
import { SearchNoticeReq } from '@/types/notice/RequestType'
import { NoticeDTO } from '@/types/notice/types'
import { Button, Navbar, Text } from '@nextui-org/react'
import style from './NoticeNav.module.css'
import router from 'next/router'
import React, { useState } from 'react'

export default function NoticeNav(props: { noticeList: NoticeDTO[], setNoticeList: React.Dispatch<React.SetStateAction<NoticeDTO[]>> }) {
    const [noticeList, setNoticeList] = useState<SearchNoticeReq>({} as SearchNoticeReq)
    const [type, setType] = useState<string>('ALL')

    const handleAll = () => {
        GetNoticeMain().then((res) => {
            props.setNoticeList(res.data)
            router.push('/notice')
        })
        setType('ALL')
        scrollTo(0, 0)
    }

    const handleNotice = () => {
        SearchNotice({
            ...noticeList,
            type: 'COMMON',
        }).then((res) => {
            props.setNoticeList(res.data.content)
            console.log(res.data.content)
        })
        setType('COMMON')
        scrollTo(0, 0)
    }

    const handleSystem = () => {
        SearchNotice({
            ...noticeList,
            type: 'SYSTEM',
        }).then((res) => {
            props.setNoticeList(res.data.content)
            console.log(res.data.content)
        })
        setType('SYSTEM')
        scrollTo(0, 0)
    }

    const setNoticeType = (classtype: string) => {
        return (
            type === classtype ? true : false
        )
    }

    return (
        <Navbar isCompact className={style.navbar} isBordered variant="floating">
            <Navbar.Content variant="highlight-rounded">
                <Navbar.Link
                    isActive={setNoticeType('ALL')}
                    onClick={handleAll}
                >
                    전체
                </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content variant="highlight-rounded">
                <Navbar.Link
                    isActive={setNoticeType('COMMON')}
                    onClick={handleNotice}
                >
                    공지사항
                </Navbar.Link>
                <Navbar.Link
                    isActive={setNoticeType('SYSTEM')}
                    onClick={handleSystem}
                >
                    시스템점검
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}
