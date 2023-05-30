import React from 'react'
import BackTitleLayout from '@/components/layouts/BackTitleLayout'
import ReceiptInput from '@/components/pages/receiptregister/ReceiptInput'

export default function ReceiptRegister() {

    return (
        <>
            <main>
                <ReceiptInput />
            </main>
        </>
    )
}

ReceiptRegister.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <BackTitleLayout title='영수증 등록'>{page}</BackTitleLayout>
    )
}