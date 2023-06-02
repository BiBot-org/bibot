import React from 'react'
import style from './ApprovalItem.module.css'
import Image from 'next/image'
import { approvalIcon, approvalStatusBC } from '@/datas/approval/approvalItem'

export default function ApprovalItem(props:{item:any}) {
    const item = props.item

    const itemStyle = {
        backgroundColor: approvalStatusBC[item.status] || 'var(--bibot-primary)',
    }

    console.log(item.status)

    return (
        <div className={style.approvalListWrap}>
            <div className={style.itemIcon} style={itemStyle}>
                <Image
                    src={approvalIcon[item.status]}
                    alt='return'
                    width={30}
                    height={30}
                />
            </div>
            <div className={style.itemInfoWrap}>
                <div className={style.itemInfo}>
                    <p>{item.name}</p>
                    <p>{item.number}</p>
                </div>
                <div className={style.itemStatus} style={itemStyle}>
                    <p>{item.type}</p>
                </div>
            </div>
        </div>
    )
}
