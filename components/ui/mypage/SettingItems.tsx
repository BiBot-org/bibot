import React from 'react'
import Image from 'next/image'
import style from '@/components/ui/mypage/SettingItems.module.css'
import { useRouter } from 'next/router'

export default function SettingItems(props: { title: string, iconUrl: string, iconAlt: string, link?: string }) {
    const router = useRouter()
    const link = () => {
        props.link &&
            router.push(props.link)
    }

    return (
        <div className={style.settingItem} onClick={link}>
            <div className={style.settingInfo}>
                <div className={style.settingItemImage}>
                    <Image src={props.iconUrl} alt={props.iconAlt} width={20} height={20} />
                </div>
                <div className={style.settingItemTitle}>
                    <p>{props.title}</p>
                </div>
            </div>
            <div className={style.rightBtn}>
                <Image src={'/assets/images/icons/rightarrowicon.svg'} alt='back' width={20} height={20} />
            </div>
        </div>
    )
}
