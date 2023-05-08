import React from 'react'
import style from '@/components/layouts/BackNotiHeader.module.css'
import HeaderNotiMenu from './defaultHeader/HeaderNotiMenu'
import HeaderBackBtn from './backbtnHeader/HeaderBackBtn'

export default function BackNotiHeader() {
    return (
        <header className={style.backNotiHeader}>
            <HeaderBackBtn />
            <HeaderNotiMenu />
        </header>
    )
}
