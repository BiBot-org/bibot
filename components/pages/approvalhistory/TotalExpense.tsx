import React from 'react'
import style from './TotalExpense.module.css'

export default function TotalExpense() {
    return (
        <div className={style.approval_details_list}>
            <div className={style.approval_did}>
                <p>금월 신청한 경비</p>
                <p>103,500</p>
            </div>
            <div className={style.approval_will}>
                <p>신청 가능한 경비</p>
                <p>496,500</p>
            </div>
        </div>
    )
}
