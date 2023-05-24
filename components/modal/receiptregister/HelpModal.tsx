import React from 'react'
import style from '@/components/modal/receiptregister/HelpModal.module.css'
import Image from 'next/image'
import { Spacer } from '@nextui-org/react'

export default function HelpModal(props: { IsModalOpen: boolean, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    if (!props.IsModalOpen) return null
    return (
        <main className={style.helpWrap} >
            <article className={style.helpContent}>
                <div className={style.ContentHeader}>
                    <Image
                        src='/assets/images/icons/positivelogo.svg'
                        alt='positivelogo'
                        width={40}
                        height={40}
                    />
                    <Spacer y={0.5} />
                    <p>빛이 반사되지 않게 해주시고 어두운 배경에서 촬영해주세요.</p>
                </div>
                <Spacer y={0.5} />
                <div className={style.ContentBodyWrap}>
                    <div className={style.ContentBody}>
                        <Image
                            src='/assets/images/dummy/receipt.jpg'
                            alt='receipt'
                            width={130}
                            height={260}
                        />
                    </div>
                </div>
                <div className={style.BtnWrap} onClick={() => props.setIsModalOpen(!props.IsModalOpen)}>
                    <div className={style.Btn}>
                        <Image
                            src='/assets/images/icons/cancelicon.svg'
                            alt='cancelicon'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </article>
        </main>
    )
}
