import React from 'react'
import Separator from '@/components/ui/Separator'
import Approval from '@/components/widgets/Approval'
import Image from 'next/image'
import style from '@/styles/pages/receipt_register.module.css'
import ReceiptItem from '@/components/ui/receipt_register/ReceiptItem'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'

export default function receipt_register() {
    return (
        <>
            <header>
                <Approval />
            </header>
            <main>
                <div className={style.emptyReceiptWrap}>
                    <Image
                        src='/assets/images/icons/emptyReceipt.svg'
                        alt='emptyReceipt'
                        width={200}
                        height={200}
                        priority={true}
                    />
                    <input type='file'></input>
                </div>
                <Separator gutter={3} />
                <div className={style.ReceiptOCRWrap}>
                    <div className={style.ReceiptOCRHeader}>
                        Payment Details
                    </div>
                    <div className={style.ReceiptOCRDetails}>
                        <ReceiptItem />
                        <ReceiptItem />
                        <ReceiptItem />
                        <ReceiptItem />
                        <ReceiptItem />
                    </div>
                    <Separator gutter={1} />
                    <div className={style.categorySel}>
                        <p>카테고리</p>
                        <select>
                            <option value='식비'>식비</option>
                            <option value='교통비'>교통비</option>
                            <option value='문화비'>문화비</option>
                            <option value='유류비'>유류비</option>
                        </select>
                    </div>
                </div>
                <button className={style.submitBtn}>등록 및 신청</button>
            </main>
        </>
    )
}

receipt_register.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <BackTitleLayout title='영수증 등록'>{page}</BackTitleLayout>
    )
}