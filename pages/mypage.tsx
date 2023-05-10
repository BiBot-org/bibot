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

export default function mypage() {
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
            <Separator gutter={6} />
            <Title title="My page" size={30} />
            <div className={style.logoImage}>
                <Image src="/assets/images/dummy/companyLogo.svg" alt="companyLogo" width={200} height={200} />
            </div>
            <Title title="Account" size={20} />
            <AccountProfile imageUrl='/assets/images/dummy/user01.png' name='김땡땡' email='spharos@newworld.com' />
            <Title title="Setting" size={20} />
            <div className={style.settingWrap}>
                <SettingItems title='결제내역' iconUrl='/assets/images/icons/wonIcon.svg' iconAlt='won' link='/approvalhistory' />
                <SettingItems title='출장내역' iconUrl='/assets/images/icons/businesstrip.svg' iconAlt='businesstrip' link='/mypage' />
                <SettingItems title='환경설정' iconUrl='/assets/images/icons/settingIcon.svg' iconAlt='setting' link='/bibot' />
            </div>
            <Separator gutter={5} />
            <div className={style.logout} onClick={() => setIsModal(!isModal)}>
                <SettingItems title='로그아웃' iconUrl='/assets/images/icons/logoutIcon.svg' iconAlt='logout' />
            </div>

        </>
    )
}

mypage.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <BackNotiLayout>
            {page}
        </BackNotiLayout>
    )
}
