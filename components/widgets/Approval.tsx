import React from 'react'
import style from '@/components/widgets/Approval.module.css'
import Image from 'next/image'

export default function Approval() {
    return (
        <div className={style.modalContent}>
            <div className={style.ContentImage}>
                <Image src={'/assets/images/icons/Food.svg'} alt={'Food'} width={25} height={25} />
            </div>
            <div className={style.ContentInfo}>
                <p>조선갈비탕</p>
                <p>2023/04/28 - 13:00</p>
            </div>
            <div className={style.ContentPrice}>
                <p>반려</p>
            </div>
        </div>
    )
}
