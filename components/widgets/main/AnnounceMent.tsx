import React from 'react'
import Image from 'next/image'
import style from '@/components/widgets/main/AnnounceMent.module.css'

export default function AnnounceMent() {
    return (
        <>
            <div className={style.announceWrap}>
                <div className={style.announceImage}>
                    <Image src={'/assets/images/icons/robotIcon.svg'} alt={'robotIcon'} width={25} height={25} />
                </div>
                <div className={style.content}>
                    <p>[공지] 시스템 점검 안내</p>
                    <p className={style.txt}>익일 10:00 ~ 13:30 시스템 점검 예정입니다.</p>
                </div>
                <div className={style.notiTime}>
                    <p>10:00 AM</p>
                </div>
            </div>
            <div className={style.announceWrap}>
                <div className={style.announceImage}>
                    <Image src={'/assets/images/icons/robotIcon.svg'} alt={'robotIcon'} width={25} height={25} />
                </div>
                <div className={style.content}>
                    <p>[공지] 시스템 점검 안내</p>
                    <p className={style.txt}>익일 10:00 ~ 13:30 시스템 점검 예정입니다.</p>
                </div>
                <div className={style.notiTime}>
                    <p>10:00 AM</p>
                </div>
            </div>
            <div className={style.announceWrap}>
                <div className={style.announceImage}>
                    <Image src={'/assets/images/icons/robotIcon.svg'} alt={'robotIcon'} width={25} height={25} />
                </div>
                <div className={style.content}>
                    <p>[공지] 시스템 점검 안내</p>
                    <p className={style.txt}>익일 10:00 ~ 13:30 시스템 점검 예정입니다.</p>
                </div>
                <div className={style.notiTime}>
                    <p>10:00 AM</p>
                </div>
            </div>
        </>
    )
}
