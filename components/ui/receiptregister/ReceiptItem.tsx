import React from 'react'
import style from '@/components/ui/receiptregister/ReceiptItem.module.css'

export default function ReceiptItem() {
    return (
        <div className={style.itemWrap}>
            <p>콜라</p>
            <p>2000원</p>
        </div>
    )
}
