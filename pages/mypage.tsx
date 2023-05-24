import BackNotiLayout from '@/components/layouts/BackNotiLayout'
import React, { useState } from 'react'
import Image from 'next/image'
import style from '@/styles/pages/mypage.module.css'
import Separator from '@/components/ui/Separator'
import Title from '@/components/ui/Title'
import SettingItems from '@/components/ui/mypage/SettingItems'
import AccountProfile from '@/components/ui/mypage/AccountProfile'
import CommonModal from '@/components/modal/CommonModal'
import TwoBtnModal from '@/components/modal/TwoBtnModal'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import { Switch } from "@nextui-org/react";

export default function Mypage() {
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            {isModal &&
                <TwoBtnModal
                    isModal={isModal}
                    modal={setIsModal}
                    text='로그아웃 하시겠습니까?'
                    link='/'
                />}
            <Title title="Account" size={20} />
            <AccountProfile imageUrl='/assets/images/dummy/user01.png' name='김땡땡' company='스파로스' email='spharos@newworld.com' />
            <Separator gutter={1} />
            <Title title="Service" size={20} />
            <div className={style.settingWrap}>
                <div className={style.Service_wrap}>
                    <SettingItems title='이용약관' iconUrl='/assets/images/icons/term.svg' iconAlt='won' link='/approvalhistory' />
                </div>
                <SettingItems title='버전정보' iconUrl='/assets/images/bibot-pic/bibot.svg' iconAlt='businesstrip' link='/mypage' />
                <SettingItems title='도움말' iconUrl='/assets/images/icons/question.svg' iconAlt='question' link='/mypage' />
            </div>
            <Separator gutter={2} />
            <Title title="Setting" size={20} />
            <SettingItems title='환경설정' iconUrl='/assets/images/icons/setting.svg' iconAlt='setting' link='/bibot' />
            <div className={style.logout} onClick={() => setIsModal(!isModal)}>
                <SettingItems title='로그아웃' iconUrl='/assets/images/icons/logout.svg' iconAlt='logout' />
            </div>

        </>
    )
}

Mypage.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <BackTitleLayout title='MyPage'>
            {page}
        </BackTitleLayout>
    )
}

