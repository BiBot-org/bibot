import React from 'react'
import style from '@/components/layouts/backbtnHeader/HeaderBackBtn.module.css'
import Image from 'next/image'
import router from 'next/router'

export default function HeaderBackBtn() {
    return (
        <div className={style.backBtnWrap}>
            <Image
                className={style.backBtn}
                onClick={() => router.back()}
                width={24}
                height={17}
                src='/assets/images/icons/Back_button.svg'
                alt='backBtn'
                style={{ width: 'auto', height: 'auto' }}
            />
        </div>
    )
}
