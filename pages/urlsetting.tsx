import LoginUrlSetLayout from '@/components/layouts/LoginUrlSetLayout'
import React, { useState } from 'react'
import style from '@/styles/pages/urlsetting.module.css'
import TwoBtnModal from '@/components/modal/TwoBtnModal'
import UrlInput from '@/components/pages/urlsetting/UrlInput'

export default function Urlsetting() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
        <TwoBtnModal isModal={isModalOpen} modal={setIsModalOpen} text={'Spharos'} link={'/login'} />
        <main className={style.mainContainer}>
            <UrlInput />
        </main>
        </>
    )
}

Urlsetting.getLayout = function getLayout(page: React.ReactNode) {
    return (
        <LoginUrlSetLayout title='SETTING'>
            {page}
        </LoginUrlSetLayout>
    )
}