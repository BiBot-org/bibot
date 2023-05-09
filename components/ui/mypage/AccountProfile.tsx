import React from 'react'
import Image from 'next/image'
import style from '@/components/ui/mypage/AccountProfile.module.css'

export default function AccountProfile(props: { imageUrl: string, name: string, email: string }) {
    return (
        <div className={style.accountWrap}>
            <div className={style.accountImage}>
                <Image src={props.imageUrl} alt={props.name} width={50} height={50} />
            </div>
            <div className={style.accountInfo}>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
