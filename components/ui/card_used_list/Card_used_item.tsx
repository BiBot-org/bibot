import React from 'react'
import style from './Card_used_item.module.css'

export default function Card_used_item(props: { category: string, title:string, price:number, date:string }) {
    return (
        <div className={style.card_used_list}>
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
                <p>{props.price}원</p>
            </div>
        </div>
    )
}
