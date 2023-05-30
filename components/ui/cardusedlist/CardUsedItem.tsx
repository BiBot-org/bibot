import React from 'react'
import style from './CardUsedItem.module.css'
import { useRouter } from 'next/router'

export default function CardUsedItem(props: {
    category: string,
    title: string,
    price: number,
    date: string,
    submit: boolean
}) {
    const router = useRouter()

    const handleClick = () => {
        if (!props.submit) {
            router.push('/receiptregister');
        }
        else {
            router.push(`/viewreceipt/${1}`);
        }
    };

    const backgroundStyle = {
        backgroundColor: props.submit ? 'lightgray' : 'transparent',
    };

    const categoryColor:Record<string, string> = {
        '식비': 'var(--bibot-primary)',
        '유류비': 'var(--bibot-secondary)',
        '비품비': '#FFD28E',
    }

    const categoryBackground = {
        backgroundColor: categoryColor[props.category] || 'var(--bibot-primary)',
    }

    return (
        <div className={style.card_used_list} onClick={handleClick} style={backgroundStyle} >
            <div className={style.usedItemInfo}>
                <div className={style.category} style={categoryBackground}>
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
