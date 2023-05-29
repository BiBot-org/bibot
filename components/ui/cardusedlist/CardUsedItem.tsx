import React from 'react'
import style from './CardUsedItem.module.css'
import { useRouter } from 'next/router'

export default function CardUsedItem(props: { category: string, title:string, price:number, date:string }) {
    const router = useRouter()
    return (
        <div className={style.card_used_list} onClick={() => router.push('/receiptregister')}>
            <div className={style.usedItemInfo}>
                <div className={style.category}>
                    <p>{props.category}</p>
                </div>
                <div className={style.useInfo}>
                    <p>{props.title}</p>
                    <p>{props.date}</p>
                </div>
            </div>
            <div className={style.price}>
                <p>{props.price.toLocaleString()}원</p>
            </div>
        </div>
    )
}
