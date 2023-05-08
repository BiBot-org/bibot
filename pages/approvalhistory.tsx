import React from 'react'
import style from '@/styles/pages/approvalhistory/approvalhistory.module.css'
import Approval from '@/components/widgets/Approval'

export default function approvalhistory() {
    return (
        <div className={style.approvalhistoryContainer}>
            <div className={style.expensesDetailsWrap}>
                <div className={style.expensesMonth}>
                    <p>금월 신청한 경비</p>
                    <p>300,000원</p>
                </div>
                <div className={style.expensesAvailable}>
                    <p>신청 가능한 경비</p>
                    <p>300,000원</p>
                </div>
            </div>
            <div className={style.searchWrap}>
                <div className={style.listSearch}>
                    <input placeholder='3개월, 전체, 최신순 ...' maxLength={4}/>
                </div>
                <div className={style.searchBtn}>
                    <button>검색</button>
                </div>
            </div>
            <div className={style.listWrap}>
                <Approval />
                <Approval />
                <Approval />
                <Approval />
                <Approval />
                <Approval />
                <Approval />
            </div>
        </div>
    )
}
