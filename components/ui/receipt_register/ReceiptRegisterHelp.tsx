import React, { useState } from 'react'
import Image from 'next/image'
import style from '@/components/ui/receipt_register/ReceiptRegisterHelp.module.css'
import HelpModal from '@/components/modal/receipt_register/HelpModal'

export default function ReceiptRegisterHelp() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <HelpModal IsModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <div className={style.helpIcon} >
                <Image
                    src='/assets/images/icons/receiptHelpIcon.svg'
                    alt='receiptHelpIcon'
                    width={20}
                    height={20}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                />
            </div>
        </>
    )
}
